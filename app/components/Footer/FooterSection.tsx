import Link from "next/link";
import { footerLinks } from "./Footer";

export const FooterSection = (sectionObj: footerLinks) => {
  const header = sectionObj.header;
  const linkArr = sectionObj.links;
  return (
    <section className="w-full flex flex-col items-center gap-3">
      <header className="w-full">
        <h3 className="text-lg font-bold ">{header}</h3>
      </header>
      <ul className="w-full flex gap-2 flex-wrap lg:flex-col ">
        {linkArr.map((item, i) => {
          return (
            <li className="shrink-0" key={i}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
