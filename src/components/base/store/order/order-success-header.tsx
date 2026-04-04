import { Button } from "#/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircleIcon } from "lucide-react";

export function OrderSuccessHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="relative mb-6">
        <div className="rounded-full bg-primary/10 p-6">
          <CheckCircleIcon className="size-16 text-primary" strokeWidth={2.5} />
        </div>
      </div>
      <h1 className="mb-4 font-bold text-3xl">Order Placed Successfully!</h1>
      <p className="text-muted-foreground mb-6 max-w-2xl text-lg">
        Thank you for your order. We will notify you once your order is shipped.
      </p>

      <Link to="/product">
        <Button variant="outline" size="lg" className="rounded-full">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
