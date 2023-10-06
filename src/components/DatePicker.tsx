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
      inputClassName={"rounded-sm p-2 focus:outline-none"}
      value={date}
      placeholder="Start Date"
      onChange={(e) => {
        console.log(e);
        setSearchParams({
          ...searchParams,
          date: e && e.startDate ? e.startDate : "",
        });
        setDate(e);
      }}
    />
  );
}
