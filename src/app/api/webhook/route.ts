import { NextRequest, NextResponse } from "next/server";
import { getCookieString } from "@/utilities/cookieString";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json();
  switch (body.type) {
    case "checkout.session.completed":
      const reqBody = {
        order: body.data.object.metadata.order,
        payment_status: body.data.object.payment_status,
      };
      const cookieStr: string = getCookieString([
        { name: "jwt", value: body.data.object.metadata.jwt },
      ]);
      console.log(cookieStr);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/bookings/my-bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie: cookieStr,
          },
          credentials: "include",
          body: JSON.stringify(reqBody),
        }
      );
      const result = await response.json();
      if (result.status === "paid") {
        revalidatePath("/me/bookings");
      }
  }
  return NextResponse.json({ recieved: true });
}
