# User Management Dashboard

A bilingual (Arabic/English) dashboard for managing users: create, view, update, and delete, with dark mode and clear feedback alerts.

**Live demo:** https://user-management-dashboard.webcraft-labs.workers.dev/

## Features
- Full CRUD for users with forms and a responsive table
- Arabic/English support (next-intl)
- Dark mode (next-themes)
- Success and error alerts (Sonner, SweetAlert2)
- Loading and not-found pages

## Tech Stack
Next.js · React · TypeScript · Tailwind CSS · TanStack Query · Axios · next-intl · Cloudflare Workers (OpenNext)

## How Data Fetching Works
Reusable `useApiQuery` and `useApiMutation` hooks wrap TanStack Query and Axios, so every request shares the same caching, error handling, and cache updates.

## Project Structure
```
src/
├── app/            # Routes (App Router)
├── modules/users/  # api, hooks, components, types, utils
├── shared/         # atoms, molecules, organisms, shared hooks
├── services/       # Axios setup
├── i18n/ messages/ # Translations
└── providers/      # Query, theme, and intl providers
```

## Getting Started
```bash
npm install
# add NEXT_PUBLIC_API_URL to .env.local
npm run dev
```

Other scripts: `npm run lint`, `npm run type-check`, `npm run build`

## What I Learned
- Building generic, typed hooks on top of TanStack Query
- Organizing a Next.js app with Atomic Design and feature modules
- Deploying a Next.js app to Cloudflare Workers
