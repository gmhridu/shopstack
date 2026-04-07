import { ShopHeader } from "#/components/containers/vendors/my-shop/shop-header";
import { ShopCard } from "#/components/base/vendors/my-shop/shop-card";


interface Shop {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  category: string;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  monthlyRevenue: string;
  status: "active" | "pending";
}

interface MyShopTemplateProps {
  shops: Shop[];
  onCreateShop: () => void;
}

export function MyShopTemplate({ shops, onCreateShop }: MyShopTemplateProps) {
  return (
    <div className="space-y-6">
      <ShopHeader onCreateShop={onCreateShop} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}
