import React, { useState, useEffect } from "react";
import { useLang } from "../i18n/LangContext";
import { waLink } from "../config";
import "./Navbar.css";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.students, href: "#students" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const LangSwitcher = () => (
    <div className="navbar__lang-switcher">
      <button
        className={`navbar__lang-btn ${lang === "fr" ? "active" : ""}`}
        onClick={() => setLang("fr")}
        title="Français"
      >
        FR
      </button>
      <span className="navbar__lang-sep">|</span>
      <button
        className={`navbar__lang-btn ${lang === "arb" ? "active" : ""}`}
        onClick={() => setLang("arb")}
        title="Arabe"
      >
        AR
      </button>
    </div>
  );

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* LOGO */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-icon">C</div>
          <span>
            Crea<strong>tech</strong>
          </span>
        </a>

        {/* LINKS — desktop */}
        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={waLink(t.contact.waMessageGeneric)}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </li>
          {/* Lang switcher desktop uniquement */}
          <li className="navbar__lang-desktop">
            <LangSwitcher />
          </li>
        </ul>

        {/* MOBILE DROITE : lang + burger */}
        <div className="navbar__mobile-right">
          <div className="navbar__lang-mobile">
            <LangSwitcher />
          </div>
          <button
            className={`navbar__burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
