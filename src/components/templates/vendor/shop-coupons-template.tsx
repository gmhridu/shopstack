
import type { Coupon } from "#/types/coupon";
import { CouponHeader } from "#/components/containers/vendors/coupons/coupon-header";
import { CouponTable } from "#/components/containers/vendors/coupons/coupon-table";


interface ShopCouponsTemplateProps {
  coupons: Coupon[];
  onAddCoupon: () => void;
}

export function ShopCouponsTemplate({
  coupons,
  onAddCoupon,
}: ShopCouponsTemplateProps) {
  return (
    <div className="space-y-6">
      <CouponHeader onAddCoupon={onAddCoupon} />
      <CouponTable coupons={coupons} />
    </div>
  );
}
