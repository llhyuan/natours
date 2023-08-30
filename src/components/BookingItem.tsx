"use client";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/img/tours/tour-1-cover.jpg";
import { Lato } from "next/font/google";
import { BookingInfo } from "@Global/custom-types";
import { useRef, useEffect, useState, ReactNode } from "react";
import GuideInfo from "./GuideInfo";
import ResponsiveRatingStars from "./ResponsiveRatingStars";

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
  console.log(bookingInfo);

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
      className="relative w-full rounded-md bg-zinc-300 overflow-clip"
    >
      <div className=" flex banner-wrapper transition-all ease-in-out duration-300">
        <Image
          src={img}
          width={300}
          height={150}
          alt="Tour image"
          className="w-[25%] object-cover tour-cover"
        />
        <div className="flex flex-col pl-2 py-2 justify-between">
          <p className="order-number uppercase">
            {`ORDER # ${bookingInfo._id.slice(0, 8)}`}
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
            className="group absolute z-10 opacity-100 bottom-2 right-2 px-[0.35rem] py-[0.35rem] hover:bg-zinc-400 text-zinc-100 active:bg-zinc-500 rounded-md expand-button"
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
      <div className="h-[0rem] flex flex-col w-full overflow-hidden transition-all duration-400 ease-in-out booking-detail">
        <div className="p-3">
          <div className="flex w-full justify-between items-center my-4">
            <p>
              Order Status:{" "}
              <span
                className={
                  latoSemiBold.className +
                  " ml-1 uppercase " +
                  (bookingInfo.paymentStatus === "processing"
                    ? "text-orange-500"
                    : bookingInfo.paymentStatus === "success"
                    ? "text-green-500"
                    : "text-red-600")
                }
              >
                {bookingInfo.paymentStatus}
              </span>
            </p>
            {bookingInfo.paymentStatus === "pending" ? (
              <button className="py-[0.1rem] px-2 border-solid border-zinc-700 border-[1px] text-zinc-700 hover:text-zinc-100 hover:bg-zinc-700 rounded-md">
                Try Again
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="my-4">
            <div className="flex flex-col">
              <label htmlFor="startDate" className="block mb-1">
                Choose Your Start Date:
              </label>
              <select
                name="startDate"
                id="startDate"
                className="w-fit mx-auto px-3 py-1 rounded-md mt-2"
              >
                {bookingInfo.tour.startDates.map((date, index) => {
                  const dateString = new Date(date).toDateString().slice(4);
                  return (
                    <option value={date} key={index}>
                      {dateString}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="indicator"></div>
          </div>
          <div className="my-4">
            <p>Your Tour Guide:</p>
            <div className="flex justify-left items-center justify-center">
              {guideInfo}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="text-[1.4rem] fill-zinc-700 hover:fill-zinc-500 cursor-pointer px-8"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </div>
          </div>
          <div className="my-4">
            <p className="mb-[0.4rem]">We would love to hear from you:</p>
            <div className="flex flex-col">
              <div className="flex justify-center my-4">
                <ResponsiveRatingStars />
              </div>
              <div className="mx-auto">
                <Link
                  href="#"
                  className="mx-3 underline-offset-2 hover:underline "
                >
                  Feedback
                </Link>
                <Link
                  href="#"
                  className="mx-3 underline-offset-2 hover:underline "
                >
                  Customer Service
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto px-3 py-4 bg-zinc-700 ">
          <button className=" px-3 py-1 text-zinc-100 hover:opacity-90 rounded-md bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
            Tour Info
          </button>
          <button className="px-3 py-1 ml-4 bg-red-600 text-zinc-200 hover:bg-red-500 rounded-md cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
