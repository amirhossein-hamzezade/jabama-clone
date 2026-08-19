import Link from "next/link";
import React from "react";

export default function DesktopHeader() {
  return (
    <div className="w-full flex justify-between items-center z-20 py-4 px-2 max-w-350">
      <img src="/logo/jabama-white-logo.a57ce4c4.svg" alt="" />
      <div className="flex justify-center items-center w-fit gap-4">
        <Link
          href={""}
          className="flex justify-center items-center border w-fit h-8 px-3 rounded-lg text-white text-sm"
        >
          راهکارهای سازمانی
        </Link>
        <Link
          href={""}
          className="flex justify-center items-center border w-fit h-8 px-3 rounded-lg text-white text-sm"
        >
          ثبت‌نام میزبان{" "}
        </Link>

        <button className="bg-white rounded-lg px-2 w-fit h-8 text-sm">
          ورود یا ثبت‌نام
        </button>
      </div>
    </div>
  );
}
