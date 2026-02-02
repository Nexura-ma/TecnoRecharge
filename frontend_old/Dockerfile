# /frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port du frontend (Vite utilise 5173 par défaut)
EXPOSE 5173

# Démarrer l’application avec l’hôte 0.0.0.0 pour l’accès Docker
CMD ["npm", "run", "dev", "--", "--host"]
