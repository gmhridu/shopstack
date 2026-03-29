import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { Button } from "#/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useState } from "react";
import type { FilterState } from "#/lib/store/product-filters-store";
import { FilterSidebar } from "#/components/templates/store/product-page/filter-sidebar";

interface MobileFilterDrawerProps {
  filters: FilterState;
  updateFilter: (key: keyof FilterState, value: any) => void;
  totalResult: number;
}

export function MobileFilterDrawer({
  filters,
  updateFilter,
  totalResult,
}: MobileFilterDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="lg" className="flex @5xl:hidden gap-2">
          <FilterIcon className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="@2xl:w-100 w-75 overflow-y-auto"
      >
        <SheetHeader className="mb-4">
          <SheetTitle>Filters ({totalResult})</SheetTitle>
        </SheetHeader>
        <FilterSidebar filters={filters} updateFilter={updateFilter} />
        <div className="sticky bottom-0 mt-6 border-t bg-background p-4">
          <Button className="w-full" onClick={() => setOpen(false)}>
            Show {totalResult} Results
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
