import { ReviewPopulated } from "@Global/custom-types";
import { Lato } from "next/font/google";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function ReviewDispaly({ review }: { review: ReviewPopulated }) {
  return (
    <div className="px-4">
      <div className="my-2 flex">
        <p className={latoSemiBold.className + " mr-2 text-zinc-600"}>Title:</p>
        <p className={latoSemiBold.className}>{review.title ?? "No Title"}</p>
      </div>
      <div className="my-2 flex">
        <p className={latoSemiBold.className + " mr-2 text-zinc-600"}>
          Posted on:
        </p>
        <p className={latoSemiBold.className}>
          {review.createdAt.slice(0, 10)}
        </p>
      </div>
      <div className="my-2 flex items-center">
        <p className={latoSemiBold.className + " mr-2 text-zinc-600"}>
          Rating:
        </p>
        <p className={latoSemiBold.className + " flex items-center"}>
          <span className="block text-[1.3rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487]">
            {review.rating}
          </span>
          <span className="block text-zinc-600">/5</span>
        </p>
      </div>
      <div className="my-2 ">
        <p className={latoSemiBold.className + " mr-2 text-zinc-600"}>
          Review:
        </p>
        <p className="pl-2">{review.review}</p>
      </div>
    </div>
  );
}
