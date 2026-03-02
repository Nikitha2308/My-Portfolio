const certs = [
  {
    badge: "🏆",
    title: "NPTEL – C Programming",
    provider: "NPTEL",
    description: "Earned Silver Badge with 75% score. Covered advanced C, data structures, pointers, and algorithms.",
    skills: ["C Programming", "Data Structures", "Algorithms"],
  },
  {
    badge: "💻",
    title: "SKILLRACK Certifications",
    provider: "SkillRack Platform",
    description: "Completed tracks in C, Python, SQL, and Java. Solved 500+ coding challenges across difficulty levels.",
    skills: ["C", "Python", "SQL", "Java"],
  },
  {
    badge: "🗄️",
    title: "Database Fundamentals",
    provider: "Infosys Springboard",
    description: "Comprehensive database concepts, normalization, SQL queries, and real-world design patterns.",
    skills: ["Database Design", "SQL", "Normalization"],
  },
  {
    badge: "🎨",
    title: "HTML & CSS — Build a Blog",
    provider: "Infosys Springboard",
    description: "Built a personal blog from scratch. Covered HTML5, CSS3, responsive design, flexbox, grid, and accessibility.",
    skills: ["HTML5", "CSS3", "Responsive"],
  },
  {
    badge: "📊",
    title: "Algorithms & Data Collection",
    provider: "Coursera",
    description: "Algorithm design, complexity analysis, and efficient data strategies for large-scale applications.",
    skills: ["Algorithms", "Big O", "Optimization"],
  },
  {
    badge: "⚡",
    title: "Starting to Code",
    provider: "Coursera",
    description: "The foundation course that kickstarted my programming journey — fundamentals, problem-solving, and computational thinking.",
    skills: ["Programming Basics", "Logic Building"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-header">
        <div className="section-kicker">lifelong learning</div>
        <h2 className="section-title">Certifications &amp; Learning</h2>
        <p className="section-subtitle">Continuous learning is the foundation of great engineering</p>
      </div>
      <div className="certs-grid">
        {certs.map((cert) => (
          <div key={cert.title} className="cert-card reveal">
            <span className="cert-badge">{cert.badge}</span>
            <h3>{cert.title}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <p>{cert.description}</p>
            <div className="cert-skills">
              {cert.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
