"use client";
import { ReactNode, createContext, useState, useEffect } from "react";
import { LoginStatus, LoginStatusContext } from "@Global/custom-types";

// const defaultUser: LoginStatus = {
//   name: "Login",
//   loginStatus: false,
//   loginToken: "",
//   photo: "default.jpg",
// };

const defaultContext: LoginStatusContext = {
  isLogin: false,
  setLoginStatus: () => {},
};

export const loginStatusContext = createContext(defaultContext);

export default function LoginStatusContextProvider({
  children,
  loginStatus,
}: {
  children: ReactNode;
  loginStatus: boolean;
}) {
  const [isLogin, setLoginStatus] = useState(loginStatus);

  return (
    <loginStatusContext.Provider value={{ isLogin, setLoginStatus }}>
      {children}
    </loginStatusContext.Provider>
  );
}
