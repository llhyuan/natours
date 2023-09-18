"use client";
import { useState, useContext } from "react";
import { notificationContext } from "@/app/NotificationContextProvier";
import { useRouter } from "next/navigation";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function NewPassword({
  params,
}: {
  params: { resetToken: string };
}) {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [matchingPasswords, setMatchingStatus] = useState(true);
  const { setNotificationStatus } = useContext(notificationContext);
  const router = useRouter();

  return (
    <div className="py-10 max-w-[400px] max-md:mx-auto md:max-w-[600px] md:pl-6">
      <form
        className="text-[1rem] sm:text-[1.1rem] text-zinc-600 flex flex-col"
        onSubmit={async (e) => {
          e.preventDefault();
          if (newPassword !== newPasswordConfirm) {
            setMatchingStatus(false);
            setNotificationStatus({
              reveal: true,
              message: "The two passwords do not match.",
              category: "warning",
            });
            return;
          }

          const reqBody = {
            newPassword,
            newPasswordConfirm,
            resetToken: params.resetToken,
          };
          const response = await fetch("/api/reset-password", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(reqBody),
          });

          const result = await response.json();
          setNotificationStatus({
            reveal: true,
            message: result.message,
            category: "notification",
          });
          setNewPassword("");
          setNewPasswordConfirm("");
          router.replace("/tours");
        }}
      >
        <h1
          className={
            latoBold.className +
            " text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
          }
        >
          Set Your New Password
        </h1>
        <div className="mb-4">
          <label
            htmlFor="new-psd"
            className={latoBold.className + " block my-2 capitalize"}
          >
            New Password
          </label>
          <input
            id="new-psd"
            type="password"
            name="newPassword"
            value={newPassword}
            required
            className={
              "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] valid:ring-zinc-700 " +
              (newPassword ? "invalid:ring-red-500 invalid:ring-2" : "")
            }
            onChange={(e) => {
              setNewPassword(e.target.value);
              setMatchingStatus(true);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm-new-psd"
            className={latoBold.className + " block my-2 capitalize"}
          >
            Confirm New Password
          </label>
          <input
            id="confirm-new-psd"
            type="password"
            name="confirmNewPassword"
            value={newPasswordConfirm}
            required
            className={
              (matchingPasswords ? "ring-0 " : "ring-2 ring-red-500 ") +
              "block w-full rounded-sm border-0 px-2 py-3 shadow-sm outline-none ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#28b487] " +
              (newPasswordConfirm ? "invalid:ring-red-500 invalid:ring-2 " : "")
            }
            onChange={(e) => {
              setNewPasswordConfirm(e.target.value);
              setMatchingStatus(true);
            }}
          />
          <p
            className={
              "py-2 text-red-500 " + (matchingPasswords ? "hidden" : "")
            }
          >
            Passwords do not match
          </p>
        </div>
        <button
          type="submit"
          className="w-fit py-3 px-6 ml-auto mt-8 uppercase bg-green-500 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
        >
          Set Password
        </button>
      </form>
    </div>
  );
}
