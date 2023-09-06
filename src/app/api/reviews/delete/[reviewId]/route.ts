import { getCookieString } from "@/utilities/cookieString";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  dynamicRoute: { params: { reviewId: string } }
) {
  const url = `${process.env.API_HOST}/reviews/${dynamicRoute.params.reviewId}`;

  let cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
    headers: {
      cookie: cookieStr,
    },
  });
  const result = await response.json();
  if (result.status === "success") {
    revalidatePath("/me/reviews");
    return NextResponse.json({
      status: "success",
      message: "Review has been deleted.",
    });
  }

  return NextResponse.json({
    status: "fail",
    message:
      "Something went wrong when handling this request. Try again later.",
  });
}
