"use client";
import "../globals.css";
import Image from "next/image";
import { latoSemiBold } from "../fonts";
import { ReactNode, useEffect, useState } from "react";
import Notification from "@/components/ErrorMessage";

export default function NoNavbarLayout({ children }: { children: ReactNode }) {
  const [randomBg, setRandomBg] = useState("/img/tours/tour-4-cover.jpg");

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
      <div className="absolute top-0 overflow-hidden min-h-screen z-0">
        <Image
          src={randomBg}
          width={7000}
          height={1500}
          alt="login background"
          className="h-[100vh] object-cover"
        />
      </div>
      <Notification position="no-nav" />
      <div className="relative z-20 flex h-screen overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

function dynamicBackground() {
  const picSuffix = ["1", "2", "3", "cover"];
  const randomTour = String(Math.ceil((Math.random() * 90) / 10));
  const randomPic = Math.floor((Math.random() * 400) / 100);
  const bgURL = `/img/tours/tour-${randomTour}-${picSuffix[randomPic]}.jpg`;

  return bgURL;
}
