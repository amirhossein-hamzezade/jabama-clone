import { SearchContext } from "@/app/context/SearchContext";
import Calendar, { DateRange } from "@/components/Calender/Calendar";
import { ToggleBtn } from "@/components/Calender/ToggleBtn";
import { addMonths, subMonths } from "date-fns-jalali";
import { ArrowRight } from "lucide-react";
import React, { useContext, useState } from "react";
const calendarList = ["calendar1", "calendar2", "calendar3", "calendar3"];

export const MobileCalendarContainerV2 = () => {
  const [parentMonth, setParentMonth] = useState<Date>(new Date());

  const { searchState, setSearchState } = useContext(SearchContext);
  const { range } = searchState;

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <div className="w-full flex justify-start items-center p-4 shrink-0">
        <ToggleBtn />
      </div>
      <div className="w-full flex-1 overflow-y-auto min-h-0 pb-6">
        {calendarList.map((item, idx) => {
          return (
            <div key={idx} className="w-full p-4">
              <Calendar
                headerTag={true}
                disableLeftArrow={true}
                disableRightArrow={true}
                monthControl={{
                  value: addMonths(parentMonth, idx),

                  onChange: (nextDate) =>
                    setParentMonth(subMonths(nextDate, 1)),
                }}
                rangeControl={{ range, setSearchState }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
