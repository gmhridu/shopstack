import { StatsCard } from "#/components/base/vendors/stats-card";
import { SalesOverview } from "#/components/containers/vendors/shop/sales-overview";
import { RecentOrders } from "#/components/containers/vendors/shop/recent-orders";
import { TopProducts } from "#/components/containers/vendors/shop/top-products";
import { CustomerInsights } from "#/components/containers/vendors/shop/customer-insights";

interface ShopDashboardTemplateProps {
  shopName: string;
  stats: Array<{
    title: string;
    value: string;
    change: string;
    icon: React.ComponentType<{ className?: string }>;
    trend: "up" | "down" | "neutral";
  }>;
}

export function ShopDashboardTemplate({
  shopName,
  stats,
}: ShopDashboardTemplateProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-3xl tracking-tight">Shop Overview</h2>
        <p className="text-muted-foreground">
          Monitor your shop's performance and key metrics
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <SalesOverview className="col-span-4" shopName={shopName} />
        <RecentOrders className="col-span-3" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TopProducts />
        <CustomerInsights />
      </div>
    </div>
  );
}
