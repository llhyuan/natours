"use client";
import Link from "next/link";
import Image from "next/image";
import { SetStateAction, useContext, useEffect, Dispatch } from "react";
import { LoginStatus } from "@Global/custom-types";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { sidebarContext } from "@/app/(with_nav)/SidebarContextProvider";
import { notificationContext } from "@/app/NotificationContextProvier";
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
  const { setNotificationStatus } = useContext(notificationContext);

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
            setNotificationStatus({
              reveal: true,
              message: "Please login to gain access.",
              category: "notification",
            });
            router.replace("/");
          }
        }
      });
    });
  }, [setLoginStatus, path, router, setNotificationStatus]);

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
          Signup
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
          My Bookings
        </Link>
        <div
          id="user"
          className={
            mobile
              ? "group lg:hidden px-8 py-4 text-center hover:bg-zinc-300 hover:text-zinc-900"
              : "group/user hidden ml-[2vw] lg:flex items-center"
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
            <p className={"px-4 " + (mobile ? "" : " hidden")}>
              {loginStatus.name}
            </p>
          </Link>
          <Link
            href="/api/logout"
            className={
              mobile
                ? "block lg:hidden pt-5 text-center hover:underline underline-offset-2 hover:cursor-pointer"
                : "block w-0 overflow-clip group-hover/user:ml-[2vw] group-hover/user:w-[3.8rem] transition-all ease-in-out duration-300"
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
            <span
              className={
                mobile
                  ? ""
                  : "block w-[3.8rem] opacity-0 group-hover/user:opacity-100 transition-opacity ease-in-out duration-300"
              }
            >
              Log Out
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
