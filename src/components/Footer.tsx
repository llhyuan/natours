import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo-green.png";

export default function Footer() {
  return (
    <div className="text-l lg:flex lg:items-center text-zinc-500 mx-10">
      <div className="lg:flex-1 ">
        <Image
          src={logo}
          alt="footer logo"
          width={200}
          height={200}
          className="mx-auto my-8 lg:ml-4"
        />
      </div>
      <div className="lg:flex-1">
        <div
          id="links"
          className="flex flex-col lg:flex-row justify-center items-center lg:justify-end"
        >
          <Link href="/" className="p-1 hover:text-green-400 px-[1vw]">
            About
          </Link>
          <Link href="/" className="p-1 hover:text-green-400 px-[1vw]">
            Download Apps
          </Link>
          <Link href="/" className="p-1 hover:text-green-400 px-[1vw]">
            Become a guide
          </Link>
          <Link href="/" className="p-1 hover:text-green-400 px-[1vw]">
            Careers
          </Link>
          <Link href="/" className="p-1 hover:text-green-400 px-[1vw]">
            Contact
          </Link>
        </div>
        <div
          id="copyright"
          className="w-fit mx-auto lg:mr-0 lg:mt-2 p-1 text-zinc-400"
        >
          &#9400; by Hangyuan Liu. All rights reserved.
        </div>
      </div>
    </div>
  );
}
