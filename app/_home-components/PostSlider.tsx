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
};

export default function PostSlider({
  sectionTitle,
  subTitle,
  postSliderCards,
  variant = "small",
}: PostSliderProps) {
  return (
    <section className="w-full flex flex-col justify-center py-4">
      <div className="flex justify-between items-center">
        {variant === "large" && (
          <>
            <div className="w-fit flex flex-col justify-between items-start gap-2">
              <h2 className="font-bold">{sectionTitle}</h2>
              <p className="text-gray-500 text-[12.25px]">{subTitle}</p>
            </div>
            <button className="border border-gray-300 py-2 px-2 text-[12.25px] rounded-lg font-bold">
              مشاهده همه
            </button>
          </>
        )}
        {variant === "small" && (
          <h2 className="font-bold lg:text-[1.31rem]">{sectionTitle}</h2>
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
          spaceBetween={variant === "small" ? 0 : 16}
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
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
