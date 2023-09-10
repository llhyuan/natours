"use client";

import { notificationContext } from "@/app/NotificationContextProvier";
import { useState, useContext } from "react";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const { setNotificationStatus } = useContext(notificationContext);

  return (
    <div className="pb-10 max-w-[400px] max-md:mx-auto md:max-w-[600px] md:pl-6">
      <form
        action="/api/reset-password"
        method="POST"
        className="text-[1rem] sm:text-[1.1rem] text-zinc-600 flex flex-col pb-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const reqBody = {
            email: email,
          };

          const response = await fetch("/api/forget-password", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(reqBody),
          });

          const result = await response.json();

          if (result.stauts === "success") {
            setNotificationStatus({
              reveal: true,
              message: result.message,
              category: "notification",
            });
          } else {
            setNotificationStatus({
              reveal: true,
              message: result.message,
              category: "error",
            });
          }
        }}
      >
        <h1
          className={
            latoBold.className +
            " text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
          }
        >
          Reset Your Password
        </h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={latoBold.className + " block my-2 capitalize"}
          >
            email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className={
              "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
              (email ? "invalid:ring-red-500 invalid:ring-2" : "")
            }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-fit py-3 px-6 ml-auto mt-8 uppercase bg-green-500 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
