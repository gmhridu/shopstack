import { createFileRoute } from "@tanstack/react-router";
import { MyShopsPageSkeleton } from "#/components/base/vendors/skeleton/shop-card-skeleton";
import { MyShopTemplate } from "#/components/templates/vendor/my-shops-template";
import { mockShops } from "#/data/my-shop";

export const Route = createFileRoute("/(vendor)/_layout/my-shop")({
  component: MyShopPage,
  loader: async () => {
    // Simulate loading delay for skeleton demonstration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {};
  },
  pendingComponent: MyShopsPageSkeleton,
});

function MyShopPage() {
  const handleCreateShop = () => {
    // TODO: Implement create shop functionality
    console.log("Create new shop clicked!");
  };

  return <MyShopTemplate shops={mockShops} onCreateShop={handleCreateShop} />;
}
