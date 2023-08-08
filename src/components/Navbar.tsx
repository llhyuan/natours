import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";
import logo from "../../public/img/logo-white.png";

export default function Navbar() {
  return (
    <div id="navbar" className="bg-zinc-700 text-white text-xl px-8 py-6">
      <div className="flex justify-center items-center">
        <div className="flex-1 flex">
          <Link href="/" className="hidden mr-[4vw] lg:block">
            ALL TOURS
          </Link>
          <div id="search-container" className="w-48">
            <SearchForm mobile={false} />
          </div>
        </div>

        <Image
          src={logo}
          alt="Website Logo"
          width={90}
          height={90}
          className="mx-auto"
        ></Image>
        <div className="flex-1 flex justify-end">
          <Link href="/" className="hidden lg:block">
            MY BOOKINGS
          </Link>
          <div id="user" className="hidden ml-[4vw] lg:block">
            USER
          </div>
        </div>
      </div>
      <Dropdown />
    </div>
  );
}
