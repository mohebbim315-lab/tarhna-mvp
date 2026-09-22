"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import "./order-details.css";

type Order = {
  id: string;
  orderCode: string;
  serviceId: string;
  qualityId: string;
  quantity: number;
  description?: string | null;
  priority?: string | null;
  usage?: string | null;
  size?: string | null;
  format?: string | null;
  style?: string | null;
  deadline?: string | null;
  calculatedPrice?: number | null;
  status: string;
  createdAt: string;
  updatedAt?: string;
};

type OrdersResponse = {
  success: boolean;
  orders?: Order[];
  message?: string;
};

const serviceNames: Record<string, string> = {
  enhance: "افزایش کیفیت عکس",
  restore: "بازسازی و ترمیم عکس",
  poster: "طراحی پوستر",
  edit: "ادیت و نورپردازی عکس",
  colorize: "رنگی کردن عکس قدیمی",
  "ai-image": "ساخت و طراحی تصویر",
  other: "سفارش اختصاصی",
};

const qualityNames: Record<string, string> = {
  normal: "معمولی",
  pro: "حرفه‌ای",
  ultra: "فوق حرفه‌ای",
};

const priorityNames: Record<string, string> = {
  normal: "عادی",
  fast: "فوری",
  urgent: "خیلی فوری",
};

const usageNames: Record<string, string> = {
  personal: "شخصی",
  business: "تجاری",
  social: "شبکه‌های اجتماعی",
  print: "چاپ",
};

const sizeNames: Record<string, string> = {
  story: "استوری",
  post: "پست",
  square: "مربع",
  landscape: "افقی",
  portrait: "عمودی",
};

const deadlineNames: Record<string, string> = {
  normal: "زمان عادی",
  fast: "تحویل سریع",
  urgent: "تحویل فوری",
};

const statusInfo: Record<
  string,
  {
    title: string;
    description: string;
    className: string;
    progress: number;
  }
> = {
  PENDING: {
    title: "در انتظار بررسی",
    description: "سفارش ثبت شده و منتظر بررسی تیم طرحنا است.",
    className: "status-pending",
    progress: 15,
  },

  REVIEWING: {
    title: "در حال بررسی",
    description: "جزئیات سفارش در حال بررسی است.",
    className: "status-reviewing",
    progress: 30,
  },

  ACCEPTED: {
    title: "تأیید شده",
    description: "سفارش تأیید شده و آماده شروع کار است.",
    className: "status-accepted",
    progress: 45,
  },

  IN_PROGRESS: {
    title: "در حال انجام",
    description: "تیم طرحنا در حال انجام سفارش شما است.",
    className: "status-progress",
    progress: 70,
  },

  COMPLETED: {
    title: "تکمیل شده",
    description: "سفارش با موفقیت تکمیل شده است.",
    className: "status-completed",
    progress: 100,
  },

  CANCELLED: {
    title: "لغو شده",
    description: "این سفارش لغو شده است.",
    className: "status-cancelled",
    progress: 100,
  },
};

function formatPrice(price?: number | null) {
  if (price === null || price === undefined) {
    return "تعیین نشده";
  }

  return `${price.toLocaleString("fa-IR")} تومان`;
}

function formatDate(date?: string | null) {
  if (!date) {
    return "—";
  }

  try {
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  } catch {
    return "—";
  }
}

function getValue(
  value: string | null | undefined,
  names?: Record<string, string>
) {
  if (!value) {
    return "تعیین نشده";
  }

  if (names && names[value]) {
    return names[value];
  }

  return value;
}

export default function OrderDetailsPage() {
  const params = useParams();

  const rawOrderCode = params?.orderCode;

  const orderCode = Array.isArray(rawOrderCode)
    ? rawOrderCode[0]
    : rawOrderCode;

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadOrder() {
    if (!orderCode) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/orders", {
        method: "GET",
        cache: "no-store",
      });

      const data: OrdersResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "دریافت اطلاعات سفارش انجام نشد."
        );
      }

      const foundOrder = (data.orders || []).find(
        (item) => item.orderCode === orderCode
      );

      if (!foundOrder) {
        throw new Error("سفارش موردنظر پیدا نشد.");
      }

      setOrder(foundOrder);
    } catch (err) {
      console.error("ORDER_DETAILS_ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "خطایی در دریافت سفارش رخ داد."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrder();
  }, [orderCode]);

  const currentStatus = useMemo(() => {
    if (!order) {
      return statusInfo.PENDING;
    }

    return statusInfo[order.status] || statusInfo.PENDING;
  }, [order]);

  return (
    <main className="order-details-page" dir="rtl">
      <div className="details-glow details-glow-one" />
      <div className="details-glow details-glow-two" />

      <div className="details-container">
        <header className="details-header">
          <Link href="/" className="details-brand">
            <img
              src="/images/tarhna-header-logo.png"
              alt="طرحنا"
              className="details-logo"
            />
          </Link>

          <Link href="/orders" className="back-button">
            <span>→</span>
            سفارش‌های من
          </Link>
        </header>

        {loading && (
          <section className="details-state">
            <div className="details-loader" />

            <h1>در حال دریافت سفارش...</h1>

            <p>
              اطلاعات سفارش شما در حال بارگذاری است.
            </p>
          </section>
        )}

        {!loading && error && (
          <section className="details-state">
            <div className="details-state-icon">!</div>

            <h1>سفارش پیدا نشد</h1>

            <p>{error}</p>

            <Link href="/orders" className="state-button">
              بازگشت به سفارش‌ها
            </Link>
          </section>
        )}

        {!loading && !error && order && (
          <>
            <section className="details-heading">
              <div>
                <span className="details-eyebrow">
                  جزئیات سفارش
                </span>

                <h1>
                  {serviceNames[order.serviceId] ||
                    order.serviceId}
                </h1>

                <div className="heading-code">
                  <span>کد سفارش</span>
                  <strong>{order.orderCode}</strong>
                </div>
              </div>

              <span
                className={`details-status ${currentStatus.className}`}
              >
                <i />
                {currentStatus.title}
              </span>
            </section>

            <section className="status-card">
              <div className="status-card-top">
                <div className="status-symbol">
                  {order.status === "COMPLETED"
                    ? "✓"
                    : order.status === "CANCELLED"
                    ? "×"
                    : "◌"}
                </div>

                <div>
                  <span>وضعیت فعلی سفارش</span>
                  <h2>{currentStatus.title}</h2>
                  <p>{currentStatus.description}</p>
                </div>
              </div>

              <div className="status-progress">
                <div className="status-progress-track">
                  <span
                    style={{
                      width: `${currentStatus.progress}%`,
                    }}
                  />
                </div>

                <div className="progress-labels">
                  <span>ثبت سفارش</span>
                  <span>بررسی</span>
                  <span>انجام</span>
                  <span>تحویل</span>
                </div>
              </div>
            </section>

            <div className="details-layout">
              <div className="details-main">
                <section className="details-card">
                  <div className="card-heading">
                    <div className="card-icon">◇</div>

                    <div>
                      <h2>مشخصات سفارش</h2>
                      <p>
                        اطلاعاتی که هنگام ثبت سفارش انتخاب کرده‌اید
                      </p>
                    </div>
                  </div>

                  <div className="information-grid">
                    <div className="information-item">
                      <span>نوع خدمات</span>
                      <strong>
                        {serviceNames[order.serviceId] ||
                          order.serviceId}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>کیفیت</span>
                      <strong>
                        {qualityNames[order.qualityId] ||
                          order.qualityId}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>تعداد</span>
                      <strong>
                        {order.quantity.toLocaleString("fa-IR")}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>اولویت</span>
                      <strong>
                        {getValue(
                          order.priority,
                          priorityNames
                        )}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>نوع استفاده</span>
                      <strong>
                        {getValue(order.usage, usageNames)}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>ابعاد</span>
                      <strong>
                        {getValue(order.size, sizeNames)}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>فرمت خروجی</span>
                      <strong>
                        {order.format
                          ? order.format.toUpperCase()
                          : "تعیین نشده"}
                      </strong>
                    </div>

                    <div className="information-item">
                      <span>زمان تحویل</span>
                      <strong>
                        {getValue(
                          order.deadline,
                          deadlineNames
                        )}
                      </strong>
                    </div>
                  </div>
                </section>

                <section className="details-card">
                  <div className="card-heading">
                    <div className="card-icon">✦</div>

                    <div>
                      <h2>توضیحات سفارش</h2>
                      <p>
                        شرح درخواست ثبت‌شده برای این پروژه
                      </p>
                    </div>
                  </div>

                  <div className="description-box">
                    {order.description ||
                      "توضیحی برای این سفارش ثبت نشده است."}
                  </div>

                  {order.style && (
                    <div className="style-row">
                      <span>سبک انتخاب‌شده</span>
                      <strong>{order.style}</strong>
                    </div>
                  )}
                </section>
              </div>

              <aside className="details-sidebar">
                <section className="summary-card">
                  <div className="summary-heading">
                    <span>خلاصه سفارش</span>
                    <strong>{order.orderCode}</strong>
                  </div>

                  <div className="summary-row">
                    <span>تاریخ ثبت</span>
                    <strong>
                      {formatDate(order.createdAt)}
                    </strong>
                  </div>

                  <div className="summary-row">
                    <span>آخرین بروزرسانی</span>
                    <strong>
                      {formatDate(
                        order.updatedAt || order.createdAt
                      )}
                    </strong>
                  </div>

                  <div className="summary-row">
                    <span>تعداد</span>
                    <strong>
                      {order.quantity.toLocaleString("fa-IR")}
                    </strong>
                  </div>

                  <div className="summary-price">
                    <span>مبلغ سفارش</span>

                    <strong>
                      {formatPrice(order.calculatedPrice)}
                    </strong>
                  </div>
                </section>

                <section className="files-card">
                  <div className="sidebar-card-heading">
                    <div className="sidebar-icon">▣</div>

                    <div>
                      <strong>فایل‌های سفارش</strong>
                      <span>فایل‌های پروژه</span>
                    </div>
                  </div>

                  <div className="empty-files">
                    <div>＋</div>

                    <strong>
                      هنوز فایلی نمایش داده نمی‌شود
                    </strong>

                    <p>
                      قابلیت مشاهده فایل‌های ارسالی و فایل نهایی
                      در مرحله بعد فعال می‌شود.
                    </p>
                  </div>
                </section>

                <section className="support-card">
                  <div className="support-icon">?</div>

                  <div>
                    <strong>
                      درباره سفارش سوالی دارید؟
                    </strong>

                    <p>
                      پشتیبانی طرحنا برای پیگیری این سفارش
                      در دسترس شما خواهد بود.
                    </p>
                  </div>

                  <button type="button">
                    گفتگو با پشتیبانی
                  </button>
                </section>
              </aside>
            </div>

            <section className="order-timeline">
              <div className="timeline-heading">
                <span>روند سفارش</span>
                <h2>مراحل انجام پروژه</h2>
              </div>

              <div className="timeline-grid">
                <div
                  className={`timeline-item ${
                    currentStatus.progress >= 15
                      ? "timeline-active"
                      : ""
                  }`}
                >
                  <div className="timeline-number">۱</div>

                  <div>
                    <strong>ثبت سفارش</strong>
                    <span>
                      سفارش با موفقیت در طرحنا ثبت شده است.
                    </span>
                  </div>
                </div>

                <div
                  className={`timeline-item ${
                    currentStatus.progress >= 30
                      ? "timeline-active"
                      : ""
                  }`}
                >
                  <div className="timeline-number">۲</div>

                  <div>
                    <strong>بررسی سفارش</strong>
                    <span>
                      جزئیات و درخواست شما بررسی می‌شود.
                    </span>
                  </div>
                </div>

                <div
                  className={`timeline-item ${
                    currentStatus.progress >= 70
                      ? "timeline-active"
                      : ""
                  }`}
                >
                  <div className="timeline-number">۳</div>

                  <div>
                    <strong>انجام پروژه</strong>
                    <span>
                      طراحی یا پردازش سفارش انجام می‌شود.
                    </span>
                  </div>
                </div>

                <div
                  className={`timeline-item ${
                    currentStatus.progress >= 100 &&
                    order.status === "COMPLETED"
                      ? "timeline-active"
                      : ""
                  }`}
                >
                  <div className="timeline-number">۴</div>

                  <div>
                    <strong>تحویل نهایی</strong>
                    <span>
                      فایل نهایی برای شما آماده می‌شود.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <div className="details-bottom-actions">
              <Link href="/orders" className="bottom-back">
                <span>→</span>
                بازگشت به سفارش‌ها
              </Link>

              <Link href="/create" className="repeat-order">
                <span>＋</span>
                ثبت سفارش جدید
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
