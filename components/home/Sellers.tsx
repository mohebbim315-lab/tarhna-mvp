import Link from "next/link";
import "./Sellers.css";

const benefits = [
  {
    icon: "♡",
    title: "ثبت‌نام آسان",
    text: "شروع سریع و ساده",
  },
  {
    icon: "♙",
    title: "فروش طرح‌ها",
    text: "فایل‌ها و آثار شما",
  },
  {
    icon: "▣",
    title: "دریافت درآمد",
    text: "تسویه حساب منظم",
  },
  {
    icon: "٪",
    title: "درصد منصفانه",
    text: "سهم شفاف از فروش",
  },
];

export default function Sellers() {
  return (
    <section className="sellers-section" id="sellers" dir="rtl">
      <div className="sellers-glow sellers-glow-one" />
      <div className="sellers-glow sellers-glow-two" />

      <div className="sellers-top">
        <div className="sellers-heading">
          <span className="sellers-label">کسب درآمد از خلاقیت</span>

          <h2>
            فروشندگان <span>طرحنا</span>
          </h2>

          <p>
            طرح‌های خود را بفروشید و از خلاقیت و مهارتتان درآمد کسب کنید.
          </p>
        </div>

        <Link href="/dashboard" className="seller-main-btn">
          <span className="seller-store-icon">▦</span>

          <div>
            <small>همین حالا</small>
            <strong>فروشنده شوید</strong>
          </div>

          <b>←</b>
        </Link>
      </div>

      <div className="seller-content">
        <div className="seller-benefits">
          {benefits.map((item) => (
            <article className="seller-benefit" key={item.title}>
              <div className="seller-benefit-icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="seller-showcase">
          <div className="seller-card seller-card-one">
            <span>AI</span>
          </div>

          <div className="seller-card seller-card-two">
            <span>PSD</span>
          </div>

          <div className="seller-card seller-card-three">
            <span>3D</span>
          </div>

          <div className="seller-showcase-copy">
            <strong>ایده‌هایت را به درآمد تبدیل کن</strong>
            <span>فروشگاه شخصی خودت را در طرحنا بساز</span>
          </div>
        </div>
      </div>

      <div className="seller-stats">
        <div>
          <strong>+۳۰۰</strong>
          <span>فروشنده فعال</span>
        </div>

        <div>
          <strong>+۱,۲۰۰</strong>
          <span>سفارش انجام‌شده</span>
        </div>

        <div>
          <strong>+۱۰,۰۰۰</strong>
          <span>محصول فروشگاه</span>
        </div>

        <div>
          <strong>۴.۹</strong>
          <span>رضایت کاربران</span>
        </div>
      </div>
    </section>
  );
}
