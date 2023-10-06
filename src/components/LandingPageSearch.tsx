"use client";
import dynamic from "next/dynamic";
import Select from "./Select";
import { searchContext } from "@/app/(with_nav)/SearchContextProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const DatePicker = dynamic(() => import("../components/DatePicker"), {
  ssr: false,
});

export default function LandingPageSearch() {
  const { searchParams, setSearchParams } = useContext(searchContext);
  const router = useRouter();

  return (
    <form
      className="relative group flex max-sm:flex-col max-sm:items-start w-fit mx-auto mb-[2rem] text-[1rem] lg:text-[1.3rem] items-center rounded-sm "
      onSubmit={(e) => {
        e.preventDefault();
        if (searchParams.date || searchParams.value) {
          setSearchParams({ ...searchParams, submit: true });

          //if (searchParams.value) {
          router.push(
            `/tours/search?${searchParams.field}=${searchParams.value}&date=${searchParams.date}`,
          );
          // }
        }
      }}
    >
      <div className="flex flex-2 items-center bg-white py-1 px-2 sm:mr-1 max-sm:mb-2 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          className="md:w-[2rem] mr-2 fill-zinc-500"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <Select />
        {searchParams.field === "name" ? (
          <input
            name="field"
            type="text"
            placeholder="Search for your dream tour ..."
            value={searchParams.value}
            className="appearance-none border-none focus:outline-none focus:ring-0 text-left p-1 rounded-md bg-transparent text-zinc-800 max-sm:w-[60vw] w-[30vw] max-w-[750px]"
            onChange={(e) => {
              setSearchParams({ ...searchParams, value: e.target.value });
            }}
          />
        ) : (
          <input
            name="field"
            type="number"
            value={searchParams.value}
            placeholder="Maximum: 20"
            className="appearance-none focus:outline-none text-left p-1 rounded-md bg-transparent text-zinc-800 max-sm:w-[60vw] w-[30vw] max-w-[750px]"
            min={1}
            max={20}
            step={1}
            onChange={(e) => {
              if (Number(e.target.value) <= 20) {
                setSearchParams({ ...searchParams, value: e.target.value });
              }
            }}
          />
        )}
      </div>
      <div className="flex-1">
        <DatePicker />
      </div>
      <button
        type="submit"
        className="sm:ml-1 max-sm:mt-4 max-sm:self-end py-2 max-sm:px-8 px-4 md:px-6 lg:px-8 rounded-r-sm text-zinc-100 active:opacity-90 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 shadow-md"
      >
        Search
      </button>
    </form>
  );
}
