import { cn } from "#/lib/utils";
import type { ReactNode } from "react";

interface FeatureGridItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconClassName?: string;
  outlineIcon: ReactNode;
  outlineIconClassName?: string;
  className?: string;
}

export function FeatureGridItem({
  title,
  description,
  icon,
  iconClassName,
  outlineIcon,
  outlineIconClassName,
  className,
}: FeatureGridItemProps) {
  return (
    <div
      className={cn(
        "relative border-dashed @4xl:p-10 @6xl:p-12.5 @7xl:p-15 p-7.5",
        className,
      )}
    >
      <div
        className={cn(
          "4xl:mb-10 @6xl:mb-12.5 mb-6 @6xl:size-24 size-19",
          iconClassName,
        )}
      >
        {icon}
      </div>
      <div className="space-y-3">
        <h4 className="@4xl:text-xl @6xl:text-2xl text-lg">{title}</h4>
        <p>{description}</p>
      </div>
      <div
        className={cn(
          "absolute top-0 right-0 size-43.25",
          outlineIconClassName,
        )}
      >
        {outlineIcon}
      </div>
    </div>
  );
}
