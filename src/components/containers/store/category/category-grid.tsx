import type { Category } from "#/types/category-types";
import { cn } from "#/lib/utils";
import { CategoryCard } from "#/components/base/store/category/category-card";
import { getGridColsClass, getResponsiveGridColsClass } from "#/lib/grid-utils";

interface CategoryGridProps {
  categories: Category[];
  variant?: "default" | "compact" | "featured" | "list";
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };
  className?: string;
  showProductCount?: boolean;
}

export function CategoryGrid({
  categories,
  variant = "default",
  columns = {
    default: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
  },
  className,
  showProductCount = true,
}: CategoryGridProps) {
  const gridClasses = cn(
    "grid gap-4",
    columns.default && getGridColsClass(columns.default),
    columns.sm && getResponsiveGridColsClass(columns.sm, "@xl"),
    columns.md && getResponsiveGridColsClass(columns.md, "@2xl"),
    columns.lg && getResponsiveGridColsClass(columns.lg, "@5xl"),
    columns.xl && getResponsiveGridColsClass(columns.xl, "@7xl"),
    className,
  );
  return (
    <div className={gridClasses}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          variant={variant}
          showProductCount={showProductCount}
        />
      ))}
    </div>
  );
}
