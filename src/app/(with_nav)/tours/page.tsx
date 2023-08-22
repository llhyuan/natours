import InfoCard from "@/components/InfoCard";
import { Tour } from "@/components/customInterfaces";
import { fetchTours } from "@/utilities/fetchTour";

export default async function Tours() {
  const results = await fetchTours();
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-16 gap-y-6 md:gap-x-24 md:gap-y-16 px-4 py-16">
      {results.data.tours.map((tour: any, index: number) => {
        return <InfoCard tour={tour as Tour} key={index} />;
      })}
    </div>
  );
}
