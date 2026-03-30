import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";
import { GitCompareIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";

interface ProductActionsProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
  onToggleWishlist: () => void;
  onToggleCompare: () => void;
  isWishlisted: boolean;
  isCompareListed: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

export function ProductActions({
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted,
  isCompareListed,
  isLoading,
  disabled,
  className,
}: ProductActionsProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="flex-1 gap-2"
          onClick={onAddToCart}
          disabled={disabled || isLoading}
        >
          <ShoppingCartIcon className="size-5" />
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="flex-1"
          onClick={onBuyNow}
          disabled={disabled || isLoading}
        >
          Buy Now
        </Button>
      </div>

      <div className="flex w-full gap-3">
        <Button
          variant="outline"
          size="default"
          className={cn(
            "flex-1 gap-2",
            isCompareListed && "border-primary bg-primary/5 text-primary",
          )}
          onClick={onToggleCompare}
        >
          <GitCompareIcon className="size-4" />
          Compare
        </Button>
        <Button
          variant="outline"
          size="default"
          className={cn(
            "flex-1 gap-2",
            isWishlisted &&
              "border-red-200 bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600",
          )}
          onClick={onToggleWishlist}
        >
          <HeartIcon className={cn("size-4", isWishlisted && "fill-current")} />
          Wishlist
        </Button>
      </div>
    </div>
  );
}
