"use client";

import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleThemeToggle = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", next === "dark" ? "#0d0d1a" : "#f5f4f0");
  };

  return (
    <header ref={headerRef} id="header">
      <div className="logo">&lt;/Nikitha&gt;</div>
      <nav>
        <a href="#journey">Journey</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certs</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-right">
        <button
          className="theme-toggle"
          onClick={handleThemeToggle}
          aria-label="Toggle dark/light mode"
          title="Toggle theme"
        >
          <span className="icon-sun">☀️</span>
          <span className="icon-moon">🌙</span>
        </button>
      </div>
      <div className="header-line"></div>
    </header>
  );
}
