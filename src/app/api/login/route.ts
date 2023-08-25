import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/login`;
  const reqBody = await req.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(reqBody),
  });

  return response;
}

export async function GET() {
  console.log("backend get");
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/login`;
  let cookieStr: string = getCookieString(cookies().getAll());

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
  });

  const result = await response.json();
  if (result.status === "success" && result.data && result.data.isLogin) {
    return NextResponse.json({ isLogin: true });
  } else {
    return NextResponse.json({ isLogin: false });
  }
}
