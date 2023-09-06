import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const url = `${process.env.API_HOST}/users/signup`;
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
