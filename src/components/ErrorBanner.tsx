import { Lato } from "next/font/google";
import { useEffect, useRef } from "react";

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
  const errMsgRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (errMsgRef && errMsgRef.current) {
      if (reveal) {
        errMsgRef.current.classList.add("reveal");
      } else {
        errMsgRef.current.classList.remove("reveal");
      }
    }
  }, [reveal]);
  return (
    <div
      className={
        latoSemiBold.className +
        " absolute top-[0.5rem] w-[100vw] overflow-hidden"
      }
    >
      <p
        ref={errMsgRef}
        className="p-4 text-[1rem] md:text-[1.2rem] sm:w-[65%] mx-[0.5rem] sm:mx-auto rounded-md bg-zinc-100 shadow-[0.2rem_0.2rem_1rem_rgba(0,0,0,0.5)] my-4 relative top-[-3rem] opacity-0 transition-all duration-200 ease-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5rem"
          viewBox="0 0 512 512"
          className="inline relative top-[-3px] mr-2 fill-red-600"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        {errMessage}
      </p>
    </div>
  );
}
