"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { cn } from "@/lib/utils";

const categorizeItems = [
  {
    logo: "/logo/categorize/scale-category.png",
    title: "قیمت منصفانه",
    path: "",
    label: { title: "تضمین قیمت", className: "bg-nav-label" },
  },
  {
    logo: "/logo/categorize/long-stay-category.png",
    title: "تخفیف بلندمدت",
    path: "",
    label: { title: "بالای ۳ روز", className: "bg-red-500" },
  },
  {
    logo: "/logo/categorize/Programs-Production_voucher.png",
    title: "تخفیف لحظه آخری",
    path: "",
    label: { title: "شگفت انگیز", className: "bg-red-500" },
  },
  {
    logo: "/logo/categorize/253669e1-f6c3-4c32-8027-f471350599e8.png",
    title: "آنی و قطعی",
    path: "",
  },
  {
    logo: "/logo/categorize/7fc11132-86a5-4851-b27e-807ea3ef73b7.png",
    title: "کمیاب و پرتقاضا",
    path: "",
  },
];

type CategorizeProps = {
  className?: string;
};

export default function Categorize({ className }: CategorizeProps) {
  return (
    <section
      className={`flex flex-col justify-center  py-4 border-b-8 border-gray-100 ${className}`}
    >
      <h2 className="font-bold">انتخاب بر اساس ویژگی</h2>
      <div className="w-full py-4">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={16}
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
          {categorizeItems.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className="relative w-auto! h-24  rounded-lg flex items-center justify-center border border-gray-200 py-2 px-2 mt-2"
              >
                <div className="flex justify-center items-center gap-2 shrink-0 w-auto py-1">
                  <Image src={item.logo} width={32} height={32} alt="" />
                  <span className="text-xs">{item.title}</span>
                </div>
                {item?.label && (
                  <div
                    className={cn(
                      "absolute w-auto flex justify-center items-center bg-red-300 -top-1.75 -right-1.75 px-1 py-0.5  rounded-sm",
                      item.label.className,
                    )}
                  >
                    <span className="text-xs shrink-0 w-auto leading-none text-nav-label-foreground">
                      {item.label.title}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
