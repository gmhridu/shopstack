import { useProductFilters } from "#/lib/store/product-filters-store";
import { MobileFilterDrawer } from "#/components/templates/store/product-page/mobile-filter-drawer";
import { Searchbar } from "#/components/base/products/searchbar";
import { SortDropdown } from "#/components/base/products/sort-dropdown";
import { FilterSidebar } from "#/components/templates/store/product-page/filter-sidebar";
import { ActiveFilterChips } from "#/components/base/products/active-filter-chips";
import { ProductGrid } from "#/components/containers/store/product-list/product-grid";

export function ProductListingTemplate() {
  const {
    products,
    isPending,
    filters,
    updateFilter,
    totalProducts,
    activeFilters,
    removeFilter,
    clearAllFilters,
  } = useProductFilters();
  return (
    <div className="@container container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex @4xl:flex-row flex-col items-start @4xl:items-center justify-between gap-4">
          <div>
            <h1 className="font-bold text-3xl tracking-tight">All Products</h1>
            <p className="mt-1 text-muted-foreground">Showing results</p>
          </div>

          <div className="flex @4xl:w-auto w-full items-center gap-2">
            <MobileFilterDrawer
              filters={filters}
              updateFilter={updateFilter}
              totalResult={totalProducts}
            />
            <div className="@4xl:w-75 flex-1">
              <Searchbar
                value={filters.search}
                onChange={(val) => updateFilter("search", val)}
              />
            </div>

            <SortDropdown
              value={filters.sort}
              onChange={(val) => updateFilter("sort", val)}
            />
          </div>
        </div>

        <div className="@container flex items-start gap-8">
          <aside className="sticky top-24 @5xl:block hidden w-64 shrink-0">
            <FilterSidebar filters={filters} updateFilter={updateFilter} />
          </aside>

          <main className="min-w-0 flex-1">
            <ActiveFilterChips
              filters={activeFilters}
              onRemove={removeFilter}
              onClearAll={clearAllFilters}
            />

            <ProductGrid products={products} isLoading={isPending} />
          </main>
        </div>
      </div>
    </div>
  );
}
