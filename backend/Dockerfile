# /backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le schéma Prisma
COPY prisma ./prisma/

# Générer le client Prisma
RUN npx prisma generate

# Copier le reste du code de l’application
COPY . .

# Exposer le port de l’API
EXPOSE 3000

# Générer le client Prisma au démarrage (pour s'assurer qu'il est présent avec les volumes) et démarrer l’application
CMD npx prisma generate && npm run start:dev
