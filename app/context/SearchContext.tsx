"use client";
import { createContext, useState } from "react";

type SearchState = {
  destination: string;
  activeSection: "destination" | "enter-date" | "exit-date" | null;
};

type SearchContextType = {
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
};

const defaultContextValue: SearchContextType = {
  searchState: { destination: "", activeSection: null },
  setSearchState: () => {},
};

export const SearchContext =
  createContext<SearchContextType>(defaultContextValue);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchState, setSearchState] = useState<SearchState>({
    destination: "",
    activeSection: null,
  });

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};
