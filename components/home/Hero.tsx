"use client";

import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

export default function Hero() {

  return (
    <>
      <header className="tarhna-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="طرحنا">
            <Image
              src="/images/tarhna-header-logo.png"
              alt="طرحنا"
              width={170}
              height={75}
              priority
              className="header-logo"
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/#services">خدمات</Link>
            <Link href="/#portfolio">نمونه‌کارها</Link>
            <Link href="/prompts">فروشگاه طرح‌ها</Link>
            <Link href="/#about">درباره ما</Link>
          </nav>

          <div className="header-actions">
            <Link href="/dashboard" className="account-btn">
              حساب کاربری
            </Link>

            <button
              type="button"
              className="mobile-menu"
              aria-label="باز کردن منو"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <section className="hero" dir="rtl">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-badge">✦ استودیوی خلاقیت طرحنا</span>

            <h1>
              ایده‌ات را بساز،
              <span> حرفه‌ای تحویل بگیر</span>
            </h1>

            <p className="hero-description">
              خدمات گرافیکی و طراحی با قدرت هوش مصنوعی و خلاقیت انسانی؛
              از افزایش کیفیت و بازطراحی عکس تا طراحی پوستر و تصاویر اختصاصی.
            </p>

            <div className="hero-buttons">
              <Link href="/create" className="primary-btn">
                ثبت سفارش <span>↗</span>
              </Link>

              <Link href="/#portfolio" className="secondary-btn">
                مشاهده نمونه‌کارها <span>▶</span>
              </Link>
            </div>

            <div className="hero-features">
              <div>
                <b>✦</b>
                <span>
                  <strong>کیفیت حرفه‌ای</strong>
                  خروجی باکیفیت
                </span>
              </div>

              <div>
                <b>◷</b>
                <span>
                  <strong>تحویل به‌موقع</strong>
                  طبق زمان توافق
                </span>
              </div>

              <div>
                <b>◇</b>
                <span>
                  <strong>قیمت مناسب</strong>
                  تعرفه منصفانه
                </span>
              </div>

              <div>
                <b>♡</b>
                <span>
                  <strong>پشتیبانی واقعی</strong>
                  همراه شما
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="workspace">
              <Image
                src="/images/tarhna-hero.png"
                alt="استودیوی طراحی طرحنا"
                width={1024}
                height={1024}
                priority
                className="workspace-image"
              />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
