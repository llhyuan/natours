import { CSSProperties } from "react";

export interface CSSPropertiesWithVars extends CSSProperties {
  "--section-rotate"?: string;
}

export interface Tour {
  name: string;
  difficulty: string;
  duration: number;
  summary: string;
  startLocation: GeoPoint;
  startDates: Array<string>;
  locations: Array<GeoPoint>;
  maxGroupSize: number;
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  imageCover: string;
  id: string;
  guides: Array<Guide>;
}

export interface GeoPoint {
  type: "Point";
  description: string;
  coordinates: Array<number>;
  address?: string;
}

export interface Guide {
  name: string;
  email: string;
  id: string;
}
