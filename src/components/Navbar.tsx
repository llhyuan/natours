import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";
import logo from "../../public/img/logo-white.png";
import UserInfo from "./UserInfo";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="bg-zinc-700 text-white text-[1.1rem] px-8 py-[0.7rem]"
    >
      <div className="flex items-center md:justify-center">
        <div className="hidden md:flex flex-1 items-center">
          <Link
            href="/tours"
            className="mr-[4vw] hidden lg:block px-2 py-1 rounded-sm hover:bg-zinc-100 hover:text-zinc-700 transition-all duration-80 ease-in"
          >
            All Tours
          </Link>
          <div id="search-container" className="w-48 flex items-center">
            <SearchForm mobile={false} />
          </div>
        </div>

        <Image
          src={logo}
          alt="Website Logo"
          width={90}
          className="w-[3.5rem] md:mx-auto"
        ></Image>
        <div className="md:flex flex-1 justify-end">
          <UserInfo mobile={false} />
        </div>
      </div>
      <Dropdown />
    </div>
  );
}
