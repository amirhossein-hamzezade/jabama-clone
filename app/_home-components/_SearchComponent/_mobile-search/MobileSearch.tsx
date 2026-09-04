import React, { useContext, useState } from "react";
import BottomSheet from "../../BottomSheet";
import { MobileSearchInput } from "./MobileSearchInput";
import { ArrowRight } from "lucide-react";
import { ToggleBtn } from "@/components/Calender/ToggleBtn";
import Calendar from "@/components/Calender/Calendar";
import { MobileCalendarContainer } from "./MobileCalendarContainer";
import { SearchContext } from "@/app/context/SearchContext";

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
      >
        {/* shows destination page */}
        {searchState.activeSection === "destination" && (
          <MobileSearchInput
            setSheetOpen={setSheetOpen}
            setDestination={setDestination}
          />
        )}
        {/* shows calender page */}
        {(searchState.activeSection === "enter-date" ||
          searchState.activeSection === "exit-date") && (
          <MobileCalendarContainer setSheetOpen={setSheetOpen} />
        )}
      </BottomSheet>
    </>
  );
};
