# Project Context: Digital E-commerce Web App

## Overview
This is a B2C e-commerce platform designed for selling digital products such as mobile top-ups, video game codes, and gift cards. The project features a modern, responsive frontend and a robust modular backend, orchestrated via Docker.

**Key Technologies:**
- **Frontend:** React 19, Vite, Tailwind CSS 4, React Router 7
- **Backend:** NestJS (TypeScript)
- **Database:** PostgreSQL (via Docker)
- **Infrastructure:** Docker & Docker Compose

## Jira Integration
- **Project Key:** `DGC` (Digital eCommerce)

## Architecture

### Frontend (`/frontend`)
- **Type:** Single Page Application (SPA)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM

### Backend (`/backend`)
- **Framework:** NestJS
- **Language:** TypeScript
- **Structure:** Standard NestJS modular architecture (Modules, Controllers, Services).
- **Testing:** Jest (Unit & E2E)

### Infrastructure
- **Orchestration:** `docker-compose.yml` manages the `postgres`, `backend`, and `frontend` services.
- **Database:** PostgreSQL container is configured with persistent volume `postgres_data`.

## Development Workflow

### System Environment
- **OS:** Microsoft Windows 11 Pro 64-bit
- **Shell:** PowerShell. **CRITICAL:** Use `;` for command chaining, NOT `&&`.

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose
- npm

### Quick Start (Docker)
The recommended way to run the full stack is via Docker Compose:
```bash
docker-compose up --build
```
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000
- **Database:** Port 5432

### Local Development (Manual)

#### Backend
```bash
cd backend
npm install
npm run start:dev   # Watch mode
npm run test        # Unit tests
npm run test:e2e    # E2E tests
```

#### Frontend
```bash
cd frontend
npm install
npm run dev         # Start dev server
npm run build       # Build for production
```

## Project Status & Roadmap
- **Phase 1 (MVP - Current):** Structure, UI/UX, Database setup, Basic Admin Panel.
- **Phase 2 (Release):** API integration (suppliers), Real payments, Automated delivery.

**Current Task Focus:**
- Implementation of MVP features (Product Catalog, Auth, Cart, User Dashboard).
- Database schema setup in Backend (Prisma/TypeORM pending integration).

## Conventions
- **Code Style:** Prettier and ESLint are configured. Run `npm run lint` or `npm run format` (backend) to enforce.
- **Git:** No explicit commit convention mentioned, but standard semantic commits recommended.
- **Environment:**
    - Backend: `JWT_SECRET` and DB credentials are currently hardcoded in `docker-compose.yml` for dev.
    - Frontend: `VITE_API_URL` defaults to `http://localhost:3000`.

## Automated Development Protocol
When instructed to "start working" or "resume work", follow this strict cycle:

1.  **Identify Active Task:**
    *   Query Jira for the issue assigned to the current user with status `In Progress`.
    *   Command: `jira issue list -p DGC -s "In Progress" -q "assignee = currentUser()" --plain`

2.  **Plan via Sub-tasks:**
    *   List all **Sub-tasks** linked to this parent issue.
    *   Command: `jira issue view [KEY]`
    *   Process them strictly sequentially.

3.  **Execution Loop (Per Sub-task):**
    *   **Start:** Transition the sub-task in Jira to `In Progress`.
    *   **Implement:** Perform the necessary code changes.
    *   **Verify:** Run relevant tests or build commands to ensure stability.
    *   **Submit for Review:** Transition the sub-task in Jira to `In Review`.
    *   **Review:** **STOP** and present the work to the user for validation.
    *   **Validation & Commit:** *Only* after receiving user approval:
        1.  Commit the changes: `git commit -m "feat: <sub-task summary> (<sub-task key>)"`
        2.  Transition the sub-task in Jira to `Done`.
    *   **Next:** Proceed to the next sub-task only after the current one is `Done`.