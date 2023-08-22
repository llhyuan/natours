"use client";
import { ReactNode, createContext, useState } from "react";
import { ErrorMessage, ErrorMsgContext } from "@Global/custom-types";

const defaultContext: ErrorMsgContext = {
  errMsg: { error: false, errMessage: "" },
  setErrMsgStatus: () => {},
};

export const errMsgContext = createContext(defaultContext);

export default function ErrorMessageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [errMsg, setErrMsgStatus] = useState({ error: false, errMessage: "" });
  return (
    <errMsgContext.Provider value={{ errMsg, setErrMsgStatus }}>
      {children}
    </errMsgContext.Provider>
  );
}
