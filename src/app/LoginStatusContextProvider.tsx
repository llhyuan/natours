"use client";
import { ReactNode, createContext, useState } from "react";
import { LoginStatus, LoginStatusContext } from "@Global/custom-types";

const defaultStatus: LoginStatus = {
  name: "User",
  loginStatus: false,
  email: "your@email.com",
  photo: "default.jpg",
};

const defaultContext: LoginStatusContext = {
  loginStatus: defaultStatus,
  setLoginStatus: () => {},
};

export const loginStatusContext =
  createContext<LoginStatusContext>(defaultContext);

export default function LoginStatusContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loginStatus, setLoginStatus] = useState(defaultStatus);

  return (
    <loginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </loginStatusContext.Provider>
  );
}
