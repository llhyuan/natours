import { cookies } from "next/headers";
import { getCookieString } from "./cookieString";

export async function isLoggedin() {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/login`;
  let cookieStr: string = getCookieString(cookies().getAll());

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
    next: {
      tags: ["loginStatus"],
    },
  });

  const result = await response.json();
  if (result.status === "success" && result.data && result.data.isLogin) {
    return true;
  } else {
    return false;
  }
}
