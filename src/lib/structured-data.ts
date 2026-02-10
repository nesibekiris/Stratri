const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'STRATRI',
    alternateName: 'STRATRI – AI Governance & Technology Policy Studio',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact at the crossroads of technology, policy, and society.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Nesibe Kr Can',
      jobTitle: 'Managing Partner',
      url: 'https://www.linkedin.com/in/nesibekiris/',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'nesibe@stratri.com',
      contactType: 'business inquiries',
      availableLanguage: ['English', 'Turkish'],
    },
    sameAs: ['https://www.linkedin.com/in/nesibekiris/'],
    knowsAbout: [
      'AI Governance',
      'Technology Policy',
      'Responsible AI',
      'AI Ethics',
      'AI Strategy',
      'Regulatory Compliance',
      'Digital Policy',
    ],
    areaServed: {
      '@type': 'GeoShape',
      name: 'Global',
    },
    serviceType: [
      'AI Strategy Consulting',
      'AI Governance Advisory',
      'Technology Policy Research',
      'Government Affairs',
    ],
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nesibe Kr Can',
    jobTitle: 'Managing Partner',
    worksFor: {
      '@type': 'Organization',
      name: 'STRATRI',
      url: SITE_URL,
    },
    url: `${SITE_URL}/about`,
    sameAs: ['https://www.linkedin.com/in/nesibekiris/'],
    knowsAbout: [
      'AI Governance',
      'Technology Policy',
      'Responsible AI',
      'Emerging Technology Regulation',
    ],
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      '@type': 'Person',
      name: 'Nesibe Kr Can',
      url: 'https://www.linkedin.com/in/nesibekiris/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'STRATRI',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/insights/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: 'en',
  };
}

export function getWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'STRATRI',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'STRATRI',
    },
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'STRATRI',
    description:
      'AI Governance, Technology Policy & Responsible Innovation Consultancy',
    url: `${SITE_URL}/services`,
    provider: {
      '@type': 'Organization',
      name: 'STRATRI',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'STRATRI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Strategy & Maturity',
            description:
              'Technology and AI maturity assessments, roadmaps, and operating models for responsible AI.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Governance, Ethics & Literacy',
            description:
              'Governance frameworks, ethical guidelines, and literacy programs for AI deployment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market & Policy Research',
            description:
              'Research on AI markets, regulatory developments, and policy analysis.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Policy & Government Affairs',
            description:
              'Advisory on AI policy positioning, stakeholder engagement, and multi-stakeholder processes.',
          },
        },
      ],
    },
  };
}
