"use client";
import LandingPageSearch from "./LandingPageSearch";
import { latoBold } from "@/app/fonts";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect } from "react";

export default function HeroBanner() {
  const { scrollY } = useScroll();
  const x = useMotionValue(0);

  useEffect(() => {
    const unsubscribeScrollY = scrollY.on("change", () => {
      x.set(scrollY.get() * -1.3);
    });
    return () => {
      unsubscribeScrollY();
    };
  }, [scrollY, x]);

  return (
    <section className="relative h-[calc(100vh-51px)] ">
      <div className="absolute top-0 overflow-hidden h-full w-full">
        <video
          src="https://res.cloudinary.com/dafo4jbuk/video/upload/q_50/v1693042860/homepage_skrkmx.mp4"
          poster="https://res.cloudinary.com/dafo4jbuk/image/upload/q_33/v1694406680/Natours/tours/natour_poster_uuhohw.png"
          loop
          autoPlay
          muted
          className="block object-cover h-full w-full"
          playsInline={true}
        ></video>
      </div>
      <div className="relative w-full h-full bg-[rgba(0,0,0,0.05)] flex flex-col items-center">
        <div className="sticky top-[12rem] text-zinc-100 text-[1.25rem]">
          <LandingPageSearch />
        </div>

        <div className="absolute left-0 bottom-[5rem] w-full overflow-hidden">
          <motion.div
            style={{
              x,
            }}
            className={
              latoBold.className +
              " text-zinc-300 text-[3rem] sm:text-[4rem] md:text-[5.5rem] md:leading-[5rem] capitalize text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]"
            }
          >
            <p className="pl-[8vw] lg:mb-6 text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
              Adventure
            </p>
            <p className="pl-[8vw] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/70 to-[#28b487]/80">
              Awaits.
            </p>
          </motion.div>
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
