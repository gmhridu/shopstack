import { cn } from "#/lib/utils";
import { Button } from "#/components/ui/button";

interface ReviewFromCtaProps {
  onReviewClick: () => void;
  className?: string;
}

export function ReviewFromCta({
  onReviewClick,
  className,
}: ReviewFromCtaProps) {
  return (
    <div className={cn("rounded-lg border bg-muted/30 p-6", className)}>
      <h3 className="font-semibold text-foreground text-lg">
        Review this product
      </h3>

      <p className="mt-2 text-muted-foreground text-sm">
        Share your thoughts with other customers
      </p>
      <Button className="mt-4 w-full" onClick={onReviewClick}>
        Write a Review
      </Button>
    </div>
  );
}
