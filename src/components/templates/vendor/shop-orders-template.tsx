import type { Order } from "#/types/orders";
import {OrderHeader} from "#/components/containers/vendors/orders/order-header";
import {OrderTable} from "#/components/containers/vendors/orders/order-table";

interface ShopOrdersTemplateProps {
  orders: Order[];
  shopSlug: string;
}

export function ShopOrdersTemplate({
  orders,
  shopSlug,
}: ShopOrdersTemplateProps) {
  return (
    <div className="space-y-6">
      <OrderHeader />
      <OrderTable orders={orders} shopSlug={shopSlug} />
    </div>
  );
}
