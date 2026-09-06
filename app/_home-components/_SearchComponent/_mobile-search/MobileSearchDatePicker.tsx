import { SearchContext } from "@/app/context/SearchContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useContext } from "react";
import calenderIcon from "@/public/logo/mobileSearch/booking-search-calendar.5a2d9e09.png";

import { div } from "framer-motion/client";

import { MobileCalendarContainerV2 } from "./MobileCalendarContainerV2";
import { format } from "date-fns-jalali";

const MobileSearchDatePicker = () => {
  const { searchState, setSearchState } = useContext(SearchContext);
  const { activeSection } = searchState;
  return (
    <section
      onClick={() => {
        setSearchState((prev) => ({ ...prev, activeSection: "enter-date" }));
      }}
      className={cn(
        "w-full flex flex-col justify-center items-center bg-white h-[52px] px-4 rounded-xl shadow-xl ",
        {
          "h-full justify-start":
            activeSection === "enter-date" || activeSection === "exit-date",
        },
      )}
    >
      <div className="w-full flex justify-center items-center py-4 ">
        <button className=" w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span>
              <Image height={24} width={24} src={calenderIcon} alt="" />
            </span>
            <span
              className={cn("text-[14px] font-semibold text-gray-500", {
                "text-black text-[16px]": activeSection === "destination",
              })}
            >
              تاریخ
            </span>
          </div>
          {
            <span
              className={cn(
                "h-7 flex justify-center items-center font-semibold bg-black text-white rounded-md text-[12px] px-[6px]",
                {
                  "bg-white text-sm text-black truncate": searchState.range.end,
                },
              )}
            >
              {searchState.range.end && searchState.range.start
                ? `${format(searchState.range.start, "d MMMM")} تا ${format(searchState.range.end, "d MMMM")}`
                : "تعیین تاریخ"}
            </span>
          }
        </button>
      </div>
      {activeSection === "enter-date" && (
        <div className="w-full flex-1 overflow-y-auto">
          <MobileCalendarContainerV2 />
        </div>
      )}
    </section>
  );
};

export default MobileSearchDatePicker;
