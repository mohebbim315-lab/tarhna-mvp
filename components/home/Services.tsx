import Link from "next/link";
import "./Services.css";

const services = [
  {
    icon: "✦",
    title: "ساخت و طراحی تصویر",
    description: "ساخت تصاویر خلاقانه با هوش مصنوعی",
    href: "/create",
  },
  {
    icon: "◐",
    title: "رنگی کردن عکس قدیمی",
    description: "بازگرداندن رنگ و حس زندگی به خاطرات",
    href: "/edit",
  },
  {
    icon: "✎",
    title: "ادیت و نورپردازی عکس",
    description: "ویرایش حرفه‌ای، نور و جلوه‌های جذاب",
    href: "/edit",
  },
  {
    icon: "▣",
    title: "طراحی پوستر",
    description: "پوسترهای تبلیغاتی، مناسبتی و حرفه‌ای",
    href: "/poster",
  },
  {
    icon: "◫",
    title: "بازسازی و تبدیل به فایل باکیفیت",
    description: "ترمیم تصاویر آسیب‌دیده و قدیمی",
    href: "/edit",
  },
  {
    icon: "◇",
    title: "افزایش کیفیت عکس",
    description: "افزایش وضوح و جزئیات تصاویر شما",
    href: "/edit",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services" dir="rtl">
      <div className="services-container">
        <div className="services-heading">
          <div>
            <span className="services-label">خدمات خلاقانه</span>
            <h2>خدمات طرحنا</h2>
            <p>هر آنچه در دنیای طراحی و گرافیک نیاز دارید</p>
          </div>

          <Link href="/services" className="services-all">
            مشاهده همه خدمات
            <span>←</span>
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="service-card"
              key={service.title}
            >
              <div className="service-icon">{service.icon}</div>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="service-arrow">←</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
