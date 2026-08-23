import Link from "next/link";

type LinkTag = {
  title: string;
  link: string;
};

const LinkTagData: LinkTag[] = [
  { title: "اجاره ویلا شمال", link: "" },
  { title: "اجاره بومگردی جنوب", link: "" },
  { title: "اجاره ویلا رامسر", link: "" },
  { title: "هتل جنگلی چالدره", link: "" },
  { title: "اجاره ویلا کردان", link: "" },
  { title: "سوئیت مشهد", link: "" },
  { title: "متل قو", link: "" },
  { title: "مسافرخانه مشهد", link: "" },
  { title: "زانوس", link: "" },
  { title: "مسافرخانه تهران", link: "" },
  { title: "اجاره سوئیت در تهران", link: "" },
  { title: "اقامتگاه رشت", link: "" },
  { title: "ویلا انزلی", link: "" },
  { title: "اجاره ویلا در فیلبند", link: "" },
  { title: "اجاره ویلا نور", link: "" },
  { title: "اجاره ویلا در کوهسار کردان", link: "" },
  { title: "بومگردی قشم", link: "" },
  { title: "اقامتگاه بومگردی", link: "" },
  { title: "اجاره ویلا در کیش", link: "" },
];

const PopularDestinations = () => {
  return (
    <div className="flex w-full px-[20px] pb-[24px] flex-col gap-[16px] max-w-350">
      <h2 className="font-semibold text-[rgb(33,55,67)]">
        از شمال تا جنوب ایران، جاباما جوره
      </h2>
      <ul className="flex flex-wrap gap-3">
        {LinkTagData.map((tag, i) => {
          return (
            <li key={i}>
              <Link
                href={tag.link}
                className="px-[8px] py-[4px] bg-[#f5f5f5] text-[#171717] text-[13px]  rounded-full w-auto"
              >
                {tag.title}
              </Link>
            </li>
          );
        })}
        <li className="shrink-0"></li>
      </ul>
    </div>
  );
};

export default PopularDestinations;
