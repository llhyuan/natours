"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isLoggedin } from "@/utilities/isLoggedIn";

export interface LoginStatus {
  name: string;
  loginStatus: boolean;
  loginToken: string;
  photo: string;
}

const defaultUser: LoginStatus = {
  name: "Login",
  loginStatus: false,
  loginToken: "",
  photo: "default.jpg",
};

export default function UserInfo({ mobile }: { mobile: boolean }) {
  const [user, setCurrUser] = useState<LoginStatus>(defaultUser);

  useEffect(() => {
    let localInfo: string | null = localStorage.getItem("natoursLoggedinUser");
    if (localInfo) {
      const loggedinUser: LoginStatus | null = JSON.parse(localInfo);
      if (loggedinUser) {
        isLoggedin(loggedinUser.loginToken).then((res) => {
          if (res.status === "success" && res.data.isLogin) {
            setCurrUser(loggedinUser);
          }
        });
      }
    }
  }, [setCurrUser]);

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
              : "hidden ml-[4vw] lg:block"
          }
        >
          <Link
            href="/profile"
            className="flex justify-center items-center group"
          >
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
        </div>
      </>
    );
  }
}
