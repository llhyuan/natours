import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/me/update-profile`;
  let cookieStr: string = getCookieString(cookies().getAll());
  const reqBody = await req.json();

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStr,
    },
    body: JSON.stringify(reqBody),
    credentials: "include",
  });
  const result = await response.json();

  if (result.status === "success") {
    return NextResponse.json({
      status: "success",
      message: "Profile updated",
    });
  } else {
    return NextResponse.json(result);
  }
}
