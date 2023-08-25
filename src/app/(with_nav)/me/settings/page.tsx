"use client";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import ChangePassword from "@/components/ChangePassword";
import ChangeUserInfo from "@/components/ChangeUserInfo";
import { importCover } from "@/utilities/importImage";
import { useContext, useEffect } from "react";

export default function Settings() {
  const { loginStatus } = useContext(loginStatusContext);
  const fileName = loginStatus.photo;

  const importedPhoto = importCover(
    `users/${loginStatus.photo ? loginStatus.photo : "default.jpg"}`
  );

  return (
    <div className="">
      <ChangeUserInfo
        name={loginStatus.name}
        email={loginStatus.email}
        photo={importedPhoto}
        fileName={fileName}
      />
      <div
        aria-hidden={true}
        className="border-gray-300 border-t-[1px] border-solid "
      ></div>
      <ChangePassword />
    </div>
  );
}
