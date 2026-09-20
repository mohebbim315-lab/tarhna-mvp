"use client";

import Link from "next/link";

const services = [
  {
    icon: "✦",
    title: "ثبت سفارش طراحی",
    text: "پوستر، لوگو، کاور، بنر و هر طرحی که نیاز داری",
    href: "/create",
    action: "ثبت سفارش",
  },
  {
    icon: "▣",
    title: "نمونه‌کارها",
    text: "جدیدترین پروژه‌ها و طراحی‌های انجام‌شده",
    href: "/gallery",
    action: "مشاهده",
  },
  {
    icon: "♢",
    title: "فروشگاه فایل",
    text: "فایل‌های آماده، قالب‌ها و محصولات گرافیکی",
    href: "/prompts",
    action: "فروشگاه",
  },
  {
    icon: "♛",
    title: "فروش در طرحنا",
    text: "طرح و فایل خلاقانه خودت را برای فروش قرار بده",
    href: "/dashboard",
    action: "شروع فروش",
  },
];

const portfolio = [
  { icon: "✒", title: "پوستر مذهبی", cls: "work-one" },
  { icon: "◈", title: "طراحی تبلیغاتی", cls: "work-two" },
  { icon: "✦", title: "هویت بصری", cls: "work-three" },
  { icon: "◆", title: "کاور حرفه‌ای", cls: "work-four" },
];

const products = [
  { icon: "✦", title: "پک آیکون سه‌بعدی", price: "۶۹,۰۰۰ تومان" },
  { icon: "NEON", title: "تکست‌افکت نئون", price: "۷۹,۰۰۰ تومان" },
  { icon: "M", title: "موکاپ حرفه‌ای", price: "۹۹,۰۰۰ تومان" },
  { icon: "Aa", title: "قالب پست", price: "۸۹,۰۰۰ تومان" },
];

export default function Home() {
  return (
    <main className="site" dir="rtl">
      <header className="header">
        <Link href="/" className="logo">
          <img src="/images/tarhna-logo.png" alt="طرحنا" />
        </Link>

        <nav>
          <Link href="/" className="active">صفحه اصلی</Link>
          <Link href="/create">ثبت سفارش</Link>
          <Link href="/gallery">نمونه‌کارها</Link>
          <Link href="/prompts">فروشگاه</Link>
          <Link href="/dashboard">فروش در طرحنا</Link>
        </nav>

        <div className="header-actions">
          <button className="search">⌕</button>
          <Link href="/dashboard" className="account">
            حساب کاربری
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">✦ استودیوی طراحی و بازار خلاقیت</span>

          <h1>
            ایده‌هایت شایسته یک
            <span> طراحی حرفه‌ای </span>
            هستند
          </h1>

          <p>
            از سفارش طراحی اختصاصی تا فایل‌های آماده و فروش آثار؛
            طرحنا جایی برای تبدیل ایده‌های تو به طراحی‌های حرفه‌ای است.
          </p>

          <div className="hero-buttons">
            <Link href="/create" className="primary">
              ثبت سفارش طراحی <b>←</b>
            </Link>
            <Link href="/gallery" className="secondary">
              مشاهده نمونه‌کارها
            </Link>
          </div>

          <div className="stats">
            <div><b>+۱۰۰۰</b><span>فایل آماده</span></div>
            <div><b>+۵۰</b><span>طراح فعال</span></div>
            <div><b>+۱۲۰۰</b><span>طرح انجام‌شده</span></div>
            <div><b>+۵۰۰</b><span>مشتری راضی</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-glow" />

          <div className="mini-card mini-one">
            <span>✦</span>
            <b>خلاقیت</b>
            <small>بدون محدودیت</small>
          </div>

          <div className="mini-card mini-two">
            <span>◇</span>
            <b>طراحی حرفه‌ای</b>
            <small>کیفیت بالا</small>
          </div>

          <div className="device">
            <div className="device-top">
              <i></i><i></i><i></i>
            </div>

            <div className="device-screen">
              <img src="/images/tarhna-logo.png" alt="لوگوی طرحنا" />
              <p>فراتر از یک طرح</p>
              <strong>آغاز یک ایده بزرگ</strong>
            </div>
          </div>

          <div className="desk-ring" />
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-title">
          <span>خدمات ما</span>
          <h2>همه‌چیز برای دنیای طراحی در یک جا</h2>
          <p>از سفارش اختصاصی تا فروش فایل و محصولات خلاقانه</p>
        </div>

        <div className="services-grid">
          {services.map((item) => (
            <Link href={item.href} className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-action">{item.action} ←</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="portfolio">
        <div className="section-row">
          <div>
            <span>منتخب طرحنا</span>
            <h2>نمونه‌کارهای اخیر</h2>
          </div>
          <Link href="/gallery" className="outline-btn">
            مشاهده همه ←
          </Link>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <Link
              href="/gallery"
              className={`portfolio-card ${item.cls}`}
              key={item.title}
            >
              <div className="portfolio-art">
                <span>{item.icon}</span>
              </div>
              <div className="portfolio-info">
                <b>{item.title}</b>
                <small>مشاهده پروژه ←</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="products">
        <div className="section-row">
          <div>
            <span>فروشگاه طرحنا</span>
            <h2>محصولات پیشنهادی</h2>
          </div>
          <Link href="/prompts" className="outline-btn">
            رفتن به فروشگاه ←
          </Link>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <article className="product-card" key={item.title}>
              <div className="product-preview">
                <span>{item.icon}</span>
              </div>

              <div className="product-body">
                <small>فایل دیجیتال</small>
                <h3>{item.title}</h3>

                <div className="product-bottom">
                  <b>{item.price}</b>
                  <button>＋</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-cta">
        <div className="cta-icon">➤</div>

        <div>
          <small>ایده داری؟</small>
          <h2>همین حالا سفارش طراحی خود را ثبت کنید</h2>
          <p>از ایده تا اجرا، ما کنارت هستیم.</p>
        </div>

        <Link href="/create" className="primary">
          ثبت سفارش الان ←
        </Link>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/images/tarhna-logo.png" alt="طرحنا" />
            <p>
              استودیوی طراحی، بازار فایل‌های خلاقانه و فضایی برای
              تبدیل ایده‌ها به طراحی‌های حرفه‌ای.
            </p>
          </div>

          <div className="footer-column">
            <b>دسترسی سریع</b>
            <Link href="/create">ثبت سفارش</Link>
            <Link href="/prompts">فروشگاه</Link>
            <Link href="/gallery">نمونه‌کارها</Link>
            <Link href="/dashboard">فروش در طرحنا</Link>
          </div>

          <div className="footer-column">
            <b>پشتیبانی</b>
            <a href="#">سوالات متداول</a>
            <a href="#">تماس با ما</a>
            <a href="#">قوانین و مقررات</a>
            <a href="#">حریم خصوصی</a>
          </div>

          <div className="newsletter">
            <b>در خبر باش!</b>
            <p>جدیدترین فایل‌ها و پیشنهادهای ویژه طرحنا</p>

            <div>
              <input type="email" placeholder="ایمیل شما" />
              <button>عضویت</button>
            </div>
          </div>
        </div>

        <div className="copyright">
          © ۱۴۰۵ طرحنا — تمامی حقوق محفوظ است.
        </div>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 76% 8%, rgba(37,99,235,.15), transparent 24%),
            radial-gradient(circle at 24% 28%, rgba(147,51,234,.13), transparent 25%),
            #030615;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .header {
          width: min(1400px, 94%);
          height: 82px;
          margin: auto;
          display: grid;
          grid-template-columns: 190px 1fr 190px;
          align-items: center;
          gap: 25px;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }

        .logo {
          display: flex;
          justify-content: flex-start;
        }

        .logo img {
          width: 130px;
          height: 62px;
          object-fit: contain;
          filter: drop-shadow(0 0 14px rgba(124,58,237,.45));
        }

        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 34px;
        }

        nav a {
          position: relative;
          color: #aeb6ca;
          font-size: 14px;
          transition: .25s;
        }

        nav a:hover,
        nav .active {
          color: #fff;
        }

        nav .active:after {
          content: "";
          position: absolute;
          right: 0;
          left: 0;
          bottom: -17px;
          height: 2px;
          border-radius: 5px;
          background: linear-gradient(90deg,#7c3aed,#2563eb,#d946ef);
          box-shadow: 0 0 12px #7c3aed;
        }

        .header-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .search,
        .account {
          min-height: 43px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.035);
          color: white;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search {
          width: 43px;
          font-size: 23px;
        }

        .account {
          padding: 0 18px;
          font-size: 13px;
        }

        .hero {
          width: min(1400px,94%);
          min-height: 600px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          align-items: center;
          gap: 40px;
          padding: 55px 0 40px;
        }

        .hero-copy {
          position: relative;
          z-index: 5;
        }

        .eyebrow {
          display: inline-flex;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid rgba(168,85,247,.28);
          background: rgba(168,85,247,.08);
          color: #d8b4fe;
          font-size: 12px;
        }

        .hero h1 {
          max-width: 670px;
          margin: 22px 0 16px;
          font-size: clamp(42px,5vw,72px);
          line-height: 1.35;
          font-weight: 900;
        }

        .hero h1 span {
          background: linear-gradient(90deg,#ec4899,#8b5cf6,#3b82f6);
          -webkit-background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 18px rgba(139,92,246,.2));
        }

        .hero-copy > p {
          max-width: 620px;
          color: #9ca3b6;
          line-height: 2;
          font-size: 15px;
        }

        .hero-buttons {
          display: flex;
          gap: 13px;
          margin-top: 27px;
        }

        .primary,
        .secondary,
        .outline-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          transition: .25s;
        }

        .primary {
          padding: 0 24px;
          gap: 13px;
          background: linear-gradient(100deg,#2563eb,#7c3aed,#d946ef);
          box-shadow: 0 10px 32px rgba(124,58,237,.28);
          font-weight: 700;
        }

        .secondary,
        .outline-btn {
          padding: 0 23px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.025);
        }

        .primary:hover,
        .secondary:hover,
        .outline-btn:hover {
          transform: translateY(-2px);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          max-width: 650px;
          margin-top: 34px;
        }

        .stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0 15px;
          border-left: 1px solid rgba(255,255,255,.08);
        }

        .stats b {
          font-size: 20px;
        }

        .stats span {
          color: #737b91;
          font-size: 10px;
        }

        .hero-art {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .art-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(109,40,217,.27);
          filter: blur(90px);
        }

        .device {
          width: 430px;
          height: 300px;
          position: relative;
          z-index: 3;
          padding: 12px;
          border-radius: 24px;
          border: 1px solid rgba(96,165,250,.45);
          background: linear-gradient(145deg,#10162b,#050713);
          box-shadow:
            0 0 0 5px rgba(124,58,237,.05),
            0 25px 70px rgba(0,0,0,.65),
            0 0 45px rgba(124,58,237,.2);
          transform: rotateX(4deg) rotateY(-5deg);
        }

        .device-top {
          height: 28px;
          display: flex;
          gap: 5px;
          padding: 5px;
        }

        .device-top i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
        }

        .device-screen {
          height: 245px;
          border-radius: 16px;
          border: 1px solid rgba(168,85,247,.25);
          background:
            radial-gradient(circle at 50% 50%,rgba(124,58,237,.18),transparent 45%),
            #040713;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .device-screen img {
          width: 230px;
          max-width: 70%;
          filter: drop-shadow(0 0 22px rgba(139,92,246,.5));
        }

        .device-screen p {
          color: #9ca3af;
          margin: 17px 0 6px;
        }

        .device-screen strong {
          font-size: 18px;
        }

        .mini-card {
          width: 135px;
          height: 155px;
          position: absolute;
          z-index: 5;
          border: 1px solid rgba(96,165,250,.3);
          border-radius: 19px;
          background: linear-gradient(145deg,rgba(19,26,54,.95),rgba(5,8,22,.95));
          box-shadow: 0 20px 45px rgba(0,0,0,.45);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .mini-card span {
          color: #c084fc;
          font-size: 28px;
          text-shadow: 0 0 18px #a855f7;
        }

        .mini-card small {
          color: #727b91;
        }

        .mini-one {
          right: 0;
          top: 75px;
          transform: rotate(7deg);
        }

        .mini-two {
          left: 2px;
          bottom: 65px;
          transform: rotate(-7deg);
        }

        .desk-ring {
          position: absolute;
          z-index: 1;
          width: 440px;
          height: 70px;
          bottom: 42px;
          border-radius: 50%;
          border: 3px solid rgba(124,58,237,.65);
          box-shadow: 0 0 30px #7c3aed, inset 0 0 25px #2563eb;
        }

        .services,
        .portfolio,
        .products {
          width: min(1400px,94%);
          margin: auto;
          padding: 65px 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-title span,
        .section-row span {
          color: #a78bfa;
          font-size: 12px;
        }

        .section-title h2,
        .section-row h2 {
          margin: 8px 0;
          font-size: 29px;
        }

        .section-title p {
          color: #7d859a;
          font-size: 13px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
        }

        .service-card {
          min-height: 245px;
          padding: 25px 20px;
          border-radius: 19px;
          border: 1px solid rgba(96,165,250,.22);
          background:
            radial-gradient(circle at 50% 0%,rgba(124,58,237,.15),transparent 45%),
            linear-gradient(145deg,rgba(12,18,38,.95),rgba(4,8,20,.95));
          transition: .3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168,85,247,.55);
          box-shadow: 0 15px 45px rgba(0,0,0,.4);
        }

        .service-icon {
          font-size: 42px;
          color: #c084fc;
          text-shadow: 0 0 22px #7c3aed;
        }

        .service-card h3 {
          margin: 20px 0 8px;
          font-size: 18px;
        }

        .service-card p {
          min-height: 50px;
          color: #858da1;
          font-size: 12px;
          line-height: 1.9;
        }

        .card-action {
          color: #d8b4fe;
          font-size: 12px;
        }
        .section-row {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 14px;
        }

        .portfolio-card {
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.1);
          background: #080d1c;
          transition: .3s;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139,92,246,.5);
        }

        .portfolio-art {
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 60px;
          background:
            radial-gradient(circle at 50% 50%,rgba(124,58,237,.35),transparent 35%),
            linear-gradient(145deg,#11172c,#050815);
        }

        .portfolio-card:nth-child(2) .portfolio-art {
          background:
            radial-gradient(circle at 50% 60%,rgba(37,99,235,.28),transparent 38%),
            linear-gradient(145deg,#07162a,#050815);
        }

        .portfolio-card:nth-child(3) .portfolio-art {
          background:
            radial-gradient(circle at 50% 55%,rgba(217,70,239,.3),transparent 38%),
            linear-gradient(145deg,#180822,#050815);
        }

        .portfolio-card:nth-child(4) .portfolio-art {
          background:
            radial-gradient(circle at 50% 50%,rgba(14,165,233,.24),transparent 40%),
            linear-gradient(145deg,#071b27,#050815);
        }

        .portfolio-card:nth-child(5) .portfolio-art {
          background:
            radial-gradient(circle at 50% 50%,rgba(249,115,22,.2),transparent 38%),
            linear-gradient(145deg,#201006,#050815);
        }

        .portfolio-info {
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .portfolio-info b {
          font-size: 13px;
        }

        .portfolio-info small {
          color: #8b93a7;
          font-size: 10px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 14px;
        }

        .product-card {
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(96,165,250,.2);
          background: linear-gradient(145deg,#0d1428,#060a17);
        }

        .product-preview {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 52px;
          background:
            radial-gradient(circle,rgba(124,58,237,.25),transparent 45%),
            #070b19;
        }

        .product-body {
          padding: 15px;
        }

        .product-body small {
          color: #717b92;
        }

        .product-body h3 {
          margin: 8px 0;
          font-size: 14px;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-bottom b {
          color: #c4b5fd;
          font-size: 13px;
        }

        .product-bottom button {
          width: 37px;
          height: 37px;
          border-radius: 11px;
          border: 1px solid rgba(139,92,246,.35);
          background: rgba(124,58,237,.1);
          color: white;
          font-size: 20px;
        }

        .order-cta {
          width: min(1400px,94%);
          margin: 30px auto 70px;
          padding: 35px 45px;
          border-radius: 22px;
          border: 1px solid rgba(96,165,250,.2);
          background:
            radial-gradient(circle at 20% 50%,rgba(37,99,235,.18),transparent 35%),
            radial-gradient(circle at 80% 50%,rgba(168,85,247,.22),transparent 35%),
            linear-gradient(100deg,#081126,#10082a);
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          gap: 25px;
          box-shadow: 0 20px 70px rgba(0,0,0,.3);
        }

        .cta-icon {
          font-size: 55px;
          color: #a855f7;
          text-shadow: 0 0 25px #7c3aed;
        }

        .order-cta small {
          color: #a78bfa;
        }

        .order-cta h2 {
          margin: 6px 0;
          font-size: 25px;
        }

        .order-cta p {
          margin: 0;
          color: #7d859a;
          font-size: 12px;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,.07);
          background: #02040c;
        }

        .footer-main {
          width: min(1400px,94%);
          margin: auto;
          padding: 50px 0;
          display: grid;
          grid-template-columns: 1.4fr .8fr .8fr 1.2fr;
          gap: 50px;
        }

        .footer-brand img {
          width: 145px;
          filter: drop-shadow(0 0 14px rgba(124,58,237,.35));
        }

        .footer-brand p,
        .newsletter p {
          max-width: 300px;
          color: #747d91;
          font-size: 12px;
          line-height: 2;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-column b,
        .newsletter b {
          margin-bottom: 5px;
        }

        .footer-column a {
          color: #858da0;
          font-size: 12px;
        }

        .newsletter > div {
          display: flex;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 13px;
          overflow: hidden;
        }

        .newsletter input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          padding: 13px;
          background: transparent;
          color: white;
        }

        .newsletter button {
          width: 80px;
          border: 0;
          color: white;
          background: linear-gradient(100deg,#7c3aed,#2563eb);
        }

        .copyright {
          padding: 20px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,.06);
          color: #596174;
          font-size: 11px;
        }

        /* ===== Mobile ===== */

        @media (max-width: 760px) {
          .site {
            background:
              radial-gradient(circle at 50% 14%,rgba(76,29,149,.22),transparent 25%),
              #030615;
          }

          .header {
            width: 92%;
            height: 72px;
            grid-template-columns: 1fr auto;
          }

          .logo {
            justify-content: flex-start;
          }

          .logo img {
            width: 96px;
            height: 52px;
          }

          nav {
            display: none;
          }

          .header-actions {
            grid-column: 1;
            grid-row: 1;
            justify-content: flex-start;
          }

          .account {
            padding: 0 13px;
            font-size: 12px;
          }

          .hero {
            width: 92%;
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 50px 0 35px;
          }

          .hero-copy {
            text-align: center;
          }

          .eyebrow {
            font-size: 10px;
            padding: 8px 13px;
          }

          .hero h1 {
            max-width: 100%;
            margin: 20px auto 15px;
            font-size: 39px;
            line-height: 1.55;
          }

          .hero-copy > p {
            max-width: 95%;
            margin: auto;
            font-size: 13px;
            line-height: 2;
          }

          .hero-buttons {
            flex-direction: column;
            margin-top: 25px;
          }

          .primary,
          .secondary {
            width: 100%;
            min-height: 52px;
          }

          .stats {
            grid-template-columns: repeat(2,1fr);
            gap: 24px 0;
            margin: 35px auto 0;
          }

          .stats div {
            border-left: 0;
          }

          .stats b {
            font-size: 21px;
          }

          .hero-art {
            min-height: 390px;
            margin-top: 5px;
          }

          .art-glow {
            width: 300px;
            height: 300px;
          }

          .device {
            width: 82%;
            height: 235px;
            padding: 9px;
            transform: none;
          }

          .device-screen {
            height: 190px;
          }

          .device-screen img {
            width: 180px;
          }

          .device-screen p {
            font-size: 11px;
            margin-top: 12px;
          }

          .device-screen strong {
            font-size: 14px;
          }

          .mini-card {
            width: 105px;
            height: 125px;
          }

          .mini-card b {
            font-size: 11px;
          }

          .mini-card small {
            font-size: 9px;
          }

          .mini-one {
            right: -3px;
            top: 40px;
          }

          .mini-two {
            left: -3px;
            bottom: 45px;
          }

          .desk-ring {
            width: 84%;
            height: 48px;
            bottom: 34px;
          }

          .services,
          .portfolio,
          .products {
            width: 92%;
            padding: 48px 0;
          }

          .section-title h2,
          .section-row h2 {
            font-size: 23px;
          }

          .services-grid {
            grid-template-columns: repeat(2,1fr);
            gap: 11px;
          }

          .service-card {
            min-height: 205px;
            padding: 18px 15px;
          }

          .service-icon {
            font-size: 34px;
          }

          .service-card h3 {
            font-size: 15px;
          }

          .service-card p {
            font-size: 10px;
          }

          .section-row {
            align-items: center;
          }

          .outline-btn {
            min-height: 42px;
            padding: 0 13px;
            font-size: 10px;
          }

          .portfolio-grid {
            display: flex;
            overflow-x: auto;
            gap: 11px;
            padding-bottom: 12px;
            scrollbar-width: none;
          }

          .portfolio-grid::-webkit-scrollbar {
            display: none;
          }

          .portfolio-card {
            min-width: 72%;
          }

          .portfolio-art {
            height: 180px;
          }

          .product-grid {
            display: flex;
            overflow-x: auto;
            gap: 11px;
            padding-bottom: 12px;
            scrollbar-width: none;
          }

          .product-grid::-webkit-scrollbar {
            display: none;
          }

          .product-card {
            min-width: 62%;
          }

          .product-preview {
            height: 135px;
          }

          .order-cta {
            width: 92%;
            margin-bottom: 50px;
            padding: 28px 20px;
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-icon {
            margin: auto;
            font-size: 44px;
          }

          .order-cta h2 {
            font-size: 21px;
            line-height: 1.7;
          }

          .order-cta .primary {
            width: 100%;
          }

          .footer-main {
            width: 92%;
            grid-template-columns: 1fr 1fr;
            gap: 35px 20px;
          }

          .footer-brand,
          .newsletter {
            grid-column: 1 / -1;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-brand img {
            width: 120px;
          }

          .footer-brand p {
            margin: 10px auto;
          }

          .newsletter > div {
            min-height: 47px;
          }
        }

        @media (max-width: 380px) {
          .hero h1 {
            font-size: 33px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-card {
            min-width: 82%;
          }

          .product-card {
            min-width: 72%;
          }
        }
      `}</style>
    </main>
  );
}
