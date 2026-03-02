const highlights = [
  {
    number: "01",
    title: "First Steps into Industry",
    desc: "Before full-time, a 3-month part-time role gave me my first real taste of professional software development.",
    points: [
      "Built frontend job-search module in React JS (Month 1)",
      "Developed Django REST APIs for the same product (Month 2–3)",
      "Learned team dynamics: sprints, standups, code reviews",
      "Understood full-stack architecture from both ends",
    ],
  },
  {
    number: "02",
    title: "Healthcare Innovation",
    desc: "At E-compaas Care, tackling real-world mobile challenges in healthcare — where reliability is critical.",
    points: [
      "Fully built Phlebo App end-to-end in React Native",
      "Implemented foreground & background location tracking",
      "Integrated WebSocket for real-time live updates",
      "Deployed to production — serving actual healthcare workers",
    ],
  },
  {
    number: "03",
    title: "Full Stack Mastery",
    desc: "Seven months at Skillmine Technology transformed me from a student into a production-ready developer.",
    points: [
      "Mastered 15+ technologies in 6 months",
      "Delivered 3 major projects across web and mobile",
      "Worked with enterprise-level tools like Kafka and Figma",
      "Learned both web and mobile development pipelines",
    ],
  },
];

export default function ExperienceHighlights() {
  return (
    <section className="experience-highlights-section">
      <div className="section-header">
        <div className="section-kicker">key moments</div>
        <h2 className="section-title">Experience Highlights</h2>
      </div>
      <div className="highlights-grid">
        {highlights.map((h) => (
          <div key={h.number} className="highlight-card reveal">
            <div className="highlight-number">{h.number}</div>
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
            <ul className="highlight-points">
              {h.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
