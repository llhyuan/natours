"use client";

import ReactMapGL, { Marker } from "react-mapbox-gl";
import Image from "next/image";
import { Lato } from "next/font/google";
import pin from "../../public/img/pin.png";

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function Mapbox() {
  const Map = ReactMapGL({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
    minZoom: 5,
    maxZoom: 18,
  });
  return (
    <div className="h-[400px] md:h-[550px] lg:h-[800px] overflow-clip">
      <Map
        style="mapbox://styles/mapbox/light-v11"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[12.500164, 55.691071]}
      >
        <Marker coordinates={[12.500164, 55.691071]}>
          <div className="relative group flex flex-col justify-center">
            <p
              className={
                lato.className +
                " text-center text-[1rem] mb-1 hidden group-hover:block"
              }
            >
              Some info
            </p>
            <Image src={pin} alt="map pin" width={30} className="mx-auto" />
          </div>
        </Marker>
      </Map>
    </div>
  );
}
