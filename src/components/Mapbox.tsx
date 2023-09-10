"use client";

import ReactMapGL, { Marker, ZoomControl } from "react-mapbox-gl";
import Image from "next/image";
import { Lato } from "next/font/google";
import pin from "../../public/img/pin.png";
import { GeoPoint } from "@Global/custom-types";
import { useState } from "react";

const lato = Lato({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

export default function Mapbox({ locations }: { locations: Array<GeoPoint> }) {
  const [interactive, toggleInteractivity] = useState(false);
  const Map = ReactMapGL({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "",
    minZoom: 5,
    maxZoom: 18,
    interactive: interactive,
  });

  const center = getMapCenter(locations);

  return (
    <div className="h-[400px] md:h-[550px] lg:h-[800px] overflow-clip relative">
      <Map
        style="mapbox://styles/mapbox/light-v11"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[center[0], center[1]]}
        zoom={[5]}
        movingMethod="flyTo"
      >
        <div>
          {locations.map((location, index) => {
            const x = location.coordinates[0];
            const y = location.coordinates[1];
            return (
              <Marker coordinates={[x, y]} key={index}>
                <div className="relative group flex flex-col justify-center">
                  <p
                    className={
                      lato.className +
                      " text-center text-[1rem] mb-1 hidden group-hover:block p-2 text-zinc-600"
                    }
                  >
                    {location.description}
                  </p>
                  <Image
                    src={pin}
                    alt="map pin"
                    width={30}
                    className="mx-auto"
                  />
                </div>
              </Marker>
            );
          })}
          <ZoomControl
            position="bottom-left"
            style={{
              scale: 1.5,
              bottom: interactive ? "3.5rem" : "-10rem",
              left: "2rem",
              transition: "all 100 ease-in",
            }}
          />
        </div>
      </Map>
      <div
        className="absolute top-14 right-8"
        onClick={() => {
          toggleInteractivity(!interactive);
        }}
      >
        {!interactive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-9 h-9 fill-[rgba(0,0,0,0.8)] relative right-[5px] top-[1px]"
          >
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-10 h-10 fill-[rgba(0,0,0,0.4)]"
          >
            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" />
          </svg>
        )}
      </div>
    </div>
  );
}

function getMapCenter(locations: Array<GeoPoint>) {
  const coordinatesArr: Array<number[]> = [];
  for (const { coordinates } of locations) {
    coordinatesArr.push(coordinates);
  }

  const center = coordinatesArr.reduce((prev: number[], coordi: number[]) => {
    return [(prev[0] + coordi[0]) / 2, (prev[1] + coordi[1]) / 2];
  });

  return center;
}
