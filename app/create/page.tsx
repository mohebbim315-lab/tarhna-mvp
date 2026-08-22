 "use client";
import { useState } from "react";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [enhanced, setEnhanced] = useState("");
  const [quality, setQuality] = useState<"standard"|"pro">("standard");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  async function enhance() {
    if (!prompt.trim()) return;
    setLoading(true);
    const res = await fetch("/api/prompt/enhance", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ prompt }) });
    const data = await res.json();
    setEnhanced(data.prompt ?? "");
    setLoading(false);
  }

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);
    const res = await fetch("/api/generate", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ prompt, quality }) });
    const data = await res.json();
    if (data.images) setImages(data.images);
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="text-4xl font-black">ساخت تصویر با هوش مصنوعی</h1>
      <p className="mt-3 text-zinc-400">ایده‌ات را بنویس؛ طرحنا پرامپت را بهتر می‌کند و دو خروجی می‌سازد.</p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="مثلاً یک عکس پرتره حرفه‌ای..." className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-5 outline-none" />
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={enhance} disabled={loading} className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-5 py-3 font-bold text-fuchsia-200">✨ بهبود پرامپت</button>
          <button onClick={generate} disabled={loading} className="rounded-xl bg-white px-5 py-3 font-bold text-black">{loading ? "در حال پردازش..." : "🚀 ساخت تصویر"}</button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <button onClick={()=>setQuality("standard")} className={`rounded-2xl border p-4 text-right ${quality==="standard" ? "border-fuchsia-400 bg-fuchsia-400/10" : "border-white/10"}`}>
            <b>تصویر معمولی</b><div className="mt-1 text-sm text-zinc-400">۲,۵۰۰ تومان · ۱ اعتبار</div>
          </button>
          <button onClick={()=>setQuality("pro")} className={`rounded-2xl border p-4 text-right ${quality==="pro" ? "border-fuchsia-400 bg-fuchsia-400/10" : "border-white/10"}`}>
            <b>تصویر حرفه‌ای</b><div className="mt-1 text-sm text-zinc-400">۵,۰۰۰ تومان · ۲ اعتبار</div>
          </button>
        </div>

        {enhanced && <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5"><div className="mb-2 text-sm text-zinc-500">پرامپت بهبود‌یافته</div><p className="leading-7 text-zinc-200">{enhanced}</p></div>}
      </div>

      {images.length > 0 && <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">{images.map((src,i)=><img key={i} src={src} alt={`Tarhna output ${i+1}`} className="w-full rounded-3xl border border-white/10" />)}</section>}
    </main>
  );
}