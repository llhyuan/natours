import { getCookieString } from "@/utilities/cookieString";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const reqBody = await req.json();
  console.log(reqBody);
  const url = `${process.env.API_HOST}/bookings/my-bookings`;

  let cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(url, {
    method: "PATCH",
    credentials: "include",
    headers: {
      cookie: cookieStr,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const result = await response.json();
  console.log(result);

  return NextResponse.json({
    status: "under construction",
    message: "bla bla bla",
  });
}
