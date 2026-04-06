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

export function VendorDashboardSidebar() {
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

  const user = {
    name: "Vendor",
    email: "vendor@gmail.com",
    avatar: "",
    role: "vendor",
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <StoreIcon className="size-6" />
          </div>
          <div className="grid flex-1 text-left leading-tight">
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
        <VendorUserMenu user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
