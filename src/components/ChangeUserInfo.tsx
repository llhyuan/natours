"use client";
import { Lato } from "next/font/google";
import { useContext, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { errMsgContext } from "@/app/ErrorMsgContextProvier";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function ChangeUserInfo({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const [userInfo, setUserInfo] = useState({ name, email });
  const { setErrMsgStatus } = useContext(errMsgContext);

  return (
    <div className="pb-10 max-w-[400px] mx-auto md:max-w-[600px] md:pl-6">
      <form
        action=""
        className="text-[1rem] sm:text-[1.1rem] text-zinc-600 flex flex-col pb-6"
        onSubmit={async (e) => {
          e.preventDefault();
          if (userInfo.email || userInfo.name) {
            let reqBody: { email?: string; name?: string } = {};
            if (userInfo.name) {
              reqBody.name = userInfo.name;
            }
            if (userInfo.email) {
              reqBody.email = userInfo.email;
            }
            const response = await fetch("/api/update-profile", {
              method: "POST",
              credentials: "include",
              body: JSON.stringify(reqBody),
            });

            const result = await response.json();

            if (result.status !== "success") {
              setErrMsgStatus({ error: true, errMessage: result.message });
            }
          }
        }}
      >
        <h1
          className={
            latoBold.className +
            " text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
          }
        >
          Account Settings
        </h1>
        <div className="mb-4">
          <label htmlFor="name" className={latoBold.className + " block my-2"}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={userInfo.name}
            className={
              "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
              (name ? "invalid:ring-red-500 invalid:ring-2" : "")
            }
            onChange={(e) => {
              setUserInfo({ ...userInfo, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={latoBold.className + " block my-2 capitalize"}
          >
            email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInfo.email}
            className={
              "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
              (email ? "invalid:ring-red-500 invalid:ring-2" : "")
            }
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="w-fit py-3 px-6 ml-auto mt-8 uppercase bg-green-500 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
