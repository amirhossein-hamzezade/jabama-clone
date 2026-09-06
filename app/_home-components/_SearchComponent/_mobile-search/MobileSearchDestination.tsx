import Image from "next/image";
import React, { useContext, useRef } from "react";
import mapPinIcon from "@/public/logo/mobileSearch/booking-search-pin.899c6c09.png";
import { SearchContext } from "@/app/context/SearchContext";
import { cn } from "@/lib/utils";
import { MobileSearchInput } from "./MobileSearchInput";
import {
  ChevronLeft,
  CircleX,
  LocateFixed,
  Map,
  MoveUpRight,
  Search,
} from "lucide-react";
import { div } from "framer-motion/client";

const MobileSearchDestination = () => {
  const { searchState, setSearchState } = useContext(SearchContext);
  const { activeSection, destination } = searchState;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clears the input directly in the DOM
      inputRef.current.focus(); // Keeps focus so keyboard stays up
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      const finalValue = inputRef.current.value.trim();

      if (finalValue) {
        setSearchState((prev) => ({
          ...prev,
          destination: finalValue,
          activeSection: "enter-date",
        }));
        // 2. Pass the text to your prop function
        inputRef.current.blur(); // 3. Optional: Dismisses mobile keyboard automatically
      }
    }
  };

  return (
    <section
      onClick={() => {
        setSearchState((prev) => ({ ...prev, activeSection: "destination" }));
      }}
      className={cn(
        "w-full flex flex-col justify-center items-center bg-white h-[52px] px-4 rounded-xl shadow-xl",
        { "h-fit justify-start": activeSection === "destination" },
      )}
    >
      <div className="w-full flex justify-center items-center py-4 ">
        <button className=" w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <span>
              <Image height={24} width={24} src={mapPinIcon} alt="" />
            </span>
            <span
              className={cn("text-[14px] font-semibold text-gray-500", {
                "text-black text-[16px]": activeSection === "destination",
              })}
            >
              مقصد
            </span>
          </div>
          {
            <span
              className={cn(
                "h-7 flex justify-center items-center font-semibold bg-black text-white rounded-md text-[12px] px-[6px]",
                { "bg-white text-sm text-black truncate": destination },
              )}
            >
              {destination ? destination : "انتخاب مقصد"}
            </span>
          }
        </button>
      </div>
      {activeSection === "destination" && (
        <div className="w-full h-full flex-col items-center">
          <section className="w-full h-[48px] flex justify-between items-center gap-[24px] bg-gray-100 px-[12px] rounded-lg">
            <Search />
            <input
              type="text"
              name="search-input"
              id=""
              className=" outline-none w-full h-full text-lg font-bold text-gray-600 text-[16px]"
              placeholder="جستجو شهر، استان و..."
              ref={inputRef}
              onKeyDown={handleKeyDown}
              defaultValue={destination}
            />
            <button className="flex justify-center items-center w-fit h-full">
              <CircleX onClick={handleClear} />
            </button>
          </section>
          <section className="w-full flex flex-col gap-2 mt-[20px]">
            <span>مقاصد محبوب</span>
            <div className="flex overflow-x-scroll gap-1">
              <button className="flex justify-center items-center text-xs bg-gray-200 py-0.5 px-2 rounded-full font-semibold">
                <MoveUpRight height={"16px"} width={"16px"} />
                تهران
              </button>
            </div>
          </section>
          <section className="w-full flex justify-between items-center py-4">
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center ">
                <LocateFixed />
              </div>
              <div className="flex flex-col items-start ">
                <span className="font-semibold text-sm">نزدیک من</span>
                <span className="text-xs text-gray-600">
                  نیاز به اجازه به موقعیت فعلی
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ChevronLeft height={"16px"} />
            </div>
          </section>
          <section className=" w-full flex justify-between items-center py-[16px] border-t border-gray-300">
            <div className="flex justify-center items-center gap-2">
              <Map />
              <span className="font-semibold text-sm">همه ایران</span>
            </div>
            <div className="flex justify-center items-center">
              <ChevronLeft height={"16px"} />
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default MobileSearchDestination;
