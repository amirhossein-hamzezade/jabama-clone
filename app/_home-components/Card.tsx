import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type CommonProps = {
  src: string;
  province: string;
  city: string;
  path: string;
};

type SmallVariantCard = CommonProps & {
  variant?: "small";
};

type LargeVariantProps = CommonProps & {
  variant: "large";
  title: string;
  star: number;
  roomCount?: number;
};

export type CardProps = SmallVariantCard | LargeVariantProps;

export default function Card(props: CardProps) {
  const variant = props.variant || "small";
  switch (variant) {
    case "small": {
      const { province, city, src } = props as SmallVariantCard;
      return (
        <div className="max-w-27 flex flex-col gap-4 aspect-4/5 lg:max-w-42.25">
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
      const { src, title, roomCount } = props as LargeVariantProps;
      return (
        <div className="min-w-[233.75] flex flex-col gap-2">
          <Image
            src={src}
            width={100}
            height={100}
            alt=""
            className="w-full h-full rounded-lg aspect-3/2"
          />
          <div className="flex justify-start items-center gap-1">
            <Star fill="orange" color="orange" width={15} height={15} />
            <span className="flex justify-center items-center mt-1">4.8</span>
            <span className="mt-1 text-gray-500">(۳۸ دیدگاه)</span>
          </div>
          <h2 className="font-bold text-lg">{title}</h2>
          <div className="flex flex-col">
            <span className="text-foreground-muted text-sm">
              استان مازندران، سوادکوه {roomCount && ` . ${roomCount} اتاق`}
            </span>
            <div className="flex">
              <span className="font-bold">1٬600٬000 تومان</span>
              <span className="text-gray-400">/&nbsp;هرشب</span>
            </div>
          </div>
        </div>
      );
    }
  }
}
