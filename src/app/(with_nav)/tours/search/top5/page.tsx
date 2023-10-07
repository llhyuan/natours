import InfoCard from "@/components/InfoCard";
import { Tour } from "@Global/custom-types";
import { fetchTopPicks } from "@/utilities/fetchTour";

export default async function Page() {
  const results = await fetchTopPicks();
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-10 gap-y-6 px-4 py-6">
      {results.data.tours.map((tour: any, index: number) => {
        return <InfoCard tour={tour as Tour} key={index} />;
      })}
    </div>
  );
}
