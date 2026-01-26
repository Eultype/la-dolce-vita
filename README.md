# 🍝 La Dolce Vita | Gastronomie Italienne d'Exception

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-6633FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Une vitrine digitale de prestige pour un établissement italien authentique.** Alliant une esthétique luxueuse à une architecture logicielle moderne, ce projet repousse les limites du site vitrine traditionnel pour offrir une véritable application web immersive.

---

## 🌟 Expérience Utilisateur (UX/UI)

### 💎 Esthétique Premium
- **Direction Artistique** : Palette chaleureuse (Terracotta, Or Antique, Crème) évoquant les terroirs de Toscane.
- **Micro-interactions** : Animations subtiles au survol et révélations progressives pour une sensation de raffinement constant.
- **Fluidité Totale** : Smooth scroll via **Lenis** pour une navigation sans saccades.

### 🍷 Réservation Immersive
- **Workflow Step-by-Step** : Un tunnel de réservation ludique et sans friction (Wizard UI).
- **Live Summary** : Un ticket récapitulatif dynamique qui suit l'utilisateur dans son parcours.
- **Validation Zod** : Sécurité et intégrité des données garanties à chaque étape.

---

## 🚀 Performance & SEO

### 🏗️ Architecture Senior
- **Next.js 16 & Server Components (RSC)** : Pages optimisées pour un rendu serveur ultra-rapide et un poids JavaScript réduit au strict minimum.
- **Colocation Pattern** : Organisation modulaire par page avec composants privés (`_components`) pour une maintenabilité maximale.
- **Custom Hooks** : Isolation de la logique métier (ex: `useReservation`) pour un code testable et réutilisable.

### 📈 SEO de Pointe
- **Données Structurées JSON-LD** : Balisage Schema.org (Restaurant) pour des résultats enrichis sur Google (Rich Snippets).
- **Metadata Dynamiques** : Titres et descriptions optimisés par page pour un meilleur taux de clic (CTR).
- **Accessibilité** : Score Lighthouse élevé grâce à une hiérarchie sémantique stricte (H1-H3) et des labels ARIA complets.

---

## 🛠️ Stack Technique

- **Core** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4 (Configuration moderne via variables CSS natives)
- **Animations** : Framer Motion
- **Validation** : Zod & React Hook Form
- **Fonts** : Google Fonts via `next/font` (Playfair Display & Inter)

---

## 🏗️ Structure du Projet

```text
src/
 ├── app/               # Routes (Server Components par défaut)
 │    └── [page]/
 │         └── _components/  # Composants atomiques spécifiques à la page
 ├── components/
 │    ├── layout/       # Navbar, Footer, SmoothScroll
 │    └── ui/           # Bibliothèque de composants réutilisables (Shadcn style)
 ├── hooks/             # Hooks personnalisés (Logique métier isolée)
 ├── lib/               # Validation (Zod) et Utilitaires (cn)
 ├── data/              # Source de vérité (Prêt pour intégration CMS)
 └── types/             # Typage TypeScript global
```

---

## 🚀 Lancement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/votre-username/la-dolce-vita.git
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
4. **Build pour la production**
   ```bash
   npm run build
   ```

---

*Développé avec passion pour l'excellence culinaire et technologique.*