import React from "react";

import jabamaLogoFooter from "@/public/logo/footerLogos/jabama-logo.png";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import bazarLogoFooter from "@/public/logo/footerLogos/41eb30bc-b545-47b6-909b-d281718d05b6.png";
import googleplayLogoFooter from "@/public/logo/footerLogos/31885798-15fc-4e85-87c8-2b9be68c34cd.png";
import myketLogoFooter from "@/public/logo/footerLogos/abaa0896-cf74-456a-aacd-86339edb862b.png";
import iosDirectLogoFooter from "@/public/logo/footerLogos/ios-direct.png";
import sibcheLogoFooter from "@/public/logo/footerLogos/5d46027e-5bf5-46a8-a2b6-60c10fa949b2.png";
import sibappLogoFooter from "@/public/logo/footerLogos/52d222b8-b562-4921-b137-7e3216a1b2d0.png";

export const DownlaodAppSection = () => {
  return (
    <nav className="w-full pt-[44px]">
      <div className="w-full flex flex-col  lg:flex-row lg:justify-between items-center bg-[#1A1A1A] rounded-lg p-[20px] gap-4 ">
        <div className="w-full lg:w-auto flex justify-between lg:gap-4">
          <div className="flex items-center  gap-2.5">
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
          className="grid grid-cols-2 place-items-center gap-4 lg:grid-flow-col lg:grid-cols-none lg:grid-rows-1 mr-auto
            "
        >
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full">
              <Image
                src={bazarLogoFooter}
                width={undefined}
                height={undefined}
                alt=""
                className="w-full h-full lg:max-w-[127px]"
              />
            </a>
          </li>
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full">
              <Image
                src={googleplayLogoFooter}
                width={undefined}
                height={undefined}
                alt=""
                className="w-full h-full lg:max-w-[127px]"
              />
            </a>
          </li>
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full">
              <Image
                src={myketLogoFooter}
                width={178}
                height={56}
                alt=""
                className="w-full h-full lg:max-w-[127px]"
              />
            </a>
          </li>
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full">
              <Image
                src={iosDirectLogoFooter}
                width={undefined}
                height={undefined}
                alt=""
                className="w-full h-full lg:max-w-[127px]"
              />
            </a>
          </li>
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full ">
              <Image
                src={sibcheLogoFooter}
                width={undefined}
                height={undefined}
                alt=""
                className="w-full h-full"
              />
            </a>
          </li>
          <li className=" w-full h-[56px]  lg:h-[40px]">
            <a href="" className="w-full h-full">
              <Image
                src={sibappLogoFooter}
                width={undefined}
                height={undefined}
                alt=""
                className="w-full h-full lg:max-w-[127px]"
              />
            </a>
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
  );
};
