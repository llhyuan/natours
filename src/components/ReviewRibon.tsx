import { fetchReviews } from "@/utilities/fetchReviews";
import ReviewCard from "./ReviewCard";
import { Review } from "./customInterfaces";

export default async function ReviewRibon({ tourId }: { tourId: string }) {
  const result = await fetchReviews(tourId);
  const reviews: Array<Review> = result.data.reviews;
  return (
    <div className="flex justify-left items-center overflow-x-scroll gap-x-40 px-48 no-scrollbar">
      {reviews.map((review, index) => {
        return <ReviewCard review={review} key={index} />;
      })}
    </div>
  );
}
