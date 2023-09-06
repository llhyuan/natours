import { CheckoutInfo } from "@Global/custom-types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
let stripe: Stripe;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-08-16",
  });
}

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const tour: CheckoutInfo = await req.json();
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price_data: {
            currency: "dkk",
            product_data: {
              name: tour.name + "Tour",
              description: tour.description,
              images: tour.images,
            },
            unit_amount_decimal: String(tour.price * 1.0 * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.SERVER_HOST}?success=true`,
      cancel_url: `${process.env.SERVER_HOST}/tours?canceled=true`,
    });
    if (session.url) {
      return NextResponse.json({ url: session.url });
    } else {
      return NextResponse.json({
        status: "fail",
        message: "Could not create a check session. Try again later.",
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: (err as any).statusCode || 500,
      message: (err as any).message,
    });
  }
}
