import { Lato } from "next/font/google";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Billing() {
  return (
    <div>
      <p
        className={
          latoSemiBold.className +
          " max-sm:mx-auto max-sm:w-fit text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
        }
      >
        Subscription
      </p>
      <p className="w-fit mx-auto pt-24 text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] text-zinc-500">
        Coming Soon...
      </p>
    </div>
  );
}
