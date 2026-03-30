import type { Review } from "#/data/products";
import { RatingSummary } from "#/components/base/products/details/review/rating-summary";
import { ReviewCard } from "#/components/base/products/details/review/review-card";
import { ReviewFromCta } from "#/components/base/products/details/review/review-form-cta";

interface ProductReviewsTabProps {
  reviews: Review[];
  avarageRating: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  totalRatings: number;
  productId: string;
}

export function ProductReviewsTab({
  reviews,
  avarageRating,
  ratingBreakdown,
  totalRatings,
  productId,
}: ProductReviewsTabProps) {
  return (
    <div className="space-y-10">
      <div className="grid @5xl:grid-cols-12 gap-8">
        <div className="@5xl:col-span-8">
          <h3 className="mb-6 font-semibold text-lg">
            Customer Reviews ({totalRatings})
          </h3>

          <div className="space-y-2">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                userName={review.userName}
                userAvatar={review.userAvatar}
                date={review.date}
                rating={review.rating}
                reviewText={review.comment}
              />
            ))}
          </div>
        </div>
        <div className="@5xl:col-span-4">
          <RatingSummary
            averageRating={avarageRating}
            totalRatings={totalRatings}
            ratingBreakdown={ratingBreakdown}
            className="@2xl:flex-row @5xl:flex-col flex-col"
          />

          <ReviewFromCta
            onReviewClick={() => console.log("Write review for", productId)}
          />
        </div>
      </div>
    </div>
  );
}
