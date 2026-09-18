import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "طرحنا | استودیو خلاقیت با هوش مصنوعی",
  description: "ساخت تصویر، پوستر، لوگو و ابزارهای هوش مصنوعی در طرحنا",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
