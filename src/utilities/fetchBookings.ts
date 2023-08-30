import { getCookieString } from "./cookieString";
import { cookies } from "next/headers";
export async function fetchBookings() {
  const url = `${process.env.API_HOST}/bookings/my-bookings`;

  let cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStr,
    },
  });
  const result = await response.json();

  return result.bookings;
}
