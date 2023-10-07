import { Dispatch, SetStateAction } from "react";
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

// Login status provider
export interface LoginStatus {
  name: string;
  loginStatus: boolean;
  email: string;
  photo: string;
}

export interface LoginStatusContext {
  loginStatus: LoginStatus;
  setLoginStatus: Dispatch<SetStateAction<LoginStatus>>;
}

// Error message component
export interface Notification {
  reveal: boolean;
  message: string;
  category: string;
}

export interface NotificationContext {
  notification: Notification;
  setNotificationStatus: Dispatch<SetStateAction<Notification>>;
}

export interface SearchParams {
  field: string;
  value: string | number;
  sort: string;
  date?: string | Date;
  submit: boolean;
  budget?: string;
}

export interface SearchContext {
  searchParams: SearchParams;
  setSearchParams: Dispatch<SetStateAction<SearchParams>>;
}

export interface CheckoutInfo {
  name: string;
  description: string;
  images: Array<string>;
  price: number;
}

export interface BookingInfo {
  _id: string;
  user: string;
  tour: {
    name: string;
    summary: string;
    price: number;
    duration: number;
    startLocation: { description: string };
    difficulty: string;
    startDates: Array<string>;
    guides: Array<{ email: string; name: string; id: string }>;
    id: string;
    imageCover: string;
  };
  review: {
    id: string;
    rating: number;
  };
  createdAt: Date;
  paymentStatus: "pending" | "paid" | "rejected";
  order: string;
  url: string;
  invoice: string;
  startDate: string;
}

export interface ReviewPopulated {
  _id: string;
  user: string;
  tour: {
    name: string;
    imageCover: string;
  };
  order: string;
  createdAt: string;
  review: string;
  title: string;
  rating: number;
  visible: boolean;
}
