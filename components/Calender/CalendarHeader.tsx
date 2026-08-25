import { addMonths, format, subMonths } from "date-fns-jalali";
import { div } from "framer-motion/client";

import React from "react";

type CalendarHeaderProps = {
  currentMonth: Date;
  setCurrentMonth: (nextMonth: Date) => void;
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
};
export const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
  disableLeftArrow = false,
  disableRightArrow = false,
}: CalendarHeaderProps) => {
  return (
    <div className="flex justify-between h-[44px]">
      {disableRightArrow ? (
        <div className="shrink-0 w-[44px]"></div>
      ) : (
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="flex justify-center items-center w-[44px]"
        >
          {"<"}
        </button>
      )}
      <div className="flex justify-center items-center">
        {format(currentMonth, "MMMM yyyy")}
      </div>

      {disableLeftArrow ? (
        <div className="shrink-0 w-[44px]"></div>
      ) : (
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="flex justify-center items-center w-[44px]"
        >
          {">"}
        </button>
      )}
    </div>
  );
};
