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
  activeSection: "settings",
  setActiveSection: () => {},
};

export const sidebarContext = createContext(defaultContext);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("settings");
  return (
    <sidebarContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </sidebarContext.Provider>
  );
}
