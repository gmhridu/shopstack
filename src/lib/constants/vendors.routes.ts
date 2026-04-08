import type { VendorNavItem } from "#/types/vendor-types";
import { BriefcaseIcon, CreditCardIcon, FileTextIcon, HomeIcon, LandmarkIcon, PackageIcon, ShoppingBagIcon, StarIcon, TagIcon, TagsIcon, UsersIcon } from "lucide-react";

export const getShopNavItems = (shopSlug: string): VendorNavItem[] => [
  {
    title: "Overview",
    href: `/shop/${shopSlug}`,
    icon: HomeIcon,
  },
  {
    title: "Products",
    href: `/shop/${shopSlug}/products`,
    icon: PackageIcon,
  },
  {
    title: "Coupons",
    href: `/shop/${shopSlug}/coupons`,
    icon: TagIcon,
  },
  {
    title: "Orders",
    href: `/shop/${shopSlug}/orders`,
    icon: ShoppingBagIcon,
  },
  {
    title: "Categories",
    href: `/shop/${shopSlug}/categories`,
    icon: TagsIcon,
  },
  {
    title: "Tags",
    href: `/shop/${shopSlug}/tags`,
    icon: TagIcon,
  },
  {
    title: "Brands",
    href: `/shop/${shopSlug}/brands`,
    icon: BriefcaseIcon,
  },
  {
    title: "Attributes",
    href: `/shop/${shopSlug}/attributes`,
    icon: FileTextIcon,
  },
  {
    title: "Reviews",
    href: `/shop/${shopSlug}/reviews`,
    icon: StarIcon,
  },
  {
    title: "Transactions",
    href: `/shop/${shopSlug}/transactions`,
    icon: CreditCardIcon,
  },
  {
    title: "Taxes",
    href: `/shop/${shopSlug}/taxes`,
    icon: LandmarkIcon,
  },
  {
    title: "Staff",
    href: `/shop/${shopSlug}/staff`,
    icon: UsersIcon,
  },
];
