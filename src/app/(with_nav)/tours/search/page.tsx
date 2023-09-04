"use client";
import InfoCard from "@/components/InfoCardSync";
import useSWR from "swr";
import { Tour } from "@/components/customInterfaces";
import { useContext } from "react";
import { searchContext } from "../../SearchContextProvider";

export default function SerarchResult() {
  const { searchParams } = useContext(searchContext);
  const { data, error, isLoading } = useSWR(
    () => {
      if (searchParams.value) {
        const url = `${process.env.NEXT_PUBLIC_API_HOST}/tours/?${searchParams.field}=${searchParams.value}&${searchParams.sort}`;
        return url;
      } else {
        return false;
      }
    },
    fetchResult,
    {
      keepPreviousData: true,
    }
  );

  return (
    <div
      className={
        "relative w-[90%] max-w-[1450px] mx-auto px-6 py-2 flex flex-wrap justify-center gap-x-5 gap-y-9 " +
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
