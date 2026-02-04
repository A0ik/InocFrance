# Structure du Projet Innocents France

Ce document détaille l'architecture technique, la structure des dossiers et le rôle de chaque composant du site internet **Innocents France**.

## 1. Vue d'Ensemble Technologies
Le projet est une application web moderne et performante construite avec les technologies suivantes :
- **Framework** : [Next.js 16](https://nextjs.org/) (App Router) pour le rendu et le routage.
- **Langage** : [TypeScript](https://www.typescriptlang.org/) pour la sécurité du typage.
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/) pour le design utilitaire.
- **Composants UI** : [Shadcn UI](https://ui.shadcn.com/) (base de composants) + [Framer Motion](https://www.framer.com/motion/) (animations fluides).
- **Icônes** : [Lucide React](https://lucide.dev/).

## 2. Arborescence Principale
Voici les dossiers clés à la racine `src/` :

- **`src/app`** : Cœur de l'application (App Router). Chaque dossier correspond à une route (URL) du site.
- **`src/components`** : Contient tous les éléments d'interface réutilisables.
    - **`src/components/ui`** : Composants atomiques (boutons, cartes, inputs) et composants complexes.
- **`src/lib`** : Fonctions utilitaires (ex: gestion des classes CSS).
- **`public`** : Fichiers statiques accessibles publiquement (images, vidéos, favicon).

## 3. Analyse des Composants (`src/components/ui`)
Les composants suivants constituent les briques visuelles du site :

| Composant | Fichier Source | Description |
| :--- | :--- | :--- |
| **NavBar** | `tubelight-navbar.tsx` | Barre de navigation principale avec un effet visuel "néon" (tubelight) pour l'indicateur de page active. |
| **ProfessionalHero** | `professional-hero.tsx` | NOUVEAU Hero professionnel. Affiche un titre impactant, un visuel de fond et des boutons d'actions clairs (Don, Découverte). Remplace l'ancien système de scroll-expand. |
| **ScrollReveal** | `scroll-reveal.tsx` | Composant conteneur ("wrapper") qui anime l'apparition de ses enfants lors du scroll (fade-in + slide-up). Utilisé globalement sur la page d'accueil. |
| **ScrollVelocity** | `scroll-velocity.tsx` | Bandeau de texte animé qui défile horizontalement en boucle (utilisé pour afficher les valeurs "Espoir • Solidarité..."). La vitesse s'adapte au scroll. |
| **CountryCard** | `country-card.tsx` | Carte standardisée utilisée pour présenter les actions dans chaque pays (Image + Nom + Description courte). Assure la cohérence visuelle de la section "Nos Actions". |
| **PageNotFound** | `page-not-found.tsx` | Composant d'erreur affiché lorsque l'utilisateur accède à une page inexistante (404). |

## 4. Analyse des Pages (`src/app`)
Chaque fichier `page.tsx` représente une vue accessible par l'utilisateur.

### **`/` (Page d'Accueil)** - `src/app/page.tsx`
C'est la vitrine principale du site. Elle est structurée en plusieurs sections logiques, presque toutes animées via `ScrollReveal` :
1.  **Professional Hero** : Première impression forte avec un grand visuel et appel à l'action immédiat.
2.  **Boutons d'Action** : Section dédiée aux actions rapides (Don, Parrainage) juste après le hero.
3.  **Valeurs** : Bandeau défilant (*ScrollVelocity*).
4.  **Vidéo Immersion** : Une section pleine largeur jouant une vidéo de présentation, placée juste avant les actions terrain.
5.  **Nos Actions Terrain** : Grille de cartes (*CountryCard*) présentant les interventions par pays.
6.  **Programme Parrainage** : Section mise en avant avec le fond textuel "INNOCENTS".
7.  **Autres Projets** : Présentation des projets ponctuels (Colis, Puits, Don).
8.  **Impact** : Compteurs animés montrant les réalisations.

### **Pages Secondaires**
Ces dossiers contiennent les pages spécifiques aux projets (structure similaire à l'accueil mais focalisée) :
- **`/parrainage`** : Détails complets sur le programme de parrainage.
- **`/colis`** : Informations sur les distributions de colis alimentaires.
- **`/puits`** : Informations sur la construction de puits.
- **`/don`** : Page dédiée aux dons ponctuels.
- **`/apropos`** : Prés presentation de l'association et de l'équipe.
- **`/contact`** : Formulaire de contact.

### **Fichiers Globaux**
- **`layout.tsx`** : Définit le squelette commun à toutes les pages (HTML, Body). Il charge la police **Outfit** et inclut la **NavBar** pour qu'elle soit visible partout.
- **`globals.css`** : Contient les styles globaux, les variables de couleurs (Primary: Bleu, Secondary: etc.) et la configuration de Tailwind.

## 5. Cohérence et Architecture
Le projet respecte une architecture **modulaire**.
- **Séparation des responsabilités** : Le layout gère la structure globale, les pages gèrent le contenu spécifique, et les composants gèrent l'interface UI.
- **Données** : Actuellement, les contenus (textes, listes de pays) sont définis de manière statique dans les fichiers (ex: tableau `countries` dans `page.tsx`). Cela garantit des performances maximales pour un site vitrine sans base de données complexe.
