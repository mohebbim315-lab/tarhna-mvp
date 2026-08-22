import Link from "next/link";

const cards = [
  ["🖼️", "ساخت تصویر", "ایده‌ات را بنویس و دو خروجی حرفه‌ای بگیر.", "/create"],
  ["✨", "ویرایش عکس", "عکس خودت را آپلود کن و تغییرش بده.", "/edit"],
  ["🎨", "طراحی پوستر", "پوسترهای حرفه‌ای برای هر نوع مراسم و کسب‌وکار.", "/poster"],
  ["🏷️", "طراحی لوگو", "ایده برندت را به هویت بصری تبدیل کن.", "/logo"],
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-24 text-center">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200">
          ✨ ۵۰ اعتبار رایگان برای شروع
        </div>
        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          ایده‌ات رو بگو،
          <br />
          <span className="bg-gradient-to-l from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">طرحنا برات می‌سازه.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          ساخت و ویرایش تصویر، پوستر، لوگو و پرامپت با هوش مصنوعی؛ سریع، ساده و خلاقانه.
        </p>
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
          <div className="rounded-2xl bg-zinc-950 p-5 text-right">
            <p className="mb-4 text-sm text-zinc-500">چی می‌خوای بسازی؟</p>
            <div className="min-h-24 text-zinc-300">مثلاً: یک پرتره سینمایی حرفه‌ای برای پروفایل اینستاگرام...</div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/create" className="rounded-2xl bg-white px-6 py-3 font-bold text-black">✨ شروع ساخت</Link>
              <Link href="/gallery" className="rounded-2xl border border-white/10 px-6 py-3 font-bold">دیدن نمونه‌ها</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 pb-24 md:grid-cols-4">
        {cards.map(([icon, title, desc, href]) => (
          <Link key={title} href={href} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
            <div className="text-3xl">{icon}</div>
            <h2 className="mt-5 text-xl font-bold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}