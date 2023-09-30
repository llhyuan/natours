"use client";
import Image from "next/image";
import logo from "../../public/favicon.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { notificationContext } from "@/app/NotificationContextProvier";
import { Lato } from "next/font/google";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [matchingPasswords, setMatchingStatus] = useState(true);
  const { setNotificationStatus } = useContext(notificationContext);
  const router = useRouter();

  return (
    <div className="px-4 py-10 h-fit min-w-[23rem] flex flex-col rounded-sm bg-zinc-100 shadow-[0.5rem_1.5rem_4rem_rgba(0,0,0,0.4)] ">
      <div className="mx-auto max-w-sm">
        <Link href="/">
          <Image src={logo} alt="Natour Logo" width={70} className="mx-auto" />
        </Link>
        <h2 className="text-center text-[1.5rem] font-bold capitalize leading-9 tracking-tight text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 mx-auto w-[90%] max-w-[30rem]">
        <form
          className="space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            if (password !== passwordConfirm) {
              setMatchingStatus(false);
              setNotificationStatus({
                reveal: true,
                message: "Opps! There is a typo.",
                category: "error",
              });
              return;
            }

            if (password && passwordConfirm) {
              const reqBody = {
                name,
                email,
                password,
                passwordConfirm,
              };
              const result = await fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reqBody),
              });
              const response = await result.json();
              if (response.status === "success") {
                // localStorage.setItem(
                //   "natoursLoggedinUser",
                //   JSON.stringify(response.data)
                // );

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
            }
          }}
        >
          <div>
            <label
              htmlFor="name"
              className={
                latoSemiBold.className +
                " block text-[1rem] font-medium leading-6"
              }
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                className={
                  "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
                  (name ? "invalid:ring-red-500" : "")
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className={
                latoSemiBold.className +
                " block text-[1rem] font-medium leading-6"
              }
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
            <label
              htmlFor="password"
              className={
                latoSemiBold.className +
                " block text-[1rem] font-medium leading-6"
              }
            >
              Password
            </label>

            <div className="mt-2">
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setMatchingStatus(true);
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
          <div>
            <label
              htmlFor="passwordConfirm"
              className={
                latoSemiBold.className +
                " block text-[1rem] font-medium leading-6"
              }
            >
              Confirm Your Password
            </label>

            <div className="mt-2">
              <input
                name="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                  setMatchingStatus(true);
                }}
                autoComplete="current-password"
                required
                className={
                  (matchingPasswords ? "ring-0 " : "ring-2 ring-red-500 ") +
                  "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] " +
                  (passwordConfirm
                    ? "invalid:ring-red-500 invalid:ring-2 "
                    : "")
                }
              />
            </div>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-zinc-500 text-[0.9rem]">
              By clicking the &ldquo;Create An Account&rdquo; button, You agree
              to Natours&apos;{" "}
              <a
                href="#"
                className="hover:text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="hover:text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <button
              type="submit"
              className={
                latoSemiBold.className +
                " flex w-full justify-center rounded-md bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 px-3 py-4 m0 text-[1.2rem] leading-6 text-zinc-100 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              }
            >
              CREATE AN ACCOUNT
            </button>
          </div>
          <p className="text-center text-zinc-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className={
                latoSemiBold.className +
                " ml-2 text-zinc-700 hover:text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90"
              }
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
