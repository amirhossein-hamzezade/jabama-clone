"use client";

import { SearchProvider } from "@/app/context/SearchContext";
import React from "react";
import DesktopSearch from "./DesktopSearch";

export const DesktopSearchContainer = () => {
  return (
    <SearchProvider>
      <DesktopSearch />
    </SearchProvider>
  );
};
