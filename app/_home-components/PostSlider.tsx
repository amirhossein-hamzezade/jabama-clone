"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Card, { CardProps } from "@/app/_home-components/Card";
import "swiper/css";
import "swiper/css/free-mode";
import { cn } from "@/lib/utils";

// type PostSliderCards = {
//   image: string;
//   title: string;
//   path: string;
//   province: string;
//   city: string;
//   variant: "large";
//   star: number;
//   roomCount?: number;
// }[];

// const postSliderCards: CardProps[] = [
//   {
//     src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
//     title: "ویلا دوخوابه پچوک",
//     path: "",
//     province: "مازندران",
//     city: "سوادکوه",
//     variant: "large",
//     star: 4.8,
//   },
//   {
//     src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
//     title: "ویلا دوخوابه پچوک",
//     path: "",
//     province: "مازندران",
//     city: "سوادکوه",
//     variant: "large",
//     star: 4.8,
//   },
//   {
//     src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
//     title: "ویلا دوخوابه پچوک",
//     path: "",
//     province: "مازندران",
//     city: "سوادکوه",
//     variant: "large",
//     star: 4.8,
//   },
//   {
//     src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
//     title: "ویلا دوخوابه پچوک",
//     path: "",
//     province: "مازندران",
//     city: "سوادکوه",
//     variant: "large",
//     star: 4.8,
//   },
//   {
//     src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
//     title: "ویلا دوخوابه پچوک",
//     path: "",
//     province: "مازندران",
//     city: "سوادکوه",
//     variant: "large",
//     star: 4.8,
//   },
// ];

type PostSliderProps = {
  sectionTitle: string;
  subTitle?: string;
  postSliderCards: CardProps[];
  variant?: "small" | "large";
  bgColor?: string;
};

export default function PostSlider({
  sectionTitle,
  subTitle,
  postSliderCards,
  variant = "small",
  bgColor,
}: PostSliderProps) {
  return (
    <section
      className={cn("w-full flex flex-col items-center py-4", {
        "lg:bg-amber-500": bgColor === "orange",
      })}
    >
      <div className="w-full flex flex-col justify-center lg:max-w-350">
        <div className="flex justify-between items-center">
          {variant === "large" && (
            <>
              <div className="w-fit flex flex-col justify-between items-start gap-2">
                <h2
                  className={cn("font-bold lg:px-[12px] px-[30px]", {
                    "lg:text-2xl": bgColor === "orange",
                  })}
                >
                  {sectionTitle}
                </h2>
                <p
                  className={cn(
                    "text-gray-500 text-[12.25px] lg:px-[12px] px-[30px]",
                    {
                      "lg:text-xl lg:text-[rgb(33,55,67)] lg:font-bold":
                        bgColor === "orange",
                    },
                  )}
                >
                  {subTitle}
                </p>
              </div>
              <button className="border border-gray-300 py-2 px-2 text-[12.25px] rounded-lg font-bold">
                مشاهده همه
              </button>
            </>
          )}
          {variant === "small" && (
            <h2 className="font-bold lg:text-[1.31rem] lg:px-[5px] px-[25px]">
              {sectionTitle}
            </h2>
          )}
        </div>

        <div
          className={cn("w-full py-4", {
            "py-2 text-sm": variant === "small",
          })}
        >
          <Swiper
            modules={[FreeMode]}
            slidesPerView={"auto"}
            spaceBetween={variant === "small" ? 0 : 6}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            className="w-full"
            freeMode={{
              enabled: true,
              sticky: false,
              momentum: true,
              momentumBounce: false,
            }}
          >
            {postSliderCards.map((item, i) => {
              return (
                <SwiperSlide
                  key={i}
                  className={cn(
                    "relative w-auto! h-24  rounded-lg flex items-center justify-center  py-2 px-2 mt-2",
                    { "px-1": variant === "small" },
                  )}
                >
                  <Card
                    // src={item.src}
                    // variant={item.variant}
                    // province={item.province}
                    // city={item.city}
                    // title={item.title}
                    // star={item.star}
                    // path={item.path}
                    {...item}
                    bgColor={bgColor}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
