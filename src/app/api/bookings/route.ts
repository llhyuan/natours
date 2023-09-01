import { getCookieString } from "@/utilities/cookieString";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const url = `${process.env.API_HOST}/bookings/my-bookings`;

  let cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
    next: { tags: ["bookings"] },
  });
  const result = await response.json();

  return NextResponse.json({ bookings: result.bookings });
}
