import { getCookieString } from "@/utilities/cookieString";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  console.log("users invoked");
  let cookieStr: string = getCookieString(cookies().getAll());

  const reqBody: { id: string } = await req.json();

  const url = `${process.env.API_HOST}/users/${reqBody.id}`;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
  });

  return response;
}
