"use client";

import { searchContext } from "@/app/(with_nav)/SearchContextProvider";
import { useContext, useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

export default function DatePicker() {
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const { searchParams, setSearchParams } = useContext(searchContext);
  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      primaryColor={"green"}
      inputClassName={
        "rounded-xs p-2 border-none focus:outline-none focus:ring-0"
      }
      value={date}
      placeholder="Start Date"
      onChange={(e) => {
        setSearchParams({
          ...searchParams,
          date: e && e.startDate ? e.startDate : "",
        });
        setDate(e);
      }}
    />
  );
}
