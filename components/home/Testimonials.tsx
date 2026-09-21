import "./Testimonials.css";

const testimonials = [
  {
    name: "کاربر طرحنا",
    service: "طراحی پوستر",
    rating: 5,
    text: "کیفیت طراحی و جزئیات خروجی خیلی خوب بود و نتیجه نهایی دقیقاً با چیزی که برای پروژه می‌خواستم هماهنگ شد.",
  },
  {
    name: "کاربر طرحنا",
    service: "ویرایش تصویر",
    rating: 5,
    text: "فرآیند سفارش ساده بود و نتیجه ویرایش تصویر کیفیت خوبی داشت. تجربه کار با سایت هم راحت و سریع بود.",
  },
  {
    name: "کاربر طرحنا",
    service: "ساخت تصویر با AI",
    rating: 5,
    text: "ایده‌ای که در ذهن داشتم به یک تصویر حرفه‌ای تبدیل شد. امکان انتخاب نوع خدمات هم خیلی کاربردی بود.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" dir="rtl">
      <div className="testimonials-glow" />

      <div className="testimonials-header">
        <div>
          <span className="testimonials-label">تجربه کاربران</span>
          <h2>کاربران درباره طرحنا چه می‌گویند؟</h2>
          <p>
            این بخش در نسخه نهایی با تجربه و نظرات واقعی مشتریان طرحنا
            تکمیل خواهد شد.
          </p>
        </div>

        <div className="testimonials-score">
          <strong>۴.۹</strong>
          <div>
            <span className="score-stars">★★★★★</span>
            <small>نمونه نمایشی</small>
          </div>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <article className="testimonial-card" key={index}>
            <div className="testimonial-top">
              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <span>{item.service}</span>
                </div>
              </div>

              <span className="testimonial-demo">نمونه</span>
            </div>

            <div
              className="testimonial-stars"
              aria-label={`${item.rating} ستاره`}
            >
              {"★".repeat(item.rating)}
            </div>

            <p>«{item.text}»</p>

            <div className="testimonial-bottom">
              <span>✓ سفارش تکمیل‌شده</span>
              <span className="quote-icon">❞</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
