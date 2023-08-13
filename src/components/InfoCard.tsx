import Image from "next/image";
import Link from "next/link";
import { Lato } from "next/font/google";
import { CSSPropertiesWithVars } from "./customInterfaces";
import { Tour } from "./customInterfaces";
import { importCover } from "@/utilities/importImage";

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

  const cover = importCover(tour.imageCover);
  const tourDetail = `/tours/${tour.id}`;

  return (
    <div
      className="w-full max-w-[420px] bg-white shadow-[0_1.5rem_4rem_rgba(0,0,0,0.2)] rounded-sm overflow-clip"
      style={{ "--section-rotate": "3rem" } as CSSPropertiesWithVars}
    >
      <div id="img" className="relative text-[1.5rem]">
        <div className="max-h-[240px] overflow-hidden clip-polygon">
          <Image src={cover} alt="tour image" />
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
          className="grid grid-cols-2 justify-center items-center text-center my-4 gap-2"
        >
          <p>{location}</p>
          <p>{startTime}</p>
          <p>{stops} stops</p>
          <p>{capacity} people</p>
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
              "w-fit py-4 px-8 mx-auto bg-green-400 text-zinc-100 rounded-full tracking-wide transition-all duration-100 ease-in hover:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.2)] hover:translate-y-[-5px]"
            }
          >
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}
