import { Button } from "#/components/ui/button";
import { useCartStore, type CartItem } from "#/lib/store/cart-store";
import { cn } from "#/lib/utils";
import { Trash2Icon } from "lucide-react";
import { QuantitySelector } from "#/components/base/products/details/quantity-selector";

interface CartItemProps {
  item: CartItem;
  isCompact?: boolean;
} 

export function CartItem({ item, isCompact = false }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  return (
    <div
      className={cn(
        "flex gap-4 py-4",
        isCompact ? "items-start" : "items-center",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-md border bg-muted",
          isCompact ? "size-20" : "size-24",
        )}
      >
        <img
          src={item.image}
          alt={item.name}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex justify-between gap-2">
          <div className="space-y-1">
            <h4 className="font-medium leading-none">{item.name}</h4>
            {(item.size || item.color) && (
              <p className="text-muted-foreground text-sm">
                {item.size && `Size: ${item.size}`}
                {item.size && item.color && " | "}
                {item.color && `Color: ${item.color}`}
              </p>
            )}
          </div>
          {!isCompact && (
            <Button
              variant="ghost"
              size="icon"
              className="size-8 text-destructive hover:text-destructive/90"
              onClick={() => removeItem(item.id)}
            >
              <Trash2Icon className="size-4" />
              <span className="sr-only">Remove Item</span>
            </Button>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold">${item.price}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <QuantitySelector
                value={item.quantity}
                onChange={(value) => updateQuantity(item.id, value)}
                max={item.maxQuantity}
                className="h-8"
                size="sm"
              />

              {isCompact && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 size-8 text-destructive hover:text-destructive/90"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2Icon className="size-4" />
                  <span className="sr-only">Remove Item</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
