import { Lato } from "next/font/google";
import Image from "next/image";
import img from "../../../../public/img/users/default.jpg";
import Mapbox from "@/components/Mapbox";
import ReviewRibon from "@/components/ReviewRibon";
import BookNow from "@/components/BookNow";
import { fetchTours } from "@/utilities/fetchTour";
import { Tour } from "@/components/customInterfaces";
import { importCover } from "@/utilities/importImage";

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

export default async function Tour({ params }: { params: { tourId: string } }) {
  const result = await fetchTours(params.tourId);
  const tour: Tour = result.data.tour;
  const cover = importCover(tour.imageCover);
  const name: Array<string> = tour.name.split(" ");
  const midIdx = Math.ceil(name.length / 2);
  const tourName = {
    firstHalf: name ? `${name.slice(0, midIdx).join(" ")}` : "The Tour",
    secondHalf: name ? `${name.slice(midIdx).join(" ")}` : "Name",
  };

  const startTime = tour.startDates[0].slice(0, 10);
  const tourGuides = tour.guides;

  return (
    <article className="w-full ">
      <section className="relative">
        <div className="overflow-clip h-[60vw] max-h-[900px] min-h-[240px] md:clip-polygon">
          <Image src={cover} alt="cover image" className="relative bottom-24" />
        </div>
        <div className="absolute w-full h-[55vw] max-h-[860px] min-h-[220px] top-0 flex items-center">
          <div className="flex flex-col w-full items-center">
            <h1 className=" text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-zinc-100 uppercase flex flex-col items-center">
              <span className="block w-fit py-2 px-4 sm:py-4 sm:px-6 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
                {tourName.firstHalf ?? "Loading"}
              </span>
              <span className="block w-fit py-2 px-4 sm:py-4 sm:px-6 bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487] relative bottom-2 sm:bottom-3">
                {tourName.secondHalf ?? "Tour Name..."}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="relative md:clip-slate md:top-[-8vw] bg-gray-300">
        <div className="lg:flex lg:justify-center">
          <div className="text-center text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] w-full lg:flex-1 ">
            <div className="py-12 md:pt-28 lg:pt-48">
              <h2
                className={
                  latoExtraBold.className +
                  " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-4"
                }
              >
                Tour Info
              </h2>
              <InfoBlock title="Start Date" content={startTime} />
              <InfoBlock title="Difficulty" content={tour.difficulty} />
              <InfoBlock
                title="Capacity"
                content={`${tour.maxGroupSize} people`}
              />
              <InfoBlock title="Rating" content={`${tour.ratingsAverage}/5`} />
            </div>
            <div className="pb-12 ">
              <h2
                className={
                  latoExtraBold.className +
                  " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-6"
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
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-200 text-[1.1rem] sm:text-[1.2rem] lg:text-[1.3rem] w-full lg:flex-1 md:max-lg:clip-slate ">
            <div className="py-12 md:py-28 lg:py-48 max-w-[750px] lg:max-w-[580px]">
              <h2
                className={
                  latoExtraBold.className +
                  " text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f] to-[#28b487] uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] mb-8 lg:mb-10"
                }
              >
                About the park camper tour
              </h2>
              <p className="w-full pb-6 px-4 sm:px-8 md:px-16 lg:px-12 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="w-full px-4 sm:px-8 md:px-16 lg:px-12 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:clip-slate md:top-[-16vw]">
        <Mapbox />
      </div>
      <div className="relative md:clip-slate md:top-[-24vw] bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
        <div className="py-24 md:py-60">
          <ReviewRibon />
        </div>
      </div>
      <div className="relative md:top-[-12vw]">
        <BookNow />
      </div>
    </article>
  );
}

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
    <div className="flex my-2 w-fit justify-center items-center pl-2">
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
