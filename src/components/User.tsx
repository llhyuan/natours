"use client";
import Image from "next/image";
import Link from "next/link";
import photo from "../../public/img/users/default.jpg";
import { useState } from "react";

type User = {
  name: string;
  loginStatus: boolean;
  loginToKen: string;
};

const defaultUser: User = {
  name: "Login",
  loginStatus: false,
  loginToKen: "",
};

const loginToken = localStorage.getItem("loginToken");
console.log(loginToken);

export default function User() {
  const [user, setCurrUser] = useState(defaultUser);
  return (
    <Link href="/profile" className="flex justify-center items-center">
      <Image
        src={photo}
        alt="user photo"
        width={50}
        height={50}
        className="rounded-[50%]"
      />
      <p className="px-2">{user.name}</p>
    </Link>
  );
}
