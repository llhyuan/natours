"use client";

import ReactMap, { Layer, Feature } from "react-mapbox-gl";

export default function Mapbox() {
  const Map = ReactMap({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
  });
  return (
    <div className="h-[400px] md:h-[550px] lg:h-[800px]">
      <Map
        style="mapbox://styles/mapbox/light-v11"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[55.691071, 12.500164]} />
        </Layer>
      </Map>
    </div>
  );
}
