import { cookies } from "next/headers";
import { getCookieString } from "./cookieString";

export async function fetchUsers(id?: string) {
  const url = `${process.env.API_HOST}/users/` + id ?? "";
  let cookieStr: string = getCookieString(cookies().getAll());

  const response = await fetch(url, {
    method: "GET",
    headers: {
      cookie: cookieStr,
    },
    credentials: "include",
  });

  const result = await response.json();

  return result.data.user;
}
