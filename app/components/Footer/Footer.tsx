import Link from "next/link";
import React from "react";
import { FooterSection } from "./FooterSection";
import JabamaLogo from "./logos/JabamaLogo";
import LinkedInIcon from "./logos/LinkedinIcon";
import TwitterIcon from "./logos/TwitterIcon";
import InstagramIcon from "./logos/InstagramIcon";
import jabamaLogoFooter from "@/public/logo/footerLogos/jabama-logo.png";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import bazarLogoFooter from "@/public/logo/footerLogos/41eb30bc-b545-47b6-909b-d281718d05b6.png";
import googleplayLogoFooter from "@/public/logo/footerLogos/31885798-15fc-4e85-87c8-2b9be68c34cd.png";
import myketLogoFooter from "@/public/logo/footerLogos/abaa0896-cf74-456a-aacd-86339edb862b.png";
import iosDirectLogoFooter from "@/public/logo/footerLogos/ios-direct.png";
import sibcheLogoFooter from "@/public/logo/footerLogos/5d46027e-5bf5-46a8-a2b6-60c10fa949b2.png";
import sibappLogoFooter from "@/public/logo/footerLogos/52d222b8-b562-4921-b137-7e3216a1b2d0.png";

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
          <div className="w-full flex flex-col items-center gap-4">
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
          </div>
        </nav>
        <nav className="w-full">
          <div className="w-full flex flex-col  lg:flex-row bg-[#1A1A1A] rounded-lg p-[20px] gap-4 ">
            <div className="flex justify-between lg:gap-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src={jabamaLogoFooter}
                  alt="jabama Logo"
                  className="shrink-0"
                />
                <h3 className="text-lg font-semibold text-white whitespace-nowrap">
                  دانلود اپلیکیشن جاباما
                </h3>
              </div>
              <a
                href=""
                className="flex justify-center items-center bg-gray-600 rounded-lg h-11 w-11 lg:hidden"
              >
                <ChevronLeft color="white" height={30} width={30} />
              </a>
            </div>
            <ul
              className="grid grid-cols-2 place-items-center gap-4 lg:grid-flow-col lg:grid-cols-none lg:grid-rows-1
            "
            >
              <li>
                <a href="">
                  <Image
                    src={bazarLogoFooter}
                    width={undefined}
                    height={undefined}
                    alt=""
                    className="lg:h-[40px]"
                  />
                </a>
              </li>
              <li className="">
                <Image
                  src={googleplayLogoFooter}
                  width={undefined}
                  height={undefined}
                  alt=""
                  className="lg:h-[40px]"
                />
              </li>
              <li>
                <Image
                  src={myketLogoFooter}
                  width={178}
                  height={56}
                  alt=""
                  className="lg:h-[40px]"
                />
              </li>
              <li>
                <Image
                  src={iosDirectLogoFooter}
                  width={undefined}
                  height={undefined}
                  alt=""
                  className="lg:h-[40px]"
                />
              </li>
              <li>
                <Image
                  src={sibcheLogoFooter}
                  width={undefined}
                  height={undefined}
                  alt=""
                  className="lg:h-[40px]"
                />
              </li>
              <li>
                <Image
                  src={sibappLogoFooter}
                  width={undefined}
                  height={undefined}
                  alt=""
                  className="lg:h-[40px]"
                />
              </li>
            </ul>
            <a
              href=""
              className="hidden lg:flex justify-center items-center bg-gray-600 rounded-lg h-11 w-11 shrink-0"
            >
              <ChevronLeft color="white" height={30} width={30} />
            </a>
          </div>
        </nav>
      </section>
    </footer>
  );
};
