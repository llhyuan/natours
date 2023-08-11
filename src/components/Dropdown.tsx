"use client";

import Link from "next/link";
import { useState } from "react";
import SearchForm from "./SearchForm";
import User from "./User";

export default function Dropdown() {
  const [menuStatus, toggleMenuStatus] = useState(false);

  return (
    <div className="w-full">
      <div
        id="menu"
        className="absolute right-8 top-9 cursor-pointer text-right w-fit lg:hidden"
        onClick={() => toggleMenuStatus(!menuStatus)}
      >
        Dropdown
      </div>
      <div
        id="dropdown-menu"
        className={
          (menuStatus ? "" : "hidden ") +
          "flex flex-col bg-zinc-700 w-full relative pt-8 lg:hidden"
        }
      >
        <Link
          href="/"
          className="px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
        >
          ALL TOURS
        </Link>
        <Link
          href="/"
          className="px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
        >
          BOOKINGS
        </Link>
        <div className="px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900">
          <User />
        </div>
        <div className="flex justify-center items-center py-4">
          <SearchForm mobile={true} />
        </div>
      </div>
    </div>
  );
}
