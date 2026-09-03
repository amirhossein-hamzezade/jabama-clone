import { SearchContext } from "@/app/context/SearchContext";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import React, { useContext } from "react";

export const GuestCounter = () => {
  const { searchState, setSearchState } = useContext(SearchContext);
  const plusGustNumber = () => {
    setSearchState((prev) => ({ ...prev, gusts: prev.gusts + 1 }));
  };
  const minusGustNumber = () => {
    if (searchState.gusts > 0) {
      setSearchState((prev) => ({ ...prev, gusts: prev.gusts - 1 }));
    }
  };

  return (
    <div className="w-full h-full px-[20px] py-[24px] flex justify-between items-center">
      <span>تعداد نفرات</span>
      <div className="flex justify-center items-center ">
        <button
          onClick={plusGustNumber}
          className="w-[22.8px] h-[22.8px] flex justify-center items-center border-2 rounded-md"
        >
          <Plus />
        </button>
        <span className="flex justify-center items-center w-[32px] h-[32px]">
          {searchState.gusts}
        </span>
        <button
          onClick={minusGustNumber}
          disabled={searchState.gusts <= 0}
          className={cn(
            "w-[22.8px] h-[22.8px] flex justify-center items-center border-2 rounded-md",
            { "text-gray-300": searchState.gusts <= 0 },
          )}
        >
          <Minus />
        </button>
      </div>
    </div>
  );
};
