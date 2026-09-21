import Link from "next/link";
import "./MobileNav.css";

export default function MobileNav() {
  return (
    <nav className="mobile-bottom-nav" dir="rtl" aria-label="منوی موبایل">
      <Link href="/" className="mobile-nav-item">
        <span className="mobile-nav-icon">⌂</span>
        <span>خانه</span>
      </Link>

      <Link href="/#services" className="mobile-nav-item">
        <span className="mobile-nav-icon">✦</span>
        <span>خدمات</span>
      </Link>

      <Link href="/create" className="mobile-nav-create">
        <span className="mobile-create-button">＋</span>
        <span>سفارش</span>
      </Link>

      <Link href="/prompts" className="mobile-nav-item">
        <span className="mobile-nav-icon">▣</span>
        <span>فروشگاه</span>
      </Link>

      <Link href="/dashboard" className="mobile-nav-item">
        <span className="mobile-nav-icon">♙</span>
        <span>حساب من</span>
      </Link>
    </nav>
  );
}
