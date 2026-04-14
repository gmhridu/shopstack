import { createServerFn } from "@tanstack/react-start";
import { vendorRegisterSchema } from "#/lib/validators/auth";
import { db } from "#/lib/db";
import { eq } from "drizzle-orm";
import { user } from "#/lib/db/schema/auth-schema";
import { shops, vendors } from "#/lib/db/schema/shop-schema";
import { generateSlug } from "#/lib/utils/slug";
import { auth } from "#/lib/auth";

export const registerVendor = createServerFn({ method: "POST" })
  .inputValidator(vendorRegisterSchema)
  .handler(async ({ data }) => {
    const {
      name,
      email,
      password,
      storeName,
      storeDescription,
      contactPhone,
      countryCode,
      address,
    } = data;

    let userId: string | null = null;

    try {
      const existingUser = await db.query.user.findFirst({
        where: eq(user.email, email),
      });

      if (existingUser) {
        throw new Error("A user with this email already exists");
      }

      const shopSlug = generateSlug(storeName);

      const existingShop = await db.query.shops.findFirst({
        where: eq(shops.slug, shopSlug),
      });

      if (existingShop) {
        throw new Error(
          "A shop with this name already exists. Please try a different shop name.",
        );
      }

      const signUpResult = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
      });

      if (!signUpResult || !signUpResult.user) {
        throw new Error("Failed to create user account");
      }

      userId = signUpResult.user.id;

      await db.update(user).set({ role: "vendor" }).where(eq(user.id, userId));

      const vendorId = crypto.randomUUID();

      await db.insert(vendors).values({
        id: vendorId,
        userId: userId,
        businessName: storeName,
        contactEmail: email,
        contactPhone: contactPhone || null,
        address: address || null,
        status: "pending_approval",
      });

      const shopId = crypto.randomUUID();

      await db.insert(shops).values({
        id: shopId,
        vendorId: vendorId,
        name: storeName,
        slug: shopSlug,
        description: storeDescription || null,
        email: email,
        phone: contactPhone || null,
        address: address || null,
        status: "pending",
      });

      return {
        success: true,
        user: {
          id: userId,
          name,
          email,
          role: "vendor",
        },
        vendor: {
          id: vendorId,
          status: "pending_approval",
        },
        shop: {
          id: shopId,
          slug: shopSlug,
          name: storeName,
          status: "pending",
        },
      };
    } catch (error) {
      console.error("Vendor registration error:", error);

      if (userId) {
        console.warn(
          `Vendor registration failed after user creation. User ID: ${userId}`,
        );

        // Attempt to revert user role to 'customer' if vendor creation failed
        try {
          await db
            .update(user)
            .set({ role: "customer" })
            .where(eq(user.id, userId));
          console.log(`Reverted user ${userId} role to customer after failuer`);
        } catch (revertError) {
          console.error(`Failed to revert user ${userId} role:`, revertError);
        }

        throw new Error(
          error instanceof Error
            ? error.message
            : "Failed to register vendor. Please try again.",
        );
      }
    }
  });
