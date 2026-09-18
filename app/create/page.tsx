"use client";

import { useState } from "react";
import Link from "next/link";

const styles = [
  "همه سبک‌ها ✦",
  "واقع‌گرایانه",
  "سینمایی",
  "هنری",
  "فانتزی",
  "سه‌بعدی",
  "مینیمال",
];

const ratios = [
  { id: "1:1", label: "مربع", icon: "□" },
  { id: "16:9", label: "افقی", icon: "▭" },
  { id: "9:16", label: "عمودی", icon: "▯" },
];

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [quality, setQuality] = useState<"standard" | "pro">("standard");
  const [style, setStyle] = useState("همه سبک‌ها ✦");
  const [ratio, setRatio] = useState("1:1");
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(false);
  const [enhancing, setEnhancing] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const cost = quality === "pro" ? 2 * count : 1 * count;

  async function enhance() {
    if (!prompt.trim()) return;

    setEnhancing(true);

    try {
      const res = await fetch("/api/prompt/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setEnhanced(data.prompt ?? "");
    } catch {
      setEnhanced("خطا در بهبود پرامپت. دوباره تلاش کنید.");
    } finally {
      setEnhancing(false);
    }
  }

  async function generate() {
    const finalPrompt = enhanced || prompt;
    if (!finalPrompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: finalPrompt,
          quality,
          style,
          ratio,
          count,
        }),
      });

      const data = await res.json();

      if (data.images) {
        setImages(data.images);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#07070c] text-white"
    >
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-xl font-black tracking-tight"
          >
            طرحنا
          </Link>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
              💎 ۵۰ اعتبار
            </div>

            <Link
              href="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 font-bold"
            >
              ط
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* TITLE */}
        <section className="mb-9 text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-2 text-xs text-fuchsia-200">
            ✦ استودیوی هوش مصنوعی طرحنا
          </div>

          <h1 className="text-3xl font-black md:text-5xl">
            تصویرت را
            <span className="bg-gradient-to-l from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              خلق کن
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
            ایده‌ات را توضیح بده؛ طرحنا آن را به یک تصویر حرفه‌ای تبدیل
            می‌کند.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          {/* CONTROL PANEL */}
          <section className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl md:p-7">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold">چه چیزی در ذهن داری؟</h2>

              <button
                onClick={enhance}
                disabled={enhancing || !prompt.trim()}
                className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-2 text-xs text-fuchsia-200 disabled:opacity-40"
              >
                {enhancing ? "در حال بهبود..." : "✨ بهبود با هوش مصنوعی"}
              </button>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="مثلاً: شهری آینده‌نگر در شب، نورهای نئونی، باران و فضای سینمایی..."
              className="h-36 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 outline-none transition focus:border-fuchsia-400/50"
            />

            {enhanced && (
              <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-500/5 p-4">
                <div className="mb-2 text-xs font-bold text-blue-300">
                  ✦ پرامپت بهبود یافته
                </div>

                <p className="text-sm leading-7 text-zinc-300">
                  {enhanced}
                </p>

                <button
                  onClick={() => {
                    setPrompt(enhanced);
                    setEnhanced("");
                  }}
                  className="mt-3 text-xs text-blue-300"
                >
                  استفاده از این پرامپت ←
                </button>
              </div>
            )}

            {/* STYLE */}
            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold">سبک تصویر</h3>

              <div className="flex flex-wrap gap-2">
                {styles.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStyle(item)}
                    className={`rounded-full border px-4 py-2 text-xs transition ${
                      style === item
                        ? "border-fuchsia-400/50 bg-fuchsia-500/15 text-fuchsia-200"
                        : "border-white/10 bg-white/[0.03] text-zinc-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* RATIO */}
            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold">نسبت تصویر</h3>

              <div className="grid grid-cols-3 gap-3">
                {ratios.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRatio(item.id)}
                    className={`rounded-2xl border p-4 transition ${
                      ratio === item.id
                        ? "border-blue-400/50 bg-blue-500/10"
                        : "border-white/10 bg-white/[0.025]"
                    }`}
                  >
                    <div className="mb-1 text-2xl">{item.icon}</div>
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="mt-1 text-[10px] text-zinc-500">
                      {item.id}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* QUALITY */}
            <div className="mt-7">
              <h3 className="mb-3 text-sm font-bold">کیفیت ساخت</h3>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setQuality("standard")}
                  className={`rounded-2xl border p-4 text-right ${
                    quality === "standard"
                      ? "border-fuchsia-400/50 bg-fuchsia-500/10"
                      : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  <div className="font-bold">استاندارد</div>
                  <div className="mt-2 text-xs text-zinc-400">
                    سریع و مناسب استفاده روزمره
                  </div>
                  <div className="mt-3 text-xs text-fuchsia-300">
                    ۱ اعتبار / تصویر
                  </div>
                </button>

                <button
                  onClick={() => setQuality("pro")}
                  className={`relative rounded-2xl border p-4 text-right ${
                    quality === "pro"
                      ? "border-blue-400/50 bg-blue-500/10"
                      : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-to-l from-fuchsia-500 to-blue-500 px-2 py-1 text-[9px]">
                    PRO
                  </span>

                  <div className="font-bold">حرفه‌ای</div>
                  <div className="mt-2 text-xs text-zinc-400">
                    جزئیات و کیفیت بالاتر
                  </div>
                  <div className="mt-3 text-xs text-blue-300">
                    ۲ اعتبار / تصویر
                  </div>
                </button>
              </div>
            </div>

            {/* OUTPUT COUNT */}
            <div className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
              <div>
                <div className="text-sm font-bold">تعداد خروجی</div>
                <div className="mt-1 text-xs text-zinc-500">
                  چند تصویر ساخته شود؟
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="h-9 w-9 rounded-xl border border-white/10 bg-white/5"
                >
                  −
                </button>

                <span className="min-w-5 text-center font-bold">
                  {count}
                </span>

                <button
                  onClick={() => setCount(Math.min(4, count + 1))}
                  className="h-9 w-9 rounded-xl border border-white/10 bg-white/5"
                >
                  +
                </button>
              </div>
            </div>

            {/* GENERATE */}
            <button
              onClick={generate}
              disabled={loading || !prompt.trim()}
              className="mt-6 w-full rounded-2xl bg-gradient-to-l from-fuchsia-500 via-purple-500 to-blue-500 p-4 font-black shadow-[0_12px_40px_rgba(168,85,247,.25)] transition active:scale-[.98] disabled:opacity-40"
            >
              {loading
                ? "✦ در حال خلق تصویر..."
                : `✦ ساخت ${count} تصویر • ${cost} اعتبار`}
            </button>
          </section>

          {/* PREVIEW */}
          <section>
            <div className="sticky top-24 rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold">خروجی</h2>

                <span className="text-xs text-zinc-500">
                  {ratio} • {quality === "pro" ? "PRO" : "Standard"}
                </span>
              </div>

              {images.length === 0 ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-black/20 px-8 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 text-3xl shadow-[0_0_40px_rgba(168,85,247,.15)]">
                    ✦
                  </div>

                  <h3 className="font-bold">ایده‌ات منتظر خلق شدن است</h3>

                  <p className="mt-3 text-xs leading-6 text-zinc-500">
                    پرامپت را وارد کن، تنظیمات را انتخاب کن و دکمه ساخت
                    تصویر را بزن.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                    >
                      <img
                        src={src}
                        alt={`Tarhna output ${i + 1}`}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-zinc-500">
                <div className="rounded-xl bg-white/[0.03] p-3">
                  🔒 خصوصی
                </div>
                <div className="rounded-xl bg-white/[0.03] p-3">
                  ⚡ سریع
                </div>
                <div className="rounded-xl bg-white/[0.03] p-3">
                  ✦ AI
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
