import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/forget-password`;
  let cookieStr: string = getCookieString(cookies().getAll());
  const reqBody = await req.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStr,
    },
    body: JSON.stringify(reqBody),
    credentials: "include",
  });

  return response;
}
