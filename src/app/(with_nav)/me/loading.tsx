import { Lato } from "next/font/google";
const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p
        className={
          latoSemiBold.className +
          " text-[2rem] text-transparent bg-clip-text bg-gradient-to-br from-[#7dd56f] to-[#28b487] animate-pulse"
        }
      >
        Loading...
      </p>
    </div>
  );
}