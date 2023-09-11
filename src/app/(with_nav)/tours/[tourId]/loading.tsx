import logo from "/public/img/logo-green-round.png";
import Image from "next/image";
import { Lato } from "next/font/google";
const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image src={logo} quality={20} width={80} height={80} alt="Natour logo" />
      <p
        className={
          latoSemiBold.className +
          " mt-6 text-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487] animate-pulse"
        }
      >
        Loading...
      </p>
    </div>
  );
}
