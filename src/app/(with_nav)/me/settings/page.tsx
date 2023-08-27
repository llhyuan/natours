"use client";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";
import ChangePassword from "@/components/ChangePassword";
import ChangeUserInfo from "@/components/ChangeUserInfo";
import { importCover } from "@/utilities/importImage";
import { useContext } from "react";

export default function Settings() {
  const { loginStatus } = useContext(loginStatusContext);
  let importedPhoto: string = loginStatus.photo;

  if (!importedPhoto.startsWith("http")) {
    importedPhoto = importCover(
      `users/${loginStatus.photo ? loginStatus.photo : "default.jpg"}`
    );
  }

  return (
    <div className="">
      <ChangeUserInfo
        name={loginStatus.name}
        email={loginStatus.email}
        photo={importedPhoto}
      />
      <div
        aria-hidden={true}
        className="border-gray-300 border-t-[1px] border-solid "
      ></div>
      <ChangePassword />
    </div>
  );
}
