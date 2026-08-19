import BannerSlider from "@/app/_home-components/BannerSlider";
import Nav from "@/app/_home-components/Nav";
import Categorize from "@/app/_home-components/Categorize";

import PostSlider from "@/app/_home-components/PostSlider";

import HomeHeader from "@/app/_home-components/HomeHeader";
import ExpandableDescription from "@/app/_home-components/ExpandableDescription";
import DesktopHeader from "@/app/_home-components/DesktopHeader";
import DesktopSearch from "@/app/_home-components/DesktopSearch";
import { postSliderCardsSmall } from "@/data/postSliderCards-small";
import { postSliderCardsLarge } from "@/data/postSliderCards-large";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center pb-16">
      <Image
        width={2550}
        height={106}
        src="/gifs/map-banner-desktop.gif"
        className="aspect-8/1 lg:aspect-24/1 object-cover lg:w-full"
        alt="جستجو با نقشه در جاباما"
      />
      <div className="relative w-full h-full flex flex-col gap-4 items-center">
        <div className=" hidden flex-col items-center  relative w-full lg:flex gap-4 min-h-100 bg-red-200">
          <div className="absolute inset-0 z-0 overflow-hidden before:absolute before:inset-0 before:bg-black/35 before:z-10">
            <Image
              width={2550}
              height={1020}
              src="/images/hero-section/a6df8286-541d-49f8-a4f0-d41cdc6c987c.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <DesktopHeader />
          <DesktopSearch />

          <h1 className="z-5 text-white text-lg mb-42.5 mt-15">
            اجاره ویلا، سوئیت و انواع اقامتگاه در سراسر ایران
          </h1>
        </div>
        <HomeHeader />
        <div className="w-full p-4 flex flex-col lg:max-w-350 items-center gap-4">
          <BannerSlider className="lg:hidden mb-4" />
          <div className="w-full lg:w-208.5 lg:h-61 lg:-mt-25 lg:z-9 bg-white lg:flex lg:justify-center lg:items-center lg:rounded-xl lg:shadow-lg">
            <Nav />
          </div>
          <Categorize className="lg:hidden" />
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={postSliderCardsSmall}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={postSliderCardsLarge}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={postSliderCardsLarge}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={postSliderCardsLarge}
          />
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={postSliderCardsSmall}
          />{" "}
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={postSliderCardsSmall}
          />{" "}
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={postSliderCardsSmall}
          />
          <ExpandableDescription />
        </div>
      </div>
    </main>
  );
}
