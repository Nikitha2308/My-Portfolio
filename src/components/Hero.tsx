export default function Hero() {
  const tickerItems = [
    "React Native", "Nest.js", "Flutter", "TypeScript", "MongoDB",
    "Kafka", "WebSocket", "Next.js", "Angular", "Django",
    "Healthcare Tech", "Gold Medalist",
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">
            <span className="blink"></span>Jr. Software Developer
          </div>
          <h1>
            <span className="line1">Hi, I&apos;m</span>
            <span className="line2">Nikitha B</span>
          </h1>
          <p className="hero-subtitle">
            <span>Jr. Software Developer</span>
            <span className="sep">&middot;</span>
            <span>Mobile App Specialist</span>
            <span className="sep">&middot;</span>
            <span>Backend Enthusiast</span>
          </p>
          <div className="hero-badges">
            {["React Native", "React JS", "Angular JS", "Nest JS", "Mongo DB", "MySQL"].map((badge) => (
              <span key={badge} className="hero-badge"><span>{badge}</span></span>
            ))}
          </div>
          <p className="hero-desc">
            From college gold medalist to building production-ready mobile
            applications — this is my journey from academic excellence to
            real-world development.
          </p>
          <div className="cta-group">
            <a href="#journey" className="cta-button">✦ Explore My Journey</a>
            <a
              href="https://www.linkedin.com/in/nikitha-nikitha"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button outline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring"></div>
          <div className="avatar-ring"></div>
          <div className="code-block">
            <div className="code-spin"></div>
            <div className="code-scan"></div>
            <div className="code-dots">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <span className="code-filename">developer.ts</span>
            </div>
            <div className="code-line">
              <span className="ky">const</span>{" "}
              <span className="kf">developer</span> = {"{"}
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="ks">name</span>:{" "}
              <span className="kv">&quot;Nikitha B&quot;</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="ks">role</span>:{" "}
              <span className="kv">&quot;Jr. Software Developer&quot;</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="ks">passion</span>:{" "}
              <span className="kv">&quot;Native Mobile Apps&quot;</span>,
            </div>
            <div className="code-line">
              {"};"}
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="ticker-wrap">
        <div className="ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>
              {item}
              {i < tickerItems.length * 2 - 1 && <span className="dot">◆</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
