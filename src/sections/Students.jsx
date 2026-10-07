import React from 'react';
import { useLang } from '../i18n/LangContext';
import { waLink } from '../config';
import './Students.css';

export default function Students() {
  const { t } = useLang();
  const s = t.students;

  return (
    <section className="students" id="students">
      <div className="students__bg" />
      <div className="container">
        <div className="students__header">
          <div className="badge" style={{ background: '#f3e8ff', color: '#9333ea', border: '1px solid rgba(147,51,234,0.15)' }}>
            {s.badge}
          </div>
          <h2 className="section-title">{s.title1} <span className="text-gradient">{s.title2}</span></h2>
          <p className="section-sub">{s.sub}</p>
        </div>

        <div className="students__grid">
          {s.items.map((item, i) => (
            <div className="students__card" key={i}>
              <div className="students__icon">{['📝','🎞️','📚','🧭'][i]}</div>
              <h3 className="students__title">{item.title}</h3>
              <p className="students__desc">{item.desc}</p>
              <ul className="students__details">
                {item.details.map((d, j) => <li key={j}><span>✓</span> {d}</li>)}
              </ul>
              <div className="students__price">{item.price}</div>
              <a
                href={waLink(t.contact.waMessagePrefix + item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline students__btn"
              >
                {s.orderBtn}
              </a>
            </div>
          ))}
        </div>

        <div className="students__process">
          <h3 className="students__process-title">{s.processTitle}</h3>
          <div className="students__steps">
            {s.steps.map((step, i) => (
              <div className="students__step" key={i}>
                <div className="students__step-num">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < s.steps.length - 1 && <div className="students__step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="students__urgent">
          <div className="students__urgent-icon">{s.urgentIcon}</div>
          <div>
            <strong>{s.urgentTitle}</strong>
            <p>{s.urgentDesc}</p>
          </div>
          <a
            href={waLink(t.contact.waMessageUrgent)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white"
          >
            {s.urgentBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
