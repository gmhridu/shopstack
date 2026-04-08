import type { Product } from "#/types/products";
import { ProductHeader } from "#/components/containers/vendors/products/product-header";
import { ProductTable } from "#/components/containers/vendors/products/product-table";

interface ShopProductsTemplateProps {
  products: Product[];
  onAddProduct: () => void;
  onSearch: (query: string) => void;
}

export function ShopProductsTemplate({
  products,
  onAddProduct,
}: ShopProductsTemplateProps) {
  return (
    <div className="space-y-6">
      <ProductHeader onAddProduct={onAddProduct} />
      <ProductTable products={products} />
    </div>
  );
}
