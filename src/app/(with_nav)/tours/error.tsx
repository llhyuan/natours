"use client";
import Image from "next/image";
import { Lato } from "next/font/google";
import bgImg from "../../../../public/img/404.jpg";
import Link from "next/link";

const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const latoBold = Lato({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function Login() {
  return (
    <div
      className={latoSemiBold.className + " flex text-zinc-200 min-w-[300px]"}
    >
      <div className="flex-1 overflow-hidden h-screen z-0 min-w-[300px]">
        <Image
          src={bgImg}
          alt="login background"
          className="h-[100vh] object-cover"
        />
      </div>
      <div className="relative z-20 flex items-center justify-center h-screen p-2">
        <div
          className={
            lato.className + " w-full pb-[22rem] tracking-wider text-center"
          }
        >
          <p
            className={
              latoSemiBold.className + " text-[2rem] my-4 lg:text-[2.5rem]"
            }
          >
            404
          </p>
          <p
            className={latoBold.className + " text-[3rem] my-4 lg:text-[4rem]"}
          >
            Page Not Found
          </p>
          <p className="text-[1.2rem] lg:text-[1.6rem] my-4 text-zinc-300">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <p
            className={
              latoSemiBold.className + " group text-[1.3rem] lg:text-[1.8rem]"
            }
          >
            <Link href="/tours">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2rem"
                viewBox="0 0 448 512"
                className="inline mr-2 fill-zinc-200 relative bottom-[2px] group-hover:translate-x-[-8px] group-hover:scale-110 lg:mr-4 lg:scale-125 lg:group-hover:scale-[1.4] transition-all duration-150 ease-in"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
