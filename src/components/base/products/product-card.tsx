import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import type { Product } from "#/data/products";
import { useCartStore } from "#/lib/store/cart-store";
import { cn } from "#/lib/utils";
import { Link } from "@tanstack/react-router";
import { EyeIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import { toast } from "sonner";
import { ColorSwatch } from "./colo-radio-item";
import { PriceTag } from "./price-tag";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //Prevent navigation if inside a link
    e.stopPropagation(); //Stop event propagation
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price.current,
      image: product.images[0].url,
      quantity: 1,
      maxQuantity: product.stock.quantity,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border-2 border-muted border-dashed p-4 transition-colors hover:border-primary/50",
        className,
      )}
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-t-2xl bg-muted">
        <img
          src={product.images[0].url}
          alt={product.images[0].alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.price.discountPercentage > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">
              -{product.price.discountPercentage}%
            </Badge>
          )}
          {product.isNew && product.price.discountPercentage === 0 && (
            <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
          )}
        </div>

        {/* Hover action overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="size-10 rounded-full shadow-lg transition-transform hover:scale-110"
            title="Quick View"
          >
            <EyeIcon className="size-5" />
            <span className="sr-only">Quick View</span>
          </Button>
          <Button
            size="icon"
            className="size-10 rounded-full shadow-lg transition-transform hover:scale-110"
            title="Add to Cart"
            onClick={handleAddToCart}
          >
            <ShoppingCartIcon className="size-5" />
            <span className="sr-only">Add to Cart</span>
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-muted-foreground/30 border-dashed bg-muted/50 px-3 py-1 font-medium text-muted-foreground text-xs">
            {product.category.name}
          </span>
          <div className="flex items-center gap-1 text-amber-500">
            <StarIcon className="size-3.5 fill-current" />
            <span className="font-medium text-sm">
              {product.rating.average}
            </span>
            <span className="text-[10px] text-muted-foreground">
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Title */}
        <Link
          to={`/product/$productId`}
          params={{ productId: product.id }}
          className="group/title"
        >
          <h3
            className="line-clamp-1 font-medium font-mono text-lg transition-colors group-hover/title:text-primary"
            title={product.name}
          >
            {product.name}
          </h3>
        </Link>

        {/* Price & Colors */}
        <div className="flex items-center justify-between border-muted border-t border-dashed pt-3">
          <div className="font-mono text-muted-foreground text-sm">
            <span className="font-medium text-base text-foreground">
              <PriceTag
                price={product.price.current}
                originalPrice={product.price.original}
              />
            </span>
          </div>

          <div className="flex items-center gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <ColorSwatch key={color} color={color} className="size-4" />
            ))}
            {product.colors.length > 3 && (
              <span className="ml-1 font-medium text-[10px] text-muted-foreground">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
