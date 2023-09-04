import ReviewItem from "@/components/ReviewItem";
import { fetchReviewsByUser } from "@/utilities/fetchReviewsByUser";
import { Review } from "@Global/custom-types";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default async function Reviews() {
  const reviews: Array<Review> = await fetchReviewsByUser();
  return (
    <div className="pb-10 max-w-[400px] max-md:mx-auto md:max-w-[600px] md:pl-6">
      <h1
        className={
          latoBold.className +
          " max-sm:mx-auto max-sm:w-fit text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
        }
      >
        My Reviews
      </h1>
      <div className="max-sm:px-2 py-4 w-full flex flex-col gap-y-10">
        {reviews
          ? reviews.map((review, index: number) => {
              return <ReviewItem review={review} key={index} />;
            })
          : "No Reviews."}
      </div>
    </div>
  );
}
