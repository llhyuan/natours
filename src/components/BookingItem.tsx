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
  const [startDate, setStartDate] = useState("");
  const { setNotificationStatus } = useContext(notificationContext);
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
      id="item-wraper"
      className="relative w-full rounded-sm bg-zinc-300 shadow-xl"
    >
      <div className="absolute top-[-0.5rem] left-[-0.5rem] transition-all duration-300 ease-in-out order-status">
        <OrderStatusSign status={bookingInfo.paymentStatus} />
      </div>
      <div className=" flex banner-wrapper transition-all ease-in-out duration-300">
        <Image
          src={bookingInfo.tour.imageCover}
          width={300}
          height={150}
          alt="Tour image"
          className="w-[25%] object-cover tour-cover"
        />
        <div className="flex flex-col pl-2 py-2 justify-between">
          <p className="order-number uppercase">
            {`ORDER # ${bookingInfo.order}`}
          </p>
          <Link
            href="#"
            target={"_blank"}
            className="text-zinc-600 relative bottom-[4px] hover:underline"
          >
            Invoice
          </Link>
          <p
            className={
              latoSemiBold.className +
              " relative top-0 text-[1.3rem] transition-all duration-150 ease-in tour-name"
            }
          >
            {bookingInfo.tour.name}
          </p>
        </div>
        <div className="flex flex-col items-end ml-auto px-4 py-2">
          <p
            className={
              latoSemiBold.className +
              " text-[1.3rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] tour-price transition-all ease-in-out duration-300"
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
            <label
              htmlFor="startDate"
              className={lato.className + " block mb-1"}
            >
              Choose Your Start Date:
            </label>
            <div className="flex mt-2 items-center">
              <select
                name="startDate"
                id="startDate"
                className="w-fit ml-6 px-4 py-1 rounded-sm outline-[#69C987]"
              >
                <option value="" className="text-zinc-300">
                  -- see options --
                </option>
                {bookingInfo.tour.startDates.map((date, index) => {
                  const dateString = new Date(date).toDateString().slice(4);
                  return (
                    <option value={date} key={index}>
                      {dateString}
                    </option>
                  );
                })}
              </select>
              <div className="indicator w-[1rem] ml-auto ">
                {startDate === "changed" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-[#69C987]"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                ) : startDate === "changing" ? (
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
          </div>
          <div className="my-4">
            <p className={lato.className}>Your Tour Guide:</p>
            <div className="flex justify-left items-center mt-2 ml-2">
              {guideInfo}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="text-[1.1rem] ml-4 fill-zinc-500 hover:fill-zinc-700 cursor-pointer "
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
          </div>
          <div className="my-4">
            <p className={lato.className + " mb-[0.4rem]"}>
              Rate Your Experience:
            </p>
            <div className="flex justify-center my-8">
              <RatingStarsResponsive />
            </div>
          </div>
          <div className="mt-10 pt-4 border-solid border-zinc-400 border-t-[1px]">
            <div className="text-zinc-600 flex justify-between">
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
        <div className="mt-auto px-3 py-4 bg-zinc-600 ">
          <Link
            href={`/tours/${bookingInfo.tour.id}`}
            className=" px-3 py-[0.36rem] text-zinc-100 hover:opacity-90 rounded-sm bg-gradient-to-br from-[#7dd56f] to-[#28b487]/95"
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
                }
              );
              const result = await response.json();
              if (result.status === "success") {
                setNotificationStatus({
                  reveal: true,
                  message: result.data.message,
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
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
