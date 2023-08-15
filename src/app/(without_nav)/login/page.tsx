"use client";
import Image from "next/image";
import logo from "../../../../public/favicon.png";
import img from "../../../../public/img/tours/tour-1-1.jpg";
import { Lato } from "next/font/google";
import Link from "next/link";
import { importCover } from "@/utilities/importImage";
import { useEffect, useState } from "react";
import ErrorBanner from "@/components/ErrorBanner";

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

export type LoginStatus = {
  error: boolean;
  message: string;
};
const inialStatus: LoginStatus = {
  error: false,
  message: "",
};

export default function Login() {
  const [randomBg, setRandomBg] = useState(img);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorStatus, setError] = useState(inialStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomBg(dynamicBackground());
    }, 1000 * 20);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError({ ...errorStatus, error: false });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [errorStatus]);
  return (
    <div
      className={
        latoSemiBold.className +
        " h-full flex text-zinc-700 relative overflow-hidden items-center"
      }
    >
      <div className="absolute top-0 overflow-hidden h-full w-full ">
        <Image
          src={randomBg}
          alt="login background"
          className="h-full object-cover"
        />
      </div>
      <div className="flex-1 min-h-full flex items-center px-4 z-50">
        <div className="w-full flex flex-col justify-center px-4 max-w-[26rem] lg:scale-125 mx-auto rounded-md bg-zinc-100 shadow-[0.5rem_1.5rem_4rem_rgba(0,0,0,0.4)]">
          <div className="mx-auto max-w-sm">
            <Image
              src={logo}
              alt="Natour Logo"
              width={70}
              className="mx-auto mt-4"
            />
            <h2 className="text-center text-[1.5rem] font-bold leading-9 tracking-tight text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
              Log into your account
            </h2>
          </div>

          <div className="mt-10 mx-auto w-full max-w-[20rem]">
            <form
              className="space-y-6"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const data = {
                  email: email,
                  password: password,
                };
                console.log(data);
                const result = await fetch(
                  `${process.env.NEXT_PUBLIC_API_HOST}/users/login`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  }
                );
                const response = await result.json();
                if (response.status === "success") {
                  localStorage.setItem("loginToken", response.data.token);
                } else {
                  setError({ error: true, message: response.message });
                  console.log(response.message);
                }
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-[1rem] font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    className={
                      "block w-full rounded-md border-0 px-2 py-1.5 shadow-sm outline-none ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 sm:text-sm sm:leading-6 " +
                      (email ? "invalid:ring-red-500" : "")
                    }
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text- font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-[0.9rem] ">
                    <Link href="#" className="text-zinc-400 hover:text-red-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    autoComplete="current-password"
                    required
                    className={
                      "block w-full rounded-md border-0 px-2 py-1.5 shadow-sm outline-none ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 sm:text-sm sm:leading-6 " +
                      (password ? "invalid:ring-red-500" : "")
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 px-3 py-3 my-12 text-[1.2rem] leading-6 text-zinc-100 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={
          latoBold.className +
          " hidden lg:flex flex-col flex-1 z-50 h-full justify-end items-end py-[16vh] pr-[10vw]"
        }
      >
        <p className="mb-[1vw] relative top-12 bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[5.8vw] uppercase">
          Adventure
        </p>
        <p className="bg-gradient-to-br text-transparent bg-clip-text from-[#7dd56f]/90 to-[#28b487] text-[6.5vw] uppercase">
          awaits.
        </p>
      </div>
      <ErrorBanner
        reveal={errorStatus.error}
        errMessage={errorStatus.message}
      />
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
