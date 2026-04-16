import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminDashboardLayout } from "#/components/templates/admin/admin-dashboard-layout";
import { adminMiddleware } from "#/lib/middleware/admin";
import {
  AdminErrorComponent,
} from "#/components/base/error/admin-error-component";

export const Route = createFileRoute("/(admin)/admin")({
  server: {
    middleware: [adminMiddleware],
  },
  component: AdminDashboardRouteComponent,
  errorComponent: AdminErrorComponent,
});

function AdminDashboardRouteComponent() {

  return (
    <AdminDashboardLayout>
      <Outlet />
    </AdminDashboardLayout>
  );
}
