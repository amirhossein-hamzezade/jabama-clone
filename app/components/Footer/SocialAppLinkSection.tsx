import React from "react";
import JabamaLogo from "./logos/JabamaLogo";
import LinkedInIcon from "./logos/LinkedinIcon";
import TwitterIcon from "./logos/TwitterIcon";
import InstagramIcon from "./logos/InstagramIcon";

export const SocialAppLinkSection = () => {
  return (
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
  );
};
