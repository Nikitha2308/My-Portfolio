const stats = [
  { value: "15", target: 15, label: "Technologies Mastered" },
  { value: "10", target: 10, label: "Months of Industry Exp." },
  { value: "7", target: 7, label: "Major Projects Built" },
  { value: "9.6", target: null, label: "Academic CGPA" },
  { value: "6", target: 6, label: "Certifications Earned" },
  { value: "3", target: 3, label: "Gold Medals 🥇" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="section-header">
        <div className="section-kicker">by the numbers</div>
        <h2 className="section-title">At a Glance</h2>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box reveal">
            <span
              className="stat-value"
              {...(stat.target !== null ? { "data-target": stat.target } : {})}
            >
              {stat.target !== null ? "0" : stat.value}
            </span>
            <div className="stat-description">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
