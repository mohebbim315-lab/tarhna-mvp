import "./Stats.css";

const stats = [
  {
    icon: "👥",
    value: "+۵,۰۰۰",
    label: "مشتری راضی",
  },
  {
    icon: "✨",
    value: "+۱,۲۰۰",
    label: "سفارش انجام‌شده",
  },
  {
    icon: "🎨",
    value: "+۳۰۰",
    label: "فروشنده فعال",
  },
  {
    icon: "🛍️",
    value: "+۱۰,۰۰۰",
    label: "محصول در فروشگاه",
  },
  {
    icon: "★",
    value: "۴.۹ از ۵",
    label: "رضایت کاربران",
  },
];

export default function Stats() {
  return (
    <section className="stats-section" dir="rtl">
      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <div className="stat-icon">{item.icon}</div>

            <div className="stat-content">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
