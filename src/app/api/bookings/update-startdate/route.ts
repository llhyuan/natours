import { getCookieString } from "@/utilities/cookieString";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const reqBody = await req.json();
  const url = `${process.env.API_HOST}/bookings/update-startDate`;

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

  if (result.status === "success") {
    return NextResponse.json({
      status: "success",
      message: "Start date updated.",
    });
  } else {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong, try again later.",
    });
  }
}
