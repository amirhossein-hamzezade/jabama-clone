"use client";

import React, { useState } from "react";

import BottomSheet from "./BottomSheet";
import MobileHeader from "./MobileHeader";

import SearchMobileTrigger from "./_SearchComponent/_mobile-search/SearchMobileTrigger";
import { MobileSearch } from "./_SearchComponent/_mobile-search/MobileSearch";

import { SearchProvider } from "../context/SearchContext";

export default function HomeHeader() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <>
      <MobileHeader />
      <SearchProvider>
        <div className="sticky top-0 z-30 px-[16px] w-full bg-white pt-2 lg:hidden">
          <SearchMobileTrigger onTrigger={() => setSheetOpen(true)} />
        </div>
        <MobileSearch setSheetOpen={setSheetOpen} sheetOpen={sheetOpen} />
      </SearchProvider>
    </>
  );
}
