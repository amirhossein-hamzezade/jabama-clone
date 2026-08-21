import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type navItemsProp = {
  logo: string;
  title: string;
  path: string;
  label?: { title: string; className?: string };
  calssName?: string;
};
const navItems: navItemsProp[] = [
  {
    logo: "/logo/nav/jabamaAi.png",
    title: "هوش مصنوعی",
    path: "",
    label: { title: "جدید" },
  },
  {
    logo: "/logo/nav/2bc92a3c-1c03-4aa6-8cfd-f9173f6324d4.png",
    title: "ویلا",
    path: "",
  },
  {
    logo: "/logo/nav/28ab97cf-22f0-4d54-b537-98f52a763a0e.png",
    title: "آپارتمان",
    path: "",
  },
  {
    logo: "/logo/nav/576b00be-20da-4f65-b62e-80d5c69443f9.png",
    title: "کلبه",
    path: "",
  },
  {
    logo: "/logo/nav/67c84144-6cf3-4ba2-98e0-71b3889e1219.png",
    title: "بومگردی",
    path: "",
  },
  {
    logo: "/logo/nav/e48c53a8-f3ee-413f-99ac-10128914c638.png",
    title: "استخر خاص",
    path: "",
  },
  {
    logo: "/logo/nav/0a8b3e4d-390d-47eb-93c3-ae64c6bb4b7e.png",
    title: "مثلثی",
    path: "",
  },
  {
    logo: "/logo/nav/3ee0057b-82b1-4372-a7c5-42414089134b.svg",
    title: "اینستاگرامی",
    path: "",
    label: { title: "وایرال" },
  },
  {
    logo: "/logo/nav/e9cbf037-51b3-485b-832b-e62cb7086ac3.png",
    title: "لوکس",
    path: "",
  },
  {
    logo: "/logo/nav/coins-2-colored.png",
    title: "ارزان",
    path: "",
  },
  {
    logo: "/logo/nav/db407149-e2b4-4220-a915-966d47dfc17f.png",
    title: "تفریحات",
    path: "",
    label: { title: "ایونت" },
  },
  {
    logo: "/logo/nav/37692432-ec31-4ccd-82a2-d76f15f79e56.png",
    title: "همه دسته‌ها",
    path: "",
  },
];

export default function Nav() {
  return (
    <nav className="w-full flex flex-wrap  justify-center 2xl:justify-between gap-x-5 gap-y-3 lg:items-center lg:gap-3 px-[16px]">
      {navItems.map((item, i) => {
        return (
          <NavItem
            path={item.path}
            logo={item.logo}
            title={item.title}
            key={i}
            label={item.label}
          />
        );
      })}
    </nav>
  );
}
export function NavItem({ logo, title, path, label }: navItemsProp) {
  return (
    <div className="relative flex flex-col justify-center  items-center border border-gray-200 rounded-lg h-21 w-21 2xl:h-[98px] 2xl:w-[98px] text-[12px] hover:cursor-pointer lg:h-22 lg:w-22">
      {label?.title && (
        <div
          className={cn(
            "absolute -top-1.75 -right-1.75 flex justify-center items-center rounded-sm px-1 text-nav-label-foreground bg-nav-label text-[12px]",
            label.className,
          )}
        >
          <span>{label.title}</span>
        </div>
      )}
      <Link
        href={path}
        className="w-full h-full flex flex-col justify-center items-center gap-2"
      >
        <Image src={logo} width={32} height={32} alt="" />
        <span className="text-center font-medium font">{title}</span>
      </Link>
    </div>
  );
}
