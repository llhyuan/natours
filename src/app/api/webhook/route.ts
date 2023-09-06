import { NextRequest, NextResponse } from "next/server";
import { getCookieString } from "@/utilities/cookieString";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cookieStr: string = getCookieString([
    { name: "jwt", value: body.data.object.metadata.jwt },
  ]);
  switch (body.type) {
    case "checkout.session.completed": {
      const reqBody = {
        order: body.data.object.metadata.order,
        paymentStatus: body.data.object.payment_status,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/bookings/update-paymentStatus`,
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

      if (result.status === "success") {
        revalidatePath("/me/bookings");
      }
      break;
    }
    case "invoice.paid": {
      const reqBody = {
        email: body.data.object.customer_email,
        order: body.data.object.metadata.order,
        invoice: body.data.object.hosted_invoice_url,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/bookings/update-invoice`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            cookie: cookieStr,
          },
          credentials: "include",
          body: JSON.stringify(reqBody),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        revalidatePath("/me/bookings");
      }
      break;
    }
  }
  return NextResponse.json({ recieved: true });
}
