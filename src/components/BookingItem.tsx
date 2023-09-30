"use client";
import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { BookingInfo } from "@Global/custom-types";
import { useRef, useEffect, useState, ReactNode, useContext } from "react";
import RatingStarsResponsive from "./RatingStarsResponsive";

import OrderStatusSign from "./OrderStatusSign";
import { notificationContext } from "@/app/NotificationContextProvier";
import { useRouter } from "next/navigation";
import Startdate from "./StartdateUpdate";
import { sidebarContext } from "@/app/(with_nav)/SidebarContextProvider";

const lato = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function BookingItem({
  bookingInfo,
  guideInfo,
}: {
  bookingInfo: BookingInfo;
  guideInfo: ReactNode;
}) {
  const bookingItemref = useRef<HTMLDivElement>(null);
  const [expand, toggleExpand] = useState(false);
  const { setNotificationStatus } = useContext(notificationContext);
  const { setActiveSection } = useContext(sidebarContext);
  const router = useRouter();

  useEffect(() => {
    if (bookingItemref && bookingItemref.current) {
      if (expand) {
        bookingItemref.current.classList.add("expand-bookingItem");
      } else {
        bookingItemref.current.classList.remove("expand-bookingItem");
      }
    }
  });

  return (
    <div
      ref={bookingItemref}
      className="relative w-full rounded-sm bg-zinc-300 shadow-xl"
    >
      <div className="absolute top-[-0.5rem] left-[-0.5rem] transition-all duration-450 ease-in-out order-status">
        <OrderStatusSign status={bookingInfo.paymentStatus} />
      </div>
      <div
        className=" flex banner-wrapper transition-all ease-in-out duration-450"
        onClick={(e) => {
          if ((e.target as any).nodeName !== "A") {
            toggleExpand(!expand);
          }
        }}
      >
        <Image
          src={bookingInfo.tour.imageCover}
          width={300}
          height={150}
          alt="Tour image"
          className="w-[25%] object-cover tour-cover"
        />
        <div className="flex flex-col pl-2 py-2 justify-between text-[0.8rem] sm:text-[1.2rem]">
          <p className="order-number uppercase">
            {`ORDER # ${bookingInfo.order}`}
          </p>
          <div className="h-5">
            <Link
              href={bookingInfo.invoice ?? "#"}
              target={"_blank"}
              className={
                "text-zinc-600 relative bottom-[4px] hover:underline w-fit " +
                (bookingInfo.invoice ? "" : "hidden")
              }
            >
              Invoice
            </Link>
          </div>
          <p
            className={
              latoSemiBold.className +
              " relative top-0 text-[1.1rem] sm:text-[1.4rem] transition-all duration-450 ease-in tour-name"
            }
          >
            {bookingInfo.tour.name}
          </p>
        </div>
        <div className="flex flex-col items-end ml-auto px-4 py-2">
          <p
            className={
              latoSemiBold.className +
              " text-[1.3rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] tour-price transition-all ease-in-out duration-450"
            }
          >{`$${bookingInfo.tour.price}`}</p>
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
      <div className="h-[0rem] flex flex-col w-full overflow-hidden transition-all duration-450 ease-in-out booking-detail">
        <div className="p-3">
          <div className="w-full my-4">
            <p className={lato.className}>Payment Status:</p>
            <div className="w-full flex items-end justify-between">
              <p
                className={
                  latoSemiBold.className +
                  " ml-6 uppercase " +
                  (bookingInfo.paymentStatus === "pending"
                    ? "text-orange-500"
                    : bookingInfo.paymentStatus === "paid"
                    ? "text-green-500"
                    : "text-red-600")
                }
              >
                {bookingInfo.paymentStatus}
              </p>
              {bookingInfo.paymentStatus === "pending" ? (
                <Link
                  href={bookingInfo.url}
                  className="px-3 py-[0.36rem] ml-4 bg-orange-500 text-zinc-200 hover:opacity-90 rounded-sm cancel-button"
                >
                  Pay Here
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="my-4">
            <p className={lato.className + " block mb-1"}>
              Choose Your Start Date:
            </p>
            <div className="mt-2">
              <Startdate bookingInfo={bookingInfo} />
            </div>
          </div>
          <div className="my-4">
            <p className={lato.className}>
              Any questions about the tour? Contact Your Tour Guide:
            </p>
            <div className="flex justify-left items-center mt-2 ml-2">
              {guideInfo}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="text-[1.1rem] ml-4 fill-zinc-400 hover:fill-zinc-700 cursor-pointer "
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
          </div>
          <div className="my-4">
            <p className={lato.className + " mb-[0.4rem]"}>
              Rate Your Experience:
            </p>
            <div className="relative my-8">
              <RatingStarsResponsive review={bookingInfo.review} />
              <div className="absolute bottom-[-3rem] w-full flex">
                <Link
                  href={`/me/reviews?editing=${bookingInfo.order}`}
                  className="mx-auto px-4 mt-2 underline-offset-2 underline decoration-1 text-zinc-500 hover:text-zinc-900"
                  onClick={() => {
                    setActiveSection("reviews");
                  }}
                >
                  Write A Review
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-4 border-solid border-zinc-400 border-t-[1px]">
            <div className="text-zinc-500 flex justify-between">
              <Link
                href="#"
                className="mx-4 underline-offset-2 underline decoration-1 hover:text-zinc-900"
              >
                Feedback
              </Link>
              <Link
                href="#"
                className="mx-4 underline-offset-2 underline decoration-1 hover:text-zinc-900"
              >
                Customer Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-auto px-3 py-4 bg-zinc-600 flex opacity-10 bottom-banner">
          <Link
            href={`/tours/${bookingInfo.tour.id}`}
            className="block px-3 py-[0.36rem] text-zinc-100 hover:opacity-90 rounded-sm bg-gradient-to-br from-[#7dd56f] to-[#28b487]/95"
          >
            Tour Info
          </Link>
          <form
            className="inline"
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await fetch(
                `/api/bookings/delete/${bookingInfo.order}`,
                {
                  method: "DELETE",
                  credentials: "include",
                },
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
              className="px-3 py-[0.36rem] ml-4 bg-red-600 text-zinc-200 hover:opacity-90 rounded-sm cancel-button"
            >
              Cancel Tour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
