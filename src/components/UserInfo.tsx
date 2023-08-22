"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { LoginStatus } from "@Global/custom-types";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import { revalidateTag } from "next/cache";

const defaultUser: LoginStatus = {
  name: "Login",
  loginStatus: false,
  loginToken: "",
  photo: "default.jpg",
};

export default function UserInfo({ mobile }: { mobile: boolean }) {
  const { isLogin, setLoginStatus } = useContext(loginStatusContext);
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    if (isLogin) {
      let localInfo: string | null = localStorage.getItem(
        "natoursLoggedinUser"
      );
      if (localInfo) {
        const loggedinUser: LoginStatus | null = JSON.parse(localInfo);
        if (loggedinUser) {
          setUser(loggedinUser);
        }
      }
    }
  }, [isLogin]);

  if (!user.loginStatus) {
    return (
      <>
        <Link
          href="/login"
          className={
            mobile
              ? "px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block"
          }
        >
          Sign In
        </Link>
        <Link
          href="/"
          className={
            mobile
              ? "px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block ml-[4vw]"
          }
        >
          Sign Up
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link
          href="/"
          className={
            mobile
              ? "lg:hidden px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block"
          }
        >
          MY BOOKINGS
        </Link>
        <div
          id="user"
          className={
            mobile
              ? "group lg:hidden px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden ml-[2vw] lg:flex items-center"
          }
        >
          <Link href="/me" className="flex justify-center items-center group">
            <Image
              src={`/img/users/${user.photo}`}
              alt="user photo"
              width={50}
              height={50}
              className={
                "rounded-[50%] " +
                (mobile
                  ? "group-hover:border-zinc-500 group-hover:border-[2px]"
                  : "")
              }
            />
            <p className="px-4">{user.name}</p>
          </Link>
          <Link
            href="/api/logout"
            className={
              mobile
                ? "block lg:hidden pt-5 text-center hover:underline underline-offset-2 hover:cursor-pointer"
                : "hidden ml-[1vw] lg:block"
            }
            onClick={async (e) => {
              e.preventDefault();
              const result = await fetch("/api/logout", {
                method: "GET",
              });
              const response = await result.json();
              if (response.status === "success") {
                localStorage.removeItem("natoursLoggedinUser");
                setLoginStatus(false);
                setUser(defaultUser);
                return;
              }
            }}
          >
            Log Out
          </Link>
        </div>
      </>
    );
  }
}
