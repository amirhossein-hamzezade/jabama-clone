import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirFont = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  weight: ["300", "400", "500", "700", "900"],
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
