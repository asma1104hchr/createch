import React, { useEffect, useRef } from "react";
import { useLang } from "../i18n/LangContext";
import "./Hero.css";

const FLOATING_ICONS = [
  { emoji: "🎨", delay: "0s", pos: { top: "18%", left: "8%" } },
  { emoji: "💳", delay: "0.4s", pos: { top: "12%", right: "10%" } },
  { emoji: "🌐", delay: "0.8s", pos: { bottom: "28%", left: "5%" } },
  { emoji: "🎓", delay: "1.2s", pos: { bottom: "20%", right: "8%" } },
  { emoji: "✨", delay: "0.6s", pos: { top: "40%", right: "4%" } },
];

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const heroRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      heroRef.current.style.setProperty(
        "--mx",
        `${(clientX / width - 0.5) * 20}px`,
      );
      heroRef.current.style.setProperty(
        "--my",
        `${(clientY / height - 0.5) * 20}px`,
      );
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />
      <div className="hero__grid" />

      {FLOATING_ICONS.map((item, i) => (
        <div
          key={i}
          className="hero__chip"
          style={{ ...item.pos, animationDelay: item.delay }}
        >
          <span>{item.emoji}</span>
        </div>
      ))}

      <div className="container hero__content">
        <div
          className="hero__badge badge badge-blue animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {h.badge}
        </div>
        <h1
          className="hero__title animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {h.title1}
          <br />
          <span className="text-gradient">{h.title2}</span>
        </h1>
        <p
          className="hero__desc animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          {h.desc}
        </p>
        <div
          className="hero__actions animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a href="#pricing" className="btn btn-primary">
            {h.btnPricing}
          </a>
          <a href="#portfolio" className="btn btn-outline">
            {h.btnPortfolio}
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-dot" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
