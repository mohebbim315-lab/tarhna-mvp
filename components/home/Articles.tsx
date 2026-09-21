import Link from "next/link";
import "./Articles.css";

const articles = [
  {
    icon: "✦",
    category: "هوش مصنوعی",
    title: "ترفندهای افزایش کیفیت عکس با AI",
    text: "چند روش کاربردی برای گرفتن خروجی حرفه‌ای‌تر از ابزارهای هوش مصنوعی.",
  },
  {
    icon: "▣",
    category: "آموزش طراحی",
    title: "راهنمای طراحی پوستر تبلیغاتی موثر",
    text: "اصول مهم ترکیب‌بندی، رنگ و تایپوگرافی برای ساخت یک پوستر جذاب.",
  },
  {
    icon: "◈",
    category: "ایده و خلاقیت",
    title: "چطور یک پوستر حرفه‌ای بسازیم؟",
    text: "از ایده اولیه تا خروجی نهایی؛ مسیر ساخت یک طراحی حرفه‌ای را مرور می‌کنیم.",
  },
];

export default function Articles() {
  return (
    <section className="articles-section" id="articles" dir="rtl">
      <div className="articles-glow" />

      <div className="articles-header">
        <div>
          <span className="articles-label">یادگیری و الهام</span>
          <h2>آخرین مقالات و آموزش‌ها</h2>
          <p>
            نکته‌ها، آموزش‌ها و ایده‌های تازه برای طراحان و علاقه‌مندان
            به هوش مصنوعی
          </p>
        </div>

        <Link href="/#articles" className="articles-all">
          مشاهده همه مقالات
          <span>←</span>
        </Link>
      </div>

      <div className="articles-layout">
        <div className="articles-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div className={`article-cover article-cover-${index + 1}`}>
                <div className="article-art">{article.icon}</div>

                <span className="article-category">
                  {article.category}
                </span>
              </div>

              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.text}</p>

                <Link href="/#articles" className="article-link">
                  مطالعه مقاله
                  <span>←</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <aside className="newsletter">
          <div className="newsletter-icon">✦</div>

          <span className="newsletter-label">
            خبرنامه طرحنا
          </span>

          <h3>با طرحنا همراه باشید</h3>

          <p>
            جدیدترین آموزش‌ها، ایده‌ها و خبرهای دنیای طراحی و هوش مصنوعی
            را از دست ندهید.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="ایمیل شما..."
              aria-label="ایمیل شما"
            />

            <button type="button">
              عضویت
            </button>
          </form>

          <small>
            بدون پیام‌های مزاحم؛ فقط محتوای کاربردی.
          </small>
        </aside>
      </div>

      <Link href="/#articles" className="articles-mobile-all">
        مشاهده همه مقالات
        <span>←</span>
      </Link>
    </section>
  );
}
