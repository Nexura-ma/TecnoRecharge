# Plateforme E-commerce de Produits Digitaux

Une plateforme e-commerce B2C dédiée à la vente internationale de recharges mobiles et de codes digitaux (Jeux Vidéo, Cartes Cadeaux).

## 🚀 Présentation

Ce projet est une application web moderne et responsive conçue pour la vente de produits numériques. Elle s'appuie sur un backend NestJS robuste et un frontend React dynamique, le tout orchestré avec Docker pour un développement et un déploiement fluides.

## 🛠️ Stack Technique

### Frontend
- **Framework :** [React 19](https://react.dev/)
- **Outil de Build :** [Vite](https://vitejs.dev/)
- **Stylisation :** [Tailwind CSS 4](https://tailwindcss.com/)
- **Routage :** [React Router 7](https://reactrouter.com/)

### Backend
- **Framework :** [NestJS](https://nestjs.com/)
- **Langage :** TypeScript
- **Architecture :** Modulaire, suivant les meilleures pratiques NestJS.

### Infrastructure & DevOps
- **Conteneurisation :** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- **Base de données :** PostgreSQL (Prévu)

## 📁 Structure du Projet

```text
.
├── backend/            # Application NestJS
├── frontend/           # Application React (Vite + Tailwind)
├── docker-compose.yml  # Configuration Docker
└── Project-Specifications.md # Cahier des charges détaillé (FR)
```

## 🚦 Mise en Route

### Prérequis
- Node.js (v18+)
- Docker & Docker Compose
- npm ou yarn

### Installation & Développement

#### 1. Cloner le dépôt
```bash
git clone <repository-url>
cd Digital-Ecommerce/Web-App
```

#### 2. Lancer avec Docker (Recommandé)
```bash
docker-compose up --build
```
Cela démarrera simultanément les services frontend et backend.

#### 3. Développement Local

**Backend :**
```bash
cd backend
npm install
npm run start:dev
```

**Frontend :**
```bash
cd frontend
npm install
npm run dev
```

## 📝 Fonctionnalités (Phase MVP)
- **Catalogue de Produits :** Affichage en grille avec filtres par catégorie.
- **Authentification :** Inscription, Connexion et Réinitialisation de mot de passe.
- **Panier :** Ajout/Suppression de produits et récapitulatif de commande.
- **Espace Client :** Historique des commandes et gestion du profil.
- **Panel Admin :** CRUD des produits et gestion des utilisateurs.

## 📄 Documentation
Pour des spécifications fonctionnelles et techniques détaillées, veuillez consulter le [Project-Specifications.md](./Project-Specifications.md).

## 📄 Licence
Ce projet est sous licence UNLICENSED.