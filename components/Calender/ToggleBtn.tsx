import { cn } from "@/lib/utils";
import React, { useState } from "react";

export type ActiveButton = "btn1" | "btn2";
export const ToggleBtn = () => {
  const [selectedBtn, setSelectedBtn] = useState<ActiveButton>("btn1");

  const itemBaseClass =
    "flex h-full justify-center items-center text-sm px-3 rounded-full";
  return (
    <div
      className={cn(
        "flex justify-center items-center bg-gray-200 rounded-full py-0.5 transition-all",
      )}
    >
      <span
        className={cn(
          itemBaseClass,
          {
            "bg-white shadow-sm rounded-full": selectedBtn === "btn1",
          },
          { "bg-gray-200": selectedBtn !== "btn1" },
        )}
        onClick={() => setSelectedBtn("btn1")}
      >
        تاریخ دقیق
      </span>
      <span
        className={cn(
          itemBaseClass,
          {
            "bg-white shadow-sm rounded-full text-sm": selectedBtn === "btn2",
          },
          { "bg-gray-200": selectedBtn !== "btn2" },
        )}
        onClick={() => setSelectedBtn("btn2")}
      >
        تاریخ منعطف
      </span>
    </div>
  );
};
