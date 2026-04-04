import type { Store } from "#/types/store-types";
import { StoreBanner } from "#/components/base/store/storefront/store-banner";
import { StoreStats } from "#/components/templates/store/storefront/store-stats";

interface StoreHeaderProps {
  store: Store;
}

export function StoreHeader({ store }: StoreHeaderProps) {
  const stats = {
    totalProducts: store.totalProducts,
    followers: store.followers,
    rating: store.rating,
    memberSince: store.memberSince,
  };

  return (
    <div className="space-y-6">
      <StoreBanner store={store} />
      <StoreStats stats={stats} />
    </div>
  );
}
