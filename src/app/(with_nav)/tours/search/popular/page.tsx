import InfoCard from "@/components/InfoCard";
import { Tour } from "@Global/custom-types";
import { fetchPopular } from "@/utilities/fetchTour";

export default async function Page() {
  const results = await fetchPopular();
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-x-6 gap-y-6 px-4 py-4">
      {results.map((tour: any, index: number) => {
        return <InfoCard tour={tour as Tour} key={index} />;
      })}
    </div>
  );
}
