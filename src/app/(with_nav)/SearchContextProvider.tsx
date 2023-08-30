"use client";
import { SearchContext, SearchParams } from "@Global/custom-types";
import { ReactNode, createContext, useState } from "react";

const defaultContext: SearchContext = {
  searchParams: { field: "name", value: "", sort: "", submit: false },
  setSearchParams: () => {},
};

export const searchContext = createContext<SearchContext>(defaultContext);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    field: "name",
    value: "",
    sort: "",
    submit: false,
  });
  return (
    <searchContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </searchContext.Provider>
  );
}
