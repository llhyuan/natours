import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/logout`;

  const response = await fetch(url, {
    method: "GET",
  });

  return response;
}
