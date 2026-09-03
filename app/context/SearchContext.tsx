"use client";

import { createContext, useState } from "react";

export type SearchState = {
  destination: string;
  activeSection: "destination" | "enter-date" | "exit-date" | "gusts" | null;
  range: { start: Date | null; end: Date | null };
  gusts: number;
};

export type SearchContextType = {
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
};

const defaultContextValue: SearchContextType = {
  searchState: {
    destination: "",
    activeSection: null,
    range: { start: null, end: null },
    gusts: 0,
  },
  setSearchState: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(defaultContextValue);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, setSearchState] = useState<SearchState>({
    destination: "",
    activeSection: null,
    range: { start: null, end: null },
    gusts: 0,
  });

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};
