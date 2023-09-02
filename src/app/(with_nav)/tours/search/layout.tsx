"use client";
import { ReactNode, useContext, useState } from "react";
import { searchContext } from "../../SearchContextProvider";
import Link from "next/link";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import Sort from "@/components/Sort";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Serarch({ children }: { children: ReactNode }) {
  const { searchParams, setSearchParams } = useContext(searchContext);
  const router = useRouter();

  return (
    <div>
      <form
        className="relative group flex w-fit border-solid border-zinc-700 border-[1px] mx-auto my-[2rem] pl-2 text-[1rem] lg:text-[1.3rem] items-center rounded-md shadow-md overflow-hidden"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({ ...searchParams, submit: true });
          if (searchParams.value) {
            router.replace(
              `/tours/search?${searchParams.field}=${searchParams.value}`
            );
          } else {
            router.replace("/tours/search");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="md:w-[2rem] mr-2"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          name="name"
          type="text"
          value={searchParams.value}
          placeholder="Type in to search..."
          className="appearance-none focus:outline-none text-left p-1 rounded-md bg-zinc-200 text-zinc-800 w-[40vw] max-w-[750px]"
          onChange={(e) => {
            setSearchParams({
              ...searchParams,
              value: e.target.value,
              submit: true,
            });

            if (searchParams.value) {
              router.replace(
                `/tours/search?${searchParams.field}=${searchParams.value}`
              );
            } else {
              router.replace("/tours/search");
            }
          }}
        />
        <button
          type="submit"
          className="py-2 px-2 sm:px-4 md:px-6 lg:px-8 rounded-r-sm border-l-[1px] border-solid border-zinc-700 bg-zinc-700 text-zinc-100 active:bg-zinc-600 "
        >
          Search
        </button>
        <div className="absolute top-2 right-[-3.9rem] sm:right-[-4.5rem] md:right-[-5rem] lg:right-[-6rem] z-10">
          <Sort />
        </div>
      </form>
      <div>{children}</div>
      <div className="my-20 text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem]">
        <p
          className={
            latoSemiBold.className +
            " text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] text-center mb-4 bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
          }
        >
          Didn&apos;t find what you are looking for?
        </p>
        <p className="text-zinc-700 w-[80%] mx-auto ">
          Find like minded people in our{" "}
          <Link
            href="#"
            className="underline decoration-1 hover:decoration-green-500 underline-offset-2 bg-gradient-to-br hover:text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
          >
            community
          </Link>{" "}
          and join thousands of other tours organized by other members. Or even
          better, you can{" "}
          <Link
            href="#"
            className="underline decoration-1 hover:decoration-green-500 underline-offset-2 bg-gradient-to-br hover:text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487]"
          >
            organize your own dream tour
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
