import { SearchContext } from "@/app/context/SearchContext";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import gustsIcon from "@/public/logo/mobileSearch/booking-search-persons.8c54d1e9.png";
import Image from "next/image";
import { GuestCounterV2 } from "../_component/GuestCounterV2";

const MobileSearchGustsCounter = () => {
  const { searchState, setSearchState } = useContext(SearchContext);
  const { activeSection } = searchState;
  return (
    <section
      onClick={() => {
        setSearchState((prev) => ({ ...prev, activeSection: "gusts" }));
      }}
      className={cn(
        "w-full flex flex-col justify-center items-center bg-white h-[52px] px-4 rounded-xl shadow-xl",
        { "h-fit justify-start": activeSection === "gusts" },
      )}
    >
      <div className="w-full flex justify-center items-center py-4 ">
        <button className=" w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span>
              <Image height={24} width={24} src={gustsIcon} alt="" />
            </span>
            <span
              className={cn("text-[14px] font-semibold text-gray-500", {
                "text-black text-[16px]": activeSection === "gusts",
              })}
            >
              تعداد نفرات
            </span>
          </div>
          {activeSection !== "gusts" && (
            <span
              className={cn(
                "h-7 flex justify-center items-center font-semibold bg-black text-white rounded-md text-[12px] px-[6px]",
                { "bg-white text-sm text-black truncate": searchState.gusts },
              )}
            >
              {searchState.gusts ? `${searchState.gusts} نفر` : "انتخاب نفرات"}
            </span>
          )}
        </button>
      </div>
      {activeSection === "gusts" && <GuestCounterV2 />}
    </section>
  );
};

export default MobileSearchGustsCounter;
