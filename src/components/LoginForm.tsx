"use client";
import Image from "next/image";
import logo from "../../public/favicon.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { notificationContext } from "@/app/NotificationContextProvier";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { setNotificationStatus } = useContext(notificationContext);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center px-4 w-[90%] min-w-[20rem] max-w-[26rem] lg:scale-125 rounded-sm bg-zinc-100 shadow-[0.5rem_1.5rem_4rem_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-sm">
        <Link href="/">
          <Image
            src={logo}
            alt="Natour Logo"
            width={70}
            className="mx-auto mt-4"
          />
        </Link>
        <h2 className="text-center text-[1.5rem] font-bold capitalize leading-9 tracking-tight text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
          Log into your account
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-[20rem]">
        <form
          className="space-y-6"
          method="POST"
          action="/api/login"
          onSubmit={async (e) => {
            e.preventDefault();
            const data = {
              email: email,
              password: password,
            };
            const result = await fetch("/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const response = await result.json();
            if (response.status === "success") {
              localStorage.setItem(
                "natoursLoggedinUser",
                JSON.stringify(response.data)
              );

              setNotificationStatus({
                reveal: true,
                message: response.message,
                category: "notification",
              });
              router.replace("/tours");
            } else {
              setNotificationStatus({
                reveal: true,
                message: response.message,
                category: "error",
              });
            }
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-[1rem] font-medium leading-6"
            >
              Email
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
                  "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
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
                <Link
                  href="/me/forget-password"
                  className="text-zinc-400 hover:text-red-500"
                >
                  Forget your password?
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
                  "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
                  (password ? "invalid:ring-red-500" : "")
                }
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="mr-2 text-zinc-500">
              New to Natours?
              <Link
                href="/signup"
                className={
                  latoBold.className +
                  " ml-2 text-zinc-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#7dd56f]/80 hover:to-[#28b487]/90"
                }
              >
                Sign Up
              </Link>
            </p>
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
  );
}
