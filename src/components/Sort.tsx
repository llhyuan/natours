"use client";

import { searchContext } from "@/app/(with_nav)/SearchContextProvider";
import { useRef, useState, useEffect, useContext } from "react";

export default function Sort() {
  const { searchParams, setSearchParams } = useContext(searchContext);
  const [menuStatus, setMenuStatus] = useState(false);
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
          className="group inline-flex justify-center text-zinc-700 hover:text-zinc-900 "
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => {
            setMenuStatus(!menuStatus);
          }}
        >
          Sort
          <svg
            className="-mr-1 ml-1 mt-[0.25rem] lg:mt-[0.425rem] h-5 w-5 flex-shrink-0 text-zinc-400 group-hover:text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        ref={menuRef}
        className="absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md bg-zinc-100 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-clip scale-20 opacity-0 transition-all duration-200 ease-in"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div role="none">
          <a
            href="#"
            className="text-zinc-500 block px-4 py-2 pt-3 active:bg-zinc-600 active:text-zinc-100"
            role="menuitem"
            id="menu-item-1"
            onClick={() => {
              setSearchParams({
                ...searchParams,
                sort: "sort=-ratingsAverage",
              });
            }}
          >
            Best Rating
          </a>
          <a
            href="#"
            className="text-zinc-500 block px-4 py-2 active:bg-zinc-600 active:text-zinc-100"
            role="menuitem"
            id="menu-item-2"
            onClick={() => {
              setSearchParams({ ...searchParams, sort: "sort=-startDates" });
            }}
          >
            Newest
          </a>
          <a
            href="#"
            className="text-zinc-500 block px-4 py-2 active:bg-zinc-600 active:text-zinc-100"
            role="menuitem"
            id="menu-item-3"
            onClick={() => {
              setSearchParams({ ...searchParams, sort: "sort=price" });
            }}
          >
            Price: Low to High
          </a>
          <a
            href="#"
            className="text-zinc-500 block px-4 py-2 pb-3 active:bg-zinc-600 active:text-zinc-100"
            role="menuitem"
            id="menu-item-4"
            onClick={() => {
              setSearchParams({ ...searchParams, sort: "sort=-price" });
            }}
          >
            Price: High to Low
          </a>
        </div>
      </div>
    </div>
  );
}
