"use client";
import { notificationContext } from "@/app/NotificationContextProvier";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useContext } from "react";
export default function RatingStarsResponsive({
  review,
}: {
  review: { id: string; rating: number };
}) {
  const { setNotificationStatus } = useContext(notificationContext);
  const [newRating, setNewRating] = useState(review.rating ?? 0);
  const [changed, setChanged] = useState(false);
  const [ratingUpdateStatus, setRatingUpdateStatus] = useState("not-set");
  const setRatingFormRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (setRatingFormRef && setRatingFormRef.current) {
      if (changed) {
        setRatingFormRef.current.requestSubmit();
      }
    }
  }, [changed]);

  return (
    <div className="relative flex">
      <form
        method="PATCH"
        ref={setRatingFormRef}
        className="w-fit mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          const reqBody = {
            rating: newRating,
            reviewId: review.id,
          };
          fetch("/api/update-review", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(reqBody),
          })
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              if (result.status === "success") {
                setRatingUpdateStatus("set");
                setNotificationStatus({
                  reveal: true,
                  message: result.message,
                  category: "success",
                });

                router.refresh();
              } else {
                setRatingUpdateStatus("");
                setNotificationStatus({
                  reveal: true,
                  message: result.message,
                  category: "error",
                });
              }
              setChanged(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <div className="flex w-fit mx-auto">
          <svg
            id="1"
            className={
              "w-6 h-6 mr-1 " +
              (!(newRating < 1) ? "text-yellow-300" : "text-zinc-400")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={(e) => {
              setNewRating(parseInt(e.currentTarget.id));
              setChanged(true);
              setRatingUpdateStatus("setting");
            }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            id="2"
            className={
              "w-6 h-6 mr-1 " +
              (!(newRating < 2) ? "text-yellow-300" : "text-zinc-400")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={(e) => {
              setNewRating(parseInt(e.currentTarget.id));
              setChanged(true);
              setRatingUpdateStatus("setting");
            }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            id="3"
            className={
              "w-6 h-6 mr-1 " +
              (!(newRating < 3) ? "text-yellow-300" : "text-zinc-400")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={(e) => {
              setNewRating(parseInt(e.currentTarget.id));
              setChanged(true);

              setRatingUpdateStatus("setting");
            }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            id="4"
            className={
              "w-6 h-6 mr-1 " +
              (!(newRating < 4) ? "text-yellow-300" : "text-zinc-400")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={(e) => {
              setNewRating(parseInt(e.currentTarget.id));
              setChanged(true);

              setRatingUpdateStatus("setting");
            }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            id="5"
            className={
              "w-6 h-6 mr-1 " +
              (!(newRating < 5) ? "text-yellow-300" : "text-zinc-400")
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={(e) => {
              setNewRating(parseInt(e.currentTarget.id));
              setChanged(true);

              setRatingUpdateStatus("setting");
            }}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </form>
      <div className="indicator absolute right-0 top-0">
        {ratingUpdateStatus === "set" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-[#69C987]"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        ) : ratingUpdateStatus === "setting" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-zinc-500 animate-spin"
          >
            <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
