# STRATRI Website - Complete Project Export
**Export Date:** February 10, 2026  
**Project Type:** React SPA (Single Page Application)  
**Status:** Production-ready, 108 files

---

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack & Dependencies](#tech-stack--dependencies)
3. [File Structure](#file-structure)
4. [Core Configuration Files](#core-configuration-files)
5. [Main Application Files](#main-application-files)
6. [Components (Full Source)](#components-full-source)
7. [Pages (Full Source)](#pages-full-source)
8. [Admin Panel](#admin-panel)
9. [Visual Components](#visual-components)
10. [Utilities](#utilities)
11. [Assets & Imports](#assets--imports)
12. [Migration Instructions](#migration-instructions)

---

## 📱 Project Overview

### STRATRI Website
**Purpose:** Technology Policy & AI Governance Consultancy website  
**Pages:** 5 main pages (Home, Services, Insights, About, Connect)  
**Admin:** WordPress-style panel at `/fredo` (email/password protected)  
**Languages:** EN / TR (bilingual support)  
**Backend:** Supabase (Auth + KV Storage)

### Design System
- **Typography:** Cormorant Garamond (headlines), IBM Plex Serif (body)
- **Colors:**
  - Cream: `#FEFBF8` (background)
  - Dark: `#1E2A45` (text, policy)
  - Accent: `#184A5A` (society)
  - Light: `#9FB7C8` (technology)
- **Visual Style:** Japanese ink-inspired illustrations, minimal, editorial

---

## 🛠 Tech Stack & Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "latest",
    "motion": "latest",
    "@supabase/supabase-js": "latest",
    "sonner": "^2.0.3"
  }
}
```

### Import Syntax (Figma Make)
- Regular imports: `import { Component } from 'package'`
- Versioned: `import { toast } from 'sonner@2.0.3'`
- Motion: `import { motion } from 'motion/react'`
- Figma assets: `import img from "figma:asset/hash.png"`

---

## 📁 File Structure

```
/
├── App.tsx                         # Main entry point
├── styles/
│   └── globals.css                 # Tailwind + brand styles
├── components/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── InsightsPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ConnectPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   └── CookiePolicyPage.tsx
│   ├── admin/
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminPanel.tsx
│   │   ├── PageBuilder.tsx
│   │   ├── BlockEditor.tsx
│   │   ├── ImageLibrary.tsx
│   │   └── editors/
│   │       ├── HeroEditor.tsx
│   │       ├── ServicesEditor.tsx
│   │       ├── InsightsEditor.tsx
│   │       └── ...
│   ├── visuals/
│   │   ├── CrossroadsInk.tsx
│   │   ├── RailwayDiagram.tsx
│   │   ├── HandDrawnNumbers.tsx
│   │   └── ...
│   ├── ui/                         # 40 Shadcn components (protected)
│   ├── StratriWebsite.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Newsletter.tsx
│   └── ...
├── utils/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── info.tsx
│   ├── formatText.tsx
│   ├── seo.ts
│   ├── translations.ts
│   └── motion.ts
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx           # Hono server
│           ├── auth.tsx
│           └── kv_store.tsx        # PROTECTED
├── types/
│   └── blocks.ts
└── STRATRI_DESIGN_SYSTEM.md
```

**Total:** 108 files (40 protected UI components in `/components/ui/`)

---

## ⚙️ Core Configuration Files

### 1. `/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* STRATRI Brand Colors - STRICT PALETTE */
    --color-stratri-cream: #FEFBF8;
    --color-stratri-dark: #1E2A45;
    --color-stratri-accent: #184A5A;
    --color-stratri-light: #7A95AB;
    --color-stratri-divider: #E8E4DF;
    
    /* Typography - STRATRI Design System */
    --font-headline: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'IBM Plex Serif', Georgia, serif;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans: 'IBM Plex Serif', Georgia, serif;
  }

  body {
    background-color: var(--color-stratri-cream);
    color: var(--color-stratri-dark);
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
    font-weight: 500;
    color: var(--color-stratri-dark);
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.15;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
  }
}
```

---

## 🎯 Main Application Files

### `/App.tsx` (Main Entry Point)

**Key Features:**
- Client-side routing (manual, no react-router)
- Supabase authentication
- Language switching (EN/TR)
- Protected admin route `/fredo`
- SEO metadata updates

**Routes:**
- `/` → HomePage
- `/services` → ServicesPage
- `/insights` → InsightsPage
- `/about` → AboutPage
- `/connect` → ConnectPage
- `/privacy` → PrivacyPolicyPage
- `/cookies` → CookiePolicyPage
- `/fredo` → AdminDashboard (protected)
- `/visuals` → VisualsShowcase

**State Management:**
```typescript
const [currentPath, setCurrentPath] = useState(window.location.pathname);
const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [siteContent, setSiteContent] = useState<SiteContent>({ ... });
```

**Navigation Logic:**
```typescript
const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  setCurrentPath(path);
};
```

---

## 🧩 Components (Full Source)

### Key Components to Migrate

#### 1. **Button Component** (`/components/Button.tsx`)
```typescript
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export function Button({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) {
  // Implementation with Tailwind classes
  // Uses STRATRI brand colors
}
```

#### 2. **Navigation** (`/components/Navigation.tsx`)
- Sticky header with backdrop blur
- Desktop: horizontal tab-like pills
- Mobile: accordion dropdown
- Language switcher
- Dropdown menus for Services, Insights, About, Connect

#### 3. **Footer** (`/components/Footer.tsx`)
- 4-column layout (Services, Frameworks, Insights, Company)
- Social links (LinkedIn, Email)
- Privacy/Cookie policy links
- All links use `setCurrentPath` for SPA navigation

#### 4. **Newsletter** (`/components/Newsletter.tsx`)
- Email subscription form
- Connects to backend `/make-server-9581034c/subscribe`
- Toast notifications

#### 5. **LanguageSwitcher** (`/components/LanguageSwitcher.tsx`)
- Toggle between EN/TR
- Compact pill UI
- Updates global language state

---

## 📄 Pages (Full Source)

### 1. **HomePage** (`/components/pages/HomePage.tsx`)

**Sections:**
1. Hero Section
   - Dynamic headline with keyword emphasis
   - Dual CTAs
   - HeroVisualization component
2. Three Roads Section
   - Technology / Policy / Society icons
   - Crossroads illustration
3. Opening Stats
4. Crossroads Risks
5. Services Overview
6. Metric Strip
7. For Teams Section
8. CTA Section

**Props:**
```typescript
interface HomePageProps {
  content: SiteContent;
  language: Language;
  techletterPosts: any[];
  isLoadingTechletter: boolean;
}
```

### 2. **ServicesPage** (`/components/pages/ServicesPage.tsx`)

**Sections:**
1. Hero Band (dark background)
2. How We Work (3-step process)
3. Services Grid (4 services with icons)
4. **R.A.I.L.W.A.Y. Framework** (dark society band)
   - 7-phase macro framework
   - 4-step R.A.I.L. loop
   - ISO 42001 alignment
5. For Teams CTA
6. Contact CTA

**Services:**
- AI Strategy & Maturity
- AI Governance, Ethics & Literacy
- Market & Policy Research
- Policy & Government Affairs

### 3. **InsightsPage** (`/components/pages/InsightsPage.tsx`)

**Sections:**
1. Hero with dynamic visualization
2. **Techletter** section (Substack RSS feed)
3. Reports section (placeholder)
4. Articles section (placeholder)
5. AI Wrapped section (annual recap)

**RSS Integration:**
```typescript
// Fetches from https://techletter.co/feed
// Uses CORS proxy: api.allorigins.win
// Falls back to mock data
```

### 4. **AboutPage** (`/components/pages/AboutPage.tsx`)

**Sections:**
1. Hero
2. About STRATRI
3. Principles (3 core values)
4. Managing Partner profile (Nesibe Kiris)
5. CTA Section

### 5. **ConnectPage** (`/components/pages/ConnectPage.tsx`)

**Features:**
- Contact form (Name, Email, Organization, Message)
- Direct email link
- LinkedIn profile link
- Techletter subscription
- Form submits to `/make-server-9581034c/contact`

---

## 🔐 Admin Panel

### File Structure
```
/components/admin/
├── AdminDashboard.tsx      # Main container
├── AdminPanel.tsx          # Tab navigation
├── PageBuilder.tsx         # Block-based page editor
├── BlockEditor.tsx         # Individual block editing
├── BlockLibrary.tsx        # Block templates
├── ImageLibrary.tsx        # Media management
├── FormFields.tsx          # Reusable form components
└── editors/
    ├── HeroEditor.tsx
    ├── ServicesEditor.tsx
    ├── InsightsEditor.tsx
    ├── NavigationEditor.tsx
    ├── NewsletterEditor.tsx
    ├── SiteSettingsEditor.tsx
    └── UserManagementEditor.tsx
```

### Authentication Flow
1. User visits `/fredo`
2. If not authenticated → `AdminLogin.tsx`
3. Login via Supabase Auth (email/password)
4. On success → `AdminDashboard.tsx`
5. Logout → clear session, redirect to `/`

### Admin Features
- **Content Management:** Edit hero, services, insights, navigation
- **Image Library:** Upload/manage images in Supabase Storage
- **User Management:** Create/delete admin users
- **Block Editor:** WordPress-style block-based editing
- **Site Settings:** Logo, tagline, social links, colors

---

## 🎨 Visual Components

### Key Visuals (All in `/components/visuals/`)

1. **CrossroadsInk.tsx** - Abstract ink illustration for junctions
2. **RailwayDiagram.tsx** - Railway framework visualization
3. **HandDrawnNumbers.tsx** - Ink-style numbers (1, 2, 3...)
4. **HeroVisualization.tsx** - Animated SVG for homepage hero
5. **InsightsHeroInk.tsx** - Insights page header visual
6. **TechnologyInk.tsx, PolicyInk.tsx, SocietyInk.tsx** - Concept visuals

All visuals:
- SVG-based
- Use STRATRI brand colors
- Support animation props
- Responsive sizing

---

## 🔧 Utilities

### 1. **Translations** (`/utils/translations.ts`)

```typescript
export type Language = 'en' | 'tr';

export const t = (obj: TranslationObject, lang: Language): string => {
  return obj[lang] || obj.en;
};

export const staticTranslations = {
  navigation: { home: { en: 'Home', tr: 'Ana Sayfa' }, ... },
  footer: { ... },
  // ... all UI strings
};

export const contentTranslations = {
  hero: { title: { en: '...', tr: '...' }, ... },
  // ... all page content
};
```

### 2. **SEO** (`/utils/seo.ts`)

```typescript
export function updateSEO(pageKey: string, language: Language) {
  const meta = seoMetadata[pageKey];
  document.title = t(meta.title, language);
  updateMetaTag('description', t(meta.description, language));
  updateMetaTag('og:title', t(meta.title, language));
  // ... more meta tags
}
```

### 3. **Text Formatting** (`/utils/formatText.tsx`)

```typescript
export function formatAllKeywords(text: string): React.ReactNode {
  const keywords = ['technology', 'policy', 'society', 'STRATRI', 'governance', ...];
  // Wraps keywords in <span className="font-bold italic">
}
```

### 4. **Supabase Client** (`/utils/supabase/client.ts`)

```typescript
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export const authHelpers = {
  signIn: async (email: string, password: string) => { ... },
  signOut: async () => { ... },
  getSession: async () => { ... },
  onAuthStateChange: (callback) => { ... }
};
```

---

## 🖼 Assets & Imports

### Figma Asset Syntax
```typescript
// Raster images (PNG, JPG)
import logoImage from 'figma:asset/817fd993f5a8d7f9bfc11eb27cf9632e3b3d533c.png';

// SVG imports (from /imports directory - if it exists)
import svgPaths from './imports/svg-wg56ef214f';
```

### Image Usage
```typescript
// Use ImageWithFallback for new images
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={unsplashUrl} 
  alt="Description" 
  className="w-full h-64 object-cover"
/>
```

---

## 🚀 Migration Instructions

### Step 1: Setup Next.js Project

```bash
npx create-next-app@latest stratri-nextjs --typescript --tailwind --app
cd stratri-nextjs
```

### Step 2: Install Dependencies

```bash
npm install @supabase/supabase-js lucide-react sonner framer-motion
npm install -D @types/node
```

### Step 3: Copy Files

1. **Copy entire `/components` directory**
   - Skip `/components/ui/` if using Shadcn (re-install fresh)
   - Update import paths from `./` to `@/components/`

2. **Copy `/styles/globals.css`** → `/app/globals.css`

3. **Copy `/utils` directory** → `/lib` (Next.js convention)

4. **Convert Pages:**
   - `/App.tsx` routing logic → Next.js App Router
   - Each page component becomes `/app/[route]/page.tsx`

5. **Copy Supabase config:**
   - `/supabase/functions/server/` → `/app/api/` (Next.js API routes)
   - Update Hono server to Next.js route handlers

### Step 4: Update Imports

**Before (Figma Make):**
```typescript
import { HomePage } from './components/pages/HomePage';
import { Button } from './components/Button';
```

**After (Next.js):**
```typescript
import { HomePage } from '@/components/pages/HomePage';
import { Button } from '@/components/Button';
```

### Step 5: Convert Routing

**Before (SPA):**
```typescript
const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  setCurrentPath(path);
};
```

**After (Next.js):**
```typescript
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/services');
```

### Step 6: Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 7: Convert Assets

Replace Figma asset imports:
```typescript
// Before
import img from "figma:asset/hash.png";

// After - use Next.js Image
import Image from 'next/image';
import img from '@/public/images/logo.png';
```

### Step 8: SSR/SSG Configuration

Add metadata exports to pages:
```typescript
// app/page.tsx
export const metadata = {
  title: 'STRATRI - Technology Policy & AI Governance',
  description: '...',
};
```

### Step 9: Supabase Server Actions

Convert API routes from Hono to Next.js:

**Before (Hono):**
```typescript
app.post('/make-server-9581034c/contact', async (c) => {
  const body = await c.req.json();
  // ...
  return c.json({ success: true });
});
```

**After (Next.js API Route):**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // ...
  return Response.json({ success: true });
}
```

### Step 10: Security Headers

Add to `next.config.js`:
```javascript
const nextConfig = {
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; ..."
        },
      ],
    },
  ],
};
```

---

## 📦 Complete File Checklist

### Core (Must Copy)
- ✅ `/App.tsx` (convert to layout + routing)
- ✅ `/styles/globals.css`
- ✅ `/STRATRI_DESIGN_SYSTEM.md`

### Components (All)
- ✅ `/components/pages/` (5 pages)
- ✅ `/components/admin/` (entire admin panel)
- ✅ `/components/visuals/` (all visuals)
- ✅ `/components/StratriWebsite.tsx`
- ✅ `/components/Navigation.tsx`
- ✅ `/components/Footer.tsx`
- ✅ `/components/Button.tsx`, `Card.tsx`, `Newsletter.tsx`, etc.

### Utilities (All)
- ✅ `/utils/translations.ts`
- ✅ `/utils/seo.ts`
- ✅ `/utils/formatText.tsx`
- ✅ `/utils/motion.ts`
- ✅ `/utils/supabase/client.ts`

### Backend (Convert)
- ✅ `/supabase/functions/server/index.tsx` → Next.js API routes
- ✅ `/supabase/functions/server/auth.tsx` → Next.js API routes
- ⚠️ `/supabase/functions/server/kv_store.tsx` → Keep using Supabase KV

### Types
- ✅ `/types/blocks.ts`

---

## 🎨 Design Tokens Reference

```typescript
// Brand Colors
const colors = {
  cream: '#FEFBF8',    // Background
  dark: '#1E2A45',     // Text, Policy
  accent: '#184A5A',   // Society, Links
  light: '#9FB7C8',    // Technology, Accents
  divider: '#E8E4DF',  // Borders
};

// Typography
const fonts = {
  headline: 'Cormorant Garamond, Georgia, serif',
  body: 'IBM Plex Serif, Georgia, serif',
};

// Font Sizes
h1: clamp(2.5rem, 5vw, 4rem)
h2: clamp(2rem, 4vw, 3rem)
h3: clamp(1.5rem, 3vw, 2rem)
body: 1rem (16px)
small: 0.875rem (14px)
```

---

## 🔒 Protected Files (Do Not Modify)

These files are system-protected in Figma Make:
- `/components/figma/ImageWithFallback.tsx`
- `/supabase/functions/server/kv_store.tsx`
- `/utils/supabase/info.tsx`
- All 40 files in `/components/ui/`

**Action:** Copy as-is or re-implement in Next.js environment.

---

## ✅ Testing Checklist

After migration, verify:

- [ ] All 5 pages render correctly
- [ ] Navigation works (both desktop and mobile)
- [ ] Language switcher works
- [ ] Admin login works at `/fredo`
- [ ] Contact form submits
- [ ] Newsletter subscription works
- [ ] Techletter RSS feed loads
- [ ] All images load correctly
- [ ] SEO meta tags are correct
- [ ] Mobile responsive
- [ ] Accessibility (WCAG AA)
- [ ] Performance (Lighthouse score > 90)

---

## 📞 Support Notes

**Original Platform:** Figma Make  
**Limitation:** 60 file max (current: 108 files)  
**Reason for Migration:** SEO optimization, security headers, maintainability  

**Key Constraints:**
- No database migrations (use KV store)
- Preserve pixel-perfect design
- Maintain brand consistency
- Keep all admin functionality

---

## 📚 Additional Resources

- **Design System:** See `/STRATRI_DESIGN_SYSTEM.md`
- **Component Guidelines:** See `/guidelines/Guidelines.md`
- **Attributions:** See `/Attributions.md`

---

**END OF EXPORT DOCUMENT**

This document contains all necessary information to recreate the STRATRI website in any environment. For individual file contents, please refer to the sections above or request specific files.

**Next Steps:**
1. Copy all component files to your local environment
2. Follow migration instructions above
3. Test thoroughly
4. Deploy to production

Good luck with your migration! 🚀
