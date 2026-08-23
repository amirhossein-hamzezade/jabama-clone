import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileNavMenu from "@/app/_home-components/MobileNavMenu";
import { Footer } from "@/components/Footer/Footer";

const vazirFont = localFont({
  src: [
    {
      path: "../public/fonts/Vazirmatn-FD-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Vazirmatn-FD-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: "خانه با ما | اجاره ویلا، سوئیت و اقامتگاه بوم گردی",
  description: "سامانه رزرو آنلاین اقامتگاه، ویلا و کلبه در سراسر ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirFont.variable} antialiased`}>
      <body className="font-sans w-full h-full">
        <div className="w-full h-full flex flex-col items-center">
          {children}
          <Footer />
          <MobileNavMenu />
        </div>
      </body>
    </html>
  );
}
