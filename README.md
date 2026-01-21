# AUB-1-24 Group Portfolio

Production-ready Next.js 14+ portfolio for **Osh State University**, **MFTIT Institute**, and the **Department of Applied Informatics and Information Security (PIiIB)**. The project includes a public website, student profiles, dashboards, and an admin panel, powered by Supabase.

## ✨ Features

- Public pages: Home, Students, Student Profile, News, Trips & Events
- Student dashboard with profile editing, skills, and privacy toggles
- Admin panel for managing students, news, trips, and media
- Supabase authentication + PostgreSQL storage
- Tailwind CSS + shadcn/ui-style components
- React Hook Form + Zod validation
- SEO, responsive design, and accessible UI patterns

---

## 📁 Folder Structure

```
app/
  layout.tsx
  page.tsx
  students/
  news/
  trips/
  dashboard/
  admin/
  auth/login/
components/
  site-header.tsx
  site-footer.tsx
  ui/
lib/
  data.ts
  supabaseClient.ts
  supabaseServer.ts
  utils.ts
supabase/
  schema.sql
  seed.sql
middleware.ts
```

---

## ✅ Setup Guide

### 1) Create a Supabase project
- Go to https://supabase.com and create a new project.
- Save your **Project URL** and **Anon Key**.

### 2) Configure Environment Variables
Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3) Apply SQL Schema + RLS Policies
Run the SQL in `supabase/schema.sql` in the Supabase SQL Editor.

### 4) (Optional) Seed Demo Content
Run `supabase/seed.sql` in the Supabase SQL Editor.

### 5) Storage Buckets
Create buckets in Supabase Storage:

- `avatars` (public read, write by owner/admin)
- `trip-media` (public read, write by admin only)

### 6) Install Dependencies

```
npm install
```

### 7) Run Locally

```
npm run dev
```

---

## 🔐 Supabase Policies (Overview)

- **profiles**: public read, owner update
- **projects**: public read, owner CRUD
- **posts**: public read only if published, admin CRUD
- **trips**: public read only if published, admin CRUD
- **trip_media**: public read if parent trip is published, admin CRUD

Details are defined in `supabase/schema.sql`.

---

## ✅ Testing Checklist

- [ ] Home page loads and sections appear
- [ ] Students list and profile pages render
- [ ] News and Trips pages show demo content
- [ ] Login form loads and redirect works
- [ ] Dashboard form validates and calls server action
- [ ] Admin panel loads and submits news form
- [ ] Supabase RLS policies enforce access control

---

## 🚀 Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to https://vercel.com and import the repo.
3. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.

---

## ℹ️ Notes

- Admin role can be set via Supabase JWT custom claims.
- `middleware.ts` protects `/dashboard` and `/admin` routes.
- Replace demo content in `lib/data.ts` with real Supabase queries as needed.

---

**AUB-1-24** — Osh State University · MFTIT Institute · PIiIB Department
