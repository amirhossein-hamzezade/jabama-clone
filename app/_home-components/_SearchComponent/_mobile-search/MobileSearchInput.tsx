import { ArrowRight, CircleX } from "lucide-react";
import React, { useRef } from "react";
import { DestinationDropDown } from "../DestinationDropDown";

type MobileSearchInputProps = {
  setSheetOpen: (isOpen: boolean) => void;
  setDestination: (destination: string) => void;
};
export const MobileSearchInput = ({
  setSheetOpen,
  setDestination,
}: MobileSearchInputProps) => {
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
        setDestination(finalValue); // 2. Pass the text to your prop function
        inputRef.current.blur(); // 3. Optional: Dismisses mobile keyboard automatically
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex justify-between items-center border border-gray-200 p-4  h-18">
        <div className="w-full h-full flex justify-between items-center gap-[24px]">
          <button className="flex justify-center items-center w-fit h-full  ">
            <ArrowRight onClick={() => setSheetOpen(false)} />
          </button>
          <input
            type="text"
            name="search-input"
            id=""
            className=" outline-none w-full h-full text-lg font-bold text-gray-600"
            placeholder="جستجو شهر، استان یا اقامتگاه"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <button className="flex justify-center items-center w-fit h-full">
            <CircleX onClick={handleClear} />
          </button>
        </div>
      </div>
      <DestinationDropDown className="p-3 pt-4" />
    </div>
  );
};
