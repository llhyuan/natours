"use client";
import Image from "next/image";
import img from "../../../../public/img/tours/tour-1-1.jpg";
import { Lato } from "next/font/google";
import { importCover } from "@/utilities/importImage";
import { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";

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

export default function Login() {
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
    <div className={latoSemiBold.className + " text-zinc-700 "}>
      <div className="absolute top-0 overflow-hidden h-screen z-0">
        <Image
          src={randomBg}
          alt="login background"
          className="h-[100vh] object-cover"
        />
      </div>
      <div className="relative z-20 flex h-screen">
        <div className="flex items-center w-full justify-center">
          <LoginForm />
        </div>
        <div
          className={
            latoBold.className + " hidden lg:block flex-1 pr-[10vw] relative"
          }
        >
          <p className="relative top-[50vh] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[5.8vw] uppercase">
            Adventure
          </p>
          <p className="relative top-[50vh] right-[-12vw] bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[6.5vw] uppercase">
            awaits.
          </p>
        </div>
      </div>
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
