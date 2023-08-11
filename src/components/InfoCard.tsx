import Image from "next/image";
import Link from "next/link";
import img from "../../public/img/tours/tour-1-1.jpg";
import { Lato } from "next/font/google";

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

export default function InfoCard() {
  return (
    <div className="w-fit min-w-[375px] max-w-[430px] bg-white shadow-[0_1.5rem_4rem_rgba(0,0,0,0.2)]">
      <div id="img" className="relative text-[1.5rem] sm:text-[2.15rem]">
        <Image src={img} alt="tour image" className="clip-polygon" />
        <p className="absolute bottom-14 right-14 sm:bottom-16 p-3 text-zinc-100 uppercase bg-gradient-to-br from-green-400/80 to-green-600/80">
          The tour
        </p>
        <p className="absolute bottom-2 sm:bottom-0 right-8 p-3 text-zinc-100 uppercase bg-gradient-to-br from-green-400/80 to-green-600/80">
          Name
        </p>
      </div>
      <div id="info" className="text-[1.3rem] px-8 py-4 text-zinc-500">
        <p
          className={
            latoBold.className +
            " text-[1.6rem] sm:text-[1.8rem] my-4 text-zinc-600"
          }
        >
          EASY 5-DAY TOUR
        </p>
        <p
          className={
            latoItalic.className + " my-4 text-[1.4rem] sm:text-[1.5rem]"
          }
        >
          Breathtaking hike through the Banff df sdgg National Park
        </p>
        <div
          id="details"
          className="grid grid-cols-2 justify-center items-center text-center my-6 gap-6"
        >
          <p>Location</p>
          <p>Start Time</p>
          <p>Stops</p>
          <p>Capacity</p>
        </div>
      </div>
      <div
        id="more-info"
        className="flex flex-row bg-gray-100 text-[1.1rem] sm:text-[1.25rem] border-solid border-zinc-200 border-t-[2px]"
      >
        <div className="flex-1 text-center justify-center">
          <p className={latoItalic.className + " m-6 text-zinc-500"}>
            <span className={latoBold.className + " text-green-500"}>$297</span>
            <span> per person</span>
          </p>
          <p className={latoItalic.className + " m-6 text-zinc-500"}>
            <span className={latoBold.className + " text-green-500"}>4.9</span>{" "}
            rating (<span>21</span>)
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link
            href="/"
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
