import { Info } from "lucide-react";
import { SetStateAction, useContext } from "react";
import { DestinationDropDown } from "../DestinationDropDown";
import { cn } from "@/lib/utils";
import CalendarContainer from "@/components/Calender/CalenderContainer";
import { SearchContext } from "@/app/context/SearchContext";
import { GuestCounter } from "../_component/GuestCounter";

// 2. Define exactly what the component receives as Props

export function DesktopSearchDropdown() {
  const { searchState } = useContext(SearchContext);
  const { activeSection } = searchState;

  if (!activeSection) return null;
  return (
    <div
      className={cn(
        `absolute z-20  bg-white border border-gray-200 duration-300 rounded-lg transition-all h-fit`,
        {
          "top-25 right-[-40] w-[330px] h-[330px]":
            activeSection === "destination",
        },
        {
          "w-full h-[438px] top-25":
            activeSection === "enter-date" || activeSection === "exit-date",
        },
        { "w-[300px] h-[78px] top-25 left-0  ": activeSection === "gusts" },
      )}
    >
      {activeSection === "destination" && <DestinationDropDown />}
      {(activeSection === "enter-date" || activeSection === "exit-date") && (
        <CalendarContainer />
      )}
      {activeSection === "gusts" && <GuestCounter />}
    </div>
  );
}

export type TagProps = {
  cityName: string;
};

export const Tag = ({ cityName }: TagProps) => {
  const { setSearchState } = useContext(SearchContext);
  return (
    <li className="flex justify-center items-center rounded-full px-4 py-2 h-8 border border-gray-400 hover:bg-gray-100">
      <button
        onClick={() => {
          setSearchState((prev) => ({
            ...prev,
            destination: cityName,
            activeSection: "enter-date",
          }));
        }}
        className="w-full h-full flex justify-center items-center cursor-pointer "
      >
        {cityName}
      </button>
    </li>
  );
};
