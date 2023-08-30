import { Lato } from "next/font/google";
import Link from "next/link";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="absolute top-[1rem] overflow-hidden h-[100vh] ">
      <div className="overflow-hidden h-[100vh]">
        <video
          src="https://res.cloudinary.com/dafo4jbuk/video/upload/v1693042860/homepage_skrkmx.mp4"
          loop
          autoPlay
          muted
          className="block object-cover min-h-full"
        ></video>
      </div>
      <div
        className={
          latoSemiBold.className +
          " absolute top-0 w-full h-screen bg-[rgba(0,0,0,0.05)]"
        }
      >
        <div className="text-zinc-300 text-[3rem] sm:text-[4rem] md:text-[6rem] md:leading-[7.5rem] capitalize absolute flex flex-wrap max-md:w-[30rem] left-[6vw] bottom-[6rem] sm:bottom-[8rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]">
          <p className="mr-[100%] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
            Get
          </p>{" "}
          <p className="pl-[4rem] md:pl-[5.5rem] mr-[100%] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/70 to-[#28b487]/80">
            On
          </p>
          <p className="mr-6 text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/75 to-[#28b487]/85">
            Your
          </p>{" "}
          <p className="mr-6 text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90">
            Way
          </p>
          <p>
            <Link
              href="/tours"
              className="group block relative md:left-6 bottom-8 md:bottom-12 hover:translate-x-6 transition-all duration-150 ease-in"
            >
              <span className="block scale-y-[1.8] group-hover:text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]">
                &gt;
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
