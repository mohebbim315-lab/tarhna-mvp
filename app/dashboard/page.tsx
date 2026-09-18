"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="mx-auto max-w-6xl">

        <header className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black">
            طرحنا
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            صفحه اصلی
          </Link>
        </header>

        <section className="mb-8">
          <h1 className="text-3xl font-black">داشبورد من</h1>
          <p className="mt-2 text-zinc-400">
            مدیریت اعتبارها، سفارش‌ها و خدمات طرحنا
          </p>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">اعتبار باقی‌مانده</p>
            <p className="mt-3 text-4xl font-black">۵۰</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">تصاویر ساخته‌شده</p>
            <p className="mt-3 text-4xl font-black">۰</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">سفارش‌ها</p>
            <p className="mt-3 text-4xl font-black">۰</p>
          </div>
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">شروع یک پروژه جدید</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <Link
              href="/create"
              className="rounded-2xl bg-white px-5 py-6 text-center font-bold text-black hover:scale-[1.02]"
            >
              ساخت تصویر
            </Link>

            <Link
              href="/edit"
              className="rounded-2xl bg-white/10 px-5 py-6 text-center font-bold hover:bg-white/20"
            >
              ویرایش تصویر
            </Link>

            <Link
              href="/poster"
              className="rounded-2xl bg-white/10 px-5 py-6 text-center font-bold hover:bg-white/20"
            >
              طراحی پوستر
            </Link>

            <Link
              href="/logo"
              className="rounded-2xl bg-white/10 px-5 py-6 text-center font-bold hover:bg-white/20"
            >
              طراحی لوگو
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">فعالیت‌های اخیر</h2>

          <div className="mt-5 rounded-2xl border border-dashed border-white/10 p-10 text-center text-zinc-500">
            هنوز فعالیتی ثبت نشده است.
          </div>
        </section>

      </div>
    </main>
  );

}
