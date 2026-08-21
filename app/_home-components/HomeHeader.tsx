"use client";

import React, { useState } from "react";
import SearchMobile from "./SearchMobile";
import BottomSheet from "./BottomSheet";
import MobileHeader from "./MobileHeader";

export default function HomeHeader() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <>
      <MobileHeader />

      <div className="sticky top-0 z-30 px-[16px] w-full bg-white pt-2 lg:hidden">
        <SearchMobile onTrigger={() => setSheetOpen(true)} />
      </div>

      <BottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        height="100vh"
      ></BottomSheet>
    </>
  );
}
