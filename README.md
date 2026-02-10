# STRATRI Website – Next.js 15

AI Governance, Technology Policy & Responsible Innovation consultancy website built with Next.js 15 App Router, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **UI Components**: Radix UI / Shadcn primitives
- **Database/Auth**: Supabase
- **Animations**: Motion library + CSS keyframes
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

```bash
npm install --legacy-peer-deps
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required environment variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL (for SEO/sitemap) |

### Development

```bash
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, fonts, structured data)
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt generation
│   ├── (public)/                 # Public pages (with Navigation + Footer)
│   │   ├── page.tsx              # Home page
│   │   ├── services/page.tsx     # Services page
│   │   ├── insights/page.tsx     # Insights page
│   │   ├── about/page.tsx        # About page
│   │   ├── connect/page.tsx      # Contact page
│   │   ├── privacy-policy/       # Privacy policy
│   │   ├── cookie-policy/        # Cookie policy
│   │   ├── visuals/              # Visual components showcase
│   │   ├── loading.tsx           # Loading UI
│   │   ├── error.tsx             # Error boundary
│   │   └── not-found.tsx         # 404 page
│   └── fredo/                    # Admin panel (protected)
│       ├── layout.tsx            # Admin layout (no nav/footer, noindex)
│       ├── page.tsx              # Admin dashboard
│       ├── loading.tsx           # Admin loading
│       └── error.tsx             # Admin error boundary
├── src/
│   ├── components/               # React components
│   │   ├── admin/                # Admin CMS components
│   │   ├── figma/                # Figma-generated components
│   │   ├── pages/                # Page content components
│   │   ├── ui/                   # Shadcn/Radix UI primitives
│   │   └── visuals/              # SVG ink illustrations
│   ├── lib/                      # Server-side utilities
│   │   ├── default-content.ts    # Default site content
│   │   ├── seo-metadata.ts       # SEO metadata for all pages
│   │   ├── structured-data.ts    # JSON-LD schemas
│   │   └── supabase/             # Supabase clients
│   │       ├── client.ts         # Browser client
│   │       ├── server.ts         # Server component client
│   │       └── middleware.ts     # Middleware client
│   ├── styles/
│   │   └── globals.css           # Global styles + design tokens
│   ├── types/
│   │   ├── blocks.ts             # CMS block types
│   │   └── content.ts            # Site content types
│   ├── utils/
│   │   ├── seo.ts                # Client-side SEO helpers
│   │   ├── translations.ts       # i18n (EN/TR)
│   │   ├── motion.ts             # Animation utilities
│   │   └── formatText.tsx        # Text formatting
│   └── supabase/                 # Supabase Edge Functions
│       └── functions/server/
├── middleware.ts                  # Next.js middleware (auth)
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## SEO Features

- **Metadata API**: Each page uses `generateMetadata()` with dynamic titles, descriptions, Open Graph, and Twitter Cards
- **Structured Data**: JSON-LD schemas for Organization, Person, Service, and Article
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots**: Generated at `/robots.txt` with admin routes blocked
- **Multi-language**: Alternate hreflang tags for English/Turkish
- **Semantic HTML**: Proper heading hierarchy, landmarks, and ARIA attributes

## Deployment (Vercel)

1. Push to your Git repository
2. Import in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

The project auto-detects as Next.js. No additional configuration needed.

### Vercel Environment Variables

Set these in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

## Admin Panel

Access the admin CMS at `/fredo`. Requires Supabase authentication.

## Design System

- **Colors**: Cream (#FEFBF8), Dark (#1E2A45), Accent (#184A5A), Light (#7A95AB)
- **Fonts**: Cormorant Garamond (headings), IBM Plex Serif (body)
- **Style**: Japanese ink-inspired, minimal, governance-grade
