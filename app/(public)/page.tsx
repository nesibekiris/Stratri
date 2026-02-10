import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { getWebPageSchema } from '@/lib/structured-data';
import { HomePageClient } from './home-client';

export const metadata: Metadata = generatePageMetadata('home');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export default function HomePage() {
  const pageSchema = getWebPageSchema({
    name: 'STRATRI – AI Governance, Technology Policy & Responsible Innovation',
    description:
      'STRATRI is a governance and technology policy studio helping organizations align AI, regulation, and societal impact.',
    url: SITE_URL,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <HomePageClient />
    </>
  );
}
