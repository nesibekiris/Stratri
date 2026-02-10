import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { getWebPageSchema } from '@/lib/structured-data';
import { InsightsPageClient } from './insights-client';

export const metadata: Metadata = generatePageMetadata('insights');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export default function InsightsPage() {
  const pageSchema = getWebPageSchema({
    name: 'Insights – Techletter, Reports & Articles on AI Governance and Policy',
    description:
      "Read STRATRI's insights on AI governance, responsible technology and digital policy.",
    url: `${SITE_URL}/insights`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <InsightsPageClient />
    </>
  );
}
