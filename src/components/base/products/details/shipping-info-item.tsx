import { cn } from "#/lib/utils";
import { type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ShippingInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  detailsLink?: string;
  className?: string;
}

export function ShippingInfoItem({
  icon: Icon,
  label,
  value,
  detailsLink,
  className,
}: ShippingInfoItemProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="rounded-full bg-muted p-2">
        <Icon className="size-4 text-muted-foreground" />
      </div>

      <div className="flex-1 text-sm">
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
      {detailsLink && (
        <Link
          to={detailsLink}
          className="font-medium text-primary text-xs hover:underline"
        >
          See Details
        </Link>
      )}
    </div>
  );
}
