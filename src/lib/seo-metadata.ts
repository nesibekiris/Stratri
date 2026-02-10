import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';
const SITE_NAME = 'STRATRI';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
}

export const pageSEO: Record<string, { en: PageSEO; tr: PageSEO }> = {
  home: {
    en: {
      title: 'STRATRI – AI Governance, Technology Policy & Responsible Innovation',
      description:
        'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact at the crossroads of technology, policy, and society.',
      keywords: [
        'AI governance consulting',
        'technology policy',
        'responsible AI',
        'AI strategy',
        'AI ethics',
        'governance frameworks',
      ],
    },
    tr: {
      title: 'STRATRI – Yapay Zeka Yonetisimi, Teknoloji Politikasi & Sorumlu Inovasyon',
      description:
        'STRATRI, teknoloji, politika ve toplumun kesisiminde yapay zeka, duzenleme ve toplumsal etkiyi hizalamaya yardimci olan bir yonetisim ve teknoloji politikasi studyosudur.',
      keywords: [
        'yapay zeka yonetisimi danismanligi',
        'teknoloji politikasi',
        'sorumlu yapay zeka',
        'yapay zeka stratejisi',
      ],
    },
  },
  services: {
    en: {
      title: 'Services – AI Strategy, Governance, Market Research & Policy Advisory | STRATRI',
      description:
        "Explore STRATRI's services across AI strategy maturity, governance and ethics, market and policy research, and government affairs at the intersection of technology and regulation.",
      keywords: [
        'AI strategy',
        'AI governance',
        'AI ethics',
        'market research',
        'policy advisory',
        'technology consulting',
      ],
    },
    tr: {
      title: 'Hizmetler – Yapay Zeka Stratejisi, Yonetisim, Pazar Arastirmasi & Politika Danismanligi | STRATRI',
      description:
        "STRATRI'nin yapay zeka strateji olgunlugu, yonetisim ve etik, pazar ve politika arastirmasi alanlarindaki hizmetlerini kesfedin.",
      keywords: [
        'yapay zeka stratejisi',
        'yapay zeka yonetisimi',
        'pazar arastirmasi',
        'politika danismanligi',
      ],
    },
  },
  insights: {
    en: {
      title: 'Insights – Techletter, Reports & Articles on AI Governance and Policy | STRATRI',
      description:
        "Read STRATRI's insights on AI governance, responsible technology and digital policy, including Techletter dispatches, in-depth reports, articles and AI Wrapped briefings.",
      keywords: [
        'AI governance insights',
        'Techletter',
        'AI policy reports',
        'technology articles',
        'AI governance research',
      ],
    },
    tr: {
      title: 'Icgoruler – Yapay Zeka Yonetisimi ve Politikasi Uzerine Techletter, Raporlar & Makaleler | STRATRI',
      description:
        "STRATRI'nin yapay zeka yonetisimi, sorumlu teknoloji ve dijital politika uzerine icgoruleri.",
      keywords: [
        'yapay zeka yonetisimi icgoruleri',
        'Techletter',
        'yapay zeka politika raporlari',
      ],
    },
  },
  about: {
    en: {
      title: 'About STRATRI – Governance & Technology Policy Studio',
      description:
        "Learn about STRATRI's mission, principles and leadership, including Managing Partner Nesibe Kr Can, a consultant and researcher in AI governance and emerging tech regulation.",
      keywords: [
        'STRATRI about',
        'Nesibe Kr Can',
        'AI governance consultant',
        'technology policy studio',
        'emerging tech regulation',
      ],
    },
    tr: {
      title: 'Hakkimizda STRATRI – Yonetisim & Teknoloji Politikasi Studyosu',
      description:
        "STRATRI'nin misyonunu, ilkelerini ve liderligini ogrenin.",
      keywords: [
        'STRATRI hakkinda',
        'yapay zeka yonetisimi danismani',
        'teknoloji politikasi studyosu',
      ],
    },
  },
  connect: {
    en: {
      title: 'Connect with STRATRI – AI Governance & Technology Policy Studio',
      description:
        'Contact STRATRI to discuss AI governance, responsible technology, and policy. Reach us via form, email, LinkedIn or Techletter for collaboration and advisory.',
      keywords: [
        'contact STRATRI',
        'AI governance consulting',
        'technology policy advisory',
        'collaboration opportunities',
      ],
    },
    tr: {
      title: 'STRATRI ile Iletisime Gecin – Yapay Zeka Yonetisimi & Teknoloji Politikasi Studyosu',
      description:
        'Yapay zeka yonetisimi, sorumlu teknoloji ve politika hakkinda konusmak icin STRATRI ile iletisime gecin.',
      keywords: ['STRATRI iletisim', 'yapay zeka yonetisimi danismanligi'],
    },
  },
  'privacy-policy': {
    en: {
      title: 'Privacy Policy | STRATRI',
      description:
        "STRATRI's privacy policy explaining how we collect, use, and protect your personal information.",
      keywords: ['privacy policy', 'data protection', 'STRATRI'],
    },
    tr: {
      title: 'Gizlilik Politikasi | STRATRI',
      description: "STRATRI'nin gizlilik politikasi.",
      keywords: ['gizlilik politikasi', 'veri koruma'],
    },
  },
  'cookie-policy': {
    en: {
      title: 'Cookie Policy | STRATRI',
      description:
        "STRATRI's cookie policy explaining how we use cookies and similar technologies on our website.",
      keywords: ['cookie policy', 'cookies', 'STRATRI'],
    },
    tr: {
      title: 'Cerez Politikasi | STRATRI',
      description: "STRATRI'nin cerez politikasi.",
      keywords: ['cerez politikasi', 'cerezler'],
    },
  },
};

export function generatePageMetadata(
  page: string,
  lang: 'en' | 'tr' = 'en'
): Metadata {
  const seo = pageSEO[page]?.[lang] || pageSEO.home.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: 'Nesibe Kr Can', url: 'https://www.linkedin.com/in/nesibekiris/' }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: seo.canonical || `${SITE_URL}/${page === 'home' ? '' : page}`,
      languages: {
        en: `/${page === 'home' ? '' : page}?lang=en`,
        tr: `/${page === 'home' ? '' : page}?lang=tr`,
        'x-default': `/${page === 'home' ? '' : page}`,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${page === 'home' ? '' : page}`,
      siteName: SITE_NAME,
      images: [
        {
          url: seo.ogImage || DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – AI Governance & Technology Policy`,
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || DEFAULT_OG_IMAGE],
      creator: '@stratri',
    },
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
  };
}
