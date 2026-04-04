import { useState } from "react";
import { mockProducts } from "#/data/products";
import { NotFound } from "#/components/base/empty/notfound";
import { PackageOpenIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { ProductCard } from "#/components/base/products/product-card";

interface StoreProductsProps {
  storeName: string;
}

const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
];

export function StoreProducts({ storeName }: StoreProductsProps) {
  const [sortBy, setSortBy] = useState("newest");

  // Filter products by store name
  // In a real apps, products would have a storeId field for direct matching
  const storeProducts = mockProducts.filter(
    (product) => product.store.name === storeName,
  );

  // Sort Products

  const sortedProducts = [...storeProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case "price-low":
        return (a.price?.current ?? 0) - (b.price?.current ?? 0);

      case "price-high":
        return (b.price?.current ?? 0) - (a.price?.current ?? 0);

      case "rating":
        return (b.rating?.average ?? 0) - (a.rating?.average ?? 0);

      case "popular":
        return (b.rating?.count ?? 0) - (a.rating?.count ?? 0);

      default:
        return 0;
    }
  });

  if (storeProducts.length === 0) {
    return (
      <NotFound
        title="No Products Yet"
        description="This store hasn't listed any products yet. Check back soon!"
        icon={<PackageOpenIcon className="size-12 text-muted-foreground" />}
        className="py-12"
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with count and sort */}
      <div className="flex @2xl:flex-row flex-col items-start @2xl:items-center justify-between gap-4">
        <div className="@2xl:items-center">
          <h2 className="font-semibold text-xl">
            Products ({storeProducts.length})
          </h2>
          <p className="text-muted-foreground text-sm">
            Browse all products from {storeName}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-45">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid @2xl:grid-cols-2 @5xl:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
