import { getCookieString } from "@/utilities/cookieString";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let cookieStr: string = getCookieString(cookies().getAll());

  const url = `${process.env.API_HOST}/users/me`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
  });
  const result = await response.json();
  if (result.status === "success") {
    const user = result.data.user[0];
    return NextResponse.json({
      status: "success",
      user: { name: user.name, email: user.email, photo: user.photo },
    });
  } else {
    return NextResponse.json({ status: "fail" });
  }
}

export async function POST(req: NextRequest) {
  let cookieStr: string = getCookieString(cookies().getAll());
  const reqBody = await req.json();

  const url = `${process.env.API_HOST}/users/${reqBody.id}`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
  });
  const result = await response.json();
  if (result.status === "success") {
    const user = result.data.user[0];
    return NextResponse.json({
      status: "success",
      user: user,
    });
  } else {
    return NextResponse.json({ status: "fail" });
  }
}
