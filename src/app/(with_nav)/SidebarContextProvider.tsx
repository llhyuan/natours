"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface SidebarContext {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const defaultContext: SidebarContext = {
  activeSection: "",
  setActiveSection: () => {},
};

export const sidebarContext = createContext(defaultContext);

export default function SidebarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("");
  return (
    <sidebarContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </sidebarContext.Provider>
  );
}
