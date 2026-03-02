"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // ── THEME INIT ──
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || "dark";
    html.setAttribute("data-theme", initialTheme);

    // ── FONT LOADING ──
    let fontsLoaded = false;
    function loadFontsAsync() {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Cormorant+Garamond:wght@300;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&display=swap";
      document.head.appendChild(link);
    }
    function triggerFontLoad() {
      if (!fontsLoaded) {
        fontsLoaded = true;
        loadFontsAsync();
      }
    }
    const fontTimer = setTimeout(triggerFontLoad, 800);
    const scrollFontHandler = () => triggerFontLoad();
    const clickFontHandler = () => triggerFontLoad();
    document.addEventListener("scroll", scrollFontHandler, { once: true, passive: true });
    document.addEventListener("click", clickFontHandler, { once: true });

    // ── DETECT MOBILE ──
    const isMobile = window.innerWidth < 768;

    // ── AURORA (desktop only) ──
    let auroraTimeout: ReturnType<typeof setTimeout> | undefined;
    if (!isMobile) {
      const activateAurora = () => {
        document.getElementById("aurora")?.classList.add("active");
      };
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
          .requestIdleCallback(activateAurora, { timeout: 3000 });
      } else {
        auroraTimeout = setTimeout(activateAurora, 2000);
      }
    }

    // ── CURSOR (desktop only) ──
    let cursorRaf: number | undefined;
    if (!isMobile) {
      const cursor = document.getElementById("cursor");
      const follower = document.getElementById("cursorFollower");
      if (cursor && follower) {
        let mx = 0, my = 0, fx = 0, fy = 0;
        const onMouseMove = (e: MouseEvent) => {
          mx = e.clientX;
          my = e.clientY;
          cursor.style.left = mx - 6 + "px";
          cursor.style.top = my - 6 + "px";
        };
        document.addEventListener("mousemove", onMouseMove);
        const followCursor = () => {
          fx += (mx - fx) * 0.12;
          fy += (my - fy) * 0.12;
          follower.style.left = fx - 18 + "px";
          follower.style.top = fy - 18 + "px";
          cursorRaf = requestAnimationFrame(followCursor);
        };
        cursorRaf = requestAnimationFrame(followCursor);

        document.querySelectorAll("a,button,.skill-card,.tech-item,.cert-card,.project-card,.hero-badge").forEach((el) => {
          el.addEventListener("mouseenter", () => follower.classList.add("hovered"));
          el.addEventListener("mouseleave", () => follower.classList.remove("hovered"));
        });
      }
    }

    // ── STARS & PARTICLES ──
    let starsTimeout: ReturnType<typeof setTimeout> | undefined;
    let particlesTimeout: ReturnType<typeof setTimeout> | undefined;
    let particlesRaf: number | undefined;

    if (!isMobile) {
      starsTimeout = setTimeout(() => {
        const sf = document.getElementById("starfield");
        if (!sf) return;
        for (let i = 0; i < 120; i++) {
          const s = document.createElement("div");
          s.className = "star";
          const sz = Math.random() * 2 + 0.5;
          s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--dur:${Math.random() * 4 + 2}s;--delay:${Math.random() * 6}s;--max-opacity:${Math.random() * 0.5 + 0.2};`;
          sf.appendChild(s);
        }
      }, 1500);

      particlesTimeout = setTimeout(() => {
        const canvas = document.getElementById("particlesCanvas") as HTMLCanvasElement | null;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        function resizeCanvas() {
          canvas!.width = window.innerWidth;
          canvas!.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Particle {
          x = 0; y = 0; vx = 0; vy = 0; alpha = 0; size = 0; hue = 0;
          constructor() { this.reset(); }
          reset() {
            this.x = Math.random() * canvas!.width;
            this.y = Math.random() * canvas!.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.3 + 0.05;
            this.size = Math.random() * 2 + 0.5;
            this.hue = Math.random() > 0.5 ? 180 : 270;
          }
          update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas!.width || this.y < 0 || this.y > canvas!.height)
              this.reset();
          }
          draw() {
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx!.fillStyle = `hsla(${this.hue},80%,70%,${this.alpha})`;
            ctx!.fill();
          }
        }

        const particles: Particle[] = [];
        for (let i = 0; i < 60; i++) particles.push(new Particle());

        function drawConnections() {
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const dx = particles[i].x - particles[j].x;
              const dy = particles[i].y - particles[j].y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < 100) {
                ctx!.beginPath();
                ctx!.moveTo(particles[i].x, particles[i].y);
                ctx!.lineTo(particles[j].x, particles[j].y);
                ctx!.strokeStyle = `rgba(78,205,196,${0.06 * (1 - d / 100)})`;
                ctx!.lineWidth = 0.5;
                ctx!.stroke();
              }
            }
          }
        }

        function animateParticles() {
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
          particles.forEach((p) => { p.update(); p.draw(); });
          drawConnections();
          particlesRaf = requestAnimationFrame(animateParticles);
        }
        particlesRaf = requestAnimationFrame(animateParticles);
      }, 2500);
    } else {
      // Mobile: minimal stars, no canvas
      const canvasEl = document.getElementById("particlesCanvas");
      if (canvasEl) canvasEl.style.display = "none";
      starsTimeout = setTimeout(() => {
        const sf = document.getElementById("starfield");
        if (!sf) return;
        for (let i = 0; i < 30; i++) {
          const s = document.createElement("div");
          s.className = "star";
          const sz = Math.random() * 1.5 + 0.5;
          s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--dur:${Math.random() * 4 + 2}s;--delay:${Math.random() * 6}s;--max-opacity:${Math.random() * 0.3 + 0.1};`;
          sf.appendChild(s);
        }
      }, 2500);
    }

    // ── SCROLL: PROGRESS + HEADER + BACK TO TOP ──
    const prog = document.getElementById("scrollProgress");
    const hdr = document.getElementById("header");
    const btt = document.getElementById("backToTop");
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (prog) prog.style.width = pct + "%";
      hdr?.classList.toggle("scrolled", window.scrollY > 50);
      btt?.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    btt?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ── REVEAL ON SCROLL ──
    function reveal() {
      const th = window.innerHeight - 120;
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < th) el.classList.add("active");
      });
      document.querySelectorAll(".timeline-item").forEach((el) => {
        if (el.getBoundingClientRect().top < th) el.classList.add("visible");
      });
    }
    window.addEventListener("scroll", reveal, { passive: true });
    reveal();

    // ── SMOOTH SCROLL ──
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href!);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // ── COUNTERS ──
    function animateCounter(el: Element, target: number, dur = 1800) {
      const start = performance.now();
      const update = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.floor(ease * target));
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = String(target);
      };
      requestAnimationFrame(update);
    }
    document.querySelectorAll(".stat-value[data-target]").forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target")!);
      let triggered = false;
      new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !triggered) {
              triggered = true;
              animateCounter(counter, target);
            }
          });
        },
        { threshold: 0.5 }
      ).observe(counter);
    });

    // ── PARALLAX (desktop only) ──
    if (!isMobile) {
      const onParallax = () => {
        const y = window.scrollY;
        const ht = document.querySelector(".hero-text") as HTMLElement | null;
        if (ht) ht.style.transform = `translateY(${y * 0.15}px)`;
        const hv = document.querySelector(".hero-visual") as HTMLElement | null;
        if (hv) hv.style.transform = `translateY(${y * 0.08}px)`;
      };
      window.addEventListener("scroll", onParallax, { passive: true });
    }

    // ── TILT ON CARDS (desktop only) ──
    if (!isMobile) {
      document.querySelectorAll<HTMLElement>(".skill-card,.cert-card").forEach((card) => {
        card.addEventListener("mousemove", (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          card.style.transform = `translateY(-12px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) scale(1.01)`;
          card.style.transition = "transform .1s ease,box-shadow .4s ease,border-color .3s ease";
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "";
          card.style.transition = "all .4s cubic-bezier(.34,1.56,.64,1)";
        });
      });
    }

    // ── CLEANUP ──
    return () => {
      clearTimeout(fontTimer);
      clearTimeout(auroraTimeout);
      clearTimeout(starsTimeout);
      clearTimeout(particlesTimeout);
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      if (particlesRaf) cancelAnimationFrame(particlesRaf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" id="cursor"></div>
      <div className="cursor-follower" id="cursorFollower"></div>
      <div className="scroll-progress" id="scrollProgress"></div>
      <div className="aurora" id="aurora">
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
        <div className="aurora-blob"></div>
      </div>
      <div className="starfield" id="starfield"></div>
      <canvas className="particles-canvas" id="particlesCanvas"></canvas>
      <button className="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
    </>
  );
}
