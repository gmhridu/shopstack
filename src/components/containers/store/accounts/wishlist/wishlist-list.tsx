import { mockWishlists } from "#/data/wishlist";
import { NotFound } from "#/components/base/empty/notfound";
import { Link } from "@tanstack/react-router";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "#/components/ui/button";
import { WishlistItemCard } from "#/components/base/store/accounts/wishlist-item-card";

export function WishlistList() {
  if (!mockWishlists) {
    return (
      <div className="@container container mx-auto px-4 py-8">
        <NotFound
          title="Wishlist is empty"
          description="The wishlist you're looking for doesn't exist or has been removed."
          icon={<ShoppingBagIcon className="size-10 text-muted-foreground" />}
        />
        <Link to="/product">
          <Button variant="outline">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {mockWishlists.map((item) => (
        <WishlistItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
