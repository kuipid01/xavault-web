# Xavault Web

Marketing frontend and application foundation for Xavault, built with Next.js 16, TypeScript, Tailwind CSS 4, and TanStack Query.

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000). Set `NEXT_PUBLIC_API_URL` to the salary-vault API origin (the local default is `http://localhost:8080`).

## Commands

- `npm run dev` — local development
- `npm run lint` — ESLint checks
- `npm run build` — production build and TypeScript validation

The shared API client lives in `src/lib/api`, and the TanStack Query provider is mounted in `src/app/providers.tsx`.
# xavault-web
