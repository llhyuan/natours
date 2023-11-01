"use client";
import { ReviewPopulated } from "@Global/custom-types";
import {
  forwardRef,
  ForwardedRef,
  FormEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { latoSemiBold } from "@/app/fonts";
import { notificationContext } from "@/app/NotificationContextProvier";

const ReviewEditForm = forwardRef(function ReviewEditForm(
  props: {
    review: ReviewPopulated;
    setEditingStatus: Dispatch<SetStateAction<string>>;
    setReview: Dispatch<SetStateAction<ReviewPopulated>>;
  },
  ref: ForwardedRef<HTMLFormElement>,
) {
  const { setNotificationStatus } = useContext(notificationContext);
  return (
    <form
      className="bg-zinc-300"
      ref={ref}
      onSubmit={async (e: FormEvent) => {
        e.preventDefault();
        const reqBody = {
          ...props.review,
          reviewId: props.review._id,
        };
        const response = await fetch("/api/update-review", {
          method: "PATCH",
          credentials: "include",
          body: JSON.stringify(reqBody),
        });
        const result = await response.json();
        if (result.status === "success") {
          props.setEditingStatus("no-edit");
          setNotificationStatus({
            reveal: true,
            message: result.message,
            category: "success",
          });
        } else {
          setNotificationStatus({
            reveal: true,
            message: result.message,
            category: "error",
          });
        }
      }}
    >
      <div className="pt-4 mb-4 flex items-center">
        <label
          className={latoSemiBold.className + " mr-2 text-zinc-600 w-[15%]"}
        >
          Title:
        </label>
        <input
          value={props.review.title}
          onChange={(e) => {
            props.setReview({ ...props.review, title: e.target.value });
          }}
          className=" w-[78%] rounded-sm border-0 px-2 py-1 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 "
        />
      </div>
      <div className="my-4 flex items-center">
        <label
          className={latoSemiBold.className + " mr-2 text-zinc-600 w-[15%]"}
        >
          Rating:
        </label>
        <input
          type="number"
          step={0.1}
          max="5"
          min="1"
          value={props.review.rating}
          onChange={(e) => {
            if (
              parseFloat(e.target.value) <= 5 &&
              parseFloat(e.target.value) >= 0
            ) {
              props.setReview({
                ...props.review,
                rating: parseFloat(e.target.value),
              });
            }
          }}
          className=" flex items-center w-[12%] min-w-[3.7rem] rounded-sm border-0 px-2 py-1 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 "
        />
      </div>
      <div className="my-4 flex items-start">
        <label
          className={latoSemiBold.className + " mr-2 text-zinc-600 w-[15%]"}
        >
          Review:
        </label>
        <textarea
          value={props.review.review}
          maxLength={500}
          onChange={(e) => {
            props.setReview({ ...props.review, review: e.target.value });
          }}
          rows={8}
          className="resize-none pl-2 w-[78%] rounded-sm border-0 px-2 py-1 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 "
        />
      </div>
    </form>
  );
});

export default ReviewEditForm;
