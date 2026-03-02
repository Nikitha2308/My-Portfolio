const skills = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Crafting beautiful, responsive UIs with modern frameworks and pixel-perfect detail.",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Angular.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Building robust, scalable server-side applications, REST APIs, and real-time services.",
    tags: ["Node.js", "Nest.js", "Django", "MongoDB", "MySQL", "Kafka", "WebSocket"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Cross-platform apps with native performance, deep OS integration, and real-time features.",
    tags: ["React Native", "Flutter", "Location Services", "Background Tasks"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <div className="section-kicker">what i know</div>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">Skills built through real projects, not just tutorials</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.title} className="skill-card reveal">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tech-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
