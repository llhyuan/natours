import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";

export async function GET(
  _req: NextRequest,
  dynamicRoute: { params: { tourId: string } }
) {
  const cookieStr: string = getCookieString(cookies().getAll());
  const response = await fetch(
    `${process.env.API_HOST}/bookings/checkout-session/${dynamicRoute.params.tourId}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        cookie: cookieStr,
      },
    }
  );
  const result = await response.json();

  return NextResponse.json(result);
}
