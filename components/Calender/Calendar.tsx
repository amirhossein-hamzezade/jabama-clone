"use client";

import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  startOfDay,
  addMonths,
  subMonths,
  isSameDay,
  isBefore,
  isAfter,
  isToday,
  isThisMonth,
  isFriday,
  isSameMonth,
} from "date-fns-jalali";
import { ToggleBtn } from "./ToggleBtn";
import { cn } from "@/lib/utils";
import { CalendarHeader } from "./CalendarHeader";
import { span } from "framer-motion/client";

// Jalali week days starting from Saturday (Shanbeh)
const WEEK_DAYS = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

type MonthControl =
  | { value: Date; onChange: (date: Date) => void } // Must have both
  | undefined;

export type DateRange = {
  start: Date | null;
  end: Date | null;
};

type CalendarProps = {
  monthControl?: MonthControl;
  rangeControl?: {
    range: DateRange;
    setRange: React.Dispatch<React.SetStateAction<DateRange>>;
  };
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  headerTag?: boolean;
};
export default function Calendar({
  monthControl,
  rangeControl,
  disableLeftArrow,
  disableRightArrow,
  headerTag,
}: CalendarProps) {
  const [localMonth, setLocalMonth] = useState<Date>(new Date());
  const currentMonth = monthControl ? monthControl.value : localMonth;

  const [localRange, setLocalRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  const updateRange = (
    nextRange: DateRange | ((prev: DateRange) => DateRange),
  ) => {
    if (rangeControl) {
      rangeControl.setRange(nextRange);
    } else {
      setLocalRange(nextRange);
    }
  };

  const range = rangeControl ? rangeControl.range : localRange;

  // Calculate grid boundaries using date-fns-jalali
  const toDay = startOfDay(new Date());

  const monthStart = startOfMonth(currentMonth);

  const monthEnd = endOfMonth(monthStart);

  const startDate = startOfWeek(monthStart, { weekStartsOn: 6 }); // 6 = Saturday in date-fns

  const endDate = endOfWeek(monthEnd, { weekStartsOn: 6 });

  // Generate all days needed to fill the grid rows
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const handleMonthChange = (nextMonth: Date) => {
    if (monthControl) {
      monthControl.onChange(nextMonth); // Updates parent state directly
    } else {
      setLocalMonth(nextMonth); // Updates local fallback state
    }
  };

  const handleDayClick = (day: Date) => {
    // Prevent selecting past dates
    console.log("cl");
    if (isBefore(day, startOfMonth(new Date())) && !isToday(day)) return;

    if (!range.start || (range.start && range.end)) {
      updateRange({ start: day, end: null });
    } else if (range.start && !range.end) {
      if (isBefore(day, range.start)) {
        updateRange({ start: day, end: null });
      } else {
        updateRange({ start: range.start, end: day });
      }
    }
  };

  const isSelected = (day: Date) =>
    (range.start && isSameDay(day, range.start)) ||
    (range.end && isSameDay(day, range.end));

  const isInRange = (day: Date) => {
    if (!range.start || !range.end) return false;
    return isAfter(day, range.start) && isBefore(day, range.end);
  };

  const DayStyleHelper = ({ day }: { day: Date }) => {
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const friday = isFriday(day);

    return (
      <div className=" h-full w-full flex justify-center items-center ">
        <div
          className={cn(
            "relative h-full w-full flex justify-center items-center cursor-pointer",
            { "text-red-500": friday },
            {
              "text-gray-300 cursor-default pointer-events-none": isBefore(
                day,
                toDay,
              ),
            },
            {
              "rounded-full bg-black text-white":
                isSelected(day) && isCurrentMonth,
            },
            { "bg-gray-100": isInRange(day) && isCurrentMonth },
          )}
        >
          <button
            className="flex relative z-20 justify-center min-w-[44px] min-h-[44px]  items-center w-full h-full cursor-pointer"
            onClick={() => handleDayClick(day)}
          >
            {isCurrentMonth && format(day, "d")}
            {isToday(day) && (
              <span className="absolute top-[80%] bg-orange-400 h-1 w-1 rounded-full"></span>
            )}
          </button>
          {isSelected(day) && isCurrentMonth && (
            <span
              className={cn(
                "absolute z-[-1] bg-gray-100 ",
                {
                  "left-0 w-1/2 h-full":
                    range.start && range.end && isSameDay(day, range.start),
                },
                {
                  "right-0 w-1/2 h-full":
                    range.end && range.start && isSameDay(day, range.end),
                },
              )}
            >
              {" "}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      <CalendarHeader
        currentMonth={currentMonth}
        setCurrentMonth={handleMonthChange}
        disableLeftArrow={disableLeftArrow}
        disableRightArrow={disableRightArrow}
        headerTag={headerTag}
      />
      <div className="w-full h-full flex flex-col">
        <div className=" text-gray-600 w-full grid grid-cols-[repeat(7,1fr)] place-items-center border-gray-300 border-b-2">
          {WEEK_DAYS.map((day, idx) => {
            return (
              <div
                key={idx}
                className=" min-w-[44px] min-h-[44px] flex justify-center items-center"
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="w-full  grid grid-cols-7 gap-y-1 place-items-center">
          {days.map((day: Date, idx) => {
            return <DayStyleHelper key={idx} day={day} />;
          })}
        </div>
      </div>
    </div>
  );
}
