import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import SearchForm from "./SearchForm";
import logo from "../../public/img/logo-white.png";
import UserInfo from "./UserInfo";

export default function Navbar() {
  return (
    <div id="navbar" className="bg-zinc-700 text-white text-xl px-8 py-6">
      <div className="flex items-center md:justify-center">
        <div className="hidden md:flex flex-1 items-center">
          <Link href="/tours" className="mr-[4vw] hidden lg:block">
            ALL TOURS
          </Link>
          <div id="search-container" className="w-48 flex items-center">
            <SearchForm mobile={false} />
          </div>
        </div>

        <Image
          src={logo}
          alt="Website Logo"
          width={90}
          className="md:mx-auto"
        ></Image>
        <div className="hidde md:flex flex-1 justify-end items-center">
          <UserInfo mobile={false} />
        </div>
      </div>
      <Dropdown />
    </div>
  );
}
