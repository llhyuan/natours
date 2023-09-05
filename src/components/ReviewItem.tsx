"use client";
import Image from "next/image";
import { Lato } from "next/font/google";
import { useRef, useEffect, useState, useContext } from "react";
import { Review } from "@Global/custom-types";
import ReviewDispaly from "./ReviewDisplay";
import ReviewEditForm from "./ReviewEditForm";
import { useRouter, useSearchParams } from "next/navigation";
import { notificationContext } from "@/app/NotificationContextProvier";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function ReviewItem({ review }: { review: Review }) {
  const searchParam = useSearchParams();
  const beingEdited = searchParam.get("editing");
  const { setNotificationStatus } = useContext(notificationContext);

  const reviewItemRef = useRef<HTMLDivElement>(null);
  const reviewContentRef = useRef<HTMLDivElement>(null);
  const reviewEditorRef = useRef<HTMLFormElement>(null);
  const editingTransitionRef = useRef<HTMLDivElement>(null);

  const [reviewBuf, setReviewBuf] = useState<Review>(review);
  const [editingStatus, setEditingStatus] = useState(
    beingEdited === review.order ? "editing" : ""
  );
  const [expand, toggleExpand] = useState(beingEdited === review.order);

  const router = useRouter();

  useEffect(() => {
    if (reviewItemRef && reviewItemRef.current) {
      if (expand) {
        reviewItemRef.current.classList.add("expand-reviewItem");
      } else {
        reviewItemRef.current.classList.remove("expand-reviewItem");
      }
    }
  }, [expand]);

  useEffect(() => {
    if (editingTransitionRef && editingTransitionRef.current) {
      if (editingStatus === "editing") {
        editingTransitionRef.current.classList.remove("hide-review-edit");
        editingTransitionRef.current.classList.add("reveal-review-edit");
      } else {
        editingTransitionRef.current.classList.remove("reveal-review-edit");
        editingTransitionRef.current.classList.add("hide-review-edit");
      }
    }
  }, [editingStatus]);

  useEffect(() => {
    if (
      reviewItemRef &&
      reviewItemRef.current &&
      reviewContentRef &&
      reviewContentRef.current
    ) {
      reviewItemRef.current.style.setProperty(
        "--review-content-height",
        `${reviewContentRef.current.offsetHeight}px`
      );
      if (beingEdited === review.order) {
        reviewItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [editingStatus, beingEdited, review.order]);

  useEffect(() => {
    if (editingStatus === "no-edit") {
      router.refresh();
    }
  }, [editingStatus, router]);

  useEffect(() => {}, []);

  return (
    <div
      id={`${review.order}`}
      ref={reviewItemRef}
      className="relative w-full overflow-hidden rounded-sm bg-zinc-300 shadow-xl transition-all duration-300 ease-in-out"
    >
      <div className=" flex banner-wrapper transition-all ease-in-out duration-300">
        <Image
          src={review.tour.imageCover}
          width={300}
          height={150}
          alt="Tour image"
          className="w-[25%] object-cover tour-cover"
        />
        <div className="flex flex-col pl-2 py-2 justify-between">
          <p className="order-number uppercase mb-4 text-[0.85rem]">
            ORDER# <span>{review.order}</span>
          </p>
          <p
            className={
              latoSemiBold.className +
              " relative top-0 text-[1.3rem] transition-all duration-150 ease-in tour-name"
            }
          >
            {review.tour.name}
          </p>
        </div>
        <div className="flex flex-col items-end ml-auto pr-2 py-2">
          <div
            className={
              latoSemiBold.className +
              " rating flex items-center text-[1.6rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] transition-all ease-in-out duration-300"
            }
          >
            <svg
              className="w-6 h-6 mr-1 fill-yellow-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p
              className={latoSemiBold.className + " relative flex items-center"}
            >
              <span className="block text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487]">
                {review.rating}
              </span>
              <span className="block text-zinc-500 text-[1rem] relative top-[0.6rem] rotate-[11deg] scale-[1.5]">
                /
              </span>
              <span className="block text-zinc-500 text-[1rem] relative top-[1rem]">
                5
              </span>
            </p>
          </div>
          <div
            className="group absolute z-10 opacity-100 bottom-2 right-2 px-[0.35rem] py-[0.35rem] hover:bg-zinc-400 text-zinc-100 active:bg-zinc-500 rounded-sm expand-button"
            onClick={() => {
              toggleExpand(!expand);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="text-[.7rem] fill-zinc-700 group-hover:fill-zinc-100 "
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative h-[0rem] flex flex-col w-full overflow-hidden transition-all duration-450 ease-in-out review-detail">
        <div
          ref={reviewContentRef}
          className="transition-all duration-300 ease-in-out"
        >
          <div ref={editingTransitionRef} className="p-3 w-[100%] flex ">
            <div className={"w-[100%] flex-shrink-0"}>
              <ReviewDispaly review={reviewBuf} />
            </div>
            <div
              className={
                "w-[100%] flex-shrink-0 " +
                (editingStatus !== "editing" ? "hidden" : "")
              }
            >
              <ReviewEditForm
                review={reviewBuf}
                setReview={setReviewBuf}
                ref={reviewEditorRef}
                setEditingStatus={setEditingStatus}
              />
            </div>
          </div>

          <div className="px-3 py-4 flex w-full h-[4.8rem] text-transparent">
            placeholder
          </div>
          <div className="px-3 py-4 bg-zinc-600 flex absolute bottom-0 w-full">
            <form
              className="inline"
              onSubmit={async (e) => {
                e.preventDefault();
                const response = await fetch(
                  `/api/reviews/delete/${review._id}`,
                  {
                    method: "DELETE",
                    credentials: "include",
                  }
                );
                const result = await response.json();
                if (result.status === "success") {
                  setNotificationStatus({
                    reveal: true,
                    message: result.message,
                    category: "notification",
                  });
                  router.refresh();
                }
              }}
            >
              <button
                type="submit"
                className="px-3 py-[0.36rem] bg-red-600 text-zinc-200 hover:opacity-90 rounded-sm cancel-button"
              >
                Delete
              </button>
            </form>
            <button
              type="button"
              className={
                "block px-3 py-[0.36rem] ml-6 rounded-sm " +
                (editingStatus === "editing"
                  ? "text-zinc-100 bg-gradient-to-br from-[#7dd56f] to-[#28b487]/95 hover:opacity-90"
                  : "text-zinc-700 bg-zinc-200 hover:bg-zinc-400 hover:text-zinc-100")
              }
              onClick={() => {
                if (editingStatus === "editing") {
                  setEditingStatus("editted");
                  if (reviewEditorRef && reviewEditorRef.current) {
                    reviewEditorRef.current.requestSubmit();
                  }
                } else {
                  setEditingStatus("editing");
                }
              }}
            >
              {editingStatus === "editing" ? "Submit" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
