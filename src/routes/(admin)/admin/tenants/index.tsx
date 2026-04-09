import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { AdminTenant } from "#/types/tenant";
import { mockTenants } from "#/data/tenant";
import { AdminTenantsTemplate } from "#/components/templates/admin/admin-tenants-template";

export const Route = createFileRoute("/(admin)/admin/tenants/")({
  component: AdminTenantsPage,
});

function AdminTenantsPage() {
  const [tenants] = useState<AdminTenant[]>(mockTenants);

  return <AdminTenantsTemplate tenants={tenants} />;
}
