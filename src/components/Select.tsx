"use client";

import { searchContext } from "@/app/(with_nav)/SearchContextProvider";
import { Lato } from "next/font/google";
import { useRef, useState, useEffect, useContext } from "react";
const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Select() {
  const { searchParams, setSearchParams } = useContext(searchContext);
  const searchField =
    searchParams.field === "size"
      ? "group size"
      : searchParams.field === "duration"
      ? "duration"
      : "name";
  const [menuStatus, setMenuStatus] = useState(false);
  const [selected, setSelected] = useState(searchField);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef && menuRef.current) {
      if (menuStatus) {
        menuRef.current.classList.add("reveal-sortMenu");
      } else {
        menuRef.current.classList.remove("reveal-sortMenu");
      }
    }
  });

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={
            latoSemiBold.className +
            " group inline-flex justify-center text-zinc-700 hover:text-zinc-900 w-fit capitalize"
          }
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => {
            setMenuStatus(!menuStatus);
          }}
        >
          {selected}
          <svg
            className={
              "ml-[0.15rem] sm:ml-2 mt-[0.18rem] lg:mt-[0.425rem] h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-gray-500 " +
              (!menuStatus ? "" : "rotate-180")
            }
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        ref={menuRef}
        className="absolute right-0 z-10 mt-4 w-52 rounded-md bg-zinc-100 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-clip opacity-0 translate-y-4 transition-all duration-150 ease-in"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div role="none">
          <div className="group/rate relative flex">
            <a
              href="#"
              className="text-zinc-500 block px-4 py-2 pt-3 group-hover/rate:bg-zinc-600 group-hover/rate:text-zinc-100 w-full"
              role="menuitem"
              id="menu-item-1"
              onClick={() => {
                setMenuStatus(false);
                setSelected("name");
                setSearchParams({
                  ...searchParams,
                  field: "name",
                });
              }}
            >
              Name
            </a>
            {selected === "name" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="absolute top-[0.8rem] right-[1rem] fill-zinc-500 group-hover/rate:fill-zinc-100 bg-transparent"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              ""
            )}
          </div>

          <div className="group/date relative flex">
            <a
              href="#"
              className="text-zinc-500 block px-4 py-2 group-hover/date:bg-zinc-600 group-hover/date:text-zinc-100 w-full"
              role="menuitem"
              id="menu-item-2"
              onClick={() => {
                setMenuStatus(false);
                setSelected("group size");
                setSearchParams({ ...searchParams, field: "size" });
              }}
            >
              Group Size (&le;)
            </a>
            {selected === "group size" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="absolute top-[0.8rem] right-[1rem] fill-zinc-500 group-hover/date:fill-zinc-100 bg-transparent"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              ""
            )}
          </div>

          <div className="group/date relative flex">
            <a
              href="#"
              className="text-zinc-500 block px-4 py-2 group-hover/date:bg-zinc-600 group-hover/date:text-zinc-100 w-full"
              role="menuitem"
              id="menu-item-2"
              onClick={() => {
                setMenuStatus(false);
                setSelected("duration");
                setSearchParams({
                  ...searchParams,
                  field: "duration",
                });
              }}
            >
              Duration (&le;)
            </a>
            {selected === "duration" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="absolute top-[0.8rem] right-[1rem] fill-zinc-500 group-hover/date:fill-zinc-100 bg-transparent"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
