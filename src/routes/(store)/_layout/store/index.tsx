import { createFileRoute } from "@tanstack/react-router";
import { StoreListingTemplate } from "#/components/templates/store/storefront/store-listing-template";

export const Route = createFileRoute("/(store)/_layout/store/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <StoreListingTemplate />;
}
