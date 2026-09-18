"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: "✨",
    title: "ساخت تصویر با هوش مصنوعی",
    description: "ایده‌ات را به یک تصویر حرفه‌ای و چشم‌نواز تبدیل کن.",
    href: "/create",
    tag: "محبوب",
  },
  {
    icon: "🎨",
    title: "طراحی پوستر",
    description: "پوسترهای حرفه‌ای برای تبلیغات، شبکه‌های اجتماعی و کسب‌وکار.",
    href: "/poster",
    tag: "حرفه‌ای",
  },
  {
    icon: "🪄",
    title: "ویرایش عکس",
    description: "حذف، تغییر و بهبود تصاویر با کمک هوش مصنوعی.",
    href: "/edit",
    tag: "جدید",
  },
  {
    icon: "💎",
    title: "طراحی لوگو",
    description: "برای برندت یک هویت بصری خاص و حرفه‌ای بساز.",
    href: "/logo",
    tag: "ویژه",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main
      dir="rtl"
      className={
        dark
          ? "min-h-screen overflow-hidden bg-[#07070a] text-white"
          : "min-h-screen overflow-hidden bg-[#f7f7fa] text-[#17171c]"
      }
    >
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute right-[-120px] top-[80px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[100px]" />
        <div className="absolute left-[-100px] top-[420px] h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-[100px]" />
      </div>

      {/* Header */}
      <header
        className={
          dark
            ? "relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl"
            : "relative z-10 border-b border-black/10 bg-white/70 backdrop-blur-xl"
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-xl font-black shadow-lg shadow-fuchsia-500/20">
              ط
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                طرحنا<span className="text-fuchsia-400">.</span>
              </div>
              <div className="text-[10px] opacity-50">
                استودیو هوش مصنوعی
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link href="/" className="opacity-100">
              خانه
            </Link>
            <Link
              href="/create"
              className="opacity-60 transition hover:opacity-100"
            >
              ساخت تصویر
            </Link>
            <Link
              href="/gallery"
              className="opacity-60 transition hover:opacity-100"
            >
              گالری
            </Link>
            <Link
              href="/poster"
              className="opacity-60 transition hover:opacity-100"
            >
              طراحی پوستر
            </Link>
          </nav>

          {/* Header actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className={
                dark
                  ? "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg transition hover:bg-white/10"
                  : "flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-lg shadow-sm transition hover:bg-black/5"
              }
              aria-label="تغییر حالت نمایش"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <Link
              href="/dashboard"
              className="hidden rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg transition hover:scale-105 sm:block"
            >
              حساب من
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Free credits */}
          <div
            className={
              dark
                ? "mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-medium text-fuchsia-200"
                : "mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-300 bg-fuchsia-100 px-4 py-2 text-xs font-medium text-fuchsia-700"
            }
          >
            <span>✦</span>
            <span>۵۰ اعتبار رایگان برای شروع</span>
            <span>✦</span>
          </div>

          <h1 className="text-5xl font-black leading-[1.15] tracking-tight md:text-7xl">
            ایده‌ات را
            <br />
            <span className="bg-gradient-to-l from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              به واقعیت تبدیل کن
            </span>
          </h1>

          <p
            className={
              dark
                ? "mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg"
                : "mx-auto mt-7 max-w-2xl text-base leading-8 text-black/55 md:text-lg"
            }
          >
            با ابزارهای هوش مصنوعی طرحنا، تصویر بساز، عکس‌هایت را ویرایش کن،
            پوستر طراحی کن و برای برندت هویت بصری بساز.
          </p>

          {/* Prompt box */}
          <div
            className={
              dark
                ? "mx-auto mt-10 max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/30 backdrop-blur-xl"
                : "mx-auto mt-10 max-w-3xl rounded-[28px] border border-black/10 bg-white p-2 shadow-2xl shadow-black/10"
            }
          >
            <div
              className={
                dark
                  ? "rounded-[22px] bg-[#101014] p-5"
                  : "rounded-[22px] bg-[#fafafa] p-5"
              }
            >
              <div
                className={
                  dark
                    ? "mb-4 text-right text-xs text-white/35"
                    : "mb-4 text-right text-xs text-black/35"
                }
              >
                چه چیزی می‌خواهی بسازی؟
              </div>

              <div
                className={
                  dark
                    ? "min-h-[80px] text-right text-sm leading-7 text-white/65"
                    : "min-h-[80px] text-right text-sm leading-7 text-black/60"
                }
              >
                مثلاً: یک تصویر سینمایی و فوق‌العاده حرفه‌ای برای صفحه اینستاگرام
                یک برند مدرن...
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-start">
                <Link
                  href="/create"
                  className="rounded-2xl bg-gradient-to-l from-fuchsia-500 to-violet-600 px-7 py-3.5 text-center text-sm font-bold text-white shadow-xl shadow-fuchsia-500/20 transition hover:-translate-y-1"
                >
                  ✨ شروع ساخت
                </Link>

                <Link
                  href="/gallery"
                  className={
                    dark
                      ? "rounded-2xl border border-white/10 px-7 py-3.5 text-center text-sm font-bold text-white/80 transition hover:bg-white/5"
                      : "rounded-2xl border border-black/10 px-7 py-3.5 text-center text-sm font-bold text-black/70 transition hover:bg-black/5"
                  }
                >
                  دیدن نمونه‌ها
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating visual cards */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 blur-2xl" />

          <div
            className={
              dark
                ? "relative grid grid-cols-2 gap-3 rounded-[32px] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl md:grid-cols-4"
                : "relative grid grid-cols-2 gap-3 rounded-[32px] border border-black/10 bg-white/80 p-3 shadow-2xl md:grid-cols-4"
            }
          >
            {["ساخت تصویر", "ویرایش عکس", "پوستر", "لوگو"].map(
              (item, index) => (
                <div
                  key={item}
                  className={
                    dark
                      ? "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]"
                      : "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white to-gray-100"
                  }
                >
                  <div
                    className={`absolute inset-0 opacity-60 ${
                      index === 0
                        ? "bg-gradient-to-br from-fuchsia-500/50 to-violet-600/20"
                        : index === 1
                        ? "bg-gradient-to-br from-cyan-400/40 to-blue-600/20"
                        : index === 2
                        ? "bg-gradient-to-br from-orange-400/40 to-pink-500/20"
                        : "bg-gradient-to-br from-emerald-400/40 to-cyan-500/20"
                    }`}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="text-4xl transition duration-500 group-hover:scale-125">
                      {["🖼️", "🪄", "🎨", "💎"][index]}
                    </span>
                    <span className="text-xs font-bold">{item}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-bold text-fuchsia-400">
              ابزارهای طرحنا
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              هر چیزی که برای خلق نیاز داری
            </h2>
          </div>

          <Link
            href="/services"
            className="hidden text-sm font-bold text-fuchsia-400 sm:block"
          >
            مشاهده همه ←
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={
                dark
                  ? "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30 hover:bg-white/[0.06]"
                  : "group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-300 hover:shadow-xl"
              }
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/10 text-3xl transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <span className="rounded-full border border-fuchsia-400/20 px-2.5 py-1 text-[10px] text-fuchsia-400">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-lg font-black">{service.title}</h3>

              <p
                className={
                  dark
                    ? "mt-3 text-sm leading-7 text-white/45"
                    : "mt-3 text-sm leading-7 text-black/50"
                }
              >
                {service.description}
              </p>

              <div className="mt-6 text-sm font-bold text-fuchsia-400">
                شروع کن ←
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-10">
        <div
          className={
            dark
              ? "grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] md:grid-cols-3"
              : "grid overflow-hidden rounded-3xl border border-black/10 bg-white md:grid-cols-3"
          }
        >
          {[
            ["۵۰", "اعتبار رایگان شروع"],
            ["∞", "ایده برای ساخت"],
            ["۲۴/۷", "دسترسی به ابزارها"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-b border-white/10 p-8 text-center last:border-0 md:border-b-0 md:border-l"
            >
              <div className="text-4xl font-black text-fuchsia-400">
                {number}
              </div>
              <div
                className={
                  dark
                    ? "mt-2 text-sm text-white/45"
                    : "mt-2 text-sm text-black/45"
                }
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="relative overflow-hidden rounded-[36px] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-600/20 via-violet-600/10 to-cyan-500/10 p-8 text-center md:p-16">
          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[80px]" />

          <div className="relative">
            <div className="mb-4 text-4xl">🚀</div>

            <h2 className="text-3xl font-black md:text-5xl">
              ایده بعدی تو چیست؟
            </h2>

            <p
              className={
                dark
                  ? "mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50"
                  : "mx-auto mt-5 max-w-xl text-sm leading-7 text-black/50"
              }
            >
              همین حالا با ۵۰ اعتبار رایگان شروع کن و ایده‌ات را به یک اثر
              حرفه‌ای تبدیل کن.
            </p>

            <Link
              href="/create"
              className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-black text-black shadow-2xl transition hover:-translate-y-1"
            >
              ✨ ساخت اولین تصویر
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={
          dark
            ? "relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs text-white/35"
            : "relative z-10 border-t border-black/10 px-5 py-8 text-center text-xs text-black/40"
        }
      >
        © ۱۴۰۵ طرحنا — استودیو خلاقیت با هوش مصنوعی
      </footer>
    </main>
  );
}}
