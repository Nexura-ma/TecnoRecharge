Cahier des Charges Technique et Fonctionnel

Plateforme de Vente de Recharges Mobiles et Codes Digitaux

Version : 1.0
Date : 13 Janvier 2026
Statut : Document de référence pour développement

1. Présentation du Projet

1.1 Contexte

Le projet consiste à développer une plateforme web e-commerce B2C dédiée à la vente internationale de recharges mobiles (Top-up) et de codes digitaux (Jeux vidéo, Cartes cadeaux). La priorité est donnée à la version Web (Desktop/Mobile), avec une architecture backend prête à accueillir de futures applications mobiles natives.

1.2 Objectifs Principaux

Fournir une interface utilisateur (UI) moderne, rassurante et fluide.

Automatiser la livraison des produits via des connexions API fournisseurs.

Assurer une gestion multilingue (FR, EN, ES).

Garantir la sécurité des transactions et des données utilisateurs.

2. Architecture Technique (Tech Stack)

2.1 Frontend (Interface Utilisateur)

Framework : React.js (Single Page Application).

Styling : Tailwind CSS (pour un design responsive et rapide).

Internationalisation : i18n (gestion des traductions JSON).

État (State Management) : Context API ou Redux (selon complexité).

Communication : Axios ou React Query pour les appels API Backend.

2.2 Backend (Logique Serveur)

Framework : NestJS (Node.js framework robuste et modulaire).

Authentification : JWT (JSON Web Tokens) \& Passport.js.

Sécurité MDP : Bcrypt pour le hachage.

Validation : DTOs (Data Transfer Objects) et Class-Validator.

2.3 Base de Données

SGBD : PostgreSQL.

ORM : Prisma ou TypeORM (pour l'interaction avec NestJS).

2.4 Infrastructure \& DevOps

Conteneurisation : Docker (pour l'environnement de développement et production).

Versionning : GitHub.

Environnement : Staging (Phase 1) et Production (Phase 2).

3. Spécifications Fonctionnelles - Phase 1 (MVP)

Durée estimée : 6 semaines
Objectif : Structure, UI/UX, Base de données, Admin Panel de base (Sans paiement réel ni API fournisseur).

3.1 Module Frontend (Utilisateur)

Page d'accueil (Landing Page) :

Mise en avant des catégories (Recharge Mobile, PlayStation, Xbox, etc.).

Bandeau promotionnel / Hero section.

Sélecteur de langue (FR/EN/ES).

Catalogue Produits :

Affichage des grilles de produits.

Filtres par catégorie, pays, opérateur.

Fiche produit détaillée (Description, Prix, Image).

Authentification :

Inscription (Email, MDP, Nom).

Connexion.

Mot de passe oublié (Email de reset simulé).

Panier \& Tunnel d'achat (Simulation) :

Ajout/Suppression de produits.

Récapitulatif de commande.

Page de paiement (Interface UI uniquement, pas de processeur réel).

Espace Client :

Tableau de bord personnel.

Historique des commandes (Affichage des statuts : En attente, Complété).

Gestion du profil (Changement MDP).

3.2 Module Back-office (Admin MVP)

Dashboard : Vue d'ensemble (KPIs fictifs pour l'instant).

Gestion des Produits (CRUD) :

Ajouter/Modifier/Supprimer un produit manuellement.

Définition des prix et images.

Gestion des Utilisateurs : Liste des inscrits, détails.

Gestion des Commandes :

Voir les commandes passées.

Changer manuellement le statut d'une commande (ex: passer de "En attente" à "Livré" pour tester le flux).

3.3 Backend \& Base de Données (Structure)

Mise en place de l'architecture NestJS.

Création des tables PostgreSQL (Users, Products, Orders, Categories).

Sécurisation des endpoints API via Guards (JWT).

4. Spécifications Fonctionnelles - Phase 2 (Release)

Durée estimée : 6 semaines
Objectif : Automatisation complète, Paiement réel, Connexion APIs fournisseurs.

4.1 Intégration APIs Fournisseurs

Synchronisation Catalogue : Script pour importer/mettre à jour les produits depuis les 2 fournisseurs.

Commande Fournisseur :

Lors d'un achat client validé, le backend appelle l'API fournisseur.

Récupération du code PIN ou confirmation de la recharge mobile (Direct Top-up).

Gestion des stocks/disponibilité : Vérification en temps réel avant paiement.

4.2 Paiement \& Transactions

Intégration PSP (Payment Service Provider) : Stripe, PayPal ou autre (selon choix client).

Webhooks : Écoute des confirmations de paiement pour déclencher la livraison.

Facturation : Génération automatique de facture PDF.

4.3 Livraison Automatique

Codes Digitaux :

Affichage immédiat dans la page de confirmation ("Thank You Page").

Envoi par email (Template HTML transactionnel).

Archivage dans l'Espace Client.

Recharge Mobile :

Envoi de la requête de crédit à l'opérateur via API.

Confirmation par SMS (via API fournisseur ou Twilio si nécessaire).

4.4 Back-office Avancé

Gestion des Marges : Définir un % de marge par catégorie ou produit sur le prix fournisseur.

Logs API : Historique des appels fournisseurs (Succès/Echecs) pour débogage.

Remboursement : Bouton pour rembourser une transaction échouée.

4.5 SEO \& Performance

Optimisation des balises Meta dynamiques (Helmet).

Sitemap.xml et Robots.txt.

Optimisation du chargement des images (Lazy loading, WebP).

5. Modèle de Données (Schéma simplifié)

Pour aider au développement Backend/DB :

Users : id (UUID), email, password\_hash, role (USER/ADMIN), created\_at.

Categories : id, name\_fr, name\_en, name\_es, slug, image\_url.

Products : id, provider\_ref\_id (lien API), category\_id, name, price\_buy (prix achat), price\_sell (prix vente), currency, type (PIN/TOPUP).

Orders : id, user\_id, status (PENDING/PAID/DELIVERED/FAILED), total\_amount, payment\_method.

OrderItems : id, order\_id, product\_id, delivered\_code (crypté), price\_at\_purchase.

ApiLogs : id, endpoint, request\_payload, response\_payload, status\_code (pour le suivi des erreurs fournisseurs).

6. Sécurité \& Normes

Données Sensibles : Les mots de passe ne sont jamais stockés en clair. Les clés API fournisseurs sont stockées dans des variables d'environnement (.env) et jamais commitées sur GitHub.

Protection API : Rate Limiting pour éviter les attaques brute-force sur le login.

HTTPS : Obligatoire pour toutes les communications (SSL).

RGPD : Case à cocher pour la politique de confidentialité à l'inscription.

7. Évolutions Futures (Hors périmètre actuel)

Application Mobile (Android/iOS) consommant la même API NestJS.

