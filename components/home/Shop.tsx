import Link from "next/link";
import "./Shop.css";

const products = [
  {
    icon: "🕌",
    title: "پوستر مذهبی",
    category: "طرح آماده",
    price: "۴۹,۰۰۰",
  },
  {
    icon: "📱",
    title: "قالب پست اینستاگرام",
    category: "لایه باز",
    price: "۷۹,۰۰۰",
  },
  {
    icon: "🎨",
    title: "پوستر تبلیغاتی",
    category: "طرح حرفه‌ای",
    price: "۵۹,۰۰۰",
  },
  {
    icon: "📦",
    title: "موکاپ بسته‌بندی",
    category: "لایه باز",
    price: "۸۹,۰۰۰",
  },
  {
    icon: "✨",
    title: "تصویر AI",
    category: "فانتزی و هنری",
    price: "۴۹,۰۰۰",
  },
  {
    icon: "🌌",
    title: "بک‌گراند حرفه‌ای",
    category: "مجموعه ویژه",
    price: "۵۹,۰۰۰",
  },
];

export default function Shop() {
  return (
    <section className="shop-section" id="shop" dir="rtl">
      <div className="shop-glow" />

      <div className="shop-header">
        <div>
          <span className="shop-label">فروشگاه طرحنا</span>
          <h2>فروشگاه طرح‌های آماده</h2>
          <p>
            مجموعه‌ای از طرح‌ها، تصاویر و فایل‌های آماده برای پروژه‌های شما
          </p>
        </div>

        <Link href="/gallery" className="shop-all">
          مشاهده همه
          <span>←</span>
        </Link>
      </div>

      <div className="shop-categories">
        <button className="active">همه</button>
        <button>تصاویر AI</button>
        <button>قالب شبکه اجتماعی</button>
        <button>پوستر</button>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <article className="product-card" key={index}>
            <div className={`product-cover product-cover-${index + 1}`}>
              <span>{product.icon}</span>

              <div className="product-badge">
                آماده
              </div>
            </div>

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.title}</h3>

              <div className="product-bottom">
                <div>
                  <strong>{product.price}</strong>
                  <small> تومان</small>
                </div>

                <button
                  type="button"
                  className="product-cart"
                  aria-label={`افزودن ${product.title} به سبد خرید`}
                >
                  🛒
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link href="/gallery" className="shop-mobile-all">
        مشاهده همه طرح‌ها
        <span>←</span>
      </Link>
    </section>
  );
}
