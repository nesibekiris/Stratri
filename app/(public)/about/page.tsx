import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { getPersonSchema, getWebPageSchema } from '@/lib/structured-data';
import { AboutPageClient } from './about-client';

export const metadata: Metadata = generatePageMetadata('about');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export default function AboutPage() {
  const personSchema = getPersonSchema();
  const pageSchema = getWebPageSchema({
    name: 'About STRATRI – Governance & Technology Policy Studio',
    description:
      "Learn about STRATRI's mission, principles and leadership.",
    url: `${SITE_URL}/about`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
