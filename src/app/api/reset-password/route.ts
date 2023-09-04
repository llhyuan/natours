import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/reset-password/${reqBody.resetToken}`;
  console.log(url);
  reqBody.resetToen = undefined;
  let cookieStr: string = getCookieString(cookies().getAll());

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStr,
    },
    body: JSON.stringify(reqBody),
    credentials: "include",
  });

  return response;
}
