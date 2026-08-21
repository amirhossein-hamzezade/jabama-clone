"use client";

import { Info, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function DesktopSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dropDownObj, setDropDownObj] = useState<Omit<
    DropDownMenuProps,
    "setSearchDestination"
  > | null>(null);
  const [searchDestination, setSearchDestination] = useState("");

  const [isSticky, setIsSticky] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the trigger div is NOT intersecting, it means it scrolled off-screen
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null, // Defaults to the browser viewport
        threshold: 0, // Triggers as soon as even 1 pixel exits/enters
      },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative z-10 w-full flex justify-center items-center  mt-12.5">
        <div className="relative h-20.5 w-183 flex justify-between items-center bg-white rounded-full">
          <div
            tabIndex={0}
            className="flex flex-col justify-center items-start px-5 focus:border  h-full rounded-tr-full rounded-br-full focus:outline-none"
            onClick={() =>
              setDropDownObj({
                top: "top-25",
                right: "right-[-40]",
                width: "w-[330px]",
                height: "h-[286px]",
                state: "destination",
              })
            }
          >
            <span className="">مقصد سفرت کجاست؟</span>
            <input
              className="outline-none"
              ref={inputRef}
              type="text"
              placeholder="جستجو مقصد سفر"
            />
          </div>
          <div
            className="flex flex-col justify-center items-start"
            onClick={() =>
              setDropDownObj({
                top: "top-25",
                right: "right-60",
                width: "w-[300px]",
                height: "h-[100px]",
                state: "enter-date",
              })
            }
          >
            <span className="text-sm">تاریخ ورود</span>
            <span className="text-gray-500 text-sm">انتخاب تاریخ</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm">تاریخ خروج</span>
            <span className="text-sm text-gray-500">انتخاب تاریخ</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-sm">تعداد نفرات</span>
            <span className="text-sm text-gray-500">انتخاب تعداد نفرات</span>
          </div>

          <div className="flex justify-center items-cente px-4">
            <div className="h-12.5 w-12.5 flex justify-center items-center rounded-full bg-black cursor-pointer">
              <Search color="white" />
            </div>
          </div>
          {dropDownObj && (
            <DropDownMenu
              {...dropDownObj}
              setSearchDestination={setSearchDestination}
            />
          )}
        </div>
      </section>
      {/* sticky element logic */}
      {/* sticky element trigger */}
      <div ref={triggerRef} className="h-1 w-full z-10 " />
      {/* sticky content */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 p-4 bg-blue-600  text-white text-center font-bold transition-transform duration-300 ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      ></div>
    </>
  );
}

type DropDownState = {
  top: string;
  right: string;
  width: string;
  height: string;
  state: "destination" | "enter-date" | "exit-date";
};

// 2. Define exactly what the component receives as Props
interface DropDownMenuProps extends DropDownState {
  setSearchDestination: React.Dispatch<React.SetStateAction<string>>;
}

export function DropDownMenu({
  top,
  right,
  width,
  height,
  state,
  setSearchDestination,
}: DropDownMenuProps) {
  if (state === "destination") {
  }
  return (
    <div
      className={`absolute z-20 ${width} ${height} ${top} ${right}  bg-white border border-gray-200 duration-300 rounded-lg transition-all`}
    >
      {state === "destination" && (
        <div className="flex flex-col gap-6 items-center w-full h-full p-3 rounded-lg">
          <div className="flex justify-center w-full gap-1">
            <Info className="" />
            <span className="text-sm text-gray-500">
              می‌توانید شهر، استان، محله، جاذبه، نام و یا دسته‌بندی اقامتگاه را
              جست‌وجو کنید.
            </span>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-sm text-gray-600 font-bold">
              محبوب‌ترین مقصدها
            </h2>
            <ul className="flex flex-wrap">
              <li>
                <button onClick={() => setSearchDestination("تهران")}>
                  تهران
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
