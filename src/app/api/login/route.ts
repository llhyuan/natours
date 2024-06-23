import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const url = `${process.env.API_HOST}/users/login`;
  const reqBody = await req.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(reqBody),
  });

  const data = await response.json();
  cookies().set(
    "jwt",
    data.token,

    {
      path: "/",
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    },
  );

  return NextResponse.json({ staus: data.status, message: data.message });
}

export async function GET() {
  const url = `${process.env.API_HOST}/users/login`;
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
