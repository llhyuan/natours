import { Lato } from "next/font/google";
import Link from "next/link";
import LandingPageSearch from "@/components/LandingPageSearch";
import TopTrips from "@/components/TopTrips";
import { fetchTopPicks } from "@/utilities/fetchTour";
import { Tour } from "@Global/custom-types";
import Image from "next/image";
import { ReactNode } from "react";

const latoBold = Lato({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

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
      <section className="relative">
        <div className="overflow-hidden h-[calc(100vh-51px)]">
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
        <div className="absolute top-0 w-full h-[calc(100vh-51px)] bg-[rgba(0,0,0,0.05)] flex flex-col items-center">
          <div className="relative top-44 text-zinc-100 text-[1.25rem]">
            <LandingPageSearch />
          </div>
          <div
            className={
              latoBold.className +
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
          <div className="absolute bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              className="fill-zinc-200 rotate-90 mx-auto text-[1.3rem] animate-pulse"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
        </div>
      </section>
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
            Our values
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
          <span className="block ml-1 group-hover:text-transparent group-hover:text-[1.8rem] bg-gradient-to-br bg-clip-text from-[#7dd56f]/90 to-[#28b487]/90 transition-all duration-[500ms] ease-in-out">
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
