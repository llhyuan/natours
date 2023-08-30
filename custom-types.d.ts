import { Dispatch, SetStateAction } from "react";

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
  value: string;
  sort: string;
  submit: boolean;
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
  };
  createdAt: Date;
  paymentStatus: string;
}
