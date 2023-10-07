"use client";
import InfoCard from "@/components/InfoCardSync";
import useSWR from "swr";
import { Tour } from "@Global/custom-types";
import { useContext } from "react";
import { searchContext } from "../../SearchContextProvider";

export default function SerarchResult() {
  const { searchParams } = useContext(searchContext);
  const { data, error, isLoading } = useSWR(
    () => {
      if ((searchParams.value || searchParams.date) && searchParams.submit) {
        const startDate =
          searchParams.date ?? new Date().toISOString().slice(0, 10);
        const url = `${process.env.NEXT_PUBLIC_API_HOST}/tours/?field=${searchParams.field}&value=${searchParams.value}&date=${startDate}&${searchParams.sort}&budget=${searchParams.budget}`;
        return url;
      } else {
        return false;
      }
    },
    fetchResult,
    {
      keepPreviousData: true,
    },
  );

  return (
    <div
      className={
        "relative flex flex-wrap max-lg:justify-center gap-x-2 gap-y-10 " +
        (isLoading ? "opacity-30" : "")
      }
    >
      {data && data.length > 0 ? (
        data.map((tour: any, index: number) => {
          return <InfoCard tour={tour} key={index} />;
        })
      ) : (
        <p className="w-fit mx-auto pt-8 pb-12 text-zinc-500 text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem]">
          {searchParams.value ? "No Result." : ""}
        </p>
      )}
      {error ? (
        <p className="w-fit mx-auto pt-8 pb-12 text-zinc-500 text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem]">
          Opps! Something went wrong. Try again later.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

function fetchResult(url: string): Promise<Array<Tour>> {
  return fetch(url, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.data.tours;
    });
}
