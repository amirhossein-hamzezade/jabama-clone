import { addMonths, format, subMonths } from "date-fns-jalali";

import React from "react";

type CalendarHeaderProps = {
  currentMonth: Date;
  setCurrentMonth: (nextMonth: Date) => void;
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  headerTag?: boolean;
};
export const CalendarHeader = ({
  currentMonth,
  setCurrentMonth,
  disableLeftArrow = false,
  disableRightArrow = false,
  headerTag,
}: CalendarHeaderProps) => {
  if (headerTag) {
    return (
      <div className="flex justify-between h-[44px] justify-start">
        <div className="flex justify-center items-center font-bold text-[14px]  px-4 rounded-full bg-gray-100">
          {format(currentMonth, "MMMM yyyy")}
        </div>
      </div>
    );
  } else
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
