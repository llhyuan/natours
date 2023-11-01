import { latoSemiBold } from "@/app/fonts";

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
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
