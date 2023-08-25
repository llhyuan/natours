import { Lato } from "next/font/google";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export default function Holder() {
  return (
    <div
      className={
        latoBold.className +
        " text-[1.4rem] sm:text-[1.6rem] py-4 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487]"
      }
    >
      Choose a section to start
    </div>
  );
}
