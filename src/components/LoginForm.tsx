"use client";
import Image from "next/image";
import logo from "../../public/favicon.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { errMsgContext } from "@/app/ErrorMsgContextProvier";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { setErrMsgStatus } = useContext(errMsgContext);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center px-4 w-[90%] min-w-[20rem] max-w-[26rem] lg:scale-125 rounded-md bg-zinc-100 shadow-[0.5rem_1.5rem_4rem_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-sm">
        <Image
          src={logo}
          alt="Natour Logo"
          width={70}
          className="mx-auto mt-4"
        />
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
              // setLoginStatus({
              //   name: response.data.name,
              //   email: email,
              //   loginStatus: true,
              //   photo: response.data.photo,
              // });
              router.replace("/");
            } else {
              setErrMsgStatus({ error: true, errMessage: response.message });
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
  );
}
