# Createch — Site Freelance

Site web moderne pour freelance créative, construit avec React.

## 🚀 Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm start

# 3. Builder pour la production
npm run build
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx / .css     → Barre de navigation fixe
│   └── Footer.jsx / .css     → Pied de page
├── sections/
│   ├── Hero.jsx / .css       → Section d'accueil
│   ├── Services.jsx / .css   → Présentation des services
│   ├── Portfolio.jsx / .css  → Galerie de réalisations (4 cartes, 3 posters, 3 sites)
│   ├── Pricing.jsx / .css    → Tarifs en DA (Design, Sites Web, Étudiants)
│   ├── Students.jsx / .css   → Services étudiants
│   └── Contact.jsx / .css    → Contact (redirection WhatsApp, plus de formulaire ni de backend)
├── App.jsx / .css
└── index.js / .css
```

## ✏️ Personnalisation rapide

### Modifier vos informations de contact
→ `src/config.js` : numéro WhatsApp (utilisé partout : bouton flottant, footer, contact, boutons « Commander »)
→ `src/i18n/translations.js` : email affiché

### Modifier les tarifs
→ `src/sections/Pricing.jsx` : tableau `PRICING` — changer les `price` selon vos tarifs

### Ajouter vos vraies réalisations
→ `src/sections/Portfolio.jsx` : modifier le tableau `PROJECTS`

### Changer les couleurs principales
→ `src/index.css` : variables CSS dans `:root {}`

## 💰 Tarifs inclus (en DA)

| Service | Prix |
|---|---|
| Carte visite simple | 1 500 DA |
| Carte visite R/V | 2 500 DA |
| Pack 3 cartes | 6 000 DA |
| Poster / Flyer | 2 000 DA |
| Site Starter (1–3 pages) | 15 000 DA |
| Site Pro (jusqu'à 5 pages) | 25 000 DA |
| Modernisation site | 18 000 DA |
| Exposé / Rapport | 800 DA |
| Présentation PPT | 1 200 DA |
| Mémoire / Thèse | 3 500 DA |
| Pack Étudiant complet | 4 500 DA |

## 📦 Portfolio inclus

**Sites Web :** La Bella Pizza | Cabinet Médical | Atelier Moda  
**Cartes Visites :** Coach Business | Photographe | Architecte | Pâtisserie  
**Posters :** Eid Mubarak | Formation Marketing | Soldes Boutique  

---

Fait avec ❤️ pour **Createch** 🇩🇿
