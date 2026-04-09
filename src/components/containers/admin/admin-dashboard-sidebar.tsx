import { VendorNavMenu } from "#/components/base/vendors/vendor-nav-menu";
import { VendorUserMenu } from "#/components/base/vendors/vendor-user-menu";
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
import { adminNavItems } from "#/lib/constants/admin.routes";
import { Building2Icon } from "lucide-react";

const mockAdmin = {
  name: "Super Admin",
  email: "admin@shopstack.com",
  avatar: "",
  role: "Super Admin",
};

export function AdminDashboardSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <div className="flex items-center px-2 py-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          {/* Icon */}
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2Icon className="size-4" />
          </div>

          {/* Text (hidden when collapsed) */}
          <div
            className="ml-2 grid flex-1 text-left text-sm leading-tight
      group-data-[collapsible=icon]:hidden"
          >
            <span className="truncate font-semibold">ShopStack</span>
            <span className="truncate text-muted-foreground text-xs">
              Admin Portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <VendorNavMenu items={adminNavItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <VendorUserMenu user={mockAdmin} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
