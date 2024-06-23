import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  cookies().set("jwt", "");

  return NextResponse.json({
    status: "success",
    message: "Successfuly logged out.",
  });
}
