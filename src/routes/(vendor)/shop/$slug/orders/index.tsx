import { createFileRoute } from "@tanstack/react-router";
import { ShopOrdersTemplate } from "#/components/templates/vendor/shop-orders-template";
import { mockOrders } from "#/data/orders";

export const Route = createFileRoute("/(vendor)/shop/$slug/orders/")({
  component: OrderPage,
});

function OrderPage() {
  const { slug } = Route.useParams();

  return <ShopOrdersTemplate orders={mockOrders} shopSlug={slug} />;
}
