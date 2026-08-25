import { Info } from "lucide-react";
import { SetStateAction } from "react";
import { DestinationDropDown } from "./DestinationDropDown";
import { cn } from "@/lib/utils";
import CalendarContainer from "@/components/Calender/CalenderContainer";
export type DropDownState = {
  top: string;
  right: string;
  width: string;
  height: string;
  state: "destination" | "enter-date" | "exit-date";
};

// 2. Define exactly what the component receives as Props
export interface DropDownMenuProps extends DropDownState {
  setSearchDestination: React.Dispatch<React.SetStateAction<string>>;
}

export function DesktopSearchDropdown({
  top,
  right,
  width,
  height,
  state,
  setSearchDestination,
}: DropDownMenuProps) {
  return (
    <div
      className={cn(
        `absolute z-20 ${width} ${height} ${top} ${right}  bg-white border border-gray-200 duration-300 rounded-lg transition-all h-fit`,
        { "w-full h-[438px]": state === "enter-date" },
      )}
    >
      {state === "destination" && <DestinationDropDown />}
      {state === "enter-date" && <CalendarContainer />}
    </div>
  );
}

export type TagProps = {
  cityName: string;
  setSearchDestination?: (value: SetStateAction<string>) => void;
};

export const Tag = ({ cityName, setSearchDestination }: TagProps) => {
  return (
    <li className="flex justify-center items-center rounded-full px-4 py-2 h-8 border border-gray-400 hover:bg-gray-100">
      <button className="w-full h-full flex justify-center items-center cursor-pointer ">
        {cityName}
      </button>
    </li>
  );
};
