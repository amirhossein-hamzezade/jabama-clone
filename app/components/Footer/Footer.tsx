import Link from "next/link";
import React from "react";
import { FooterSection } from "./FooterSection";

export type footerLinks = {
  header: string;
  links: { title: string; link: string }[];
};

const footerLinksData: footerLinks[] = [
  {
    header: "نحوه رزرو اقامتگاه",
    links: [
      { title: "راهنمای رزرو اقامتگاه", link: "" },
      { title: "شیوه‌های پرداخت", link: "" },
      { title: "لغو رزرو", link: "" },
    ],
  },
  {
    header: "خدمات مشتریان",
    links: [
      { title: "پشتیبانی هوشمند", link: "" },
      { title: "پرسش‌های متداول میزبان", link: "" },
      { title: "چطور اقامتگاه ثبت کنم؟", link: "" },
      { title: "حریم شخصی کاربران", link: "" },
    ],
  },
  {
    header: "با جاباما",
    links: [
      { title: "ثبت‌نام میزبان", link: "" },
      { title: "راهکارهای سازمانی", link: "" },
      { title: "مجله جاباما", link: "" },
      { title: "درباره جاباما", link: "" },
      { title: "قوانین جاباما", link: "" },
      { title: "تماس با ما", link: "" },
      { title: "فرصت‌های شغلی", link: "" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] border-t  border-[#ddd] w-full flex flex-col items-center h-108 px-[16px] py-[24px] lg:py-[56px]">
      <section className="w-full">
        <nav className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 ">
          <FooterSection {...footerLinksData[0]} />
          <FooterSection {...footerLinksData[1]} />
          <FooterSection {...footerLinksData[2]} />
        </nav>
      </section>
    </footer>
  );
};
