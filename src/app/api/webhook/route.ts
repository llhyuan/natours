import { NextRequest, NextResponse } from "next/server";
import { getCookieString } from "@/utilities/cookieString";
import { revalidatePath } from "next/cache";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-08-16",
});
const endpointSecret = process.env.STRIPE_WEBHOOK_ENDPOINT;

export async function POST(req: NextRequest) {
  let event: Stripe.Event;

  // Only verify the event if you have an endpoint secret defined.
  // Otherwise use the basic event deserialized with JSON.parse
  if (endpointSecret && req.body) {
    // Get the signature sent by Stripe
    const signature = req.headers.get("stripe-signature") ?? "";
    try {
      event = stripe.webhooks.constructEvent(
        await req.text(),
        signature,
        endpointSecret
      );
    } catch (err) {
      console.log(`Webhook signature verification failed.`, err);
      return NextResponse.json({ recieved: true });
    }

    //const body = await req.json();
    const body: any = event.data.object;
    const cookieStr: string = getCookieString([
      { name: "jwt", value: (event.data.object as any).metadata.jwt },
    ]);
    switch (event.type) {
      case "checkout.session.completed": {
        const reqBody = {
          order: (event.data.object as any).metadata.order,
          paymentStatus: body.payment_status,
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/bookings/update-paymentStatus`,
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
      case "invoice.paid": {
        const reqBody = {
          email: body.customer_email,
          order: body.metadata.order,
          invoice: body.hosted_invoice_url,
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
}
