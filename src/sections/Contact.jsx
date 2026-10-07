import React from "react";
import { useLang } from "../i18n/LangContext";
import { waLink, PHONE_DISPLAY } from "../config";
import "./Contact.css";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const o = c.serviceOptions;

  // Sujets proposés en raccourci : chacun ouvre WhatsApp avec un message pré-rempli
  const topics = [
    o.card,
    o.poster,
    o.vitrine,
    o.modernisation,
    o.expose,
    o.ppt,
    o.memoire,
    o.demarches,
    o.pack,
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact__bg" />

      <div className="container">
        <div className="contact__header">
          <div className="badge badge-blue">{c.badge}</div>

          <h2 className="section-title">
            {c.title1} <span className="text-gradient">{c.title2}</span>
          </h2>

          <p className="section-sub">{c.sub}</p>

          <p className="contact__lang-note">
            💬 Vous pouvez nous écrire en français, arabe ou kabyle (ⵜⴰⵎⴰⵣⵉⵖⵜ).
            L'important est de bien exprimer votre idée — on s'occupe du reste.
          </p>
        </div>

        <div className="contact__layout">
          {/* LEFT */}
          <div className="contact__left">
            <div className="contact__methods">
              {c.methods.map((m, i) => (
                <div className="contact__method" key={i}>
                  <div
                    className="contact__method-icon"
                    style={{
                      background: `${["#25D366", "#2563eb", "#9333ea"][i]}15`,
                      color: ["#25D366", "#2563eb", "#9333ea"][i],
                    }}
                  >
                    {m.icon}
                  </div>

                  <div>
                    <div className="contact__method-label">{m.label}</div>
                    <div className="contact__method-value">
                      {i === 0 ? (
                        <a
                          href={waLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      ) : (
                        m.value
                      )}
                    </div>
                    <div className="contact__method-sub">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__promise">
              <h4>{c.promiseTitle}</h4>
              <ul>
                {c.promises.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — redirection WhatsApp */}
          <div className="contact__right">
            <div className="contact__form-card contact__wa-card">
              <div className="contact__wa-icon">💬</div>
              <h3 className="contact__form-title">{c.waTitle}</h3>
              <p className="contact__wa-desc">{c.waDesc}</p>

              <a
                href={waLink(c.waMessageGeneric)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact__submit contact__wa-btn"
              >
                {c.waBtn}
              </a>

              <p className="contact__wa-topic-title">{c.waTopicTitle}</p>
              <div className="contact__wa-topics">
                {topics.map((topic) => (
                  <a
                    key={topic}
                    href={waLink(c.waMessagePrefix + topic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__wa-chip"
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
