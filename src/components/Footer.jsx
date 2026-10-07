import React from "react";
import { useLang } from "../i18n/LangContext";
import { waLink, PHONE_DISPLAY } from "../config";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">C</div>
              <span>
                Crea<strong>tech</strong>
              </span>
            </div>
            <p>
              {f.tagline}
              <br />
              {f.subTagline}
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h5>{f.servicesTitle}</h5>
              <a href="#services">{f.links.cards}</a>
              <a href="#services">{f.links.sites}</a>
              <a href="#services">{f.links.modern}</a>
              <a href="#students">{f.links.students}</a>
            </div>
            <div className="footer__col">
              <h5>{f.infoTitle}</h5>
              <a href="#portfolio">{f.links.portfolio}</a>
              <a href="#pricing">{f.links.pricing}</a>
              <a href="#contact">{f.links.contact}</a>
              <a href="#contact">{f.links.devis}</a>
            </div>
            <div className="footer__col">
              <h5>{f.contactTitle}</h5>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 {PHONE_DISPLAY}
              </a>
              <a href="mailto:bymestudio@gmail.com">📧 bymestudio@gmail.com</a>
              <span>📍 Algérie</span>
              <span>{f.links.response}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} Createch · {f.rights}
          </p>
          <p>{f.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
