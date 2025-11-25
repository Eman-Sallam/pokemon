# Pokémon 🧭

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://pokescope.vercel.app/) [![Repository](https://img.shields.io/badge/Repository-GitHub-black?style=for-the-badge&logo=github)](https://github.com/Eman-Sallam/pokemon)

A modern, type-safe Pokémon browser built with **Next.js v16**, **React**, **TypeScript**, **Tailwind CSS**, **React Query**, and **DaisyUI**. Explore Pokémon using both "pagination" and "Load More" view, with animated UI, error boundaries, and suspense fallback.

---

## ⚙️ Tech Stack

- **Next.js v16** – React framework with App Router for server-side rendering and optimized performance
- **React 19** – Latest React with modern features
- **TypeScript** – Type-safe development for better reliability
- **Tailwind CSS** + **DaisyUI** – Utility-first CSS with beautiful UI components
- **Heroicons** – SVG icon library
- **App Router** – Next.js file-based routing with server and client components
- **React Query (TanStack)** – For efficient data fetching and caching with Suspense support
- **React Suspense** – For declarative loading state management
- **Axios** – HTTP client for working with REST APIs
- **Error Boundaries** – Graceful runtime error handling
- **PokeAPI** – Open-source Pokémon API for fetching Pokémon data (listing, details). Docs: [https://pokeapi.co](https://pokeapi.co)
- **Vercel** – Deployment platform with CDN-backed hosting. Live: [https://pokescope.vercel.app/](https://pokescope.vercel.app/)

---

## 🚀 Features

- ⚡ **Pagination & Load More Views** – Two navigation patterns for browsing Pokémon
- 🔍 **Pokémon Detail Pages** – Comprehensive details with stats, abilities, types, height, and weight
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile devices
- 🪄 **Loading States** – Skeleton loaders and spinners for smooth user experience
- 💥 **Error Boundaries** – Catch runtime crashes and provide fallback UI with retry options
- ❌ **404 Page** – Graceful error page for unmatched routes
- ❓ **Not Found Handling** – Pokémon Not Found handling for invalid Pokémon IDs
- ⏳ **React Suspense** – Declarative loading state management
- 🎯 **Type-safe API** – TypeScript with `axios` + `react-query` for data fetching
- ⚡ **Performance Optimization** – Next.js Image component, code splitting, and React Query caching
- ♿ **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation, and WCAG compliance
- 🧭 **Server-Side Rendering** – Next.js App Router with SSR for detail pages and SEO optimization

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
src/
├── app/              # Next.js App Router (pages & layouts)
├── components/       # React components (PokemonListing, PokemonDetail)
├── hooks/            # Custom hooks (usePokemonList, useInfinitePokemonList)
├── lib/              # API client (axios configuration)
├── types/            # TypeScript definitions
└── utils/            # Helper functions
```

---

## 🔄 Rendering Strategy

This project uses a hybrid rendering approach, balancing SEO, performance, and interactivity.

### Server-Side Rendering (SSR)

Used where SEO and instant content matter:

- **`/pokemon/[id]` (Pokémon Detail Page)**
  - Fetches data on the server
  - Fast initial load and fully SEO-indexed
  - Works even if JS is disabled
- **`/not-found` and root redirects**
  - Rendered server-side for correctness and reliability

### Client-Side Rendering (CSR) with React Query

Used on interactive, dynamic pages:

- **`/pagination/[page]`** – Client component with React Query + Suspense
- **`/load-more-listing`** – Infinite query for "Load More" behavior
- **Benefits**: caching, optimistic updates, instant refetch, smooth UX

This architecture provides:

- 🚀 Fast SSR for detail pages
- ⚡ Highly interactive client-side lists
- 🔍 Better SEO for Pokémon detail pages
- 💾 Cached browsing experience using React Query
