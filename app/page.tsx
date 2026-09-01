import BannerSlider from "@/app/_home-components/BannerSlider";
import Nav from "@/app/_home-components/Nav";
import Categorize from "@/app/_home-components/Categorize";

import PostSlider from "@/app/_home-components/PostSlider";

import HomeHeader from "@/app/_home-components/HomeHeader";
import ExpandableDescription from "@/app/_home-components/ExpandableDescription";
import DesktopHeader from "@/app/_home-components/DesktopHeader";
import DesktopSearch from "@/app/_home-components/_SearchComponent/_desktop-search/DesktopSearch";
import { postSliderCardsSmall } from "@/data/postSliderCards-small";
import {
  postSliderCardsLarge,
  postSliderCardsLarge1,
  postSliderCardsLarge2,
} from "@/data/postSliderCards-large";
import Image from "next/image";
import PopularDestinations from "./_home-components/PopularDestinations";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center pb-16 ">
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
        <div className="w-full flex flex-col  items-center gap-4 ">
          <BannerSlider className="lg:hidden mb-4" />
          <div className="w-full lg:w-208.5 2xl:w-full 2xl:max-w-350 2xl:h-[130px] lg:h-61 lg:-mt-25 lg:z-9 bg-white lg:flex lg:justify-center lg:items-center lg:rounded-xl lg:shadow-lg">
            <Nav />
          </div>
          <Categorize className="lg:hidden" />
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={postSliderCardsSmall}
          />
          <PostSlider
            variant="large"
            sectionTitle="قیمت منصفانه"
            subTitle="قیمت متناسب با میزان بازدید، تقاضا و امکانات"
            postSliderCards={postSliderCardsLarge1}
            bgColor="orange"
          />
          <PostSlider
            variant="large"
            sectionTitle="آخر هفته تو استخر"
            subTitle="بهترین ویلاهای استخردار نزدیک تهران"
            postSliderCards={postSliderCardsLarge2}
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
          <PopularDestinations />
        </div>
      </div>
    </main>
  );
}
