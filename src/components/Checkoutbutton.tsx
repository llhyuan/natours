"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutButton() {
  const { tourId } = useParams();
  const router = useRouter();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/checkout-session/${tourId}`, {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (result.status === "success") {
          router.replace(result.url);
        }
      }}
    >
      <button
        type="submit"
        role="link"
        className={
          latoBold.className +
          " uppercase block w-fit py-4 px-8 mx-auto bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
        }
      >
        Book Now
      </button>
    </form>
  );
}
