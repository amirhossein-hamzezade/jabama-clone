import React, { useState } from "react";
import BottomSheet from "../../BottomSheet";
import { MobileSearchInput } from "./MobileSearchInput";
import { ArrowRight } from "lucide-react";
import { ToggleBtn } from "@/components/Calender/ToggleBtn";
import Calendar from "@/components/Calender/Calendar";
import { MobileCalendarContainer } from "./MobileCalendarContainer";

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
  return (
    <>
      <BottomSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        height="100dvh"
        roundedTop={false}
      >
        {/* shows destination page */}
        {!destination && (
          <MobileSearchInput
            setSheetOpen={setSheetOpen}
            setDestination={setDestination}
          />
        )}
        {destination && !dateObj && (
          <MobileCalendarContainer setSheetOpen={setSheetOpen} />
        )}
      </BottomSheet>
    </>
  );
};
