import { EmptyState } from "#/components/base/empty/empty-state";
import { Button } from "#/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "#/components/ui/input-group";
import { Separator } from "#/components/ui/separator";
import { useCartStore } from "#/lib/store/cart-store";
import { Link } from "@tanstack/react-router";
import { ArrowRightIcon, ShoppingBagIcon, TagIcon } from "lucide-react";

export function CheckoutOrderSummary() {
  const { items, subtotal, shippingCost } = useCartStore();
  const estimatedTaxes = 5.0; //Mock value
  const total = subtotal + shippingCost + estimatedTaxes;

  if (items.length === 0) {
    return (
      <div className="rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-6 font-semibold text-xl">Your Cart</h2>
        <EmptyState
          icon={<ShoppingBagIcon className="size-10 text-muted-foreground" />}
          title="No items yet"
          description="Add items to your cart to continue with checkout."
          action={
            <Link to="/product">
              <Button variant="outline" className="rounded-full">
                Browse Products
              </Button>
            </Link>
          }
          className="py-8"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-6 font-semibold text-xl">Your Cart</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative size-20 rounded-md border bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full rounded-md object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="-right-2 -top-2 absolute flex size-6 items-center justify-center rounded-full bg-foreground font-semibold text-background text-xs">
                  {item.quantity}
                </div>
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium text-base leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.color || "Men's Black"}
                  </p>
                </div>
                <p className="font-semibold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <TagIcon className="size-4" />
            </InputGroupAddon>

            <InputGroupInput placeholder="Add promo code" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="ghost">Apply</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated taxes</span>
              <span className="font-medium">${estimatedTaxes.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button className="w-full rounded-full" size="lg">
            Continue to Payment
            <ArrowRightIcon className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
