"use client";
import { Lato } from "next/font/google";
import { useContext, useState } from "react";
import { notificationContext } from "@/app/NotificationContextProvier";

const latoSemiBold = Lato({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export default function Subscribe() {
  const { setNotificationStatus } = useContext(notificationContext);
  const [email, setEmail] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>();

  return (
    <form className="flex flex-col max-sm:px-6">
      <div className="w-full">
        <p
          className={
            latoSemiBold.className +
            " text-[1.4rem] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f] to-[#28b487]"
          }
        >
          Need more travel?
        </p>
        <p className={latoSemiBold.className + " mb-4 "}>
          Subscribe to our newsletter for hot deals, new trips and great tales.
        </p>
        <label
          htmlFor="subscribe"
          className={latoSemiBold.className + " block my-2"}
        >
          Email address:
        </label>
        <input
          type="email"
          name="email"
          id="subscribe"
          value={email}
          placeholder="your@email.com"
          className="w-full border-none focus:ring-2 focus:ring-[#7dd56f] invalid:ring-red-500 invalid:ring-2"
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(e.target.validity.valid);
            console.log(isValid);
          }}
        />
      </div>
      <button
        type="submit"
        className={
          "px-3 py-2 bg-zinc-700 text-zinc-100 hover:opacity-95 active:opacity-100 mt-6 self-end disabled:cursor-no-drop"
        }
        disabled={!isValid || !email}
        onClick={(e) => {
          e.preventDefault();
          setNotificationStatus({
            reveal: true,
            message: "Thank you for your subscription!",
            category: "notification",
          });
        }}
      >
        Subscribe
      </button>
    </form>
  );
}
