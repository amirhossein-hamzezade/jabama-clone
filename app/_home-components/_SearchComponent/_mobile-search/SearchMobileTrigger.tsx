import { Search } from "lucide-react";

type SearchMobileTriggerProps = {
  onTrigger?: () => void; // Optional so it doesn't break if used elsewhere without a click action
};

export default function SearchMobileTrigger({
  onTrigger,
}: SearchMobileTriggerProps) {
  return (
    <div className=" w-full flex justify-center items-center py-4">
      <div
        className="w-full flex justify-start gap-2 px-4 py-1  items-center rounded-full shadow-sm cursor-pointer"
        onClick={onTrigger}
      >
        <Search />
        <div className="flex flex-col">
          <span className="text-[0.77rem] font-bold">مقصد سفرت کجاست؟</span>
          <span className="text-[0.77rem]">جستجو مقصد سفر، تاریخ</span>
        </div>
      </div>
    </div>
  );
}
