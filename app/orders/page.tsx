"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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
  count?: number;
  orders?: Order[];
  message?: string;
};

const serviceNames: Record<string, string> = {
  enhance: "افزایش کیفیت عکس",
  restore: "بازسازی عکس",
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

const statusInfo: Record<
  string,
  {
    title: string;
    className: string;
  }
> = {
  PENDING: {
    title: "در انتظار بررسی",
    className: "status-pending",
  },
  REVIEWING: {
    title: "در حال بررسی",
    className: "status-reviewing",
  },
  ACCEPTED: {
    title: "تأیید شده",
    className: "status-accepted",
  },
  IN_PROGRESS: {
    title: "در حال انجام",
    className: "status-progress",
  },
  COMPLETED: {
    title: "تکمیل شده",
    className: "status-completed",
  },
  CANCELLED: {
    title: "لغو شده",
    className: "status-cancelled",
  },
};

function formatPrice(price?: number | null) {
  if (price === null || price === undefined) {
    return "—";
  }

  return `${price.toLocaleString("fa-IR")} تومان`;
}

function formatDate(date: string) {
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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  async function loadOrders() {
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
          data.message || "دریافت سفارش‌ها با خطا مواجه شد."
        );
      }

      setOrders(data.orders || []);
    } catch (err) {
      console.error("ORDERS_LOAD_ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "خطایی در دریافت سفارش‌ها رخ داد."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    let result = [...orders];

    if (activeFilter !== "ALL") {
      result = result.filter(
        (order) => order.status === activeFilter
      );
    }

    const cleanSearch = search.trim().toLowerCase();

    if (cleanSearch) {
      result = result.filter((order) => {
        const service =
          serviceNames[order.serviceId] ||
          order.serviceId ||
          "";

        return (
          order.orderCode.toLowerCase().includes(cleanSearch) ||
          service.toLowerCase().includes(cleanSearch) ||
          (order.description || "")
            .toLowerCase()
            .includes(cleanSearch)
        );
      });
    }

    return result;
  }, [orders, activeFilter, search]);

  const stats = useMemo(() => {
    return {
      total: orders.length,

      pending: orders.filter(
        (order) =>
          order.status === "PENDING" ||
          order.status === "REVIEWING"
      ).length,

      progress: orders.filter(
        (order) =>
          order.status === "ACCEPTED" ||
          order.status === "IN_PROGRESS"
      ).length,

      completed: orders.filter(
        (order) => order.status === "COMPLETED"
      ).length,
    };
  }, [orders]);

  return (
    <main className="orders-page" dir="rtl">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <div className="orders-container">
        <header className="orders-header">
          <Link href="/" className="brand">
            <div className="brand-mark">ط</div>

            <div>
              <strong>طرحنا</strong>
              <span>پنل سفارش‌ها</span>
            </div>
          </Link>

          <div className="header-actions">
            <Link
              href="/create"
              className="new-order-button"
            >
              <span>＋</span>
              سفارش جدید
            </Link>

            <Link
              href="/dashboard"
              className="dashboard-button"
            >
              داشبورد
            </Link>
          </div>
        </header>

        <section className="page-heading">
          <div>
            <span className="eyebrow">
              مدیریت سفارش‌ها
            </span>

            <h1>سفارش‌های من</h1>

            <p>
              وضعیت سفارش‌ها، جزئیات پروژه و مراحل انجام کار را
              از این بخش دنبال کنید.
            </p>
          </div>

          <button
            type="button"
            className="refresh-button"
            onClick={loadOrders}
            disabled={loading}
          >
            <span
              className={
                loading
                  ? "refresh-icon rotating"
                  : "refresh-icon"
              }
            >
              ↻
            </span>

            {loading
              ? "در حال بروزرسانی..."
              : "بروزرسانی"}
          </button>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon stat-all">
              ◈
            </div>

            <div>
              <span>همه سفارش‌ها</span>
              <strong>
                {stats.total.toLocaleString("fa-IR")}
              </strong>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon stat-pending">
              ●
            </div>

            <div>
              <span>در انتظار بررسی</span>
              <strong>
                {stats.pending.toLocaleString("fa-IR")}
              </strong>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon stat-progress">
              ◌
            </div>

            <div>
              <span>در حال انجام</span>
              <strong>
                {stats.progress.toLocaleString("fa-IR")}
              </strong>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-icon stat-completed">
              ✓
            </div>

            <div>
              <span>تکمیل شده</span>
              <strong>
                {stats.completed.toLocaleString("fa-IR")}
              </strong>
            </div>
          </article>
        </section>

        <section className="orders-panel">
          <div className="panel-top">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="جستجو با کد سفارش یا نوع خدمات..."
              />
            </div>

            <div className="filters">
              <button
                type="button"
                onClick={() =>
                  setActiveFilter("ALL")
                }
                className={
                  activeFilter === "ALL"
                    ? "active"
                    : ""
                }
              >
                همه
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveFilter("PENDING")
                }
                className={
                  activeFilter === "PENDING"
                    ? "active"
                    : ""
                }
              >
                در انتظار
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveFilter("IN_PROGRESS")
                }
                className={
                  activeFilter === "IN_PROGRESS"
                    ? "active"
                    : ""
                }
              >
                در حال انجام
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveFilter("COMPLETED")
                }
                className={
                  activeFilter === "COMPLETED"
                    ? "active"
                    : ""
                }
              >
                تکمیل شده
              </button>
            </div>
          </div>

          {loading && (
            <div className="state-box">
              <div className="loader" />

              <h2>
                در حال دریافت سفارش‌ها...
              </h2>

              <p>چند لحظه صبر کنید.</p>
            </div>
          )}

          {!loading && error && (
            <div className="state-box error-state">
              <div className="state-icon">!</div>

              <h2>
                دریافت سفارش‌ها انجام نشد
              </h2>

              <p>{error}</p>

              <button
                type="button"
                onClick={loadOrders}
              >
                تلاش دوباره
              </button>
            </div>
          )}

          {!loading &&
            !error &&
            orders.length === 0 && (
              <div className="state-box">
                <div className="empty-illustration">
                  <div className="empty-box">
                    ◇
                  </div>
                </div>

                <h2>
                  هنوز سفارشی ثبت نکرده‌اید
                </h2>

                <p>
                  اولین سفارش خود را ثبت کنید و
                  مراحل انجام آن را از همین صفحه
                  پیگیری کنید.
                </p>

                <Link
                  href="/create"
                  className="empty-button"
                >
                  ثبت اولین سفارش
                </Link>
              </div>
            )}

          {!loading &&
            !error &&
            orders.length > 0 &&
            filteredOrders.length === 0 && (
              <div className="state-box">
                <div className="state-icon">
                  ⌕
                </div>

                <h2>سفارشی پیدا نشد</h2>

                <p>
                  عبارت جستجو یا فیلتر انتخاب‌شده
                  را تغییر دهید.
                </p>
              </div>
            )}

          {!loading &&
            !error &&
            filteredOrders.length > 0 && (
              <div className="orders-list">
                {filteredOrders.map((order) => {
                  const currentStatus =
                    statusInfo[order.status] ||
                    statusInfo.PENDING;

                  return (
                    <article
                      className="order-card"
                      key={order.id}
                    >
                      <div className="order-card-top">
                        <div className="order-main-info">
                          <div className="service-icon">
                            {order.serviceId === "poster"
                              ? "▣"
                              : order.serviceId === "edit"
                              ? "✦"
                              : order.serviceId ===
                                "enhance"
                              ? "◇"
                              : order.serviceId ===
                                "restore"
                              ? "◫"
                              : order.serviceId ===
                                "colorize"
                              ? "◉"
                              : "✧"}
                          </div>

                          <div>
                            <span className="order-label">
                              {serviceNames[
                                order.serviceId
                              ] || order.serviceId}
                            </span>

                            <strong className="order-code">
                              {order.orderCode}
                            </strong>
                          </div>
                        </div>

                        <span
                          className={`order-status ${currentStatus.className}`}
                        >
                          <i />
                          {currentStatus.title}
                        </span>
                      </div>

                      {order.description && (
                        <p className="order-description">
                          {order.description}
                        </p>
                      )}

                      <div className="order-details-grid">
                        <div className="detail-item">
                          <span>کیفیت</span>

                          <strong>
                            {qualityNames[
                              order.qualityId
                            ] || order.qualityId}
                          </strong>
                        </div>

                        <div className="detail-item">
                          <span>تعداد</span>

                          <strong>
                            {order.quantity.toLocaleString(
                              "fa-IR"
                            )}
                          </strong>
                        </div>

                        <div className="detail-item">
                          <span>مبلغ سفارش</span>

                          <strong className="price">
                            {formatPrice(
                              order.calculatedPrice
                            )}
                          </strong>
                        </div>

                        <div className="detail-item">
                          <span>تاریخ ثبت</span>

                          <strong>
                            {formatDate(
                              order.createdAt
                            )}
                          </strong>
                        </div>
                      </div>

                      <div className="order-card-bottom">
                        <div className="order-progress">
                          <div className="progress-line">
                            <span
                              className={`progress-fill progress-${order.status.toLowerCase()}`}
                            />
                          </div>

                          <small>
                            آخرین وضعیت:{" "}
                            {currentStatus.title}
                          </small>
                        </div>

                        <button
                          type="button"
                          className="details-button"
                        >
                          مشاهده جزئیات
                          <span>←</span>
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
        </section>

        <section className="help-box">
          <div className="help-icon">?</div>

          <div>
            <strong>
              برای سفارشتان سوالی دارید؟
            </strong>

            <p>
              پشتیبانی و گفتگوی مستقیم هر سفارش
              در ادامه از همین قسمت در دسترس خواهد بود.
            </p>
          </div>
        </section>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .orders-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 75% 10%,
              rgba(111, 45, 255, 0.13),
              transparent 30%
            ),
            radial-gradient(
              circle at 5% 55%,
              rgba(29, 96, 255, 0.08),
              transparent 28%
            ),
            #050817;
          color: #ffffff;
          font-family: inherit;
        }

        .orders-container {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 36px));
          margin: 0 auto;
          padding-bottom: 80px;
        }

        .background-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(110px);
          pointer-events: none;
          opacity: 0.3;
        }

        .glow-one {
          width: 320px;
          height: 320px;
          top: 120px;
          right: -130px;
          background: #7436ff;
        }

        .glow-two {
          width: 260px;
          height: 260px;
          top: 650px;
          left: -130px;
          background: #175cff;
        }

        .orders-header {
          min-height: 86px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .brand-mark {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          font-size: 21px;
          font-weight: 900;
          background: linear-gradient(135deg, #6434ff, #b14cff);
          box-shadow: 0 0 28px rgba(137, 65, 255, 0.35);
        }

        .brand strong {
          display: block;
          font-size: 17px;
        }

        .brand span {
          display: block;
          margin-top: 2px;
          color: #777f9e;
          font-size: 10px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .new-order-button,
        .dashboard-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 41px;
          padding: 0 16px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .new-order-button {
          color: white;
          background: linear-gradient(135deg, #6334ff, #a442ff);
          box-shadow: 0 8px 30px rgba(116, 53, 255, 0.18);
        }

        .dashboard-button {
          color: #c5cae0;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.035);
        }

        .page-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          padding: 56px 0 32px;
        }

        .eyebrow {
          display: inline-flex;
          padding: 7px 12px;
          margin-bottom: 12px;
          border: 1px solid rgba(145, 83, 255, 0.22);
          border-radius: 999px;
          color: #a889ff;
          background: rgba(119, 59, 255, 0.08);
          font-size: 10px;
        }

        .page-heading h1 {
          margin: 0;
          font-size: clamp(29px, 5vw, 42px);
          line-height: 1.4;
        }

        .page-heading p {
          max-width: 550px;
          margin: 9px 0 0;
          color: #858da9;
          font-size: 12px;
          line-height: 2;
        }

        .refresh-button {
          min-width: 128px;
          min-height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 12px;
          color: #b7bdd2;
          background: rgba(255, 255, 255, 0.035);
          font-family: inherit;
          cursor: pointer;
        }

        .refresh-button:disabled {
          opacity: 0.6;
        }

        .refresh-icon {
          font-size: 17px;
        }

        .rotating {
          animation: rotate 0.8s linear infinite;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }

        .stat-card {
          min-height: 105px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 19px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          background: rgba(13, 18, 42, 0.76);
          backdrop-filter: blur(15px);
        }

        .stat-icon {
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          font-size: 18px;
        }

        .stat-all {
          color: #aa82ff;
          background: rgba(119, 63, 255, 0.12);
        }

        .stat-pending {
          color: #ffc85a;
          background: rgba(255, 183, 53, 0.1);
        }

        .stat-progress {
          color: #64a6ff;
          background: rgba(55, 129, 255, 0.1);
        }

        .stat-completed {
          color: #57e3a2;
          background: rgba(42, 206, 133, 0.1);
        }

        .stat-card span {
          display: block;
          color: #858ca8;
          font-size: 10px;
        }

        .stat-card strong {
          display: block;
          margin-top: 6px;
          font-size: 23px;
        }

        .orders-panel {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 25px;
          background: rgba(10, 14, 34, 0.74);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
        }

        .panel-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .search-box {
          width: min(390px, 100%);
          min-height: 44px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.03);
        }

        .search-box span {
          color: #727b9b;
          font-size: 20px;
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          color: white;
          background: transparent;
          font-family: inherit;
          font-size: 11px;
        }

        .search-box input::placeholder {
          color: #626a86;
        }

        .filters {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .filters button {
          min-height: 34px;
          padding: 0 12px;
          border: 0;
          border-radius: 9px;
          color: #737b99;
          background: transparent;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .filters button.active {
          color: #ffffff;
          background: rgba(119, 65, 255, 0.2);
        }

        .orders-list {
          display: grid;
          gap: 13px;
        }

        .order-card {
          padding: 19px;
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.025),
            rgba(255, 255, 255, 0.01)
          );
          transition: 0.2s ease;
        }

        .order-card:hover {
          border-color: rgba(139, 77, 255, 0.25);
          transform: translateY(-1px);
        }

        .order-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .order-main-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .service-icon {
          width: 45px;
          height: 45px;
          flex: 0 0 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #ae86ff;
          background: linear-gradient(
            135deg,
            rgba(105, 52, 255, 0.16),
            rgba(165, 67, 255, 0.07)
          );
          font-size: 18px;
        }

        .order-label {
          display: block;
          margin-bottom: 5px;
          color: #8991ad;
          font-size: 10px;
        }

        .order-code {
          display: block;
          direction: ltr;
          text-align: right;
          font-size: 14px;
          letter-spacing: 0.4px;
        }

        .order-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 9px;
          white-space: nowrap;
        }

        .order-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 10px currentColor;
        }

        .status-pending,
        .status-reviewing {
          color: #ffc759;
          background: rgba(255, 185, 55, 0.08);
        }

        .status-accepted,
        .status-progress {
          color: #6aa9ff;
          background: rgba(70, 139, 255, 0.08);
        }

        .status-completed {
          color: #5be3a6;
          background: rgba(53, 211, 142, 0.08);
        }

        .status-cancelled {
          color: #ff707e;
          background: rgba(255, 80, 100, 0.08);
        }

        .order-description {
          margin: 17px 0 0;
          padding: 13px 14px;
          border-radius: 12px;
          color: #9198b3;
          background: rgba(255, 255, 255, 0.025);
          font-size: 10px;
          line-height: 1.9;
        }

        .order-details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.055);
          border-bottom: 1px solid rgba(255, 255, 255, 0.055);
        }

        .detail-item {
          padding: 14px 12px;
          border-left: 1px solid rgba(255, 255, 255, 0.055);
        }

        .detail-item:last-child {
          border-left: 0;
        }

        .detail-item span {
          display: block;
          margin-bottom: 6px;
          color: #6f7793;
          font-size: 9px;
        }

        .detail-item strong {
          color: #d5d9e8;
          font-size: 10px;
          font-weight: 600;
        }

        .detail-item .price {
          color: #b28aff;
        }

        .order-card-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          padding-top: 15px;
        }

        .order-progress {
          width: min(380px, 100%);
        }

        .progress-line {
          height: 4px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
        }

        .progress-fill {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #6436ff, #a946ff);
        }

        .progress-pending {
          width: 15%;
        }

        .progress-reviewing {
          width: 28%;
        }

        .progress-accepted {
          width: 45%;
        }

        .progress-in_progress {
          width: 70%;
        }

        .progress-completed {
          width: 100%;
        }

        .progress-cancelled {
          width: 100%;
          background: #ff596b;
        }

        .order-progress small {
          display: block;
          margin-top: 7px;
          color: #646c89;
          font-size: 8px;
        }

        .details-button {
          min-width: 125px;
          min-height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid rgba(141, 77, 255, 0.17);
          border-radius: 11px;
          color: #ae8aff;
          background: rgba(121, 58, 255, 0.07);
          font-family: inherit;
          font-size: 9px;
          cursor: pointer;
        }

        .state-box {
          min-height: 390px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 35px 15px;
          text-align: center;
        }

        .state-box h2 {
          margin: 20px 0 5px;
          font-size: 17px;
        }

        .state-box p {
          max-width: 440px;
          margin: 0;
          color: #747d9b;
          font-size: 10px;
          line-height: 2;
        }

        .state-icon,
        .empty-box {
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(143, 76, 255, 0.18);
          border-radius: 21px;
          color: #a77cff;
          background: rgba(116, 53, 255, 0.08);
          font-size: 25px;
        }

        .empty-illustration {
          padding: 16px;
          border-radius: 28px;
          background: rgba(117, 56, 255, 0.035);
        }

        .empty-button,
        .error-state button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          padding: 0 20px;
          border: 0;
          border-radius: 12px;
          color: white;
          background: linear-gradient(135deg, #6335ff, #a541ff);
          text-decoration: none;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .loader {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.08);
          border-top-color: #9254ff;
          border-radius: 50%;
          animation: rotate 0.8s linear infinite;
        }

        .help-box {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 17px;
          padding: 17px 19px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.02);
        }

        .help-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #a57dff;
          background: rgba(117, 59, 255, 0.1);
          font-weight: 800;
        }

        .help-box strong {
          display: block;
          font-size: 10px;
        }

        .help-box p {
          margin: 4px 0 0;
          color: #6f7894;
          font-size: 9px;
        }

        @media (max-width: 800px) {
          .orders-container {
            width: min(100% - 24px, 680px);
            padding-bottom: 45px;
          }

          .orders-header {
            min-height: 72px;
          }

          .brand span {
            display: none;
          }

          .dashboard-button {
            display: none;
          }

          .new-order-button {
            min-height: 38px;
            padding: 0 12px;
            font-size: 10px;
          }

          .page-heading {
            align-items: flex-start;
            padding: 35px 0 24px;
          }

          .page-heading h1 {
            font-size: 27px;
          }

          .page-heading p {
            max-width: 360px;
            font-size: 10px;
          }

          .refresh-button {
            min-width: 42px;
            width: 42px;
            padding: 0;
            font-size: 0;
          }

          .refresh-icon {
            font-size: 17px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 9px;
          }

          .stat-card {
            min-height: 88px;
            padding: 13px;
            border-radius: 16px;
          }

          .stat-icon {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
            border-radius: 11px;
            font-size: 15px;
          }

          .stat-card strong {
            font-size: 18px;
          }

          .orders-panel {
            padding: 13px;
            border-radius: 20px;
          }

          .panel-top {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            width: 100%;
          }

          .filters {
            width: 100%;
            overflow-x: auto;
            justify-content: flex-start;
          }

          .filters button {
            flex: 0 0 auto;
          }

          .order-card {
            padding: 14px;
            border-radius: 17px;
          }

          .order-card-top {
            align-items: flex-start;
          }

          .service-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            border-radius: 12px;
          }

          .order-code {
            font-size: 12px;
          }

          .order-status {
            padding: 6px 8px;
            font-size: 8px;
          }

          .order-details-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .detail-item:nth-child(2) {
            border-left: 0;
          }

          .detail-item:nth-child(1),
          .detail-item:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.055);
          }

          .order-card-bottom {
            flex-direction: column;
            align-items: stretch;
          }

          .order-progress {
            width: 100%;
          }

          .details-button {
            width: 100%;
          }

          .state-box {
            min-height: 330px;
          }
        }

        @media (max-width: 420px) {
          .orders-container {
            width: calc(100% - 20px);
          }

          .page-heading {
            gap: 12px;
          }

          .eyebrow {
            font-size: 9px;
          }

          .page-heading h1 {
            font-size: 24px;
          }

          .stats-grid {
            gap: 7px;
          }

          .stat-card {
            gap: 9px;
            padding: 11px;
          }

          .stat-card span {
            font-size: 8px;
          }

          .stat-card strong {
            font-size: 17px;
          }

          .order-main-info {
            gap: 9px;
          }

          .order-status {
            max-width: 100px;
          }

          .help-box {
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
