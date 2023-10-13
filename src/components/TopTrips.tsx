"use client";
import InfoCard from "@/components/InfoCard";
import { Tour } from "@Global/custom-types";
import { Lato } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function TopTrips({ tours }: { tours: Array<Tour> }) {
  const topTripsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: topTripsRef.current,
        scrub: true,
        pin: true,
        start: "top 100px",
      },
    });
    const viewportWidth = window.innerWidth;
    const topTripsWidth = 2200;

    tl.fromTo(
      topTripsRef.current,
      { x: 0 },
      { x: -(topTripsWidth - viewportWidth) },
    );
  });
  return (
    <div>
      <h2 className={latoBold.className + " text-2xl md:text-3xl text-center"}>
        Top trips for 2024
      </h2>
      <div className="w-[100vw] overflow-scroll s bg-transparent snap-mandatory">
        <div
          ref={topTripsRef}
          className="flex justify-around py-8 w-[2200px] lg:px-[15vw]"
        >
          {tours.map((tour: any, index: number) => {
            return (
              <div
                key={index}
                id={`carousel-${index}`}
                className="scale-[0.85] hover:scale-[0.9] transition-all duration-80 ease-in-out"
              >
                <InfoCard tour={tour as Tour} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
