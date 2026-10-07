import React from 'react';
import { useLang } from '../i18n/LangContext';
import './Services.css';

const ICONS   = ['💳', '🌐', '🔧', '🎓'];
const COLORS  = ['#dbeafe', '#e0f2fe', '#f0fdf4', '#fdf4ff'];
const ACCENTS = ['#2563eb', '#0284c7', '#16a34a', '#9333ea'];

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="badge badge-blue">{s.badge}</div>
          <h2 className="section-title">{s.title1} <span className="text-gradient">{s.title2}</span></h2>
          <p className="section-sub">{s.sub}</p>
        </div>

        <div className="services__grid">
          {s.items.map((item, i) => (
            <div className="services__card" key={i} style={{ '--svc-color': COLORS[i], '--svc-accent': ACCENTS[i] }}>
              <div className="services__card-top">
                <div className="services__icon" style={{ background: COLORS[i] }}>{ICONS[i]}</div>
                <span className="services__tag">{item.tag}</span>
              </div>
              <h3 className="services__card-title">{item.title}</h3>
              <p className="services__card-sub">{item.subtitle}</p>
              <p className="services__card-desc">{item.desc}</p>
              <ul className="services__features">
                {item.features.map((f, j) => (
                  <li key={j}>
                    <span className="services__check" style={{ color: ACCENTS[i] }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="services__link" style={{ color: ACCENTS[i] }}>
                {s.pricingLink}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
