import React, { useContext, useState } from "react";
import BottomSheet from "../../BottomSheet";

import { SearchContext } from "@/app/context/SearchContext";

import MobileSearchDestination from "./MobileSearchDestination";
import MobileSearchDatePicker from "./MobileSearchDatePicker";
import { cn } from "@/lib/utils";
import MobileSearchGustsCounter from "./MobileSearchGustsCounter";
import { X } from "lucide-react";

type MobileSearchProps = {
  sheetOpen: boolean;
  setSheetOpen: (isOpen: boolean) => void;
};

export const MobileSearch = ({
  setSheetOpen,
  sheetOpen,
}: MobileSearchProps) => {
  const [destination, setDestination] = useState("");
  const [dateObj, setDateObj] = useState();
  const { searchState, setSearchState } = useContext(SearchContext);

  return (
    <>
      <BottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        height="100dvh"
        roundedTop={false}
        className="bg-[#efefef]"
      >
        {/* old ui ---------------------------------------------- */}

        {/* {searchState.activeSection === "destination" && (
          <MobileSearchInput
            setSheetOpen={setSheetOpen}
            setDestination={setDestination}
          />
        )} */}

        {/* shows calender page */}
        {/* {(searchState.activeSection === "enter-date" ||
          searchState.activeSection === "exit-date") && (
          <MobileCalendarContainer setSheetOpen={setSheetOpen} />
        )} */}
        {/* old ui ---------------------------------------------- */}
        <div className="w-full h-full flex flex-col items-center overflow-hidden ">
          <header className="w-full flex justify-start items-center pt-4 px-4">
            <button
              onClick={() => setSheetOpen(false)}
              className="flex justify-center items-center rounded-full bg-gray-200 p-3"
            >
              <X className="" />
            </button>
          </header>
          <main className="w-full flex-1 flex flex-col items-center p-3 gap-3 overflow-hidden min-h-0">
            <div className="w-full shrink-0">
              <MobileSearchDestination />
            </div>
            <div
              className={cn(
                "w-full transition-all duration-300",
                searchState.activeSection === "enter-date"
                  ? "flex-1 min-h-0"
                  : "h-[52px] shrink-0",
              )}
            >
              <MobileSearchDatePicker />
            </div>
            <div className="w-full shrink-0">
              <MobileSearchGustsCounter />
            </div>
          </main>
        </div>
      </BottomSheet>
    </>
  );
};
