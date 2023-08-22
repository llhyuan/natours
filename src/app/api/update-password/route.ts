import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/me/update-password`;
  let cookieStr: string = getCookieString(cookies().getAll());
  console.log(cookieStr);
  const reqBody = await req.json();
  console.log("from next backend");
  console.log(reqBody);

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
  console.log(result);

  if (result.status === "success") {
    return NextResponse.json({
      status: "success",
      message: "Password updated",
    });
  } else {
    return NextResponse.json(result);
  }
}
