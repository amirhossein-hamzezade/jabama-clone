"use client";

import React, { useState } from "react";
import { ToggleBtn } from "./ToggleBtn";
import Calendar, { DateRange } from "./Calendar";
import { addMonths, subMonths } from "date-fns-jalali";

export default function CalendarContainer() {
  const [parentMonth, setParentMonth] = useState<Date>(new Date());

  const [range, setRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  const nextMonthView = addMonths(parentMonth, 1);
  return (
    <div className="w-full h-full  flex flex-col items-center overflow-y-auto  ">
      <div className="w-full flex pt-4 px-4">
        <ToggleBtn />
      </div>
      <div className="w-full h-full p-4 pt-6">
        <div className="w-full h-full flex justify-center items-center gap-4">
          {/* --------------cal1 */}
          <Calendar
            monthControl={{
              value: parentMonth,

              onChange: (nextDate) => setParentMonth(subMonths(nextDate, 1)),
            }}
            disableLeftArrow={true}
            rangeControl={{ range, setRange }}
          />
          {/* ----------------- cla2 */}
          <Calendar
            monthControl={{
              value: nextMonthView,

              onChange: (nextDate) => setParentMonth(nextDate),
            }}
            disableRightArrow={true}
            rangeControl={{ range, setRange }}
          />
        </div>
      </div>
    </div>
  );
}
