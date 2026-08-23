import React from "react";
import { FooterSection } from "./FooterSection";
import JabamaLogo from "./logos/JabamaLogo";
import LinkedInIcon from "./logos/LinkedinIcon";
import TwitterIcon from "./logos/TwitterIcon";
import InstagramIcon from "./logos/InstagramIcon";
import { DownlaodAppSection } from "./DownlaodAppSection";

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
    <footer className="bg-[#f5f5f5] border-t   border-[#ddd] w-full flex flex-col items-center h-auto px-[16px] pt-[24px] pb-[64px] lg:py-[56px]">
      <section className="w-full max-w-350 ">
        <nav className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 ">
          <FooterSection {...footerLinksData[0]} />
          <FooterSection {...footerLinksData[1]} />
          <FooterSection {...footerLinksData[2]} />
          <section className="w-full flex flex-col items-center gap-4 ">
            <JabamaLogo className="" />
            <span className="text-sm font-semibold text-[#171717]">
              جاباما را در شبکه‌های اجتماعی دنبال کنید:
            </span>
            <div className="flex flex-wrap justify-between gap-2">
              <a
                href=""
                className="h-10 w-10 flex justify-center items-center bg-[#E6E6E6] rounded-lg"
              >
                <LinkedInIcon />
              </a>
              <a
                href=""
                className="h-10 w-10 flex justify-center items-center bg-[#E6E6E6] rounded-lg"
              >
                <TwitterIcon />
              </a>
              <a
                href=""
                className="h-10 w-10 flex justify-center items-center bg-[#E6E6E6] rounded-lg"
              >
                <InstagramIcon />
              </a>
            </div>
          </section>
        </nav>
        <DownlaodAppSection />
      </section>
    </footer>
  );
};
