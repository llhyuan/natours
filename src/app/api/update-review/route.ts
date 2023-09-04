import { getCookieString } from "@/utilities/cookieString";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const reqBody = await req.json();
  const url = `${process.env.API_HOST}/reviews/${reqBody.reviewId}`;

  let cookieStr: string = getCookieString(cookies().getAll());
  console.log(reqBody);
  const response = await fetch(url, {
    method: "PATCH",
    credentials: "include",
    headers: {
      cookie: cookieStr,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const result = await response.json();
  if (result.status === "success") {
    revalidatePath("/me/reviews");
    return NextResponse.json({
      status: "success",
      message: "Rating has been updated.",
    });
  }

  return NextResponse.json({
    status: "fail",
    message: "Something went wrong when updating the rating. Try again later.",
  });
}
