export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-kicker">get in touch</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
      </div>
      <p className="contact-desc">
        Open to new opportunities, collaborations, or a simple tech conversation.
      </p>
      <p className="contact-sub">
        Whether you want to work together, discuss a technical challenge, or just say hi — I&apos;d love to hear from you!
      </p>
      <div className="contact-links">
        <a href="mailto:nikithab2003@gmail.com" className="contact-link">
          <span>📧 Email Me</span>
        </a>
        <a href="https://github.com/Nikitha2308" target="_blank" rel="noopener noreferrer" className="contact-link github-link">
          <span>💻 GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/nikitha-nikitha" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
          <span>🔗 LinkedIn</span>
        </a>
        <a href="tel:9123585022" className="contact-link">
          <span>📱 Call Me</span>
        </a>
      </div>
      <div className="social-links">
        <h3>Find Me Online</h3>
        <div className="social-icons">
          <a href="https://github.com/Nikitha2308" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nikitha-nikitha" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:nikithab2003@gmail.com" className="social-icon" title="Email">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a href="tel:9123585022" className="social-icon" title="Phone">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
