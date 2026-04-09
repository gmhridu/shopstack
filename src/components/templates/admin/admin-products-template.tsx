import { PageHeader } from "#/components/base/common/page-header";
import { AdminProductsTable } from "#/components/containers/admin/products/admin-product-table";
import type { Product } from "#/data/products";

interface AdminProductsTemplateProps {
  products: Product[];
}

export function AdminProductsTemplate({
  products,
}: AdminProductsTemplateProps) {
  return (
    <>
      <PageHeader
        title="Products"
        description="Manage all products across the platform"
      />

      <AdminProductsTable products={products} />
    </>
  );
}
