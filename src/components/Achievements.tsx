const miniAchievements = [
  { icon: "🎓", title: "School Excellence", desc: "88% in HSC & 86% in SSLC from PKN Girls' Higher Secondary School, Madurai." },
  { icon: "🌱", title: "First Industry Step", desc: "3-month part-time internship during college contributing to a real job-search product." },
  { icon: "💼", title: "Internship Success", desc: "6-month full-time training at Skillmine with 3 major project deliveries." },
  { icon: "🚀", title: "Production Deployment", desc: "Deployed Phlebo App to production — serving real healthcare professionals daily." },
  { icon: "📚", title: "6+ Certifications", desc: "Earned certifications from NPTEL, Infosys Springboard, Coursera, and SkillRack." },
  { icon: "🤝", title: "Team Collaborator", desc: "Experienced in sprints, code reviews, and on-time delivery in team environments." },
];

export default function Achievements() {
  return (
    <section className="achievements-section">
      <div className="section-header">
        <div className="section-kicker">milestones</div>
        <h2 className="section-title">Awards &amp; Achievements</h2>
      </div>
      <div className="achievements-container">
        <div className="big-achievement reveal">
          <span className="achievement-icon">🥇</span>
          <h3>3-Time Gold Medalist</h3>
          <p className="achievement-year">Kamaraj College · 2021 – 2024</p>
          <p>Top performer in IT for three consecutive years. Maintained 9.6 CGPA while delivering real-world projects.</p>
          <div className="achievement-stats">
            <div className="stat">
              <span className="stat-number">9.6</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Gold Medals</span>
            </div>
            <div className="stat">
              <span className="stat-number">Top 1%</span>
              <span className="stat-label">Dept. Rank</span>
            </div>
          </div>
        </div>
        <div className="achievement-mini-grid">
          {miniAchievements.map((a) => (
            <div key={a.title} className="mini-achievement reveal">
              <span className="mini-icon">{a.icon}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
