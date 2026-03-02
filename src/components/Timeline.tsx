export default function Timeline() {
  return (
    <section id="journey" className="timeline-section">
      <div className="section-header">
        <div className="section-kicker">career path</div>
        <h2 className="section-title">My Professional Journey</h2>
        <p className="section-subtitle">Every step shaped me — from classroom to production code</p>
      </div>
      <div className="timeline">
        {/* Education */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">2021 – 2025</div>
            <span className="timeline-type-badge edu">🎓 Education</span>
            <h3>B.Tech IT (Honors with Specialization in Product Development)</h3>
            <h4>Kamaraj College of Engineering &amp; Technology</h4>
            <ul>
              <li>CGPA: 9.6 — Gold Medals in 1st, 2nd &amp; 3rd Year (2021–2024)</li>
              <li>Built Restaurant Management System using Angular, Node.js &amp; MongoDB.</li>
              <li>Created Brain Tumor Detection using hybrid SVM + Random Forest in MATLAB via DWT.</li>
              <li>Strong foundation in C, Java, Python, and C#, MySQL, Django, ASP.NET tech stacks.</li>
            </ul>
          </div>
        </div>

        {/* Part-Time Internship */}
        <div className="timeline-item">
          <div className="timeline-dot parttime"></div>
          <div className="timeline-content highlight-tl">
            <div className="timeline-year">3 Months · Jul 2024 - Sep 2024</div>
            <span className="timeline-type-badge">⚡Remote</span>
            <h3>Part-Time Internship</h3>
            <h4>Infoziant</h4>
            <p style={{ color: "var(--text-muted)", fontSize: ".9rem", marginBottom: ".8rem" }}>
              Job Searching Application — contributed across two phases:
            </p>
            <div className="phase-grid">
              <div className="phase-card">
                <div className="phase-card-header">
                  <div className="phase-badge">P1</div>
                  <div>
                    <h5>Phase 1 · Month 1</h5>
                    <span>Frontend Development</span>
                  </div>
                </div>
                <div className="phase-card-body">
                  <div><span className="phase-tech-pill">⚛ React JS</span></div>
                  <ul>
                    <li>Developed complete customer-facing module for job discovery.</li>
                    <li>Built job listing pages, filters, search &amp; detail views.</li>
                    <li>Learned codebase reading, conventions, and delivery timelines.</li>
                  </ul>
                </div>
              </div>
              <div className="phase-card">
                <div className="phase-card-header">
                  <div className="phase-badge">P2</div>
                  <div>
                    <h5>Phase 2 · Month 2–3</h5>
                    <span>Backend Development</span>
                  </div>
                </div>
                <div className="phase-card-body">
                  <div><span className="phase-tech-pill">🐍 Django</span></div>
                  <ul>
                    <li>Built REST APIs for the same application using Django.</li>
                    <li>Implemented job listing endpoints, auth, and database queries.</li>
                    <li>Understood client-server architecture from both ends.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="soft-skills">
              <span className="soft-chip">🤝 Teamwork</span>
              <span className="soft-chip">⏰ Time Management</span>
              <span className="soft-chip">💬 Meetings</span>
              <span className="soft-chip">📋 Sprint Planning</span>
              <span className="soft-chip">🔄 Code Reviews</span>
            </div>
          </div>
        </div>

        {/* Full-time Internship */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">6 Months · Jan 2025 - Jun 2025</div>
            <span className="timeline-type-badge fulltime">⚡ On-Site</span>
            <h3>Full-time Internship</h3>
            <h4>Skillmine Technology Consulting Pvt. Ltd.</h4>
            <ul>
              <li>Mastered modern stack: React, Next.js, Angular, Node.js, Nest.js, React Native.</li>
              <li>Explored cross-platform mobile: React Native &amp; Flutter.</li>
              <li>Used advanced tools: Tailwind CSS, TypeScript, Kafka, Figma.</li>
              <li>Built Online Learning Platform (W3Schools-inspired).</li>
              <li>Delivered full-stack College Management System with RBAC.</li>
              <li>Created Todo Application in React Native.</li>
            </ul>
          </div>
        </div>

        {/* Current Role */}
        <div className="timeline-item">
          <div className="timeline-dot current"></div>
          <div className="timeline-content">
            <div className="timeline-year">Current Role</div>
            <span className="timeline-type-badge current">🚀 Working</span>
            <h3>E-compaas Care · Sterling Accuris Quick Commerce</h3>
            <h4>Native Mobile Developer</h4>
            <ul>
              <li>Fully developed <strong>Phlebo App</strong> — production-grade healthcare solution.</li>
              <li>Implemented foreground &amp; background location tracking with extensive R&amp;D.</li>
              <li>Integrated real-time WebSocket communications for live updates.</li>
              <li>Deployed to production — serving real healthcare professionals daily.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
