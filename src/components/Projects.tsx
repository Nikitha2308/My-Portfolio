const projects = [
  {
    title: "Phlebo App — Healthcare Mobile Solution",
    type: "🟢 Current · E-compaas Care",
    description: "Production-grade healthcare application with advanced foreground & background location tracking, real-time WebSocket updates, and extensive R&D for field reliability.",
    tags: ["React Native", "Location Services", "WebSocket", "Background Tasks", "Healthcare"],
  },
  {
    title: "Job Searching Application",
    type: "🌱 Part-Time Internship",
    description: "Live job search platform — built customer-facing frontend in React JS then developed the Django REST API backend. Real team workflows and delivery timelines.",
    tags: ["React JS", "Django", "REST API", "Team Project"],
  },
  {
    title: "College Management System",
    type: "Skillmine Internship",
    description: "Full-stack educational platform with admin dashboard managing subjects, semesters, faculty, student records, and role-based access control throughout.",
    tags: ["React", "Nest.js", "MongoDB", "TypeScript", "RBAC"],
  },
  {
    title: "Online Learning Platform",
    type: "Skillmine Internship",
    description: "W3Schools-inspired interactive learning platform. Features course modules, progress tracking, and an intuitive interface for web technologies.",
    tags: ["React", "Node.js", "MongoDB", "Education Tech"],
  },
  {
    title: "Restaurant Management System",
    type: "🎓 College Project",
    description: "Secure platform for table reservations and staff scheduling via an intuitive digital interface. Full Angular + Node.js + MongoDB stack.",
    tags: ["Angular.js", "Node.js", "MongoDB", "Real-time"],
  },
  {
    title: "Brain Tumor Detection",
    type: "🎓 College Project",
    description: "Medical imaging project for detection and extraction of brain tumors from MRI scans. Built using a hybrid SVM + Random Forest approach in MATLAB, leveraging the Discrete Wavelet Transform (DWT) technique for effective identification of tumorous regions.",
    tags: ["MATLAB", "SVM", "Random Forest", "DWT", "Medical Imaging", "Machine Learning"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-kicker">portfolio</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real projects, real users, real impact</p>
      </div>
      {projects.map((project) => (
        <div key={project.title} className="project-card reveal">
          <div className="project-header">
            <h3>{project.title}</h3>
            <span className="project-type">{project.type}</span>
          </div>
          <p>{project.description}</p>
          <div className="tech-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
