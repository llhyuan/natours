import { BookingInfo } from "@Global/custom-types";
import { useState, useRef, useEffect } from "react";

export default function Startdate({
  bookingInfo,
}: {
  bookingInfo: BookingInfo;
}) {
  const [startDate, setStartDate] = useState<string>();
  const [dateUpdateStatus, setDateUpdateStatus] = useState("not-set");
  const setDateFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (setDateFormRef && setDateFormRef.current) {
      if (startDate) {
        setDateFormRef.current.requestSubmit();
      }
    }
  }, [startDate]);

  return (
    <div className="flex items-center">
      <form
        method="PATCH"
        ref={setDateFormRef}
        onSubmit={(e) => {
          e.preventDefault();
          const reqBody = {
            startDate: startDate,
            order: bookingInfo.order,
          };
          fetch("/api/bookings/update-startdate", {
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
                setDateUpdateStatus("set");
              } else {
                setDateUpdateStatus("");
              }
            })
            .catch((err) => {
              console.log("This is error");
              console.log(err);
            });
        }}
      >
        <select
          name="startDate"
          className="w-fit ml-6 px-4 py-1 rounded-sm outline-[#69C987]"
          value={bookingInfo.startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            setDateUpdateStatus("setting");
          }}
        >
          <option value="" className="text-zinc-300">
            -- see options --
          </option>
          {bookingInfo.tour.startDates.map((date, index) => {
            const dateString = new Date(date).toDateString().slice(4);
            return (
              <option
                value={date}
                key={index}
                //selected={bookingInfo.startDate === date}
              >
                {dateString}
              </option>
            );
          })}
        </select>
      </form>
      <div className="indicator w-[1rem] ml-auto ">
        {dateUpdateStatus === "set" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-[#69C987]"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        ) : dateUpdateStatus === "setting" ? (
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
