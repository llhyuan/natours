import { latoBold } from "../fonts";
import Link from "next/link";
import TopTrips from "@/components/TopTrips";
import { fetchTopPicks } from "@/utilities/fetchTour";
import { Tour } from "@Global/custom-types";
import Image from "next/image";
import { ReactNode } from "react";
import HeroBanner from "@/components/HeroBanner";

const values = [
  {
    svg: "/img/five-star.svg",
    title: "Customer Experience",
    content:
      "Every itinerary is carefully crafted to suit individual interests and needs. Our expert guides and staff are always ready to go the extra mile, ensuring your journey is as memorable as the destinations themselves.",
  },
  {
    svg: "/img/environment.svg",
    title: "Environmental Consciousness",
    content:
      "Eco-friendly practices across our operations, from reducing paper waste to supporting local conservation efforts. When you travel with us, you're contributing to a more sustainable future.",
  },
  {
    svg: "/img/b-corp-black.svg",
    title: "Employee Well-Being",
    content:
      "We offer fair wages, excellent benefits, and continuous opportunities for growth and education. We're more than just a company; we're a family committed to excellence and integrity.",
  },
];

const sellingPoints = [
  {
    img: "/img/flexible-bookings.png",
    title: "Flexible Bookings",
    content:
      "Travel plans change. We get it – and we're here to help! Learn all about our flexible booking options.",
  },
  {
    img: "/img/likeminded-travellers.png",
    title: "Like-minded travellers",
    content:
      "Connect and share experiences with a community of spirited explorers who care about the planet.",
  },
  {
    img: "/img/right-trip.png",
    title: "The right trip for you",
    content:
      "Whether near or far from home, your trip will be local led and full of unforgettable experiences, with everything taken care of.",
  },
];
export default async function Home() {
  const results: Array<Tour> = await fetchTopPicks();
  return (
    <div>
      <HeroBanner />
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto text-center">
          <h2
            className={
              latoBold.className +
              " text-2xl md:text-3xl text-transparent bg-gradient-to-br bg-clip-text from-[#7dd56f]/80 to-[#28b487]/90"
            }
          >
            <span className="max-sm:block">Travel Thoughtfully, </span>
            <span className="max-sm:block">Discover Joyfully</span>
          </h2>
          <p className="text-lg md:text-xl mt-6">
            Every journey with us is a step towards a more sustainable,
            personalized, and unforgettable adventure.
          </p>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <TopTrips tours={results} />
      </SectionWrapper>
      <SectionWrapper>
        <div>
          <h2
            className={
              latoBold.className + " text-2xl md:text-3xl text-center mb-6"
            }
          >
            Our Mission
          </h2>
          <div className="w-[85%] max-w-[800px] mx-auto">
            <p className="text-lg md:text-xl mb-4">
              At Natours, Our mission is to redefine the travel experience by
              offering tailor-made adventures that enrich your life and respect
              our planet.
            </p>

            <p className="text-lg md:text-xl">
              We are dedicated to providing personalized service, sustainable
              practices, and a work environment that values the well-being of
              each team member.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div>
          <h2
            className={
              latoBold.className + " text-2xl md:text-3xl text-center mb-8"
            }
          >
            Our Values
          </h2>
          <p className="w-[85%] max-w-[800px] mx-auto mb-2 text-lg md:text-xl">
            Natours began with a single aim: to break the mold of traditional
            travel agencies.
          </p>
          <p className="w-[85%] max-w-[800px] mx-auto mb-2 text-lg md:text-xl">
            Rather than offering generic, one-size-fits-all tours, we decided to
            focus on customized experiences that leave lasting impressions.
          </p>
          <p className="w-[85%] max-w-[800px] mx-auto mb-2 text-lg md:text-xl">
            Over the years, we&apos;ve grown, but our core values have never
            wavered.
          </p>

          <div className="w-[85%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-y-10 gap-x-8">
            {values.map((value, index) => {
              return (
                <Values
                  icon={value.svg}
                  title={value.title}
                  content={value.content}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div>
          <h2
            className={
              latoBold.className + " text-2xl md:text-3xl text-center mb-8"
            }
          >
            Hassle-free travel with Natours
          </h2>
          <p className="w-[85%] max-w-[680px] mx-auto mb-2 text-lg md:text-xl max-lg:text-center">
            For over a decade, we&apos;ve dedicated ourselves to crafting
            unparalleled adventures for curious souls.
          </p>
          <div className="w-[85%] max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-start gap-y-10 gap-x-8 mb-10">
            {sellingPoints.map((sellingPoint, index) => {
              return (
                <SellingPoint
                  img={sellingPoint.img}
                  title={sellingPoint.title}
                  content={sellingPoint.content}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <Link
          href="/tours"
          className={
            latoBold.className +
            " group flex items-center w-fit rounded-sm mx-auto md:text-[1.3rem] text-zinc-700 px-4 py-3 border-solid border-[1px] border-zinc-700 hover:text-zinc-100 hover:bg-zinc-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-[200ms] ease-in"
          }
        >
          Your next dream tour starts{" "}
          <span className="block ml-1 group-hover:text-transparent group-hover:scale-125 group-hover:ml-[0.85rem] bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]/90 transition-all duration-[500ms] ease-in-out">
            here!
          </span>
        </Link>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={"my-28 lg:my-44" + className}>{children}</section>;
}

function Values({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <div className="m-auto max-w-[900px] flex flex-col items-center px-6 hover:bg-zinc-100 hover:rounded-sm transition-all duration-80 ease-in-out">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={150}
        height={150}
        className="w-[150px] my-6"
      />

      <h3 className={latoBold.className + " w-fit mb-6 text-[1.3rem]"}>
        {title}
      </h3>
      <p className="mb-6 max-w-[600px] max-lg:text-center">{content}</p>
    </div>
  );
}

function SellingPoint({
  img,
  title,
  content,
}: {
  img: string;
  title: string;
  content: string;
}) {
  return (
    <div className="m-auto max-w-[900px] flex flex-col items-center px-6 hover:bg-zinc-100 hover:rounded-sm transition-all duration-80 ease-in-out">
      <Image
        src={img}
        alt={`${title} icon`}
        width={150}
        height={150}
        className="w-[150px] my-6 rounded-full"
      />

      <h3 className={latoBold.className + " w-fit mb-6 text-[1.3rem]"}>
        {title}
      </h3>
      <p className="mb-6 max-w-[480px] max-lg:text-center">{content}</p>
    </div>
  );
}
