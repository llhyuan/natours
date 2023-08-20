import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/login`;
  const reqBody = await req.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });

  return response;
}
