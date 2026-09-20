"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    icon: "✦",
    title: "ثبت سفارش طراحی",
    text: "پوستر، لوگو، کاور، بنر و هر طرحی که برای برند یا کسب‌وکارت نیاز داری.",
    action: "ثبت سفارش",
    href: "/create",
  },
  {
    icon: "▣",
    title: "نمونه‌کارها",
    text: "مجموعه‌ای از جدیدترین پروژه‌ها و طراحی‌های انجام‌شده در طرحنا.",
    action: "مشاهده نمونه‌ها",
    href: "/gallery",
  },
  {
    icon: "◇",
    title: "فروشگاه فایل",
    text: "فایل‌های آماده، قالب‌ها، پوسترها و محصولات گرافیکی قابل دانلود.",
    action: "ورود به فروشگاه",
    href: "/prompts",
  },
  {
    icon: "♛",
    title: "فروش در طرحنا",
    text: "طرح‌ها و فایل‌های خلاقانه خودت را در طرحنا برای فروش قرار بده.",
    action: "شروع فروش",
    href: "/dashboard",
  },
];

const works = [
  {
    title: "پوستر مذهبی",
    category: "طراحی پوستر",
    image: "🕌",
  },
  {
    title: "هویت بصری",
    category: "برندینگ",
    image: "✦",
  },
  {
    title: "پوستر تبلیغاتی",
    category: "تبلیغات",
    image: "◇",
  },
  {
    title: "کاور حرفه‌ای",
    category: "شبکه اجتماعی",
    image: "◆",
  },
  {
    title: "طراحی خلاقانه",
    category: "گرافیک",
    image: "✧",
  },
];

const products = [
  {
    title: "پک آیکون سه‌بعدی",
    type: "فایل آماده",
    price: "۶۹,۰۰۰ تومان",
    preview: "✦",
  },
  {
    title: "تکست افکت نئون",
    type: "PSD",
    price: "۷۹,۰۰۰ تومان",
    preview: "NEON",
  },
  {
    title: "موکاپ حرفه‌ای",
    type: "Mockup",
    price: "۹۹,۰۰۰ تومان",
    preview: "M",
  },
  {
    title: "قالب پست اینستاگرام",
    type: "Template",
    price: "۸۹,۰۰۰ تومان",
    preview: "Aa",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site" dir="rtl">
      <header className="header">
        <Link href="/" className="logo">
          <img src="/images/tarhna-logo.png" alt="لوگوی طرحنا" />
        </Link>

        <nav>
          <Link href="/" className="active">صفحه اصلی</Link>
          <Link href="/create">ثبت سفارش</Link>
          <Link href="/gallery">نمونه‌کارها</Link>
          <Link href="/prompts">فروشگاه</Link>
          <Link href="/dashboard">فروش در طرحنا</Link>
        </nav>

        <div className="header-actions">
          <button className="search" aria-label="جستجو">⌕</button>
          <Link href="/dashboard" className="account">
            حساب کاربری
          </Link>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="منو"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu open">
            <Link href="/" onClick={() => setMenuOpen(false)}>صفحه اصلی</Link>
            <Link href="/create" onClick={() => setMenuOpen(false)}>ثبت سفارش</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>نمونه‌کارها</Link>
            <Link href="/prompts" onClick={() => setMenuOpen(false)}>فروشگاه</Link>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>فروش در طرحنا</Link>
          </div>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">✦ استودیوی طراحی و بازار خلاقیت</span>

          <h1>
            ایده‌هایت شایسته یک
            <br />
            <span>طراحی حرفه‌ای</span> هستند
          </h1>

          <p>
            از سفارش طراحی اختصاصی تا فایل‌های آماده و فروش آثار؛
            طرحنا جایی برای تبدیل ایده‌های تو به طراحی‌های حرفه‌ای است.
          </p>

          <div className="hero-buttons">
            <Link href="/create" className="primary">
              <span>ثبت سفارش طراحی</span>
              <b>←</b>
            </Link>

            <Link href="/gallery" className="secondary">
              مشاهده نمونه‌کارها
            </Link>
          </div>

          <div className="stats">
            <div>
              <b>+۱۰۰۰</b>
              <span>فایل آماده</span>
            </div>
            <div>
              <b>+۵۰</b>
              <span>طراح فعال</span>
            </div>
            <div>
              <b>+۱۲۰۰</b>
              <span>طرح انجام‌شده</span>
            </div>
            <div>
              <b>+۵۰۰</b>
              <span>مشتری راضی</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-light art-light-one" />
          <div className="art-light art-light-two" />

          <div className="floating-card card-one">
            <span>✦</span>
            <b>خلاقیت</b>
            <small>بدون محدودیت</small>
          </div>

          <div className="floating-card card-two">
            <span>◇</span>
            <b>طراحی حرفه‌ای</b>
            <small>کیفیت بالا</small>
          </div>

          <div className="creative-device">
            <div className="device-camera">
              <i />
              <i />
              <i />
            </div>

            <div className="device-display">
              <img src="/images/tarhna-logo.png" alt="طرحنا" />
              <small>فراتر از یک طرح</small>
              <strong>آغاز یک ایده بزرگ</strong>
            </div>
          </div>

          <div className="neon-floor">
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <span>خدمات ما</span>
          <h2>همه‌چیز برای دنیای طراحی در یک جا</h2>
          <p>از سفارش اختصاصی تا فروش و خرید فایل‌های خلاقانه</p>
        </div>

        <div className="services-grid">
          {services.map((item) => (
            <Link href={item.href} className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="service-action">{item.action} ←</span>
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
          {works.map((work, index) => (
            <article className={`work-card work-${index + 1}`} key={work.title}>
              <div className="work-image">
                <span>{work.image}</span>
                <div className="work-overlay">
                  <small>{work.category}</small>
                  <b>{work.title}</b>
                </div>
              </div>
            </article>
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
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-preview">
                <span>{product.preview}</span>
              </div>

              <div className="product-info">
                <small>{product.type}</small>
                <h3>{product.title}</h3>

                <div>
                  <b>{product.price}</b>
                  <button aria-label="افزودن به سبد خرید">+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-cta">
        <div className="cta-symbol">➤</div>

        <div>
          <small>ایده داری؟</small>
          <h2>همین حالا سفارش طراحی خود را ثبت کنید</h2>
          <p>از ایده تا اجرا، همراهت هستیم.</p>
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
              استودیوی طراحی و بازار فایل‌های خلاقانه؛
              جایی برای ساختن، خریدن و فروختن ایده‌ها.
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
            <p>جدیدترین فایل‌ها و پیشنهادهای ویژه را دریافت کنید.</p>
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
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #030617;
          color: #fff;
          overflow-x: hidden;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 82% 13%, rgba(87, 35, 180, 0.16), transparent 28%),
            radial-gradient(circle at 18% 36%, rgba(25, 73, 180, 0.09), transparent 28%),
            #030617;
          color: #fff;
          font-family: Arial, sans-serif;
        }

        .header {
          height: 88px;
          max-width: 1240px;
          margin: auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          position: relative;
          z-index: 100;
        }

        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo img {
          width: 126px;
          height: auto;
          display: block;
          filter: drop-shadow(0 0 16px rgba(126, 58, 237, 0.35));
        }

        nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        nav a {
          color: #aeb6ce;
          text-decoration: none;
          font-size: 13px;
          transition: 0.25s ease;
          position: relative;
          white-space: nowrap;
        }

        nav a:hover,
        nav a.active {
          color: #fff;
        }

        nav a.active::after {
          content: "";
          position: absolute;
          right: 0;
          left: 0;
          bottom: -12px;
          margin: auto;
          width: 18px;
          height: 2px;
          border-radius: 10px;
          background: #9b5cff;
          box-shadow: 0 0 12px #9b5cff;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .search,
        .menu-btn {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.035);
          color: #fff;
        }

        .search {
          font-size: 23px;
          cursor: pointer;
        }

        .account {
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          padding: 11px 14px;
        }

        .menu-btn {
          display: none;
          padding: 10px;
        }

        .menu-btn span {
          display: block;
          width: 100%;
          height: 2px;
          margin: 4px 0;
          background: #fff;
          border-radius: 10px;
        }

        .mobile-menu {
          display: none;
        }

        .hero {
          max-width: 1240px;
          min-height: 650px;
          margin: auto;
          padding: 75px 24px 95px;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(460px, 0.92fr);
          align-items: center;
          gap: clamp(36px, 5vw, 72px);
          position: relative;
        }

        .hero::before {
          content: "";
          position: absolute;
          width: 680px;
          height: 680px;
          right: -280px;
          top: -170px;
          border-radius: 50%;
          background: rgba(101, 44, 210, 0.08);
          filter: blur(90px);
          pointer-events: none;
        }

        .hero-copy {
          position: relative;
          z-index: 4;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 9px 16px;
          border: 1px solid rgba(170, 104, 255, 0.22);
          border-radius: 999px;
          background: rgba(130, 60, 220, 0.09);
          color: #c6a6ff;
          font-size: 12px;
          margin-bottom: 25px;
        }

        .hero h1 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(43px, 5vw, 69px);
          line-height: 1.42;
          letter-spacing: -2px;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #e44fae, #9b5cff, #5e72ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-copy > p {
          color: #8e96ad;
          line-height: 2.1;
          font-size: 14px;
          max-width: 590px;
          margin: 24px 0 0;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
        }

        .primary,
        .secondary,
        .outline-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          transition: 0.25s ease;
        }

        .primary {
          min-height: 51px;
          padding: 0 22px;
          gap: 18px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          background: linear-gradient(100deg, #6630d9, #a342df);
          box-shadow: 0 12px 38px rgba(120, 58, 237, 0.25);
        }

        .primary:hover,
        .secondary:hover,
        .outline-btn:hover {
          transform: translateY(-2px);
        }

        .secondary,
        .outline-btn {
          min-height: 51px;
          padding: 0 20px;
          color: #d6d9e5;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.025);
          font-size: 13px;
        }

        .stats {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 580px;
        }

        .stats div {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 0 17px;
          border-left: 1px solid rgba(255,255,255,0.08);
        }

        .stats div:first-child {
          padding-right: 0;
        }

        .stats div:last-child {
          border-left: 0;
        }

        .stats b {
          font-size: 20px;
        }

        .stats span {
          color: #737b91;
          font-size: 10px;
        }

        .hero-art {
          height: 500px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .art-light {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
        }

        .art-light-one {
          width: 320px;
          height: 320px;
          background: rgba(117, 46, 232, 0.24);
          bottom: 15px;
          right: 30px;
        }

        .art-light-two {
          width: 220px;
          height: 220px;
          background: rgba(31, 79, 210, 0.17);
          top: 30px;
          left: 20px;
        }

        .creative-device {
          width: 440px;
          height: 295px;
          padding: 9px;
          border-radius: 31px;
          background: linear-gradient(145deg, #12172b, #070a16);
          border: 1px solid rgba(166, 103, 255, 0.25);
          box-shadow:
            0 40px 90px rgba(0,0,0,0.7),
            0 0 50px rgba(118, 55, 237, 0.15),
            inset 0 1px rgba(255,255,255,0.05);
          transform: rotateY(-8deg) rotateX(3deg);
          position: relative;
          z-index: 3;
        }

        .device-camera {
          height: 22px;
          display: flex;
          gap: 5px;
          padding: 5px 8px;
        }

        .device-camera i {
          width: 5px;
          height: 5px;
          background: #272d42;
          border-radius: 50%;
        }

        .device-display {
          height: calc(100% - 25px);
          border-radius: 22px;
          background:
            radial-gradient(circle at center, rgba(100, 44, 205, 0.15), transparent 45%),
            #030611;
          border: 1px solid rgba(137, 74, 237, 0.18);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .device-display img {
          width: 210px;
          max-width: 65%;
          filter: drop-shadow(0 0 18px rgba(142, 73, 255, 0.5));
        }

        .device-display small {
          color: #81899e;
          margin-top: 25px;
          font-size: 11px;
        }

        .device-display strong {
          margin-top: 8px;
          font-size: 15px;
        }

        .floating-card {
          position: absolute;
          width: 125px;
          height: 150px;
          border: 1px solid rgba(159, 98, 255, 0.22);
          border-radius: 22px;
          background:
            linear-gradient(145deg, rgba(24,30,53,0.96), rgba(8,11,25,0.96));
          box-shadow: 0 25px 55px rgba(0,0,0,0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 6;
          backdrop-filter: blur(15px);
        }

        .floating-card span {
          font-size: 30px;
          color: #b766ff;
          text-shadow: 0 0 20px #8d43ff;
        }

        .floating-card b {
          font-size: 13px;
        }

        .floating-card small {
          font-size: 9px;
          color: #70788d;
        }

        .card-one {
          left: 8px;
          top: 55px;
          transform: rotate(-7deg);
        }

        .card-two {
          right: 0;
          bottom: 45px;
          transform: rotate(7deg);
        }

        .neon-floor {
          width: 520px;
          height: 85px;
          position: absolute;
          bottom: 5px;
          z-index: 1;
          border-radius: 50%;
          border-bottom: 2px solid rgba(132, 70, 255, 0.65);
          box-shadow: 0 20px 50px rgba(98, 46, 230, 0.35);
        }

        .neon-floor i {
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 10px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6f43ff, transparent);
        }

        .services,
        .portfolio,
        .products {
          width: min(100% - 48px, 1240px);
          margin: auto;
          padding: 82px 0;
        }

        .section-heading {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 45px;
        }

        .section-heading > span,
        .section-row > div > span {
          color: #9d6cff;
          font-size: 11px;
        }

        .section-heading h2,
        .section-row h2 {
          font-size: 31px;
          margin: 10px 0;
          line-height: 1.6;
        }

        .section-heading p {
          color: #747d94;
          font-size: 12px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .service-card {
          min-height: 245px;
          padding: 27px 22px;
          border-radius: 20px;
          border: 1px solid rgba(127, 92, 205, 0.17);
          background:
            radial-gradient(circle at 50% 0%, rgba(125,58,237,0.14), transparent 45%),
            linear-gradient(145deg, #0d1122, #070a16);
          text-decoration: none;
          color: #fff;
          transition: 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(174, 111, 255, 0.48);
          box-shadow: 0 25px 50px rgba(0,0,0,0.32);
        }

        .service-icon {
          font-size: 36px;
          color: #a95dff;
          text-shadow: 0 0 20px rgba(159, 80, 255, 0.7);
        }

        .service-card h3 {
          font-size: 16px;
          margin: 20px 0 9px;
        }

        .service-card p {
          min-height: 64px;
          color: #747d92;
          font-size: 11px;
          line-height: 1.9;
        }

        .service-action {
          display: inline-block;
          margin-top: 15px;
          color: #b78aff;
          font-size: 11px;
        }

        .section-row {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 38px;
        }

        .outline-btn {
          min-height: 43px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 170px;
          gap: 14px;
        }

        .work-card {
          overflow: hidden;
          border-radius: 19px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .work-1 {
          grid-column: span 5;
          grid-row: span 2;
        }

        .work-2,
        .work-3 {
          grid-column: span 3;
        }

        .work-4 {
          grid-column: span 4;
        }

        .work-5 {
          grid-column: span 3;
        }

        .work-image {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle, rgba(131,65,240,0.22), transparent 35%),
            linear-gradient(145deg, #10162b, #070a15);
        }

        .work-image > span {
          font-size: 52px;
          text-shadow: 0 0 30px #8c4cff;
        }

        .work-overlay {
          position: absolute;
          inset: auto 0 0;
          padding: 45px 20px 18px;
          background: linear-gradient(transparent, rgba(1,3,12,0.95));
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .work-overlay small {
          color: #8f98ae;
          font-size: 9px;
        }

        .work-overlay b {
          font-size: 13px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .product-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: #090d1b;
          transition: 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(157, 93, 255, 0.35);
        }

        .product-preview {
          height: 205px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle, rgba(116,53,222,0.22), transparent 38%),
            linear-gradient(145deg, #10152a, #080b17);
        }

        .product-preview span {
          font-size: 48px;
          text-shadow: 0 0 24px rgba(164, 93, 255, 0.65);
        }

        .product-info {
          padding: 17px;
        }

        .product-info small {
          color: #8e6ed0;
          font-size: 9px;
        }

        .product-info h3 {
          margin: 8px 0 18px;
          font-size: 13px;
        }

        .product-info > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-info b {
          font-size: 12px;
        }

        .product-info button {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: #12172a;
          color: #fff;
          font-size: 19px;
        }

        .order-cta {
          width: min(100% - 48px, 1192px);
          min-height: 190px;
          margin: 45px auto 100px;
          padding: 35px 45px;
          border-radius: 25px;
          border: 1px solid rgba(135, 75, 230, 0.2);
          background:
            radial-gradient(circle at 10% 50%, rgba(30,85,185,0.17), transparent 30%),
            radial-gradient(circle at 85% 40%, rgba(128,54,222,0.22), transparent 35%),
            #0b0e21;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 25px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
        }

        .cta-symbol {
          font-size: 45px;
          color: #a455ff;
          text-shadow: 0 0 25px #7836ec;
        }

        .order-cta small {
          color: #9a6ce8;
          font-size: 10px;
        }

        .order-cta h2 {
          margin: 7px 0;
          font-size: 22px;
        }

        .order-cta p {
          margin: 0;
          color: #788097;
          font-size: 11px;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          background: #02040e;
        }

        .footer-main {
          max-width: 1240px;
          margin: auto;
          padding: 65px 24px 55px;
          display: grid;
          grid-template-columns: 1.4fr 0.7fr 0.7fr 1.2fr;
          gap: 45px;
        }

        .footer-brand img {
          width: 125px;
          filter: drop-shadow(0 0 14px rgba(128, 66, 236, 0.3));
        }

        .footer-brand p,
        .newsletter p {
          color: #697188;
          line-height: 2;
          font-size: 11px;
          max-width: 280px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-column b,
        .newsletter b {
          font-size: 13px;
          margin-bottom: 5px;
        }

        .footer-column a {
          color: #747c91;
          text-decoration: none;
          font-size: 10px;
        }

        .footer-column a:hover {
          color: #fff;
        }

        .newsletter > div {
          display: flex;
          min-height: 45px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
          margin-top: 15px;
        }

        .newsletter input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: rgba(255,255,255,0.025);
          color: #fff;
          padding: 0 14px;
        }

        .newsletter button {
          width: 80px;
          border: 0;
          background: #7137dc;
          color: #fff;
          font-size: 11px;
        }

        .copyright {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px;
          text-align: center;
          color: #535b70;
          font-size: 9px;
        }
        @media (max-width: 980px) {
          .header {
            height: 76px;
            padding: 0 18px;
          }

          .logo img {
            width: 105px;
          }

          nav {
            display: none;
          }

          .account {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .mobile-menu {
            position: absolute;
            top: 68px;
            left: 16px;
            right: 16px;
            padding: 14px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,.09);
            background: rgba(5,8,20,.97);
            backdrop-filter: blur(20px);
            box-shadow: 0 25px 60px rgba(0,0,0,.55);
            z-index: 200;
          }

          .mobile-menu.open {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .mobile-menu a {
            color: #c7ccda;
            text-decoration: none;
            padding: 13px 12px;
            border-radius: 10px;
            font-size: 13px;
          }

          .mobile-menu a:hover {
            background: rgba(255,255,255,.05);
            color: #fff;
          }

          .hero {
            min-height: auto;
            padding: 55px 20px 80px;
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .hero-copy {
            text-align: center;
          }

          .eyebrow {
            margin-bottom: 22px;
          }

          .hero h1 {
            max-width: 650px;
            margin: auto;
            font-size: clamp(38px, 8vw, 55px);
            line-height: 1.5;
          }

          .hero-copy > p {
            margin: 20px auto 0;
            max-width: 600px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .stats {
            margin: 38px auto 0;
          }

          .hero-art {
            height: 430px;
            max-width: 620px;
            width: 100%;
            margin: auto;
          }

          .creative-device {
            width: min(440px, 78vw);
            height: 285px;
          }

          .card-one {
            left: 2%;
          }

          .card-two {
            right: 2%;
          }

          .neon-floor {
            width: 90%;
          }

          .services,
          .portfolio,
          .products {
            width: min(100% - 40px, 760px);
            padding: 64px 0;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 210px;
          }

          .work-1,
          .work-2,
          .work-3,
          .work-4,
          .work-5 {
            grid-column: span 1;
            grid-row: span 1;
          }

          .work-1 {
            grid-row: span 2;
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .order-cta {
            width: calc(100% - 40px);
            margin: 35px auto 75px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand,
          .newsletter {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .header {
            height: 70px;
            padding: 0 15px;
          }

          .logo img {
            width: 92px;
          }

          .header-actions {
            gap: 6px;
          }

          .search,
          .menu-btn {
            width: 39px;
            height: 39px;
            border-radius: 12px;
          }

          .hero {
            padding: 42px 17px 65px;
            gap: 42px;
          }

          .eyebrow {
            padding: 8px 13px;
            font-size: 10px;
            margin-bottom: 18px;
          }

          .hero h1 {
            font-size: 38px;
            line-height: 1.48;
            letter-spacing: -1px;
          }

          .hero-copy > p {
            font-size: 12px;
            line-height: 2;
            margin-top: 17px;
          }

          .hero-buttons {
            margin-top: 24px;
            flex-direction: column;
            gap: 9px;
          }

          .primary,
          .secondary {
            width: 100%;
            min-height: 49px;
          }

          .stats {
            width: 100%;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
            margin-top: 35px;
            border: 1px solid rgba(255,255,255,.06);
            border-radius: 18px;
            overflow: hidden;
            background: rgba(255,255,255,.015);
          }

          .stats div {
            padding: 17px 8px;
            border-left: 0;
            border-bottom: 1px solid rgba(255,255,255,.05);
          }

          .stats div:nth-child(odd) {
            border-left: 1px solid rgba(255,255,255,.05);
          }

          .stats div:nth-child(3),
          .stats div:nth-child(4) {
            border-bottom: 0;
          }

          .stats b {
            font-size: 18px;
          }

          .hero-art {
            height: 330px;
          }

          .creative-device {
            width: 82%;
            height: 220px;
            border-radius: 23px;
            transform: rotateY(-4deg) rotateX(2deg);
          }

          .device-display {
            border-radius: 16px;
          }

          .device-display img {
            width: 145px;
          }

          .device-display small {
            margin-top: 15px;
            font-size: 9px;
          }

          .device-display strong {
            font-size: 12px;
          }

          .floating-card {
            width: 91px;
            height: 112px;
            border-radius: 17px;
          }

          .floating-card span {
            font-size: 24px;
          }

          .floating-card b {
            font-size: 10px;
          }

          .floating-card small {
            font-size: 7px;
          }

          .card-one {
            left: 0;
            top: 22px;
          }

          .card-two {
            right: 0;
            bottom: 20px;
          }

          .neon-floor {
            width: 95%;
            height: 65px;
            bottom: 0;
          }

          .services,
          .portfolio,
          .products {
            width: calc(100% - 34px);
            padding: 52px 0;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .section-heading h2,
          .section-row h2 {
            font-size: 25px;
          }

          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .service-card {
            min-height: 215px;
            padding: 20px 15px;
            border-radius: 17px;
          }

          .service-icon {
            font-size: 30px;
          }

          .service-card h3 {
            margin-top: 15px;
            font-size: 14px;
          }

          .service-card p {
            font-size: 10px;
            min-height: 58px;
          }

          .section-row {
            align-items: flex-end;
            gap: 14px;
            margin-bottom: 26px;
          }

          .section-row h2 {
            margin-bottom: 0;
          }

          .outline-btn {
            min-height: 38px;
            padding: 0 13px;
            font-size: 10px;
          }

          .portfolio-grid {
            display: flex;
            overflow-x: auto;
            gap: 11px;
            padding-bottom: 10px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .portfolio-grid::-webkit-scrollbar {
            display: none;
          }

          .work-card {
            min-width: min(86%, 330px);
            height: 260px;
            scroll-snap-align: center;
          }

          .product-grid {
            display: flex;
            overflow-x: auto;
            gap: 11px;
            padding-bottom: 10px;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
          }

          .product-grid::-webkit-scrollbar {
            display: none;
          }

          .product-card {
            min-width: min(82%, 310px);
            scroll-snap-align: center;
          }

          .product-preview {
            height: 190px;
          }

          .order-cta {
            width: calc(100% - 34px);
            min-height: auto;
            margin: 25px auto 65px;
            padding: 28px 20px;
            grid-template-columns: 1fr;
            text-align: center;
            gap: 17px;
          }

          .cta-symbol {
            font-size: 38px;
          }

          .order-cta h2 {
            font-size: 19px;
          }

          .order-cta .primary {
            width: 100%;
          }

          .footer-main {
            padding: 50px 20px 40px;
            grid-template-columns: 1fr 1fr;
            gap: 35px 22px;
          }

          .footer-brand,
          .newsletter {
            grid-column: 1 / -1;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-brand img {
            width: 115px;
          }

          .footer-brand p {
            margin: 12px auto 0;
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

          .service-card {
            min-height: 190px;
          }

          .work-card {
            min-width: 84%;
          }

          .product-card {
            min-width: 78%;
          }
        }
      `}</style>
    </main>
  );
}
