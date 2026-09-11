"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const SLIDES = [
  {
    id: 1,
    image: "/images/3e33fbf8-a7b3-44bf-a18e-6336f7643169.png",
    link: "/destination-1",
  },
  {
    id: 2,
    image: "/images/205a8b1a-9cd2-4f49-907b-5244bcdef141.png",
    link: "/destination-2",
  },
  {
    id: 3,
    image: "/images/37846f32-fa87-4e31-b71c-515a6e915204.png",
    link: "/destination-3",
  },
  {
    id: 4,
    image: "/images/a234d5be-f8f7-41e2-95d5-146c059675a6.png",
    link: "/destination-4",
  },
  {
    id: 5,
    image: "/images/bfa33e65-1714-420d-86a4-26e04d59ae74.png",
    link: "/destination-5",
  },
  {
    id: 6,
    image: "/images/d96f8ef9-a48c-4832-b2c0-d6ade9e31711.png",
    link: "/destination-6",
  },
];

type BannerSliderProps = {
  className?: string;
};

export default function BannerSlider({ className }: BannerSliderProps) {
  return (
    <section className={`w-full ${className}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full rounded-xl overflow-hidden"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a
              href={slide.link}
              className="block w-full aspect-[5/1.3] relative group"
            >
              <Image
                src={slide.image}
                alt={`Banner ${slide.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                fill
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
