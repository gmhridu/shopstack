import type { Product } from "#/data/products";
import { ProductBreadcrumb } from "#/components/base/products/details/product-breadcrumb";
import { ProductMainSection } from "#/components/containers/store/product-details/main-section";
import { ProductDetailsTabs } from "#/components/containers/store/product-details/product-details-tabs";
import { SimilarProductsSection } from "#/components/containers/store/product-details/similar-product-section";

interface ProductDetailsTemplateProps {
  product: Product;
}

export function ProductDetailsTemplate({
  product,
}: ProductDetailsTemplateProps) {
  return (
    <div className="@container container mx-auto @4xl:px-6 px-4 @5xl:py-12 py-8">
      <ProductBreadcrumb items={product.breadcrumbs} />

      <div className="space-y-14">
        <ProductMainSection product={product} />

        <ProductDetailsTabs product={product} />

        <SimilarProductsSection products={product.similarProducts} />
      </div>
    </div>
  );
}
