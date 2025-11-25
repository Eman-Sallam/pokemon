# Pokémon 🧭

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://pokescope.vercel.app/)

A modern, type-safe Pokémon browser built with **Next.js v16**, **React**, **TypeScript**, **Tailwind CSS**, **React Query**, and **DaisyUI**. Explore Pokémon using both pagination and "Load More" view, with animated UI, error boundaries, and suspense fallback.

---

## ⚙️ Tech Stack

- **Next.js v16** – React framework with App Router for server-side rendering and optimized performance
- **React 19** – Latest React with modern features
- **TypeScript** – Type-safe development for better reliability
- **Tailwind CSS** + **DaisyUI** – Utility-first CSS with beautiful UI components
- **Heroicons** – SVG icon library
- **App Router** – Next.js file-based routing with server and client components
- **React Query (TanStack)** – For efficient data fetching and caching
- **Axios** – HTTP client for working with REST APIs
- **Error Boundaries** – Graceful runtime error handling
- **PokeAPI** –

  - Open-source Pokémon API
  - Used to fetch Pokémon data (listing, details)
  - Docs: [https://pokeapi.co](https://pokeapi.co)

- **Vercel** –
  - Deployment platform with automatic builds and previews
  - CDN-backed hosting
  - Live deployment: [https://pokescope.vercel.app/](https://pokescope.vercel.app/)

---

## 🚀 Features

- ⚡ Explore Pokémon with Pagination & Load More Views
- 🔍 Pokémon Detail Pages with stats, abilities, types
- 🪄 Skeleton Loaders & Pokémon Spinners & Image Placeholder for better UX
- 💥 Catch runtime crashes and provide fallback UI with retry options with Error Boundaries
- ❌ Graceful 404 Page for unmatched routes
- ❓ Pokémon Not Found handling for invalid Pokémon IDs
- 📱 Responsive Design
- 🎯 Type-safe API handling with `axios` + `react-query`
- 🧭 File-based routing with Next.js App Router
- ⚡ Server-side rendering and optimized performance
- 🎨 Image optimization with Next.js Image component support

---

## 📦 Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Eman-Sallam/pokemon/
cd pokemon

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 🏗️ Project Structure

```
pokemon/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page (redirects to pagination)
│   │   ├── pagination/
│   │   │   └── [page]/
│   │   │       └── page.tsx    # Pagination view
│   │   ├── load-more-listing/
│   │   │   └── page.tsx        # Load more view
│   │   ├── pokemon/
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Pokémon detail page
│   │   └── not-found.tsx        # 404 page
│   ├── components/             # React components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and API client
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Helper functions
├── public/                     # Static assets
└── package.json
```

---

## 🛠️ Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

---

## 📝 Notes

- Built with Next.js v16 App Router for optimal performance
- Uses React Server Components where possible
- Client components are marked with `'use client'` directive
- Image optimization configured for external Pokémon images
- Type-safe routing with TypeScript
