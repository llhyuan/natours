"use client";
import { ReviewPopulated } from "@Global/custom-types";
import ReviewItem from "./ReviewItem";
import { useContext } from "react";
import { notificationContext } from "@/app/NotificationContextProvier";

export default function MyReviews({
  result,
}: {
  result: {
    status: string;
    message?: string;
    data?: {
      reviews: Array<ReviewPopulated>;
    };
  };
}) {
  const { setNotificationStatus } = useContext(notificationContext);
  let reviews: Array<ReviewPopulated> = [];
  if (result.status === "success" && result.data) {
    reviews = result.data.reviews;
  } else {
    setNotificationStatus({
      reveal: true,
      message: result.message ?? "",
      category: "error",
    });
  }
  return (
    <div className="max-sm:px-2 py-4 w-full flex flex-col gap-y-10">
      {reviews
        ? reviews.map((review, index: number) => {
            if (review.visible) {
              return <ReviewItem review={review} key={index} />;
            }
          })
        : "No Reviews."}
    </div>
  );
}
