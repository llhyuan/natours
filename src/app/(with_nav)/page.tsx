import { Lato } from "next/font/google";
import Link from "next/link";

const latoSemiBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="absolute overflow-hidden h-[100vh] ">
      <div className="overflow-hidden h-[100vh]">
        <video
          src="https://res.cloudinary.com/dafo4jbuk/video/upload/q_50/v1693042860/homepage_skrkmx.mp4"
          poster="https://res.cloudinary.com/dafo4jbuk/image/upload/q_33/v1694406680/Natours/tours/natour_poster_uuhohw.png"
          loop
          autoPlay
          muted
          className="block object-cover min-h-full"
          playsInline={true}
        ></video>
      </div>
      <div className="absolute top-0 w-full h-screen bg-[rgba(0,0,0,0.05)] flex justify-center">
        <div className="relative top-44 text-zinc-100 text-[1.25rem]">
          <form className="relative group flex max-sm:flex-col max-sm:items-start w-fit border-solid border-zinc-700 mx-auto mb-[2rem] text-[1rem] lg:text-[1.3rem] items-center rounded-sm ">
            <div className="flex items-center bg-zinc-200 py-1 px-2 sm:mr-1 max-sm:mb-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="md:w-[2rem] mr-2"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <input
                name="name"
                type="text"
                placeholder="Type in to search..."
                className="appearance-none focus:outline-none text-left p-1 rounded-md bg-transparent text-zinc-800 max-sm:w-[60vw] w-[30vw] max-w-[750px]"
              />
            </div>
            <div className="flex flex-1 items-center bg-zinc-200 py-1 px-2 sm:mx-1 max-sm:my-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="md:w-[2rem] mr-2"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <input
                name="name"
                type="text"
                placeholder="Type in to search..."
                className="appearance-none focus:outline-none text-left p-1 rounded-md bg-transparent text-zinc-800 max-sm:w-[30vw] w-[12vw] max-w-[350px]"
              />
            </div>
            <button
              type="submit"
              className="sm:ml-1 max-sm:mt-4 max-sm:self-end py-2 max-sm:px-8 px-4 md:px-6 lg:px-8 rounded-r-sm text-zinc-100 active:opacity-90 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90 shadow-md"
            >
              Search
            </button>
          </form>
        </div>
        <div
          className={
            latoSemiBold.className +
            " text-zinc-300 text-[3rem] sm:text-[4rem] md:text-[6rem] md:leading-[7.5rem] capitalize absolute flex flex-wrap max-md:w-[30rem] left-[6vw] bottom-[6rem] sm:bottom-[8rem] text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]"
          }
        >
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
