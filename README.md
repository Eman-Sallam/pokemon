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
- **React Query (TanStack)** – For efficient data fetching and caching with Suspense support
- **React Suspense** – For declarative loading state management
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
- ⏳ React Suspense for declarative loading state management
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

## 🔄 Rendering Strategy

This project uses a hybrid rendering approach, leveraging both **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** based on the page requirements:

### Server-Side Rendered (SSR) Pages

These pages are rendered on the server for better SEO and initial load performance:

- **`/` (Home)** - Server Component that redirects to pagination
- **`/pokemon/[id]`** - Pokémon detail page
  - Fetches data on the server using async/await
  - Includes dynamic metadata generation for SEO
  - Better search engine indexing
  - Faster initial page load with pre-rendered content
- **`/not-found`** - 404 error page (Server Component)

### Client-Side Rendered (CSR) Pages

These pages use client-side rendering for interactive features:

- **`/pagination/[page]`** - Pagination view
  - Uses React Query with Suspense mode for data fetching and caching
  - React Suspense boundaries with skeleton loaders for loading states
  - Client-side navigation and state management
  - Interactive pagination controls
- **`/load-more-listing`** - Load more view
  - Uses React Query's infinite queries with Suspense mode
  - React Suspense boundaries for initial loading
  - Client-side "Load More" button interactions
  - Dynamic content loading

### Why This Approach?

- **SSR for Detail Pages**: Pokémon detail pages benefit from SSR for SEO, as each Pokémon has unique content that should be indexed by search engines.
- **CSR for Listing Pages**: Listing pages use CSR to provide smooth, interactive pagination and infinite scrolling without full page reloads.
- **Best of Both Worlds**: Combines the SEO benefits of SSR with the interactivity of CSR where needed.

---

## ⏳ Loading State Management with Suspense

This project uses **React Suspense** for declarative loading state management:

- **React Query Suspense Mode**: Enabled globally in the QueryClient configuration
- **Automatic Suspense Boundaries**: Next.js App Router automatically creates Suspense boundaries for `loading.tsx` files
- **Manual Suspense Boundaries**: Client components use `<Suspense>` with custom fallbacks for React Query data fetching
- **Skeleton Loaders**: Custom skeleton components provide visual feedback during loading
- **Background Refetching**: `isFetching` states handle background data updates without suspending

### How It Works

1. **Server Components** (`/pokemon/[id]`): Next.js automatically shows `loading.tsx` while the async component loads
2. **Client Components** (`/pagination/[page]`, `/load-more-listing`): React Query throws promises when data is loading, which Suspense catches and shows fallback UI
3. **Error Handling**: Error Boundaries catch errors, while React Query's `isError` handles query-specific errors

---

## 📝 Notes

- Built with Next.js v16 App Router for optimal performance
- Uses React Server Components where possible
- Client components are marked with `'use client'` directive
- Image optimization configured for external Pokémon images
- Type-safe routing with TypeScript
- Hybrid rendering strategy: SSR for detail pages, CSR for listing pages
- React Suspense for declarative loading state management
