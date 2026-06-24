# Quzar Agency

Premium AI & Full-Stack agency website — monorepo with separate frontend and backend packages.

```
quzar-agency/
├── frontend/     ← Next.js 15 App Router (UI)
├── backend/      ← Express API server (Firebase Admin, REST API)
├── firebase.json       ← Firebase project config
└── firestore.rules     ← Firestore security rules
```

---

## Getting Started

### Frontend (Next.js)

```bash
cd frontend
cp .env.local.example .env.local   # set NEXT_PUBLIC_API_URL
npm install
npm run dev                         # http://localhost:3000
```

### Backend (Express)

```bash
cd backend
cp .env.example .env               # add Firebase credentials
npm install
npm run dev                        # http://localhost:4000
```

> **Firebase Admin credentials**: Download your service account JSON from Firebase Console → Project Settings → Service Accounts, save it as `backend/service-account.json`, and set `GOOGLE_APPLICATION_CREDENTIALS=./service-account.json` in `backend/.env`.

---

## Scripts

| Command | Directory | Action |
|---------|-----------|--------|
| `npm run dev` | `frontend/` | Next.js dev server |
| `npm run build` | `frontend/` | Next.js production build |
| `npm run dev` | `backend/` | Express dev server (tsx watch) |
| `npm run build` | `backend/` | Bundle server with esbuild |
| `npm start` | `backend/` | Run production build |

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Server health check |
| POST | `/api/contact` | Submit contact form (saved to Firestore) |

---

## Tech Stack

**Frontend**: Next.js 15, React 19, Tailwind CSS v4, Framer Motion, Lucide  
**Backend**: Express 4, Firebase Admin SDK, Zod, esbuild, tsx  
**Database**: Firestore (via Firebase)  
**Deploy**: Vercel (frontend) + any Node.js host (backend)

---

## Detailed Documentation

Detailed functional documentation is maintained locally in the `docs/` folder (which is gitignored to avoid checking private documentation patterns into repository tracking). You can view the specific guides below:

*   [Project Overview](file:///c:/Users/Parth/Downloads/quzar-agency/docs/01-project-overview.md)
*   [Frontend Architecture](file:///c:/Users/Parth/Downloads/quzar-agency/docs/02-frontend-architecture.md)
*   [Backend Architecture](file:///c:/Users/Parth/Downloads/quzar-agency/docs/03-backend-architecture.md)
*   [Firebase Integration & Security Rules](file:///c:/Users/Parth/Downloads/quzar-agency/docs/04-firebase.md)
*   [API Reference](file:///c:/Users/Parth/Downloads/quzar-agency/docs/05-api-reference.md)
*   [Data Models & Schemas](file:///c:/Users/Parth/Downloads/quzar-agency/docs/06-data-models.md)
*   [Environment Setup](file:///c:/Users/Parth/Downloads/quzar-agency/docs/07-environment-setup.md)
*   [Deployment Guide](file:///c:/Users/Parth/Downloads/quzar-agency/docs/08-deployment.md)

