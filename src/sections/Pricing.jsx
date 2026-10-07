import React, { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import { waLink } from '../config';
import './Pricing.css';

const PRICING_DATA = {
  Design: [
    { emoji:'💳', price:'1 500', unit:'DA', tag:null, popular:false,
      fr:{ title:'Carte Visite Simple', desc:'Recto uniquement, design soigné, fichier HD prêt à imprimer.', features:['Design personnalisé','1 recto','2 révisions','Livraison PDF & PNG HD','Délai: 24–48h'], cta:'Commander' },
      kab:{ title:'Takarḍit Taseddast', desc:'Recto kan, tẓuri yelhan, aɣmis HD.', features:['Tẓuri amaḍan','1 recto','2 timesmuzgit','Yuzen PDF & PNG HD','Akud: 24–48h'], cta:'Amḍel' },
    },
    { emoji:'💳✨', price:'2 500', unit:'DA', tag:'⭐ Populaire', popular:true,
      fr:{ title:'Carte Visite Recto-Verso', desc:'Recto + verso, mise en page professionnelle, finition premium.', features:['Design exclusif R/V','3 révisions incluses','Fichiers PDF, PNG & SVG','Version modifiable','Délai: 48h'], cta:'Commander' },
      kab:{ title:'Takarḍit Recto-Verso', desc:'Recto + verso, asnulfu amahil, finition premium.', features:['Tẓuri tamaqqrant R/V','3 timesmuzgit','PDF, PNG & SVG','Talɣut tesmuzgant','Akud: 48h'], cta:'Amḍel' },
    },
    { emoji:'🎨', price:'6 000', unit:'DA', tag:'💰 Économique', popular:false,
      fr:{ title:'Pack Cartes × 3', desc:'3 designs différents recto-verso pour différents usages ou variantes.', features:['3 designs R/V','Révisions illimitées','Tous formats livrés','Cohérence visuelle','Délai: 4–5 jours'], cta:'Commander' },
      kab:{ title:'Pack Tikarḍin × 3', desc:'3 tẓuriyin ttimaynutin recto-verso i tifrayin.', features:['3 tẓuriyin R/V','Timesmuzgit ulac talast','Akk ifunas','Tammubila','Akud: 4–5 imuray'], cta:'Amḍel' },
    },
    { emoji:'🖼️', price:'2 000', unit:'DA', tag:null, popular:false,
      fr:{ title:'Poster / Flyer', desc:'Affiche événementielle, flyer promo, visuel réseaux sociaux.', features:['Format A4 ou carré','Version print & digital','2 révisions','Livraison HD','Délai: 24–48h'], cta:'Commander' },
      kab:{ title:'Aɣerbal / Flyer', desc:'Aɣerbal n tmenɣiwt, flyer, aseɣzan n isefra n tiɣri.', features:['Format A4 neɣ amkaẓ','Print & digital','2 timesmuzgit','HD','Akud: 24–48h'], cta:'Amḍel' },
    },
  ],
  'Sites Web': [
    { emoji:'🌐', price:'15 000', unit:'DA', tag:null, popular:false,
      fr:{ title:'Site Vitrine Starter', desc:'Site simple 1–3 pages pour présenter votre activité et vos contacts.', features:['1 à 3 pages','Design responsive','Formulaire contact','Google Maps intégré','Délai: 5–7 jours'], cta:'Demander un devis' },
      kab:{ title:'Asmel Starter', desc:'Asmel 1–3 isefra i wawway n tawuri-ik.', features:['1 ar 3 isefra','Aɣbalu','Anamek n tewwurt','Google Maps','Akud: 5–7 imuray'], cta:'Ssuter asemli' },
    },
    { emoji:'🚀', price:'25 000', unit:'DA', tag:'🔥 Best Value', popular:true,
      fr:{ title:'Site Vitrine Pro', desc:"Site complet jusqu'à 5 pages, animations modernes, galerie, SEO de base.", features:["Jusqu'à 5 pages",'Animations & interactions','Galerie / Portfolio','SEO basique inclus','Délai: 10–14 jours'], cta:'Demander un devis' },
      kab:{ title:'Asmel Pro', desc:'Asmel akk ar 5 isefra, timucahin timaynuyin, galerie, SEO.', features:['Ar 5 isefra','Timucahin','Galerie / Amaẓan','SEO','Akud: 10–14 imuray'], cta:'Ssuter asemli' },
    },
    { emoji:'🔧', price:'18 000', unit:'DA', tag:'🛠️ Refonte', popular:false,
      fr:{ title:'Modernisation Site', desc:"Refonte complète d'un site existant : nouveau design, performance, mobile.", features:['Nouveau design complet','Optimisation mobile','Amélioration vitesse','Nouveau contenu','Délai: 7–10 jours'], cta:'Demander un devis' },
      kab:{ title:'Asmaynut n Asmel', desc:'Asmaynut n asmel yellan: tẓuri tamaynut, tumast, mobile.', features:['Tẓuri tamaynut akk','Asmaynut mobile','Asebded n arurkel','Amawal amaynut','Akud: 7–10 imuray'], cta:'Ssuter asemli' },
    },
  ],
  'Étudiants': [
    { emoji:'📄', price:'800', unit:'DA', tag:null, popular:false,
      fr:{ title:'Exposé Simple', desc:'Rapport ou exposé bien structuré, mis en page proprement.', features:["Jusqu'à 10 pages",'Mise en page Word/PDF','Sommaire + bibliographie','Plan de travail fourni','Délai: 24–48h'], cta:'Commander' },
      kab:{ title:'Taεellimit Taseddast', desc:'Aɣmis neɣ taεellimit yettwasnenɛen, yettwanulfan.', features:['Ar 10 isefra','Word/PDF','Tafelwit + Tasɣunt','Asentel n txeddmet','Akud: 24–48h'], cta:'Amḍel' },
    },
    { emoji:'🎞️', price:'1 200', unit:'DA', tag:'⭐ Populaire', popular:true,
      fr:{ title:'Présentation PowerPoint', desc:'Présentation visuelle percutante, design cohérent, animations professionnelles.', features:["Jusqu'à 20 slides",'Design thématique','Animations soignées','Notes conférencier','Délai: 24–48h'], cta:'Commander' },
      kab:{ title:'PowerPoint', desc:'Tiɛṭuriyin i iɛeddan, tẓuri tammubilant, timucahin timahilin.', features:['Ar 20 slides','Tẓuri amaḍan','Timucahin yelhan','Tiwraɣin n aɣbalu','Akud: 24–48h'], cta:'Amḍel' },
    },
    { emoji:'📚', price:'3 500', unit:'DA', tag:'🎓 Complet', popular:false,
      fr:{ title:'Mémoire / Thèse', desc:'Mise en page complète selon les normes universitaires algériennes.', features:['Mise en page complète','Table des matières auto','Normes universitaires DZ','Numérotation & styles','Explication de votre sujet et de votre travail','Délai: selon volume'], cta:'Commander' },
      kab:{ title:'Amezwaru / Tiẓla', desc:'Asnulfu akk ɣef isufar n iɣerbiyyen azzayriyen.', features:['Asnulfu akk','Tafelwit tfekrist','Isufar DZ','Usɣel & istilen','Akud: ɣef uzmam'], cta:'Amḍel' },
    },
    { emoji:'🎒', price:'4 500', unit:'DA', tag:'💰 Pack', popular:false,
      fr:{ title:'Pack Étudiant', desc:'Mémoire + présentation PowerPoint + résumé — tout en un pour votre soutenance.', features:['Mémoire mis en page','PPT de soutenance','Résumé 1 page','Révisions incluses','Priorité livraison'], cta:'Commander' },
      kab:{ title:'Pack Aɣersif', desc:'Amezwaru + PowerPoint + Aẓarug — akk deg yiwen i tmenɣiwt-ik.', features:['Amezwaru yettwanulfan','PPT n tmenɣiwt','Aẓarug 1 isefra','Timesmuzgit','Tazwara deg tewwurt'], cta:'Amḍel' },
    },
  ],
};

export default function Pricing() {
  const { lang, t } = useLang();
  const p = t.pricing;
  const [activeTab, setActiveTab] = useState(0);

  const tabKeys = ['Design', 'Sites Web', 'Étudiants'];
  const currentKey = tabKeys[activeTab];
  const plans = PRICING_DATA[currentKey];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing__header">
          <div className="badge badge-blue">{p.badge}</div>
          <h2 className="section-title">{p.title1} <span className="text-gradient">{p.title2}</span></h2>
          <p className="section-sub">{p.sub}</p>
        </div>

        <div className="pricing__tabs">
          {p.tabs.map((tab, i) => (
            <button
              key={tab}
              className={`pricing__tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => {
            const data = plan[lang] || plan.fr;
            return (
              <div key={i} className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}>
                {plan.popular && <div className="pricing__popular-badge">{p.recommended}</div>}
                {plan.tag && !plan.popular && <div className="pricing__tag">{plan.tag}</div>}
                <div className="pricing__emoji">{plan.emoji}</div>
                <h3 className="pricing__plan-title">{data.title}</h3>
                <p className="pricing__plan-desc">{data.desc}</p>
                <div className="pricing__price">
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__currency">{plan.unit}</span>
                </div>
                <ul className="pricing__features">
                  {data.features.map((f, j) => (
                    <li key={j}><span className="pricing__check">✓</span>{f}</li>
                  ))}
                </ul>
                <a
                  href={waLink(t.contact.waMessagePrefix + data.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} pricing__btn`}
                >
                  {data.cta} →
                </a>
              </div>
            );
          })}
        </div>

        <div className="pricing__note">
          <div className="pricing__note-icon">{p.noteIcon}</div>
          <div>
            <strong>{p.noteBold}</strong> {p.noteText}
          </div>
        </div>
      </div>
    </section>
  );
}
