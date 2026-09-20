"use client";

import Link from "next/link";

const services = [
  {
    icon: "✦",
    title: "ثبت سفارش طراحی",
    text: "پوستر، لوگو، کاور، بنر و هر طراحی که نیاز داری",
    href: "/create",
    action: "ثبت سفارش",
  },
  {
    icon: "▧",
    title: "نمونه‌کارها",
    text: "جدیدترین پروژه‌ها و طراحی‌های انجام‌شده",
    href: "/gallery",
    action: "مشاهده نمونه‌کارها",
  },
  {
    icon: "♢",
    title: "فروشگاه فایل",
    text: "پک‌های آماده، پوستر، قالب و فایل‌های کاربردی",
    href: "/prompts",
    action: "مشاهده فروشگاه",
  },
  {
    icon: "♛",
    title: "فروش در طرحنا",
    text: "طرح‌ها و فایل‌های خودت را بفروش و درآمد کسب کن",
    href: "/dashboard",
    action: "شروع فروش",
  },
];

const portfolio = [
  { title: "پوستر مذهبی", icon: "☾", className: "work-one" },
  { title: "طراحی تبلیغاتی", icon: "◆", className: "work-two" },
  { title: "هویت بصری", icon: "✦", className: "work-three" },
  { title: "طراحی شبکه اجتماعی", icon: "◈", className: "work-four" },
];

const products = [
  { title: "پک آیکون سه‌بعدی", price: "۶۹,۰۰۰ تومان", icon: "◉" },
  { title: "تکست افکت نئون", price: "۷۹,۰۰۰ تومان", icon: "NEON" },
  { title: "موکاپ حرفه‌ای", price: "۹۹,۰۰۰ تومان", icon: "◆" },
  { title: "قالب پست اینستاگرام", price: "۸۹,۰۰۰ تومان", icon: "▣" },
];

export default function HomePro() {
  return (
    <main className="site" dir="rtl">
      <header className="header">
        <div className="nav-shell">
          <Link href="/" className="brand">
            <img src="/images/tarhna-logo.png" alt="طرحنا" />
          </Link>

          <nav>
            <Link className="active" href="/">صفحه اصلی</Link>
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
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg hero-bg-one" />
        <div className="hero-bg hero-bg-two" />

        <div className="hero-copy">
          <div className="eyebrow">استودیوی طراحی و بازار خلاقیت ✦</div>

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
          <div className="purple-orb orb-one" />
          <div className="purple-orb orb-two" />

          <div className="floating-card float-a">
            <span>✦</span>
            <b>خلاقیت</b>
            <small>بدون محدودیت</small>
          </div>

          <div className="floating-card float-b">
            <span>◈</span>
            <b>طراحی حرفه‌ای</b>
            <small>با کیفیت بالا</small>
          </div>

          <div className="laptop">
            <div className="laptop-screen">
              <img src="/images/tarhna-logo.png" alt="لوگوی طرحنا" />
              <p>فراتر از یک طرح</p>
              <strong>آغاز یک ایده بزرگ</strong>
            </div>
          </div>

          <div className="desk-glow" />
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
      <section className="portfolio" id="portfolio">
        <div className="section-title row-title">
          <div>
            <span>منتخب طرحنا</span>
            <h2>نمونه‌کارهای اخیر</h2>
            <p>نگاهی به بخشی از پروژه‌های انجام‌شده</p>
          </div>
          <Link href="/gallery" className="outline-btn">
            مشاهده همه ←
          </Link>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <Link href="/gallery" className={`portfolio-card ${item.className}`} key={item.title}>
              <div className="portfolio-shine" />
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <small>مشاهده پروژه</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="products">
        <div className="section-title row-title">
          <div>
            <span>فروشگاه طرحنا</span>
            <h2>محصولات پیشنهادی</h2>
            <p>فایل‌های آماده باکیفیت برای پروژه‌های خودت</p>
          </div>
          <Link href="/prompts" className="outline-btn">
            رفتن به فروشگاه ←
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-preview">
                <span>{product.icon}</span>
              </div>

              <div className="product-body">
                <h3>{product.title}</h3>
                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <button aria-label="افزودن به سبد خرید">＋</button>
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
              استودیوی طراحی و بازار فایل‌های خلاقانه؛
              جایی برای خلق، خرید و فروش ایده‌ها.
            </p>
          </div>

          <div className="footer-links">
            <strong>دسترسی سریع</strong>
            <Link href="/create">ثبت سفارش</Link>
            <Link href="/prompts">فروشگاه</Link>
            <Link href="/gallery">نمونه‌کارها</Link>
            <Link href="/dashboard">فروش در طرحنا</Link>
          </div>

          <div className="footer-links">
            <strong>پشتیبانی</strong>
            <a href="#">سوالات متداول</a>
            <a href="#">تماس با ما</a>
            <a href="#">قوانین و مقررات</a>
            <a href="#">حریم خصوصی</a>
          </div>

          <div className="newsletter">
            <strong>در خبر باش!</strong>
            <p>جدیدترین‌ها و پیشنهادهای ویژه را دریافت کنید.</p>
            <div>
              <input placeholder="ایمیل شما" />
              <button>عضویت</button>
            </div>
          </div>
        </div>

        <div className="copyright">
          © ۲۰۲۶ طرحنا — تمامی حقوق محفوظ است.
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
            radial-gradient(circle at 78% 10%, rgba(77, 45, 255, 0.16), transparent 25%),
            radial-gradient(circle at 20% 25%, rgba(217, 70, 239, 0.08), transparent 23%),
            linear-gradient(180deg, #030611 0%, #050817 55%, #03050d 100%);
          color: #fff;
          font-family: Arial, Tahoma, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        .header {
          position: relative;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(3, 5, 15, 0.88);
          backdrop-filter: blur(22px);
        }

        .nav-shell {
          width: min(1400px, 92%);
          min-height: 84px;
          margin: auto;
          display: grid;
          grid-template-columns: 200px 1fr 200px;
          align-items: center;
          gap: 25px;
        }

        .brand {
          display: flex;
          justify-content: flex-start;
        }

        .brand img {
          width: 150px;
          max-height: 64px;
          object-fit: contain;
          filter: drop-shadow(0 0 18px rgba(139, 92, 246, 0.45));
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 34px;
        }

        nav a {
          color: #aeb4c8;
          font-size: 14px;
          transition: 0.25s;
          position: relative;
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
          bottom: -18px;
          height: 2px;
          border-radius: 4px;
          background: linear-gradient(90deg, #2563eb, #d946ef);
          box-shadow: 0 0 14px #2563eb;
        }

        .header-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }

        .search,
        .account {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.035);
          color: #fff;
          border-radius: 14px;
          min-height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search {
          width: 43px;
          font-size: 22px;
        }

        .account {
          padding: 0 17px;
          font-size: 13px;
        }

        .hero {
          width: min(1400px, 92%);
          min-height: 650px;
          margin: auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 45px;
          position: relative;
          padding: 65px 0;
        }

        .hero-bg {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-bg-one {
          width: 390px;
          height: 390px;
          background: rgba(76, 29, 149, 0.2);
          left: 42%;
          top: 5%;
        }

        .hero-bg-two {
          width: 250px;
          height: 250px;
          background: rgba(2, 132, 199, 0.14);
          right: 0;
          bottom: 5%;
        }

        .hero-copy {
          position: relative;
          z-index: 5;
        }

        .eyebrow {
          display: inline-flex;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid rgba(217, 70, 239, 0.28);
          background: rgba(168, 85, 247, 0.09);
          color: #d8b4fe;
          font-size: 13px;
        }

        .hero h1 {
          font-size: clamp(44px, 5vw, 76px);
          line-height: 1.35;
          margin: 24px 0 18px;
          font-weight: 900;
          letter-spacing: -2px;
          max-width: 680px;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.2));
        }

        .hero-copy > p {
          color: #9ca3b6;
          line-height: 2.1;
          max-width: 620px;
          font-size: 16px;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
        }

        .primary,
        .secondary,
        .outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          transition: 0.25s;
        }

        .primary {
          min-height: 52px;
          padding: 0 25px;
          gap: 14px;
          background: linear-gradient(100deg, #2563eb, #7c3aed, #d946ef);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.3);
          font-weight: 700;
        }

        .secondary,
        .outline-btn {
          min-height: 52px;
          padding: 0 25px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.025);
        }

        .primary:hover,
        .secondary:hover,
        .outline-btn:hover {
          transform: translateY(-2px);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 40px;
          max-width: 650px;
        }

        .stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .stats b {
          font-size: 21px;
        }

        .stats span {
          color: #737b91;
          font-size: 11px;
        }
        .hero-art {
          height: 520px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .purple-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(55px);
        }

        .orb-one {
          width: 280px;
          height: 280px;
          background: rgba(126, 34, 206, 0.3);
        }

        .orb-two {
          width: 190px;
          height: 190px;
          background: rgba(37, 99, 235, 0.25);
          right: 10%;
          top: 12%;
        }

        .laptop {
          width: 500px;
          height: 330px;
          border: 1px solid rgba(129, 140, 248, 0.55);
          border-radius: 25px;
          padding: 15px;
          transform: rotateY(-8deg) rotateX(3deg);
          background: linear-gradient(145deg, #15182c, #070914);
          box-shadow:
            0 0 40px rgba(255,255,255,.02),
            0 0 70px rgba(37,99,235,.22),
            0 0 110px rgba(217,70,239,.13);
          position: relative;
          z-index: 4;
        }

        .laptop-screen {
          height: 100%;
          border-radius: 16px;
          border: 1px solid rgba(168,85,247,.35);
          background:
            radial-gradient(circle at center, rgba(99,102,241,.18), transparent 45%),
            #040610;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 45px rgba(59,130,246,.08);
        }

        .laptop-screen img {
          width: 68%;
          object-fit: contain;
          filter: drop-shadow(0 0 25px rgba(168,85,247,.55));
        }

        .laptop-screen p {
          margin: 18px 0 5px;
          color: #d6d9e5;
        }

        .laptop-screen strong {
          font-size: 20px;
        }

        .desk-glow {
          position: absolute;
          bottom: 55px;
          width: 560px;
          height: 75px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(139,92,246,.42), rgba(37,99,235,.1) 45%, transparent 72%);
          border-bottom: 2px solid rgba(168,85,247,.5);
          filter: blur(.2px);
        }

        .floating-card {
          position: absolute;
          z-index: 8;
          width: 140px;
          min-height: 125px;
          border: 1px solid rgba(255,255,255,.14);
          background: linear-gradient(145deg, rgba(30,41,59,.88), rgba(15,23,42,.55));
          backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
          box-shadow: 0 15px 40px rgba(0,0,0,.35);
        }

        .floating-card span {
          font-size: 28px;
          color: #c084fc;
          text-shadow: 0 0 18px #7c3aed;
        }

        .floating-card small {
          color: #8b93a8;
        }

        .float-a {
          left: 1%;
          top: 16%;
          transform: rotate(-7deg);
        }

        .float-b {
          right: 0;
          top: 5%;
          transform: rotate(7deg);
        }

        .services,
        .portfolio,
        .products {
          width: min(1400px, 92%);
          margin: auto;
          padding: 85px 0;
          border-top: 1px solid rgba(255,255,255,.06);
        }

        .section-title {
          text-align: center;
          margin-bottom: 38px;
        }

        .section-title span {
          color: #818cf8;
          font-size: 13px;
        }

        .section-title h2 {
          margin: 9px 0;
          font-size: 34px;
        }

        .section-title p {
          color: #747d91;
          margin: 0;
        }

        .row-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          text-align: right;
        }

        .outline-btn {
          min-height: 43px;
          font-size: 12px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .service-card {
          min-height: 265px;
          padding: 26px;
          border-radius: 22px;
          border: 1px solid rgba(99,102,241,.25);
          background:
            radial-gradient(circle at 50% 0%, rgba(99,102,241,.12), transparent 45%),
            rgba(8,12,26,.8);
          position: relative;
          overflow: hidden;
          transition: .3s;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(168,85,247,.6);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 17px;
          background: linear-gradient(145deg,#172554,#581c87);
          border: 1px solid rgba(192,132,252,.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 0 25px rgba(124,58,237,.2);
        }

        .service-card h3 {
          font-size: 19px;
          margin: 22px 0 10px;
        }

        .service-card p {
          color: #7f879a;
          line-height: 1.9;
          font-size: 13px;
          min-height: 70px;
        }

        .card-action {
          color: #c4b5fd;
          font-size: 12px;
        }

        .portfolio-grid,
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .portfolio-card {
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.12);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 22px;
          background: #0b1020;
        }

        .portfolio-card::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .8;
        }

        .work-one::before {
          background: radial-gradient(circle at 50% 35%, #7c2d12, #090d18 65%);
        }

        .work-two::before {
          background: radial-gradient(circle at 50% 35%, #172554, #090d18 65%);
        }

        .work-three::before {
          background: radial-gradient(circle at 50% 35%, #581c87, #090d18 65%);
        }

        .work-four::before {
          background: radial-gradient(circle at 50% 35%, #164e63, #090d18 65%);
        }

        .portfolio-card span,
        .portfolio-card h3,
        .portfolio-card small {
          position: relative;
          z-index: 2;
        }

        .portfolio-card span {
          font-size: 50px;
          margin-bottom: auto;
          text-shadow: 0 0 30px #a855f7;
        }

        .portfolio-card h3 {
          margin: 0 0 7px;
        }

        .portfolio-card small {
          color: #8b93a7;
        }

        .product-card {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.11);
          background: rgba(9,13,28,.85);
        }

        .product-preview {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 45%, rgba(124,58,237,.32), transparent 40%),
            linear-gradient(145deg,#111827,#050710);
        }

        .product-preview span {
          font-size: 45px;
          font-weight: 900;
          text-shadow: 0 0 35px #8b5cf6;
        }

        .product-body {
          padding: 20px;
        }

        .product-body h3 {
          font-size: 16px;
          margin: 0 0 18px;
        }

        .product-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,.07);
          padding-top: 14px;
        }

        .product-bottom strong {
          font-size: 13px;
          color: #c4b5fd;
        }

        .product-bottom button {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          border: 1px solid rgba(139,92,246,.35);
          background: rgba(124,58,237,.14);
          color: white;
          font-size: 20px;
        }

        .order-cta {
          width: min(1400px,92%);
          margin: 25px auto 80px;
          padding: 35px 45px;
          border-radius: 24px;
          border: 1px solid rgba(139,92,246,.35);
          background:
            radial-gradient(circle at 20% 50%, rgba(217,70,239,.18), transparent 30%),
            linear-gradient(90deg,#08152d,#170d3c,#07152c);
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 25px;
          box-shadow: 0 0 55px rgba(37,99,235,.1);
        }

        .cta-icon {
          font-size: 46px;
          color: #c084fc;
          transform: rotate(-25deg);
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
          color: #8c94a8;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,.07);
          background: #03050c;
        }

        .footer-main {
          width: min(1400px,92%);
          margin: auto;
          padding: 55px 0 40px;
          display: grid;
          grid-template-columns: 1.4fr .8fr .8fr 1.3fr;
          gap: 45px;
        }

        .footer-brand img {
          width: 145px;
          filter: drop-shadow(0 0 18px rgba(139,92,246,.4));
        }

        .footer-brand p,
        .newsletter p {
          color: #777f92;
          line-height: 1.9;
          font-size: 13px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links a {
          color: #858da0;
          font-size: 13px;
        }

        .newsletter > div {
          display: flex;
          margin-top: 15px;
        }

        .newsletter input {
          flex: 1;
          min-width: 0;
          border: 1px solid rgba(255,255,255,.13);
          border-left: 0;
          background: rgba(255,255,255,.025);
          color: white;
          padding: 12px;
          border-radius: 0 12px 12px 0;
          outline: none;
        }

        .newsletter button {
          border: 0;
          padding: 0 20px;
          color: white;
          background: linear-gradient(100deg,#7c3aed,#d946ef);
          border-radius: 12px 0 0 12px;
        }

        .copyright {
          text-align: center;
          color: #626a7b;
          border-top: 1px solid rgba(255,255,255,.06);
          padding: 22px;
          font-size: 12px;
        }

        @media (max-width: 800px) {
          .nav-shell {
            width: 92%;
            min-height: 70px;
            grid-template-columns: 1fr auto;
          }

          .brand img {
            width: 112px;
          }

          nav {
            display: none;
          }

          .header-actions {
            gap: 7px;
          }

          .search {
            width: 39px;
            min-height: 39px;
          }

          .account {
            min-height: 39px;
            padding: 0 12px;
            font-size: 11px;
          }

          .hero {
            width: 92%;
            min-height: auto;
            grid-template-columns: 1fr;
            padding: 45px 0 25px;
            gap: 15px;
          }

          .hero-copy {
            text-align: center;
          }

          .eyebrow {
            font-size: 11px;
          }

          .hero h1 {
            font-size: 38px;
            line-height: 1.5;
            letter-spacing: -1px;
            margin: 20px auto 13px;
          }

          .hero-copy > p {
            font-size: 13px;
            line-height: 2;
            margin: auto;
          }

          .hero-buttons {
            flex-direction: column;
            margin-top: 25px;
          }

          .primary,
          .secondary {
            width: 100%;
          }

          .stats {
            margin-top: 28px;
            grid-template-columns: repeat(2,1fr);
            gap: 18px 5px;
          }

          .stats div {
            border: 0;
          }

          .hero-art {
            height: 390px;
            margin-top: 10px;
          }

          .laptop {
            width: 82%;
            height: 230px;
            transform: rotateY(-4deg) rotateX(2deg);
          }

          .laptop-screen img {
            width: 75%;
          }

          .laptop-screen p {
            font-size: 12px;
          }

          .laptop-screen strong {
            font-size: 15px;
          }

          .desk-glow {
            width: 92%;
            bottom: 45px;
          }

          .floating-card {
            width: 105px;
            min-height: 100px;
            padding: 12px;
          }

          .floating-card span {
            font-size: 21px;
          }

          .floating-card b {
            font-size: 11px;
          }

          .floating-card small {
            font-size: 8px;
          }

          .float-a {
            left: 0;
            top: 7%;
          }

          .float-b {
            right: 0;
            top: 3%;
          }

          .services,
          .portfolio,
          .products {
            width: 92%;
            padding: 55px 0;
          }

          .section-title {
            margin-bottom: 25px;
          }

          .section-title h2 {
            font-size: 25px;
          }

          .section-title p {
            font-size: 12px;
          }

          .row-title {
            display: block;
            text-align: right;
          }

          .row-title .outline-btn {
            margin-top: 16px;
          }

          .services-grid {
            grid-template-columns: repeat(2,1fr);
            gap: 11px;
          }

          .service-card {
            min-height: 225px;
            padding: 17px;
            border-radius: 18px;
          }

          .service-icon {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }

          .service-card h3 {
            font-size: 15px;
            margin: 16px 0 8px;
          }

          .service-card p {
            font-size: 11px;
            min-height: 65px;
          }

          .portfolio-grid,
          .product-grid {
            grid-template-columns: repeat(2,1fr);
            gap: 11px;
          }

          .portfolio-card {
            height: 200px;
            padding: 16px;
          }

          .portfolio-card span {
            font-size: 38px;
          }

          .portfolio-card h3 {
            font-size: 14px;
          }

          .product-preview {
            height: 135px;
          }

          .product-preview span {
            font-size: 30px;
          }

          .product-body {
            padding: 14px;
          }

          .product-body h3 {
            font-size: 13px;
          }

          .product-bottom {
            display: block;
          }

          .product-bottom button {
            margin-top: 10px;
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
          }

          .order-cta h2 {
            font-size: 21px;
          }

          .footer-main {
            width: 92%;
            grid-template-columns: 1fr 1fr;
            gap: 32px 20px;
          }

          .footer-brand,
          .newsletter {
            grid-column: 1 / -1;
          }

          .footer-brand img {
            width: 125px;
          }
        }

        @media (max-width: 380px) {
          .hero h1 {
            font-size: 33px;
          }

          .services-grid,
          .portfolio-grid,
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
