"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import "./order.css";

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  basePrice: number | null;
};

const services: Service[] = [
  {
    id: "enhance",
    icon: "✦",
    title: "افزایش کیفیت عکس",
    description: "واضح‌تر، شارپ‌تر و با جزئیات بیشتر",
    basePrice: 2500,
  },
  {
    id: "restore",
    icon: "▣",
    title: "بازسازی عکس",
    description: "ترمیم و تبدیل به فایل باکیفیت",
    basePrice: null,
  },
  {
    id: "poster",
    icon: "◈",
    title: "طراحی پوستر",
    description: "پوستر تبلیغاتی یا مذهبی",
    basePrice: 120000,
  },
  {
    id: "edit",
    icon: "✧",
    title: "ادیت و نورپردازی عکس",
    description: "اصلاح نور، رنگ و ظاهر حرفه‌ای",
    basePrice: null,
  },
  {
    id: "colorize",
    icon: "◐",
    title: "رنگی کردن عکس قدیمی",
    description: "بازگرداندن رنگ به تصاویر قدیمی",
    basePrice: null,
  },
  {
    id: "ai-image",
    icon: "✺",
    title: "طراحی تصویر با AI",
    description: "ساخت تصویر اختصاصی از ایده شما",
    basePrice: 2500,
  },
  {
    id: "other",
    icon: "✣",
    title: "سایر خدمات گرافیکی",
    description: "سفارش‌های خاص و متنوع",
    basePrice: null,
  },
];

const qualities = [
  {
    id: "normal",
    title: "عادی",
    description: "مناسب استفاده معمولی",
    multiplier: 1,
  },
  {
    id: "pro",
    title: "حرفه‌ای",
    description: "کیفیت بالا و جزئیات بیشتر",
    multiplier: 2,
  },
  {
    id: "ultra",
    title: "فوق‌العاده",
    description: "بالاترین کیفیت ممکن",
    multiplier: 3,
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export default function CreateOrderPage() {
  const [serviceId, setServiceId] = useState("enhance");
  const [qualityId, setQualityId] = useState("pro");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("normal");
  const [usage, setUsage] = useState("");
  const [size, setSize] = useState("");
  const [format, setFormat] = useState("");
  const [style, setStyle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [files, setFiles] = useState<File[]>([]);
const [successOrderCode, setSuccessOrderCode] = useState<string | null>(null);

  const selectedService =
    services.find((service) => service.id === serviceId) ?? services[0];

  const selectedQuality =
    qualities.find((quality) => quality.id === qualityId) ?? qualities[0];

  const calculatedPrice = useMemo(() => {
    if (selectedService.basePrice === null) return null;
  return (
    selectedService.basePrice *
    selectedQuality.multiplier *
    quantity
  );
}, [selectedService, selectedQuality, quantity]);

async function handleSubmitOrder() {
  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceId,
        qualityId,
        quantity,
        description,
        priority,
        usage,
        size,
        format,
        style,
        deadline,
        calculatedPrice,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "خطا در ثبت سفارش");
      return;
    }

    setSuccessOrderCode(data.order.orderCode);
  } catch {
    alert("ارتباط با سرور برقرار نشد. دوباره تلاش کنید.");
  }
}

  function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    setFiles(Array.from(event.target.files));
  }

  return (
    <main className="order-page" dir="rtl">
      <header className="order-header">
        <div className="order-header-inner">
          <Link href="/" className="order-brand">
  <img
    src="/images/tarhna-order-logo.png"
    alt="طرحنا"
    className="order-logo"
  />
</Link>

          <nav className="order-nav">
            <Link href="/">خانه</Link>
            <Link href="/#services">خدمات</Link>
            <Link href="/#shop">فروشگاه</Link>
            <Link href="/#articles">وبلاگ</Link>
          </nav>

          <Link href="/dashboard" className="account-button">
            حساب کاربری
          </Link>
        </div>
      </header>

      <section className="order-hero">
        <div className="order-hero-copy">
          <span className="order-eyebrow">ثبت سفارش طرحنا</span>

          <h1>
            ایده‌ات را بگو،
            <span> ما حرفه‌ای تحویل می‌دهیم</span>
          </h1>

          <p>
            نوع خدمت را انتخاب کن، جزئیات و فایل‌هایت را بفرست و
            سفارش را برای بررسی نهایی ثبت کن.
          </p>

          <div className="order-benefits">
            <span>✦ کیفیت حرفه‌ای</span>
            <span>◷ تحویل به‌موقع</span>
            <span>♡ پشتیبانی واقعی</span>
          </div>
        </div>

        <div className="order-hero-art">
          <div className="hero-art-orbit orbit-one" />
          <div className="hero-art-orbit orbit-two" />

          <div className="hero-art-card">
            <span>✦</span>
            <strong>از ایده تا تصویر</strong>
            <small>طراحی اختصاصی برای شما</small>
          </div>
        </div>
      </section>

      <div className="order-layout">
        <div className="order-main">
          <section className="order-section">
            <div className="section-heading">
              <span className="step-number">۱</span>
              <div>
                <h2>انتخاب نوع خدمت</h2>
                <p>خدمتی که نیاز دارید را انتخاب کنید.</p>
              </div>
            </div>

            <div className="services-selector">
              {services.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className={`service-option ${
                    serviceId === service.id ? "selected" : ""
                  }`}
                  onClick={() => setServiceId(service.id)}
                >
                  {serviceId === service.id && (
                    <span className="selected-check">✓</span>
                  )}

                  <span className="service-option-icon">
                    {service.icon}
                  </span>

                  <strong>{service.title}</strong>
                  <small>{service.description}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="order-section">
            <div className="section-heading">
              <span className="step-number">۲</span>
              <div>
                <h2>جزئیات سفارش</h2>
                <p>
                  هرچه توضیحات دقیق‌تر باشد، نتیجه به خواسته شما
                  نزدیک‌تر خواهد بود.
                </p>
              </div>
            </div>

            <div className="details-grid">
              <label className="description-field">
                <span>توضیحات سفارش *</span>

                <textarea
                  value={description}
                  maxLength={1000}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="دقیقاً توضیح دهید چه چیزی مدنظر شماست؛ موضوع، سبک، رنگ‌ها، متن‌ها و جزئیات مهم..."
                />

                <small>{description.length} / 1000</small>
              </label>

              <div className="small-fields">
                <label>
                  <span>اولویت انجام</span>
                  <select
                    value={priority}
                    onChange={(event) =>
                      setPriority(event.target.value)
                    }
                  >
                    <option value="normal">
                      عادی — طبق زمان معمول
                    </option>
                    <option value="fast">فوری</option>
                  </select>
                </label>

                <label>
                  <span>کاربرد سفارش</span>
                  <select
                    value={usage}
                    onChange={(event) => setUsage(event.target.value)}
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="social">شبکه‌های اجتماعی</option>
                    <option value="print">چاپ</option>
                    <option value="personal">استفاده شخصی</option>
                    <option value="business">کسب‌وکار</option>
                    <option value="other">سایر</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="upload-area">
              <div className="upload-title">
                <strong>آپلود فایل‌ها</strong>
                <span>اختیاری</span>
              </div>

              <label className="file-drop">
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFiles}
                />

                <span className="upload-icon">↑</span>
                <strong>فایل‌ها را اینجا انتخاب کنید</strong>
                <small>
                  عکس مرجع، نمونه مشابه، طرح اولیه یا فایل PDF
                </small>
              </label>

              {files.length > 0 && (
                <div className="selected-files">
                  {files.map((file) => (
                    <span key={`${file.name}-${file.size}`}>
                      ✓ {file.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="order-section">
            <div className="section-heading">
              <span className="step-number">۳</span>
              <div>
                <h2>انتخاب کیفیت و تعداد</h2>
                <p>
                  کیفیت موردنظر و تعداد خروجی را مشخص کنید.
                </p>
              </div>
            </div>

            <div className="quality-row">
              <div className="quality-options">
                {qualities.map((quality) => (
                  <button
                    type="button"
                    key={quality.id}
                    className={`quality-option ${
                      qualityId === quality.id ? "selected" : ""
                    }`}
                    onClick={() => setQualityId(quality.id)}
                  >
                    <strong>{quality.title}</strong>
                    <small>{quality.description}</small>

                    {qualityId === quality.id && (
                      <span className="quality-check">✓</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="quantity-box">
                <span>تعداد</span>

                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <input
  className="quantity-input"
  type="number"
  min="1"
  max="999"
  value={quantity}
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 999) {
      setQuantity(value);
    }
  }}
/>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.min(999, current + 1)
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="order-section">
            <div className="section-heading">
              <span className="step-number">۴</span>
              <div>
                <h2>توضیحات تکمیلی</h2>
                <p>
                  این گزینه‌ها اختیاری هستند و به اجرای دقیق‌تر
                  سفارش کمک می‌کنند.
                </p>
              </div>
            </div>

            <div className="extra-fields">
              <label>
                <span>ابعاد موردنظر</span>
                <select
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="square">مربع 1:1</option>
                  <option value="portrait">عمودی 4:5</option>
                  <option value="story">استوری 9:16</option>
                  <option value="landscape">افقی 16:9</option>
                  <option value="custom">ابعاد اختصاصی</option>
                </select>
              </label>

              <label>
                <span>فرمت خروجی</span>
                <select
                  value={format}
                  onChange={(event) => setFormat(event.target.value)}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="jpg">JPG</option>
                  <option value="png">PNG</option>
                  <option value="pdf">PDF</option>
                  <option value="other">سایر</option>
                </select>
              </label>

              <label>
                <span>سبک یا رنگ‌بندی</span>
                <select
                  value={style}
                  onChange={(event) => setStyle(event.target.value)}
                >
                  <option value="">انتخاب کنید</option>
                  <option value="modern">مدرن</option>
                  <option value="minimal">مینیمال</option>
                  <option value="cinematic">سینمایی</option>
                  <option value="realistic">واقع‌گرایانه</option>
                  <option value="custom">طبق توضیحات من</option>
                </select>
              </label>

              <label>
                <span>مهلت تحویل ترجیحی</span>
                <select
                  value={deadline}
                  onChange={(event) =>
                    setDeadline(event.target.value)
                  }
                >
                  <option value="">انتخاب کنید</option>
                  <option value="normal">زمان استاندارد</option>
                  <option value="48h">حداکثر ۴۸ ساعت</option>
                  <option value="24h">حداکثر ۲۴ ساعت</option>
                </select>
              </label>
            </div>
          </section>
        </div>

        <aside className="order-sidebar">
          <div className="progress-card">
            <h3>مراحل ثبت سفارش</h3>

            <div className="progress-item active">
              <span>۱</span>
              <div>
                <strong>انتخاب خدمت</strong>
                <small>نوع خدمت موردنظر</small>
              </div>
            </div>

            <div className="progress-item">
              <span>۲</span>
              <div>
                <strong>تکمیل اطلاعات</strong>
                <small>جزئیات و فایل‌ها</small>
              </div>
            </div>

            <div className="progress-item">
              <span>۳</span>
              <div>
                <strong>بررسی و پرداخت</strong>
                <small>مشاهده قیمت نهایی</small>
              </div>
            </div>

            <div className="progress-item">
              <span>۴</span>
              <div>
                <strong>ثبت نهایی</strong>
                <small>دریافت کد سفارش</small>
              </div>
            </div>
          </div>

          <div className="summary-card">
            <h3>خلاصه سفارش</h3>

            <div className="summary-service">
              <span className="summary-icon">
                {selectedService.icon}
              </span>

              <div>
                <small>خدمت انتخابی</small>
                <strong>{selectedService.title}</strong>
              </div>
            </div>

            <div className="summary-line">
              <span>کیفیت</span>
              <strong>{selectedQuality.title}</strong>
            </div>

            <div className="summary-line">
              <span>تعداد</span>
              <strong>{quantity}</strong>
            </div>

            <div className="summary-divider" />

            {calculatedPrice !== null ? (
              <>
                <div className="summary-line">
                  <span>قیمت تخمینی</span>
                  <strong>
                    {formatPrice(calculatedPrice)} تومان
                  </strong>
                </div>

                <div className="summary-total">
                  <span>جمع کل</span>
                  <strong>
                    {formatPrice(calculatedPrice)} تومان
                  </strong>
                </div>
              </>
            ) : (
              <div className="custom-price">
                <span>قیمت این خدمت</span>
                <strong>پس از بررسی سفارش اعلام می‌شود</strong>
              </div>
            )}

            <button
  type="button"
  className="continue-button"
  onClick={handleSubmitOrder}
>
              ادامه و بررسی نهایی
              <span>←</span>
            </button>

            <small className="secure-note">
              ♢ اطلاعات سفارش شما محفوظ است
            </small>
          </div>

          <div className="why-card">
            <h3>چرا طرحنا؟</h3>
            <span>✓ کیفیت بالا و حرفه‌ای</span>
            <span>✓ تحویل به‌موقع</span>
            <span>✓ قیمت منصفانه</span>
            <span>✓ ارتباط مستقیم با طراح</span>
            <span>✓ پشتیبانی واقعی</span>
          </div>

          <div className="support-card">
            <span className="support-icon">♧</span>
            <h3>سؤالی دارید؟</h3>
            <p>
              قبل از ثبت سفارش می‌توانید با پشتیبانی در ارتباط
              باشید.
            </p>
            <button type="button">تماس با پشتیبانی</button>
          </div>
        </aside>
      </div>

      <section className="order-trust">
        <div>
          <span>◇</span>
          <strong>اطمینان از کیفیت</strong>
          <small>بررسی سفارش پیش از تحویل</small>
        </div>

        <div>
          <span>◷</span>
          <strong>تحویل به‌موقع</strong>
          <small>بر اساس زمان انتخابی</small>
        </div>

        <div>
          <span>♧</span>
          <strong>پشتیبانی دائمی</strong>
          <small>همیشه در کنار شما</small>
        </div>
      </section>
{successOrderCode && (
  <div
    className="success-modal-backdrop"
    onClick={() => setSuccessOrderCode(null)}
  >
    <div
      className="success-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="success-modal-close"
        onClick={() => setSuccessOrderCode(null)}
        aria-label="بستن"
      >
        ×
      </button>

      <div className="success-modal-icon">
        <span>✓</span>
      </div>

      <span className="success-modal-label">ثبت سفارش موفق</span>

      <h2>سفارش شما ثبت شد!</h2>

      <p className="success-modal-description">
        سفارش شما با موفقیت دریافت شد و برای بررسی به تیم طرحنا ارسال شد.
      </p>

      <div className="success-order-code">
        <span>کد پیگیری سفارش</span>

        <div>
          <strong>{successOrderCode}</strong>

          <button
            type="button"
            onClick={() =>
              navigator.clipboard?.writeText(successOrderCode)
            }
          >
            کپی
          </button>
        </div>
      </div>

      <div className="success-modal-status">
        <span className="success-status-dot" />
        <div>
          <strong>در انتظار بررسی</strong>
          <small>وضعیت سفارش از پنل کاربری قابل پیگیری خواهد بود.</small>
        </div>
      </div>

      <div className="success-modal-actions">
        <Link href="/orders" className="success-primary-button">
          مشاهده سفارش‌های من
        </Link>

        <button
          type="button"
          className="success-secondary-button"
          onClick={() => setSuccessOrderCode(null)}
        >
          بستن
        </button>
      </div>
    </div>
  </div>
)}
    </main>
  );
}
