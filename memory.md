"# PRD - Mémoire de la Déportation (CNRD)

## Contexte
Site web créé pour le **Concours National de la Résistance et de la Déportation** (CNRD 2025) en hommage aux résistants et déportés qui ont combattu pour la liberté.

## Source
- **Repo GitHub original**: https://github.com/axellongatte5-hue/CNRD.git
- **Date de migration**: 20 janvier 2026

## Bugs corrigés
1. ✅ Fichiers de configuration corrompus (guillemets parasites dans vite.config.ts, tsconfig.json, index.css, app.tsx, CartePage.jsx)
2. ✅ Fichiers manquants référencés (HomePage, PersonnagesPage, CampsPage, etc.)
3. ✅ Configuration Tailwind incorrecte (tailwind.config.json → tailwind.config.js)
4. ✅ Dépendances manquantes (react-leaflet, leaflet)
5. ✅ Imports avec casse incorrecte
6. ✅ Composants Next.js incompatibles avec React CRA (Image de next/image)

## Architecture technique
- **Frontend**: React 19 + Tailwind CSS
- **Carte interactive**: Leaflet + react-leaflet
- **Routing**: react-router-dom v7

## Fonctionnalités implémentées

### Pages principales
- ✅ **Accueil** - Hero section, aperçu des personnages et camps
- ✅ **Personnages** - Liste des 6 résistants/déportés
- ✅ **Camps** - Liste des 7 camps par catégorie
- ✅ **Carte interactive** - Visualisation géographique avec Leaflet

### Pages de personnages (6)
- ✅ Raphaël Feigelson (1926-2021) - Auschwitz
- ✅ Jaime Nieto López (1913-1951) - Buchenwald
- ✅ Robert Bouteille (1904-?) - Buchenwald
- ✅ Georges Séguy (1927-2016) - Mauthausen
- ✅ Suzanne Lestage - Ravensbrück/Mauthausen
- ✅ Yves Rolland - Neuengamme

### Pages de camps (7)
- ✅ Auschwitz-Birkenau (Extermination)
- ✅ Buchenwald (Concentration)
- ✅ Mauthausen (Concentration)
- ✅ Ravensbrück (Concentration)
- ✅ Neuengamme (Concentration)
- ✅ Drancy (Transit)
- ✅ Compiègne-Royallieu (Transit)

### Carte interactive
- ✅ Affichage des camps avec markers colorés par type
- ✅ Parcours de déportation (lignes pointillées)
- ✅ Sélection de personnages pour voir leurs trajets
- ✅ Filtres (personnages, camps, parcours)
- ✅ Légende complète
- ✅ Popups informatifs

## Tests effectués
- ✅ Navigation entre toutes les pages
- ✅ Affichage de tous les personnages et camps
- ✅ Carte interactive fonctionnelle
- ✅ Liens retour fonctionnels
- ✅ Aucune erreur JavaScript

## Prêt pour le déploiement
Le site est prêt pour le déploiement. Aucun changement supplémentaire n'est nécessaire.

## Améliorations possibles (P2)
- Ajouter des photos historiques des personnages
- Timeline interactive globale
- Mode offline avec Service Worker
- Version anglaise du site
"
