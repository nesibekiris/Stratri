# Migration Guide: Vite + React to Next.js 15

## Overview

This document describes the migration from a Vite + React 18 SPA to a Next.js 15 App Router application with comprehensive SEO optimization.

## Structural Changes

### Before (Vite SPA)
```
src/
├── App.tsx              # Client-side routing via window.location
├── main.tsx             # ReactDOM.createRoot entry
├── index.css            # Global styles
├── components/
├── utils/
├── types/
├── lib/
└── supabase/
```

### After (Next.js 15 App Router)
```
app/                     # Next.js App Router (pages)
├── layout.tsx           # Root layout (replaces index.html + App.tsx wrapper)
├── sitemap.ts           # Auto-generated sitemap
├── robots.ts            # Auto-generated robots.txt
├── (public)/            # Route group for public pages
│   ├── layout.tsx       # Shared Navigation + Footer
│   └── [route]/page.tsx # Individual pages
└── fredo/               # Admin panel (separate layout)
middleware.ts            # Auth middleware (replaces client-side auth checks)
src/                     # Source code (preserved)
├── components/          # All components preserved
├── lib/                 # Added Supabase SSR clients + SEO utilities
├── utils/               # Updated imports
├── types/               # Added content.ts
└── supabase/            # Preserved as-is
```

## Files Removed

| File | Reason |
|------|--------|
| `src/App.tsx` | Replaced by `app/layout.tsx` + route pages |
| `src/main.tsx` | Next.js handles entry point |
| `index.html` | Replaced by `app/layout.tsx` |
| `vite.config.ts` | Replaced by `next.config.js` |
| `src/app/page.tsx` | Replaced by `app/(public)/page.tsx` |

## Files Added

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration |
| `middleware.ts` | Auth session handling, admin route protection |
| `tailwind.config.ts` | Tailwind configuration (was inline in Vite) |
| `postcss.config.js` | PostCSS for Tailwind |
| `.env.example` | Environment variable template |
| `.env.local` | Local environment (gitignored) |
| `src/types/content.ts` | Site content + Language types |
| `src/lib/supabase/server.ts` | Server-side Supabase client |
| `src/lib/supabase/client.ts` | Browser Supabase client (replaces utils/supabase) |
| `src/lib/supabase/middleware.ts` | Middleware Supabase client |
| `src/lib/seo-metadata.ts` | SEO metadata using Next.js Metadata API |
| `src/lib/structured-data.ts` | JSON-LD structured data schemas |

## Key Changes

### 1. Routing

**Before**: Client-side routing via `window.location.pathname` in App.tsx
```tsx
// Old: App.tsx
if (currentPath === '/services') return <ServicesPage />;
```

**After**: File-based routing via App Router
```
app/(public)/services/page.tsx  ->  /services
app/(public)/about/page.tsx     ->  /about
app/fredo/page.tsx              ->  /fredo
```

### 2. Component Classification

Interactive components received `'use client'` directive:
- `Navigation.tsx` - uses useState, usePathname
- `CookieConsent.tsx` - uses useState, useEffect
- `AdminLogin.tsx` - uses useState, Supabase auth
- `Button.tsx` - uses onClick handlers
- All page components in `components/pages/`
- All admin components in `components/admin/`
- `HeroVisualization.tsx`, `StratriWebsite.tsx`
- `LanguageSwitcher.tsx`, `NavigationDropdown.tsx`

Server Components (default, no directive needed):
- `Footer.tsx` - static content with next/link
- `LoadingState.tsx` - pure presentational
- `ErrorMessage.tsx` - pure presentational
- Static visual components (SVG ink illustrations)

### 3. SEO Optimization

**Before**: Client-side meta tag manipulation via `updateSEO()` in utils/seo.ts
**After**: Server-side metadata via Next.js Metadata API

Each page now exports metadata statically:
```tsx
// app/(public)/services/page.tsx
export const metadata: Metadata = generatePageMetadata('services');
```

Added:
- Open Graph tags with preview images
- Twitter Card metadata
- Canonical URLs with alternate language links
- JSON-LD structured data (Organization, Person, Service, Article schemas)
- Dynamic sitemap.xml generation
- robots.txt with admin routes blocked

### 4. Supabase Integration

**Before**: Single client in `utils/supabase/client.ts`
**After**: Three separate clients for different contexts:

| Client | File | Usage |
|--------|------|-------|
| Browser | `lib/supabase/client.ts` | Client components, `'use client'` files |
| Server | `lib/supabase/server.ts` | Server Components, Server Actions |
| Middleware | `lib/supabase/middleware.ts` | `middleware.ts` auth handling |

### 5. Navigation

**Before**: `<a href>` with `window.history.pushState`
**After**: Next.js `<Link>` component with `usePathname()` for active state

### 6. Assets

**Before**: Vite static imports (`import img from '@/assets/file.png'`)
**After**: Public folder references (`const img = '/file.png'`)

All PNG assets moved from `src/assets/` to `public/`.

### 7. Fonts

Fonts are loaded via `<link>` tags in the root layout for broad compatibility. The CSS custom properties `--font-serif` and `--font-sans` remain unchanged.

### 8. Authentication

**Before**: Auth check in `App.tsx` with client-side redirect
**After**: Middleware-based session management + client-side auth in admin page

## Breaking Changes

1. **`react-router-dom` removed** - All routing is now file-based via App Router
2. **Vite-specific imports removed** - `figma:asset` and `@/assets` imports replaced with public folder paths
3. **`window.history.pushState` navigation** - Replaced with Next.js `<Link>` component
4. **Supabase client import path changed** - From `utils/supabase/client` to `lib/supabase/client`
5. **React 19** - Upgraded from React 18.3.1 to React 19.0.0

## Environment Variables

Variables previously hardcoded in `utils/supabase/info.tsx` are now loaded from `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_SITE_URL=https://stratri.com
```

## Performance Notes

- Server Components render static content without JavaScript bundle overhead
- Dynamic imports can be added for heavy components (recharts, motion)
- Image optimization available via `next/image` component
- Automatic code splitting per route
- Static generation for all public pages (build-time rendering)
