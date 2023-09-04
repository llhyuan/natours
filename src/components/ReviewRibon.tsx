import { fetchReviewsByTour } from "@/utilities/fetchReviewsByTour";
import ReviewCard from "./ReviewCard";
import { Review } from "./customInterfaces";

export default async function ReviewRibon({ tourId }: { tourId: string }) {
  const result = await fetchReviewsByTour(tourId);
  const reviews: Array<Review> = result.data.reviews;
  return (
    <div className="flex items-center overflow-scroll gap-x-40 px-48 no-scrollbar snap-x snap-mandatory w-[90%] mx-auto">
      {reviews.map((review, index) => {
        if (review.review) {
          return <ReviewCard review={review} key={index} />;
        }
      })}
    </div>
  );
}
