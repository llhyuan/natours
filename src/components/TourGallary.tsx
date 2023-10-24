"use client";
import Image from "next/image";
import { importCover } from "@/utilities/importImage";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function TourGallary({
  imageUrls,
}: {
  imageUrls: Array<string>;
}) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollXProgress } = useScroll({ container: containerRef });
  return (
    <div
      ref={containerRef}
      className="h-[70vw] max-h-[850px] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-[70px] absolute bottom-6 left-6"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          className="fill-transparent stroke-[rgba(0,0,0,0.5)] stroke-[10px]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="fill-transparent stroke-[10px] stroke-zinc-100"
          pathLength={scrollXProgress}
        />
      </svg>
      {imageUrls.map((imgurl, index) => {
        const img = importCover(`tours/${imgurl}`);
        return (
          <Image
            src={img}
            alt={`tour image ${index + 1}`}
            key={index}
            placeholder="blur"
          />
        );
      })}
    </div>
  );
}
