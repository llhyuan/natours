"use client";

import Link from "next/link";
import { useState, useEffect, useRef, EventHandler, PointerEvent } from "react";
import SearchForm from "./SearchForm";
import UserInfo from "./UserInfo";

export default function Dropdown() {
  const [menuStatus, toggleMenuStatus] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef && dropdownRef.current) {
      if (menuStatus) {
        dropdownRef.current.classList.add("reveal-dropdown");
      } else {
        dropdownRef.current.classList.remove("reveal-dropdown");
      }
    }
  }, [menuStatus]);

  return (
    <div className="w-full">
      <div
        id="menu"
        className="absolute right-8 top-9 cursor-pointer text-right w-fit lg:hidden "
        onClick={() => toggleMenuStatus(!menuStatus)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5rem"
          viewBox="0 0 320 400"
          className={
            "fill-zinc-100 relative top-[-1.35rem] md:top-[-0.85rem] " +
            (menuStatus ? "rotate-180 top-[-1rem] md:top-[-1.1rem]" : "")
          }
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
      </div>
      <div
        ref={dropdownRef}
        id="dropdown-menu"
        className="flex flex-col bg-zinc-700 w-full relative lg:hidden max-h-0 overflow-hidden transition-all duration-450 ease-in-out"
      >
        <Link
          href="/tours"
          className="px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
          onClick={() => {
            toggleMenuStatus(false);
          }}
        >
          All Tours
        </Link>
        <UserInfo mobile={true} toggleMenuStatus={toggleMenuStatus} />
        <div className="flex justify-center items-center py-4">
          <SearchForm mobile={true} />
        </div>
      </div>
    </div>
  );
}
