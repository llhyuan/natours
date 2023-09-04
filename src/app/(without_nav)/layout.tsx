"use client";
import "../globals.css";
import Image from "next/image";
import img from "../../../public/img/tours/tour-4-cover.jpg";
import { Lato } from "next/font/google";
import { importCover } from "@/utilities/importImage";
import { ReactNode, useEffect, useState } from "react";
import Notification from "@/components/ErrorMessage";

const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function NoNavbarLayout({ children }: { children: ReactNode }) {
  const [randomBg, setRandomBg] = useState(img);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomBg(dynamicBackground());
    }, 1000 * 20);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={latoSemiBold.className + " text-zinc-700  overflow-hidden"}>
      <div className="absolute top-0 overflow-hidden h-screen z-0">
        <Image
          src={randomBg}
          alt="login background"
          className="h-[100vh] object-cover"
        />
      </div>
      <Notification position="no-nav" />
      <div className="relative z-20 flex h-screen">{children}</div>
    </div>
  );
}

function dynamicBackground() {
  const picSuffix = ["1", "2", "3", "cover"];
  const randomTour = String(Math.ceil((Math.random() * 90) / 10));
  const randomPic = Math.floor((Math.random() * 400) / 100);
  const bgURL = `tours/tour-${randomTour}-${picSuffix[randomPic]}.jpg`;

  return importCover(bgURL);
}
