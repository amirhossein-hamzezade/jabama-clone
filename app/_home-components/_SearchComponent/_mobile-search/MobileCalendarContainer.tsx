import Calendar, { DateRange } from "@/components/Calender/Calendar";
import { ToggleBtn } from "@/components/Calender/ToggleBtn";
import { addMonths, subMonths } from "date-fns-jalali";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
const calendarList = ["calendar1", "calendar2", "calendar3", "calendar3"];

type MobileCalendarContainerProps = {
  setSheetOpen: (isOpen: boolean) => void;
};

export const MobileCalendarContainer = ({
  setSheetOpen,
}: MobileCalendarContainerProps) => {
  const [parentMonth, setParentMonth] = useState<Date>(new Date());

  const [range, setRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-18  flex justify-start items-center p-4 gap-6">
        <div className="flex justify-center items-center w-fit">
          <ArrowRight onClick={() => setSheetOpen(false)} />
        </div>
        <span className="text-lg font-bold text-gray-600">تاریخ سفر</span>
      </div>
      <div className="w-full flex justify-start items-center p-4">
        <ToggleBtn />
      </div>

      {calendarList.map((item, idx) => {
        return (
          <div key={idx} className="w-full p-4">
            <Calendar
              headerTag={true}
              disableLeftArrow={true}
              disableRightArrow={true}
              monthControl={{
                value: addMonths(parentMonth, idx),

                onChange: (nextDate) => setParentMonth(subMonths(nextDate, 1)),
              }}
              rangeControl={{ range, setRange }}
            />
          </div>
        );
      })}
    </div>
  );
};
