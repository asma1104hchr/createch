import React, { useState } from "react";
import { useLang } from "../i18n/LangContext";
import logoPizza from "../assets/capture_pizza.png";
import logoMedecin from "../assets/capture_medecin.png";
import coach from "../assets/capture_coach.png";
import photographes from "../assets/capture_photographe.png";
import aid from "../assets/capture_aid.png";
import formation from "../assets/capture_formation.png";
import archi from "../assets/capture_archi.png";
import pati from "../assets/capture_pati.png";
import poster from "../assets/capture_poster.png";
import { waLink } from "../config";
import "./Portfolio.css";

const PROJECTS = [
  {
    id: 1,
    cat: "Sites Web",
    title: "La Bella Pizza",
    subtitle: "Pizzeria Artisanale",
    image: logoPizza,
    tags: ["Restaurant", "Menu", "Commande en ligne"],
    desc: "Site vitrine moderne pour une pizzeria artisanale. Menu interactif, galerie appétissante, formulaire de réservation.",
    palette: ["#c0392b", "#e67e22", "#2c3e50"],
    mockupBg: "linear-gradient(135deg, #1a0a00 0%, #8B0000 50%, #2c1810 100%)",
    highlight: "🏆 Featured",
    url: "https://v0-pizzeria-website-henna.vercel.app/",
  },
  {
    id: 2,
    cat: "Sites Web",
    title: "Dr. Karim Cabinet",
    subtitle: "Cabinet Médical",
    image: logoMedecin,
    tags: ["Santé", "Rendez-vous", "Professionnel"],
    desc: "Site vitrine propre et rassurant pour un médecin généraliste. Prise de RDV, présentation, localisation.",
    palette: ["#0284c7", "#06b6d4", "#f0fdf4"],
    mockupBg: "linear-gradient(135deg, #e0f2fe 0%, #bfdbfe 100%)",
    highlight: null,
    url: "https://dr-karim-cabinet.vercel.app/",
  },
  {
    id: 3,
    cat: "Sites Web",
    title: "Atelier Moda",
    subtitle: "Boutique de Mode",
    emoji: "👗",
    tags: ["Mode", "E-commerce", "Lookbook"],
    desc: "Site vitrine élégant pour une boutique de prêt-à-porter algérienne. Catalogue produits, galerie tendances.",
    palette: ["#d97706", "#f59e0b", "#1c1917"],
    mockupBg: "linear-gradient(135deg, #1c1917 0%, #44403c 100%)",
    highlight: null,
    url: "#",
  },
  {
    id: 4,
    cat: "Cartes Visites",
    title: "Coach Business",
    subtitle: "Carte Recto-Verso",
    image: coach,
    tags: ["Business", "Minimaliste", "Premium"],
    desc: "Carte épurée bleu marine et or pour un coach business. Typographie bold, logo intégré, QR code au dos.",
    palette: ["#0f2044", "#d4af37", "#ffffff"],
    mockupBg: "linear-gradient(135deg, #0f2044, #1a4fd6)",
    highlight: null,
    cardUrl: "#",
  },
  {
    id: 5,
    cat: "Cartes Visites",
    title: "Photographe Studio",
    subtitle: "Carte Créative",
    image: photographes,
    tags: ["Photo", "Créatif", "Élégant"],
    desc: "Carte noire mate avec effet grain photographique. Nom en lettres dorées, contacts en blanc.",
    palette: ["#0a0a0a", "#c9a96e", "#f5f5f5"],
    mockupBg: "linear-gradient(135deg, #0a0a0a, #2d2d2d)",
    highlight: null,
    cardUrl: "#",
  },
  {
    id: 6,
    cat: "Cartes Visites",
    title: "Architecte DZ",
    subtitle: "Carte Géométrique",
    image: archi,
    tags: ["Architecture", "Géométrique", "Moderne"],
    desc: "Carte avec motifs géométriques inspirés de l'architecture traditionnelle algérienne.",
    palette: ["#1e293b", "#38bdf8", "#e2e8f0"],
    mockupBg: "linear-gradient(135deg, #1e293b, #0f172a)",
    highlight: "⭐ Best Design",
    cardUrl: "#",
  },
  {
    id: 7,
    cat: "Cartes Visites",
    title: "Pâtisserie Lyna",
    subtitle: "Carte Rose & Or",
    image: pati,
    tags: ["Food", "Féminin", "Cute"],
    desc: "Carte douce et élégante pour une pâtissière. Fond rose poudré, touches dorées, logo en script calligraphié.",
    palette: ["#fbcfe8", "#d4af37", "#9d174d"],
    mockupBg: "linear-gradient(135deg, #fdf2f8, #fce7f3)",
    highlight: null,
    cardUrl: "#",
  },
  {
    id: 8,
    cat: "Posters",
    title: "Soirée Eid Mubarak",
    subtitle: "Flyer événementiel",
    image: aid,
    tags: ["Événement", "Fête", "Print & Digital"],
    desc: "Flyer festif pour une soirée de l'Aïd. Dorures arabesques, typographie arabe et latine.",
    palette: ["#1a0a00", "#d4af37", "#c0392b"],
    mockupBg: "linear-gradient(135deg, #0d0005, #2d1b00)",
    highlight: "🔥 Trending",
  },
  {
    id: 9,
    cat: "Posters",
    title: "Formation Marketing",
    subtitle: "Affiche promotionnelle",
    image: formation,
    tags: ["Formation", "Pro", "Réseaux Sociaux"],
    desc: "Poster pour promouvoir une formation marketing digital. Visuel bold, call-to-action clair.",
    palette: ["#2563eb", "#7c3aed", "#06b6d4"],
    mockupBg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    highlight: null,
  },
  {
    id: 10,
    cat: "Posters",
    image: poster,
    subtitle: "Promo réseaux sociaux",
    emoji: "🛍️",
    tags: ["Commerce", "Promo", "Instagram"],
    desc: "Série de visuels pour annonce de soldes. Format carré Instagram, stories et bannière web.",
    palette: ["#dc2626", "#fbbf24", "#ffffff"],
    mockupBg: "linear-gradient(135deg, #7f1d1d, #dc2626)",
    highlight: null,
  },
];

export default function Portfolio() {
  const { t } = useLang();
  const p = t.portfolio;
  const [active, setActive] = useState(p.categories[0]);

  const catMap = {
    Tous: 0,
    Akk: 0,
    "Sites Web": 1,
    "Ismal n Web": 1,
    "Cartes Visites": 2,
    "Tikarḍin n Tawuri": 2,
    Posters: 3,
    Iɣerbal: 3,
  };

  const catIndex = catMap[active] ?? 0;
  const ORIG_CATS = ["Tous", "Sites Web", "Cartes Visites", "Posters"];
  const origCat = ORIG_CATS[catIndex];

  const filtered =
    origCat === "Tous" ? PROJECTS : PROJECTS.filter((pr) => pr.cat === origCat);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div className="badge badge-blue">{p.badge}</div>
          <h2 className="section-title">
            {p.title1} <span className="text-gradient">{p.title2}</span>
          </h2>
          <p className="section-sub">{p.sub}</p>
        </div>

        <div className="portfolio__filters">
          {p.categories.map((c) => (
            <button
              key={c}
              className={`portfolio__filter ${catMap[active] === catMap[c] ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((pr) => {
            const linkHref = pr.cat === "Sites Web" ? pr.url : pr.cardUrl;
            const linkLabel =
              pr.cat === "Sites Web"
                ? p.viewSite
                : pr.cat === "Cartes Visites"
                  ? p.viewCard
                  : null;

            return (
              <div className="portfolio__card" key={pr.id}>
                <a
                  href={linkHref !== "#" ? linkHref : undefined}
                  className={`portfolio__mockup ${linkHref !== "#" ? "portfolio__mockup--link" : ""}`}
                  style={{ background: pr.mockupBg }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pr.highlight && (
                    <div className="portfolio__highlight">{pr.highlight}</div>
                  )}

                  <MockupInner pr={pr} />

                  {linkHref !== "#" && (
                    <div className="portfolio__overlay">
                      <span className="portfolio__overlay-btn">
                        {linkLabel} 🔗
                      </span>
                    </div>
                  )}
                </a>

                <div className="portfolio__info">
                  <div className="portfolio__cat">{pr.cat}</div>
                  <h3 className="portfolio__title">{pr.title}</h3>
                  <p className="portfolio__subtitle">{pr.subtitle}</p>
                  <p className="portfolio__desc">{pr.desc}</p>
                  <div className="portfolio__tags">
                    {pr.tags.map((tag) => (
                      <span key={tag} className="portfolio__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="portfolio__cta">
          <p>{p.ctaText}</p>
          <a
            href={waLink(t.contact.waMessageGeneric)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {p.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}

function MockupInner({ pr }) {
  // SI UNE IMAGE EXISTE, ON L'AFFICHE DIRECTEMENT
  if (pr.image) {
    return (
      <div className="portfolio__screenshot-container">
        <img src={pr.image} alt={pr.title} className="portfolio__screenshot" />
      </div>
    );
  }

  // SINON, ON AFFICHE LE MOCKUP CSS PAR DÉFAUT
  return (
    <div className="portfolio__mockup-inner">
      <div className="portfolio__mockup-screen">
        {pr.cat === "Sites Web" && (
          <div className="portfolio__browser">
            <div className="portfolio__browser-bar">
              <span />
              <span style={{ background: "#fbbf24" }} />
              <span style={{ background: "#34d399" }} />
            </div>
            <div className="portfolio__browser-body">
              <div
                className="portfolio__fake-nav"
                style={{ background: pr.palette[0] }}
              />
              <div
                className="portfolio__fake-hero"
                style={{
                  background: `linear-gradient(135deg, ${pr.palette[0]}, ${pr.palette[1]})`,
                }}
              >
                <div style={{ fontSize: 32 }}>{pr.emoji}</div>
              </div>
            </div>
          </div>
        )}
        {pr.cat === "Cartes Visites" && (
          <div
            className="portfolio__card-mockup"
            style={{
              background: `linear-gradient(135deg, ${pr.palette[0]}, ${pr.palette[1]}22)`,
            }}
          >
            <div style={{ fontSize: 30 }}>{pr.emoji}</div>
          </div>
        )}
        {pr.cat === "Posters" && (
          <div
            className="portfolio__poster-mockup"
            style={{
              background: `linear-gradient(160deg, ${pr.palette[0]}, ${pr.palette[1]}55)`,
            }}
          >
            <div style={{ fontSize: 36 }}>{pr.emoji}</div>
          </div>
        )}
      </div>
    </div>
  );
}
