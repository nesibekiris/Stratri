import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { getOrganizationSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com'),
  title: {
    default: 'STRATRI – AI Governance, Technology Policy & Responsible Innovation',
    template: '%s | STRATRI',
  },
  description:
    'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact at the crossroads of technology, policy, and society.',
  keywords: [
    'AI governance',
    'technology policy',
    'responsible AI',
    'AI strategy',
    'AI ethics',
    'governance frameworks',
    'AI consulting',
    'digital policy',
  ],
  authors: [{ name: 'Nesibe Kr Can', url: 'https://www.linkedin.com/in/nesibekiris/' }],
  creator: 'STRATRI',
  publisher: 'STRATRI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: '/',
    siteName: 'STRATRI',
    title: 'STRATRI – AI Governance, Technology Policy & Responsible Innovation',
    description:
      'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'STRATRI – AI Governance & Technology Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STRATRI – AI Governance & Technology Policy',
    description:
      'Governance and technology policy studio at the crossroads of AI, regulation, and society.',
    images: ['/og-image.png'],
    creator: '@stratri',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FEFBF8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-stratri-cream text-stratri-dark antialiased">
        {children}
      </body>
    </html>
  );
}
