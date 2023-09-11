"use client";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useContext, useEffect, Dispatch } from "react";
import { LoginStatus } from "@Global/custom-types";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { sidebarContext } from "@/app/(with_nav)/SidebarContextProvider";
const defaultUser: LoginStatus = {
  name: "Login",
  loginStatus: false,
  email: "your@email.com",
  photo: "default.jpg",
};

export default function UserInfo({
  mobile,
  toggleMenuStatus,
}: {
  mobile: boolean;
  toggleMenuStatus?: Dispatch<SetStateAction<boolean>>;
}) {
  const { loginStatus, setLoginStatus } = useContext(loginStatusContext);
  const { setActiveSection } = useContext(sidebarContext);
  const router = useRouter();
  const path = usePathname();

  let importedPhoto: string = loginStatus.photo;

  if (!importedPhoto.startsWith("http")) {
    importedPhoto = `/public/img/users/${importedPhoto}`;
  }

  useEffect(() => {
    fetch("/api/userinfo", {
      method: "GET",
      credentials: "include",
      next: { tags: ["userinfo"] },
    }).then((response) => {
      response.json().then((result) => {
        if (result.status === "success") {
          setLoginStatus({ ...result.user, loginStatus: true });
        } else {
          setLoginStatus({ ...defaultUser, loginStatus: false });

          if (path.startsWith("/me") && !path.includes("forget-password")) {
            router.replace("/");
          }
        }
      });
    });
  }, [setLoginStatus, path, router]);

  if (!loginStatus.loginStatus) {
    return (
      <div className="lg:flex">
        <Link
          href="/login"
          className={
            mobile
              ? "block px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block"
          }
        >
          Login
        </Link>
        <Link
          href="/signup"
          className={
            mobile
              ? "block px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block ml-[3vw]"
          }
        >
          Sign Up
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="lg:flex items-center"
        onClick={() => {
          if (mobile && toggleMenuStatus) {
            toggleMenuStatus(false);
          }
        }}
      >
        <Link
          href="/me/bookings"
          className={
            mobile
              ? "block lg:hidden px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden lg:block"
          }
          onClick={() => {
            setActiveSection("bookings");
          }}
        >
          My Booking
        </Link>
        <div
          id="user"
          className={
            mobile
              ? "group lg:hidden px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "hidden ml-[2vw] lg:flex items-center"
          }
        >
          <Link
            href="/me/settings"
            className="flex justify-center items-center group"
            onClick={() => {
              setActiveSection("");
            }}
          >
            <Image
              src={importedPhoto}
              alt="user photo"
              quality={30}
              width={50}
              height={50}
              className={
                "rounded-[50%] " +
                (mobile
                  ? "group-hover:border-zinc-500 group-hover:border-[2px]"
                  : "")
              }
            />
            <p className="px-4">{loginStatus.name}</p>
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
                //localStorage.removeItem("natoursLoggedinUser");
                setLoginStatus({ ...loginStatus, loginStatus: false });
                router.replace("/");
              }
            }}
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}
