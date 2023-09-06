import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { CSSPropertiesWithVars } from "@Global/custom-types";
import { Tour } from "@Global/custom-types";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

const latoItalic = Lato({
  weight: "300",
  style: "italic",
  subsets: ["latin"],
});

export default async function InfoCard({ tour }: { tour: Tour }) {
  const name: Array<string> = tour.name.split(" ");
  const midIdx = Math.ceil(name.length / 2);
  const tourName = {
    firstHalf: name ? `${name.slice(0, midIdx).join(" ")}` : "The Tour",
    secondHalf: name ? `${name.slice(midIdx).join(" ")}` : "Name",
  };

  const info = `${tour.difficulty} ${tour.duration}-day Tour`;
  const summary = tour.summary ?? "Loading tour summary...";

  const location = tour.startLocation.description ?? "Location";

  const startTime = tour.startDates[0].slice(0, 10);
  const stops = tour.locations.length;
  const capacity = tour.maxGroupSize;
  const price = tour.price;
  const rating = tour.ratingsAverage;
  const ratingQuantity = tour.ratingsQuantity;

  let cover = tour.imageCover;

  const tourDetail = `/tours/${tour.id}`;

  return (
    <div
      className="w-full max-w-[420px] bg-white shadow-[0_1.5rem_4rem_rgba(0,0,0,0.2)] rounded-sm overflow-clip"
      style={{ "--section-rotate": "3rem" } as CSSPropertiesWithVars}
    >
      <div id="img" className="relative text-[1.5rem]">
        <div className="max-h-[240px] overflow-hidden clip-polygon">
          <Image src={cover} width={500} height={400} alt="tour image" />
        </div>
        <p className="absolute bottom-16 right-14 p-3 text-zinc-100 uppercase bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
          {tourName.firstHalf}
        </p>
        <p className="absolute bottom-2 right-8 p-3 text-zinc-100 uppercase bg-gradient-to-br from-[#7dd56f]/80 to-[#28b487]/90">
          {tourName.secondHalf}
        </p>
      </div>
      <div id="info" className="text-[1.2rem] px-8 py-2 text-zinc-500">
        <p
          className={
            latoBold.className + " text-[1.3rem] my-2 text-zinc-600 uppercase"
          }
        >
          {info}
        </p>
        <p className={latoItalic.className + " my-2 text-[1.2rem]"}>
          {summary}
        </p>
        <div
          id="details"
          className="grid grid-cols-2 justify-center items-center text-center my-6 gap-3"
        >
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.1em"
              width="0.9em"
              viewBox="0 0 384 512"
              className="mr-3 fill-zinc-400 "
            >
              <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
            </svg>
            {location}
          </p>
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="mr-3 fill-zinc-400"
            >
              <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
            </svg>
            {startTime}
          </p>
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.1em"
              viewBox="0 0 320 512"
              className="mr-3 fill-zinc-400"
            >
              <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
            </svg>
            {stops} stops
          </p>
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
              className="mr-3 fill-zinc-400"
            >
              <path d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
            </svg>
            {capacity} people
          </p>
        </div>
      </div>
      <div
        id="more-info"
        className="flex flex-row bg-gray-100 text-[1.1rem] sm:text-[1.25rem] border-solid border-zinc-200 border-t-[2px]"
      >
        <div className="flex-1 justify-left">
          <p className={latoItalic.className + " m-6 text-zinc-500"}>
            <span className={latoBold.className + " text-green-500"}>
              ${price}
            </span>
            <span> per person</span>
          </p>
          <p className={latoItalic.className + " m-6 text-zinc-500"}>
            <span className={latoBold.className + " text-green-500"}>
              {rating}
            </span>{" "}
            rating (<span>{ratingQuantity}</span>)
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link
            href={tourDetail}
            className={
              "w-fit py-4 px-8 mx-auto bg-green-500 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
            }
          >
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
