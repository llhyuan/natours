import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function DELETE(
  req: NextRequest,
  dynamicRoute: { params: { bookingId: string } }
) {
  const cookieStr: string = getCookieString(cookies().getAll());
  console.log(dynamicRoute.params.bookingId);
  const response = await fetch(
    `${process.env.API_HOST}/bookings/delete/${dynamicRoute.params.bookingId}`,
    {
      method: "DELETE",
      credentials: "include",
      headers: {
        cookie: cookieStr,
      },
    }
  );
  const result = await response.json();

  return NextResponse.json(result);
}
