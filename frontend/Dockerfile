FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port 5173
EXPOSE 5173

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
