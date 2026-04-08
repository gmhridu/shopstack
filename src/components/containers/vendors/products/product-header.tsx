import { Button } from "#/components/ui/button";
import { PlusIcon } from "lucide-react";

interface ProductHeaderProps {
  onAddProduct: () => void;
  className?: string;
}

export function ProductHeader({ onAddProduct, className }: ProductHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage products across all your shops
          </p>
        </div>
        <Button onClick={onAddProduct}>
          <PlusIcon className="mr-2 size-4" />
          Add Product
        </Button>
      </div>
    </div>
  );
}
