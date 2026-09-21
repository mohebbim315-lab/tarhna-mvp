import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="tarhna-footer" dir="rtl">
      <div className="footer-glow" />

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="/images/tarhna-header-logo.png"
              alt="طرحنا"
              className="footer-logo"
            />

            <p>
              طرحنا؛ پلتفرم خدمات طراحی و هوش مصنوعی برای تبدیل ایده‌های شما
              به خروجی‌های حرفه‌ای و خلاقانه.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="اینستاگرام">◎</a>
              <a href="#" aria-label="تلگرام">➤</a>
              <a href="#" aria-label="لینکدین">in</a>
              <a href="#" aria-label="شبکه اجتماعی">◈</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>خدمات طرحنا</h3>
            <Link href="/create">ساخت تصویر با هوش مصنوعی</Link>
            <Link href="/edit">ویرایش و افزایش کیفیت</Link>
            <Link href="/poster">طراحی پوستر</Link>
            <Link href="/logo">طراحی لوگو</Link>
          </div>

          <div className="footer-column">
            <h3>فروشگاه</h3>
            <Link href="/prompts">پرامپت‌های آماده</Link>
            <Link href="/gallery">طرح‌های آماده</Link>
            <Link href="/#sellers">فروشندگان</Link>
            <Link href="/#articles">مقالات و آموزش‌ها</Link>
          </div>

          <div className="footer-column">
            <h3>طرحنا</h3>
            <Link href="/">درباره ما</Link>
            <Link href="/">تماس با ما</Link>
            <Link href="/">سوالات متداول</Link>
            <Link href="/">قوانین و حریم خصوصی</Link>
          </div>
        </div>

        <div className="footer-trust">
          <div className="trust-text">
            <strong>خرید و سفارش مطمئن در طرحنا</strong>
            <span>
              پشتیبانی، پرداخت امن و تحویل حرفه‌ای برای تجربه‌ای بهتر
            </span>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <span>✓</span>
              <small>پرداخت امن</small>
            </div>

            <div className="trust-badge">
              <span>24/7</span>
              <small>پشتیبانی</small>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © ۲۰۲۶ طرحنا — تمامی حقوق محفوظ است.
          </p>

          <a href="#top" className="back-to-top" aria-label="بازگشت به بالا">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
