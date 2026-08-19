import BannerSlider from "@/components/BannerSlider";
import Nav from "@/components/Nav";
import Categorize from "@/components/Categorize";

import PostSlider from "@/components/PostSlider";

import HomeHeader from "@/components/HomeHeader";
import ExpandableDescription from "@/components/ExpandableDescription";
import DesktopHeader from "@/components/DesktopHeader";
import DesktopSearch from "@/components/DesktopSearch";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center pb-16">
      <img
        src="/gifs/map-banner-desktop.gif"
        className="aspect-[8/1] lg:aspect-[24/1] object-cover lg:w-full"
        alt="جستجو با نقشه در جاباما"
      />
      <div className="relative w-full h-full flex flex-col gap-4 items-center">
        <div className=" hidden flex-col items-center  relative w-full lg:flex gap-4 min-h-100 bg-red-200">
          <div className="absolute inset-0 z-0 overflow-hidden before:absolute before:inset-0 before:bg-black/35 before:z-10">
            <img
              src="/images/hero-section/a6df8286-541d-49f8-a4f0-d41cdc6c987c.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <DesktopHeader />
          <DesktopSearch />

          <h1 className="z-10 text-white text-lg mb-[170px] mt-[60px]">
            اجاره ویلا، سوئیت و انواع اقامتگاه در سراسر ایران
          </h1>
        </div>
        <HomeHeader />
        <div className="w-full p-4 flex flex-col lg:max-w-350 items-center gap-4">
          <BannerSlider className="lg:hidden mb-4" />
          <div className="w-full lg:w-[834px] lg:h-[244px] lg:mt-[-100px] lg:z-10 bg-white lg:flex lg:justify-center lg:items-center lg:rounded-xl lg:shadow-lg">
            <Nav />
          </div>
          <Categorize className="lg:hidden" />
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={[
              {
                src: "/images/city/5dd9b930-6fac-40d2-b0d0-25c1225f0b37.jpg",
                path: "",
                province: "مازندران",
                city: "رامسر",
                variant: "small",
              },
              {
                src: "/images/city/d3ae6348-8508-45f3-b2a5-7faa1301375a.jpg",
                path: "",
                province: "البرز",
                city: "کردان",
                variant: "small",
              },
              {
                src: "/images/city/47614494-282e-4e68-b5f3-ebf2c951622b.jpg",
                path: "",
                province: "تهران",
                city: "تهران",
                variant: "small",
              },
              {
                src: "/images/city/8c957f43-be03-45c5-bfac-d416944b6b13.jpg",
                path: "",
                province: "مازندران",
                city: "نوشهر",
                variant: "small",
              },
              {
                src: "/images/city/3db69d40-bfbc-4957-a00f-275832c09c83.jpg",
                path: "",
                province: "مازندران",
                city: "تنکابن",
                variant: "small",
              },
              {
                src: "/images/city/d00bfe3f-2ef2-410d-8c6c-18975ae38b7c.jpg",
                path: "",
                province: "مازندران",
                city: "چالوس",
                variant: "small",
              },
              {
                src: "/images/city/3c90c4d6-13ce-45b3-b03f-b23ba42859aa.jpg",
                path: "",
                province: "مازندران",
                city: "شیرگاه",
                variant: "small",
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                path: "",
                province: "گیلان",
                city: "رشت",
                variant: "small",
              },
              {
                src: "/images/city/12c7a1f8-de13-4e8d-bc58-f80e655b7da7.jpg",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "small",
              },
              {
                src: "/images/city/ae6db662-97fb-4b5f-bc4c-6c724ffe32fa.jpg",
                path: "",
                province: "گیلان",
                city: "تالش",
                variant: "small",
              },
              {
                src: "/images/city/a84cd23d-ea99-4457-bbff-adff03f28ecd.jpg",
                path: "",
                province: "گیلان",
                city: "بندرانزلی",
                variant: "small",
              },
            ]}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={[
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
            ]}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={[
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
            ]}
          />
          <PostSlider
            variant="large"
            sectionTitle="اقامت بلندمدت با تخفیف"
            subTitle=" اقامت طولانی‌تر با قیمت به‌صرفه‌تر"
            postSliderCards={[
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                title: "ویلا دوخوابه پچوک",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "large",
                star: 4.8,
              },
            ]}
          />
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={[
              {
                src: "/images/city/5dd9b930-6fac-40d2-b0d0-25c1225f0b37.jpg",
                path: "",
                province: "مازندران",
                city: "رامسر",
                variant: "small",
              },
              {
                src: "/images/city/d3ae6348-8508-45f3-b2a5-7faa1301375a.jpg",
                path: "",
                province: "البرز",
                city: "کردان",
                variant: "small",
              },
              {
                src: "/images/city/47614494-282e-4e68-b5f3-ebf2c951622b.jpg",
                path: "",
                province: "تهران",
                city: "تهران",
                variant: "small",
              },
              {
                src: "/images/city/8c957f43-be03-45c5-bfac-d416944b6b13.jpg",
                path: "",
                province: "مازندران",
                city: "نوشهر",
                variant: "small",
              },
              {
                src: "/images/city/3db69d40-bfbc-4957-a00f-275832c09c83.jpg",
                path: "",
                province: "مازندران",
                city: "تنکابن",
                variant: "small",
              },
              {
                src: "/images/city/d00bfe3f-2ef2-410d-8c6c-18975ae38b7c.jpg",
                path: "",
                province: "مازندران",
                city: "چالوس",
                variant: "small",
              },
              {
                src: "/images/city/3c90c4d6-13ce-45b3-b03f-b23ba42859aa.jpg",
                path: "",
                province: "مازندران",
                city: "شیرگاه",
                variant: "small",
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                path: "",
                province: "گیلان",
                city: "رشت",
                variant: "small",
              },
              {
                src: "/images/city/12c7a1f8-de13-4e8d-bc58-f80e655b7da7.jpg",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "small",
              },
              {
                src: "/images/city/ae6db662-97fb-4b5f-bc4c-6c724ffe32fa.jpg",
                path: "",
                province: "گیلان",
                city: "تالش",
                variant: "small",
              },
              {
                src: "/images/city/a84cd23d-ea99-4457-bbff-adff03f28ecd.jpg",
                path: "",
                province: "گیلان",
                city: "بندرانزلی",
                variant: "small",
              },
            ]}
          />{" "}
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={[
              {
                src: "/images/city/5dd9b930-6fac-40d2-b0d0-25c1225f0b37.jpg",
                path: "",
                province: "مازندران",
                city: "رامسر",
                variant: "small",
              },
              {
                src: "/images/city/d3ae6348-8508-45f3-b2a5-7faa1301375a.jpg",
                path: "",
                province: "البرز",
                city: "کردان",
                variant: "small",
              },
              {
                src: "/images/city/47614494-282e-4e68-b5f3-ebf2c951622b.jpg",
                path: "",
                province: "تهران",
                city: "تهران",
                variant: "small",
              },
              {
                src: "/images/city/8c957f43-be03-45c5-bfac-d416944b6b13.jpg",
                path: "",
                province: "مازندران",
                city: "نوشهر",
                variant: "small",
              },
              {
                src: "/images/city/3db69d40-bfbc-4957-a00f-275832c09c83.jpg",
                path: "",
                province: "مازندران",
                city: "تنکابن",
                variant: "small",
              },
              {
                src: "/images/city/d00bfe3f-2ef2-410d-8c6c-18975ae38b7c.jpg",
                path: "",
                province: "مازندران",
                city: "چالوس",
                variant: "small",
              },
              {
                src: "/images/city/3c90c4d6-13ce-45b3-b03f-b23ba42859aa.jpg",
                path: "",
                province: "مازندران",
                city: "شیرگاه",
                variant: "small",
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                path: "",
                province: "گیلان",
                city: "رشت",
                variant: "small",
              },
              {
                src: "/images/city/12c7a1f8-de13-4e8d-bc58-f80e655b7da7.jpg",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "small",
              },
              {
                src: "/images/city/ae6db662-97fb-4b5f-bc4c-6c724ffe32fa.jpg",
                path: "",
                province: "گیلان",
                city: "تالش",
                variant: "small",
              },
              {
                src: "/images/city/a84cd23d-ea99-4457-bbff-adff03f28ecd.jpg",
                path: "",
                province: "گیلان",
                city: "بندرانزلی",
                variant: "small",
              },
            ]}
          />{" "}
          <PostSlider
            sectionTitle="اجاره ویلا در محبوب‌ترین شهر‌ها"
            postSliderCards={[
              {
                src: "/images/city/5dd9b930-6fac-40d2-b0d0-25c1225f0b37.jpg",
                path: "",
                province: "مازندران",
                city: "رامسر",
                variant: "small",
              },
              {
                src: "/images/city/d3ae6348-8508-45f3-b2a5-7faa1301375a.jpg",
                path: "",
                province: "البرز",
                city: "کردان",
                variant: "small",
              },
              {
                src: "/images/city/47614494-282e-4e68-b5f3-ebf2c951622b.jpg",
                path: "",
                province: "تهران",
                city: "تهران",
                variant: "small",
              },
              {
                src: "/images/city/8c957f43-be03-45c5-bfac-d416944b6b13.jpg",
                path: "",
                province: "مازندران",
                city: "نوشهر",
                variant: "small",
              },
              {
                src: "/images/city/3db69d40-bfbc-4957-a00f-275832c09c83.jpg",
                path: "",
                province: "مازندران",
                city: "تنکابن",
                variant: "small",
              },
              {
                src: "/images/city/d00bfe3f-2ef2-410d-8c6c-18975ae38b7c.jpg",
                path: "",
                province: "مازندران",
                city: "چالوس",
                variant: "small",
              },
              {
                src: "/images/city/3c90c4d6-13ce-45b3-b03f-b23ba42859aa.jpg",
                path: "",
                province: "مازندران",
                city: "شیرگاه",
                variant: "small",
              },
              {
                src: "/images/city/2daefeaf-eb88-4354-a716-ee65adf2c6da.jpg",
                path: "",
                province: "گیلان",
                city: "رشت",
                variant: "small",
              },
              {
                src: "/images/city/12c7a1f8-de13-4e8d-bc58-f80e655b7da7.jpg",
                path: "",
                province: "مازندران",
                city: "سوادکوه",
                variant: "small",
              },
              {
                src: "/images/city/ae6db662-97fb-4b5f-bc4c-6c724ffe32fa.jpg",
                path: "",
                province: "گیلان",
                city: "تالش",
                variant: "small",
              },
              {
                src: "/images/city/a84cd23d-ea99-4457-bbff-adff03f28ecd.jpg",
                path: "",
                province: "گیلان",
                city: "بندرانزلی",
                variant: "small",
              },
            ]}
          />
          <ExpandableDescription />
        </div>
      </div>
    </main>
  );
}
