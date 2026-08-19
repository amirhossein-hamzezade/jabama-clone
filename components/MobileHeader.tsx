import { LogIn } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MobileHeader() {
  return (
    <div
      className={`w-full flex justify-between items-center lg:hidden px-2 py-4`}
    >
      <div className="flex flex-col gap-2">
        <img
          className="w-24"
          src="/logo/jabama-logo.328534ba.svg"
          alt="جاباما"
        />
        <span className="text-xs text-gray-500">
          اجاره ویلا و انواع اقامتگاه در سراسر ایران
        </span>
      </div>
      <div className="flex justify-center items-center gap-2">
        <LogIn className="-scale-x-100" />
        <Link href="" className="hover:cursor-pointer text-sm">
          ورود یا ثبت‌نام
        </Link>
      </div>
    </div>
  );
}
