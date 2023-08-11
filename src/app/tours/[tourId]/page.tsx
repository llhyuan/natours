import { Lato } from "next/font/google";
import Image from "next/image";
import img from "../../../../public/img/users/default.jpg";

const latoExtraBold = Lato({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
});

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <p className="flex text-zinc-600">
      <span
        className={
          latoBold.className +
          " flex-1 uppercase mr-6 md:mr-12 text-right md:my-2"
        }
      >
        {title}
      </span>
      <span className="flex-1 text-left md:my-2">{content}</span>
    </p>
  );
}

function GuideInfo({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex my-2 w-fit justify-center items-center">
      <Image
        src={img}
        alt="user photo"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p className="ml-4 sm:ml-6 w-[7rem] lg:w-[7.7rem] text-left capitalize">
        {role}
      </p>
      <p className="pl-4 capitalize">{name}</p>
    </div>
  );
}

export default function Tour({ params }: { params: { tourId: string } }) {
  return (
    <article className="w-full">
      <h1 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-zinc-100 uppercase flex flex-col items-center">
        <span className="block w-fit py-4 px-6 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
          The Park
        </span>
        <span className="block w-fit py-4 px-6 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487] relative bottom-3">
          Camper Tour
        </span>
      </h1>
      <div className="lg:flex mt-6 sm:mt-10 md:mt-14 lg:mt-24">
        <section className="py-8 max-lg:mx-auto text-center bg-gray-300 text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] w-full max-md:max-w-[480px] md:w-[50vw]">
          <h2
            className={
              latoExtraBold.className +
              " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-4"
            }
          >
            Tour Info
          </h2>
          <InfoBlock title="Next Date" content="August 2021" />
          <InfoBlock title="Difficulty" content="Medium" />
          <InfoBlock title="Capacity" content="10 people" />
          <InfoBlock title="Rating" content="4.9/5" />
          <h2
            className={
              latoExtraBold.className +
              " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] m-4 mt-10"
            }
          >
            Your Tour guides
          </h2>
          <div className=" w-fit mx-auto">
            <GuideInfo role="Lead guide" name="asdfe asdg" />
            <GuideInfo role="Guide" name="asdfe dfsdsdg" />
            <GuideInfo role="Guide" name="asde asddfsg" />
            <GuideInfo role="Guide" name="asddffe dfhhasdg" />
          </div>
        </section>
        <section className="p-8 max-lg:mx-auto text-center bg-gray-200 text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] w-full max-md:max-w-[480px] md:w-[50vw]">
          <h2
            className={
              latoExtraBold.className +
              " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-4"
            }
          >
            About the park camper tour
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>
      </div>
    </article>
  );
}
