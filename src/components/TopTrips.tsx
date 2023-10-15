"use client";
import InfoCard from "@/components/InfoCard";
import { Tour } from "@Global/custom-types";
import { Lato } from "next/font/google";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function TopTrips({ tours }: { tours: Array<Tour> }) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="relative">
      <h2 className={latoBold.className + " text-2xl md:text-3xl text-center"}>
        Top Trips for 2024
      </h2>
      <div
        ref={containerRef}
        className="no-scrollbar flex relative w-[100vw] p-6 overflow-scroll bg-transparent snap-x-mandatory"
      >
        {tours.map((tour: any, index: number) => {
          return (
            <div
              key={index}
              id={`carousel-${index}`}
              className="min-w-[350px] scale-[0.85] mx-4 hover:scale-[0.9] transition-all duration-80 ease-in-out"
            >
              <InfoCard tour={tour as Tour} />
            </div>
          );
        })}
      </div>
      <div aria-hidden className="w-full relative my-6">
        <div className="mx-auto w-[68vw] bg-zinc-300 h-2"></div>

        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="absolute left-[16vw] top-0 origin-left w-[68vw] bg-zinc-500 h-2"
        />
      </div>
    </div>
  );
}
