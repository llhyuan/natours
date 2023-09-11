"use client";
import { notificationContext } from "@/app/NotificationContextProvier";
import { Lato } from "next/font/google";
import { useRef, useEffect, useContext } from "react";

const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Notification({
  position,
}: {
  position: "nav" | "no-nav";
}) {
  const { notification, setNotificationStatus } =
    useContext(notificationContext);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notificationRef && notificationRef.current) {
      if (notification.reveal) {
        notificationRef.current.classList.add("reveal-notification");
      } else {
        notificationRef.current.classList.remove("reveal-notification");
      }
    }
  }, [notification.reveal]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (notification.reveal) {
      timeout = setTimeout(() => {
        setNotificationStatus({ ...notification, reveal: false });
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [setNotificationStatus, notification]);
  return (
    <div
      ref={notificationRef}
      className={
        latoSemiBold.className +
        " fixed w-[100vw] overflow-hidden z-0 transition-all duration-150 ease-in scale-95 opacity-0" +
        (position === "nav" ? " top-[5.3rem]" : " top-[0.1rem]")
      }
    >
      <div className="flex p-4 text-[1rem] md:text-[1.2rem] sm:w-[65%] mx-[0.5rem] sm:mx-auto rounded-md bg-zinc-100 shadow-[0.2rem_0.2rem_1rem_rgba(0,0,0,0.5)] my-4 relative ">
        <div className="inline relative mr-2 top-[0.2rem]">
          {notification.category === "" ? (
            ""
          ) : notification.category === "error" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5rem"
              viewBox="0 0 512 512"
              className={
                "fill-red-600 " + (notification.reveal ? "" : "hidden")
              }
            >
              <path
                className={
                  "fill-red-600 " + (notification.reveal ? "" : "hidden")
                }
                d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              />
            </svg>
          ) : notification.category === "notification" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5rem"
              viewBox="0 0 512 512"
              className={
                "fill-sky-500 " + (notification.reveal ? "" : "hidden")
              }
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5rem"
              viewBox="0 0 512 512"
              className={
                "fill-green-500 " + (notification.reveal ? "" : "hidden")
              }
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
          )}
        </div>
        <p className="capitalize">{notification.message}</p>
      </div>
    </div>
  );
}
