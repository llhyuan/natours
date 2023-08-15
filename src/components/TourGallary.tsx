import Image from "next/image";
import { importCover } from "@/utilities/importImage";

export default function TourGallary({
  imageUrls,
}: {
  imageUrls: Array<string>;
}) {
  return (
    <div className="h-[85vw] max-h-[850px] flex overflow-scroll">
      {imageUrls.map((imgurl, index) => {
        const img = importCover(`tours/${imgurl}`);
        return <Image src={img} alt={`tour image ${index + 1}`} key={index} />;
      })}
    </div>
  );
}
