import { createContext } from "react";

const token = localStorage.getItem("loginToken");

export const LoginContext = createContext({
  loginToken: token ?? "",
});
