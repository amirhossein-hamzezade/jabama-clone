import { Info } from "lucide-react";

import { Tag } from "./_desktop-search/DesktopSearchDropdown ";

const cityListData: string[] = [
  "تهران",
  "رامسر",
  "کردان",
  "چالوس",
  "متل قو (سلمانشهر)",
];
export type DestinationDropDownProps = {
  className?: string;
};

export const DestinationDropDown = ({
  className,
}: DestinationDropDownProps) => {
  return (
    <div
      className={`flex flex-col gap-6 items-center w-full h-full rounded-lg overflow-y-auto ${className ? className : "p-3"}`}
    >
      <div className="flex justify-center w-full gap-1">
        <Info className="" />
        <span className="text-sm text-gray-500">
          می‌توانید شهر، استان، محله، جاذبه، نام و یا دسته‌بندی اقامتگاه را
          جست‌وجو کنید.
        </span>
      </div>
      <div className="flex flex-col w-full gap-[14px]">
        <div className="flex flex-col w-full gap-[14px]">
          <h2 className="text-sm text-gray-600 font-bold">آخرین جستجو‌ها</h2>
          <ul className="flex flex-wrap gap-2">
            {cityListData.map((city, i) => {
              return <Tag cityName={city} key={i} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full gap-[14px]">
          <h2 className="text-sm text-gray-600 font-bold">محبوب‌ترین مقصدها</h2>
          <ul className="flex flex-wrap gap-2">
            {cityListData.map((city, i) => {
              return <Tag cityName={city} key={i} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
