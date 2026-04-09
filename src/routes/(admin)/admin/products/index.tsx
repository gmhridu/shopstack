import { AdminProductsTemplate } from "#/components/templates/admin/admin-products-template";
import { mockProducts, type Product } from "#/data/products";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(admin)/admin/products/")({
  component: AdminProductsPage,
});

function AdminProductsPage() {
  const [products] = useState<Product[]>(mockProducts);
  return <AdminProductsTemplate products={products} />;
}
