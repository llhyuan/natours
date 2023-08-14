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
  images: Array<string>;
  id: string;
  guides: Array<Guide>;
  description: string;
}

export interface GeoPoint {
  type: string;
  description: string;
  coordinates: Array<number>;
  address?: string;
  id: string;
  _id: string;
}

export interface Guide {
  name: string;
  email: string;
  id: string;
}

export interface Review {
  review: string;
  rating: number;
  createdAt: string;
  tour: string;
  user: string;
}

export interface User {
  name: string;
  email: string;
  photo: string;
  role: string;
}
