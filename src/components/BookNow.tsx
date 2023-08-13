import Link from "next/link";
import Image from "next/image";
import { Lato } from "next/font/google";
import img from "../../public/img/logo-green-round.png";

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
        <Link
          href="/"
          className={
            latoBold.className +
            " uppercase block w-fit py-4 px-8 mx-auto bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
          }
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
