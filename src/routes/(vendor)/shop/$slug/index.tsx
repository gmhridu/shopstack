import { ShopDashboardSkeleton } from "#/components/base/vendors/skeleton/shop-dashboard-skeleton";
import { ShopDashboardTemplate } from "#/components/templates/vendor/shop-dashboard-template";
import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSignIcon,
  PackageIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
} from "lucide-react";

export const Route = createFileRoute("/(vendor)/shop/$slug/")({
  component: ShopDashboardPage,
  loader: async () => {
    // Simulate loading delay for skeleton demonstration
    await new Promise((reslove) => setTimeout(reslove, 1000));

    return {};
  },
  pendingComponent: ShopDashboardSkeleton,
});

function ShopDashboardPage() {
  const { slug } = Route.useParams();

  const shopStats = [
    {
      title: "Monthly Revenue",
      value: "$12,450",
      change: "+12.5% from last month",
      icon: DollarSignIcon,
      trend: "up" as const,
    },
    {
      title: "Total Products",
      value: "156",
      change: "+8 new products",
      icon: PackageIcon,
      trend: "up" as const,
    },
    {
      title: "Total Orders",
      value: "342",
      change: "+23% from last month",
      icon: ShoppingBagIcon,
      trend: "up" as const,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5% from last month",
      icon: TrendingUpIcon,
      trend: "up" as const,
    },
  ];

  return <ShopDashboardTemplate shopName={slug} stats={shopStats} />;
}
