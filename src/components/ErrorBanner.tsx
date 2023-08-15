import { Lato } from "next/font/google";

const latoSemiBold = Lato({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function ErrorBanner({
  reveal,
  errMessage,
}: {
  reveal: boolean;
  errMessage: string;
}) {
  return (
    <div
      className={
        latoSemiBold.className +
        " absolute top-[0.5rem] w-[100vw] overflow-hidden " +
        (reveal ? " reveal" : " hidden")
      }
    >
      <p className="p-4 text-[1rem] md:text-[1.2rem] sm:w-[65%] mx-[0.5rem] sm:mx-auto rounded-md bg-zinc-100">
        {errMessage}
      </p>
    </div>
  );
}
