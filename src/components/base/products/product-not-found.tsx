export function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 text-4xl">🔍</div>
      <h2 className="mb-2 font-semibold text-xl">No Products Found</h2>
      <p className="max-w-md text-muted-foreground">
        We couldn't find any products matching your filters. Try adjusting your
        search or clearing some filters.
      </p>
    </div>
  );
}
