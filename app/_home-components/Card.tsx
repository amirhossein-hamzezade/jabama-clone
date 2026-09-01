import { formatPrice } from "@/lib/utility";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type CommonProps = {
  src: string;
  province: string;
  city: string;
  path: string;
  bgColor?: string;
};

type SmallVariantCard = CommonProps & {
  variant?: "small";
};

type LargeVariantProps = CommonProps & {
  variant: "large";
  title: string;
  star: number;
  roomCount?: number;
  price?: number;
};

export type CardProps = SmallVariantCard | LargeVariantProps;

export default function Card(props: CardProps) {
  const variant = props.variant || "small";
  const bgColor = props.bgColor;
  switch (variant) {
    case "small": {
      const { province, city, src } = props as SmallVariantCard;
      return (
        <div className="max-w-27 flex flex-col gap-4 aspect-4/5  lg:max-w-42.25 bg-white">
          <Image
            src={src}
            width={130}
            height={130}
            alt=""
            className="w-full h-[135] rounded-lg lg:h-50.5 lg:w-42.25"
          />
          <span className="font-bold text-sm lg:text-[1rem]">
            {city}،
            <span className="font-normal text-gray-500">{` ${province}`}</span>
          </span>
        </div>
      );
    }
    case "large": {
      const { src, title, roomCount, price } = props as LargeVariantProps;
      return (
        <div className="min-w-[233.75]  w-[60vw] lg:w-64 flex flex-col gap-2 rounded-lg bg-white">
          <Image
            src={src}
            width={100}
            height={100}
            unoptimized
            alt=""
            className={cn("w-full h-full  aspect-3/2 rounded-xl", {
              "lg:rounded-tr-lg lg:rounded-tl-lg lg:rounded-bl-none lg:rounded-br-none":
                bgColor === "orange",
            })}
          />
          <div
            className={cn("flex justify-start items-center gap-1", {
              "px-[12px]": bgColor === "orange",
            })}
          >
            <Star fill="orange" color="orange" width={15} height={15} />
            <span className="flex justify-center items-center mt-1">4.8</span>
            <span className="mt-1 text-gray-500">(۳۸ دیدگاه)</span>
          </div>
          <h2
            className={cn("font-bold text-lg truncate ", {
              "px-3": bgColor === "orange",
            })}
          >
            {title}
          </h2>
          <div
            className={cn("flex flex-col", {
              "px-[12px]": bgColor === "orange",
            })}
          >
            <span className="text-foreground-muted text-sm">
              استان مازندران، سوادکوه {roomCount && ` . ${roomCount} اتاق`}
            </span>
            <div className={cn("flex", { "py-4": bgColor === "orange" })}>
              <span className="font-bold">
                {price ? formatPrice(price) : ""} تومان
              </span>
              <span className="text-gray-400">/&nbsp;هرشب</span>
            </div>
          </div>
        </div>
      );
    }
  }
}
