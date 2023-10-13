"use client";
import LandingPageSearch from "./LandingPageSearch";
import { Lato } from "next/font/google";
import { useEffect, useLayoutEffect, useRef } from "react";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function HeroBanner() {
  const heroScrionRef = useRef<HTMLDivElement>(null);
  const searchbarRef = useRef<HTMLDivElement>(null);
  const sloganref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      let dynamicHeight = window.innerHeight - window.scrollY - 51;

      if (dynamicHeight >= 400) {
        if (heroScrionRef.current) {
          heroScrionRef.current.style.height = `${dynamicHeight}px`;
          heroScrionRef.current.style.marginTop = `${window.scrollY}px`;
        }
      }

      if (sloganref.current) {
        const sloganWidth = sloganref.current.offsetWidth;
        let dynamicPositionLeft =
          window.innerWidth * 0.06 -
          (sloganWidth + window.innerWidth * 0.06) * (window.scrollY / 350);
        if (dynamicPositionLeft >= -(sloganWidth + window.innerWidth * 0.06)) {
          sloganref.current.style.left = `${dynamicPositionLeft}px`;
        }
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroScrionRef}
      className="relative h-[calc(100vh-51px)] overflow-hidden"
    >
      <div className="relative overflow-hidden h-full">
        <video
          src="https://res.cloudinary.com/dafo4jbuk/video/upload/q_50/v1693042860/homepage_skrkmx.mp4"
          poster="https://res.cloudinary.com/dafo4jbuk/image/upload/q_33/v1694406680/Natours/tours/natour_poster_uuhohw.png"
          loop
          autoPlay
          muted
          className="absolute bottom-0 block object-cover h-full w-full"
          playsInline={true}
        ></video>
      </div>
      <div className="absolute bottom-0 w-full h-full bg-[rgba(0,0,0,0.05)] flex flex-col items-center">
        <div
          ref={searchbarRef}
          className="absolute top-[8rem] text-zinc-100 text-[1.25rem]"
        >
          <LandingPageSearch />
        </div>
        <div
          ref={sloganref}
          className={
            latoBold.className +
            " text-zinc-300 text-[3rem] sm:text-[4rem] md:text-[5.5rem] md:leading-[5rem] capitalize absolute left-[6vw] bottom-[5rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]"
          }
        >
          <p className="text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
            Adventure
          </p>
          <p className="text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/70 to-[#28b487]/80">
            Awaits.
          </p>
        </div>
        <div className="absolute bottom-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="fill-zinc-200 rotate-90 mx-auto text-[1.3rem] animate-pulse"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
