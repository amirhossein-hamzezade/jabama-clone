"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function ExpandableDescription() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="font-bold">
        اجاره ویلا، سوئیت، آپارتمان، کلبه، بومگردی و انواع اقامتگاه در شمال و
        سراسر ایران از جاباما
      </h2>
      <div className="w-full flex flex-col justify-center items-start ">
        <p
          className={cn("overflow-hidden h-20 text-foreground-muted text-sm", {
            "h-fit": open,
          })}
        >
          &apos سفر همیشه با خودش یک &quotحالِ خوش&quot دارد، یا لبریز از انرژی
          هستی و دل به جاده می‌زنی ‌یا سفر می‌کنی تا این &quotحالِ خوش&quot را
          در جایی دورتر و زیر آسمانی آبی‌تر پیدا کنی. اگر اینجایی، یعنی به دنبال
          همین &quotحالِ خوشِ سفر&quot آمده‌ای! اینجا دستت برای اجاره ویلا در هر
          جای ایران،‌ از شمال تا جنوب، از شرق تا غرب ایران زیبا و با هر امکاناتی
          باز است؛ به فکر اجاره ویلا در شمال برای خوشگذرانی لب دریا هستی؟ یک
          کلبه جنگلی دنج یا ویلا استخردار برای سفر با دوستان می‌خواهی؟ شاید هم
          یک سوئیت در کیش برای سفر خانوادگی؟ از بین صدها اقامتگاه‌ها در جاباما
          با دیدن تصاویر، خواندن نظرات مهمان‌های قبلی و مقایسه قیمت‌ها و
          امکانات، بهترینش را انتخاب کن.&apos
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-center items-center gap-1.5"
        >
          مشاهده همه{" "}
          {open ? (
            <ChevronUp className="w-3 h-3 text-gray-500" />
          ) : (
            <ChevronDown className="w-3 h-3" />
          )}
        </button>
      </div>
    </section>
  );
}
