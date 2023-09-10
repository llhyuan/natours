import { getCookieString } from "./cookieString";
import { cookies } from "next/headers";
export async function fetchReviewsByUser() {
  const url = `${process.env.API_HOST}/users/me/reviews`;

  let cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
    next: { tags: ["reviews"] },
  });
  const result = await response.json();
  return result;
}
