import MyReviews from "@/components/MyReviews";
import { fetchReviewsByUser } from "@/utilities/fetchReviewsByUser";
import { ReviewPopulated } from "@Global/custom-types";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default async function Reviews() {
  const reviews: {
    status: string;
    message?: string;
    data?: {
      reviews: Array<ReviewPopulated>;
    };
  } = await fetchReviewsByUser();
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
      <MyReviews result={reviews} />
    </div>
  );
}
