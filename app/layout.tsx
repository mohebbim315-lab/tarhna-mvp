import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "طرحنا | ایده‌ات رو بگو، طرحنا برات می‌سازه",
  description: "ساخت تصویر، ویرایش عکس، پوستر، لوگو و پرامپت با هوش مصنوعی"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-2xl font-black">طرحنا<span className="text-fuchsia-400">.</span></Link>
            <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
              <Link href="/create">ساخت تصویر</Link>
              <Link href="/edit">ویرایش عکس</Link>
              <Link href="/poster">پوستر</Link>
              <Link href="/logo">لوگو</Link>
              <Link href="/prompts">پرامپت‌ها</Link>
              <Link href="/gallery">گالری</Link>
            </nav>
            <Link href="/dashboard" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-black">حساب من</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}