import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "#/components/ui/sidebar";
import type { VendorNavItem } from "#/types/vendor-types";
import { HomeIcon, StoreIcon } from "lucide-react";
import { VendorNavMenu } from "#/components/base/vendors/vendor-nav-menu";
import { VendorUserMenu } from "#/components/base/vendors/vendor-user-menu";
import { useSession } from "#/lib/auth/auth-client";
import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

export function VendorDashboardSidebar() {
  const { data } = useSession();
  const user = data?.user;

  const vendorNavItems: VendorNavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      title: "My Shops",
      href: "/my-shop",
      icon: StoreIcon,
      badge: "5",
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div
          className="flex items-center px-2 py-4
    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:px-0"
        >
          {/* Icon */}
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <StoreIcon className="size-6" />
          </div>

          {/* Text */}
          <div
            className="ml-3 grid flex-1 text-left leading-tight
      group-data-[collapsible=icon]:hidden"
          >
            <span className="truncate font-bold text-base">ShopStack</span>
            <span className="truncate text-muted-foreground text-sm">
              Vendor Portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <VendorNavMenu items={vendorNavItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {user ? (
          <VendorUserMenu user={user} />
        ) : (
          <Link to="/auth/sign-in">
            <Button
              variant="default"
              className="w-full"
              type="button"
              size="lg"
            >
              Sign In
            </Button>
          </Link>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
