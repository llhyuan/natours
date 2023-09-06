import Image from "next/image";
import { Lato } from "next/font/google";
import img from "../../public/img/logo-green-round.png";
import CheckoutButton from "./Checkoutbutton";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function BookNow() {
  return (
    <div className="md:w-fit mx-auto bg-zinc-100 lg:flex shadow-[2px_2px_8rem_rgba(0,0,0,0.2)] md:rounded-2xl xl:scale-125 2xl:scale-[1.4]">
      <div className="flex relative items-center overflow-hidden pt-14 pb-8 lg:pb-14 md:w-fit mx-auto bg-zinc-100 md:rounded-2xl">
        <div className="w-[120px] h-[120px] rounded-full bg-zinc-100 opacity-80 shadow-[2px_0_1rem_rgba(0,0,0,0.3)]"></div>
        <div className="absolute left-[-25px] w-[120px] h-[120px] rounded-full bg-zinc-100 opacity-80 shadow-[2px_0_1rem_rgba(0,0,0,0.3)]"></div>
        <Image
          src={img}
          alt="green logo"
          width={120}
          className="absolute left-[-50px] rounded-full shadow-[2px_0_3rem_rgba(0,0,0,0.3)]"
        />
        <div className="relative max-sm:left-4 px-10">
          <p
            className={
              latoBold.className +
              " text-[1.5rem] mb-4 uppercase text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487]"
            }
          >
            WHAT ARE YOU WAITING FOR?
          </p>
          <p className={lato.className + " text-zinc-500 text-[1.1rem]"}>
            10 days. 1 adventure. Infinite memories. Make it yours today!
          </p>
        </div>
      </div>
      <div className="self-center max-lg:my-2 lg:px-10 pb-14 lg:pt-14">
        <CheckoutButton />
      </div>
    </div>
  );
}
