"use client";
import Image, { StaticImageData } from "next/image";
import { Lato } from "next/font/google";
import { useContext, useState } from "react";
import { notificationContext } from "@/app/NotificationContextProvier";
import { loginStatusContext } from "@/app/LoginStatusContextProvider";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function ChangeUserInfo({
  name,
  email,
  photo,
}: {
  name: string;
  email: string;
  photo: StaticImageData | string;
}) {
  const [userInfo, setUserInfo] = useState({
    name,
    email,
  });
  const [file, setFile] = useState<File>();
  const [uploadData, setUploadData] = useState<string>();
  const { setNotificationStatus } = useContext(notificationContext);
  const { setLoginStatus } = useContext(loginStatusContext);

  if (file) {
    photo = URL.createObjectURL(file);
  }

  return (
    <div className="pb-10 max-w-[400px] max-md:mx-auto md:max-w-[600px] md:pl-6">
      <form
        action="/api/update-profile"
        method="POST"
        encType="multipart/form-data"
        className="text-[1rem] sm:text-[1.1rem] text-zinc-600 flex flex-col pb-6"
        onSubmit={async (e) => {
          e.preventDefault();
          const reqBody = {
            name: userInfo.name,
            email: userInfo.email,
            file: "",
          };
          if (uploadData) {
            reqBody.file = uploadData;
          }

          const response = await fetch("/api/update-profile", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(reqBody),
          });

          const result = await response.json();

          if (result.status !== "success") {
            setNotificationStatus({
              reveal: true,
              message: result.message,
              category: "error",
            });
          } else {
            setNotificationStatus({
              reveal: true,
              message: result.message,
              category: "notification",
            });
            setLoginStatus({
              name: userInfo.name,
              email: userInfo.email,
              photo: result.url,
              loginStatus: true,
            });
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
        <div className="mb-4">
          <label htmlFor="name" className={latoBold.className + " block my-2"}>
            Photo
          </label>
          <div className="flex items-center">
            <Image
              src={photo}
              alt="profile photo"
              width={96}
              height={96}
              className="rounded-full w-[6rem] mr-4"
            />
            <div className="w-full">
              <input
                type="file"
                accept="image/png,image/jpg,image/jpeg"
                multiple={false}
                id="file"
                name="file"
                className={
                  "block rounded-sm border-0 px-4 py-6 w-full shadow-sm outline-none ring-0 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#28b487] "
                }
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadstart = () => {
                      setUploadData("uploading");
                    };
                    reader.onloadend = () => {
                      setUploadData(reader.result as string);
                    };
                  }
                  setFile(e.target.files?.[0]);
                }}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={uploadData === "uploading" ? true : false}
          className="w-fit py-3 px-6 ml-auto mt-8 uppercase bg-green-500 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
        >
          {uploadData === "uploading" ? "Loading image" : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
