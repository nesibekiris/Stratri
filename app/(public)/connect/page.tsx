import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { getWebPageSchema } from '@/lib/structured-data';
import { ConnectPageClient } from './connect-client';

export const metadata: Metadata = generatePageMetadata('connect');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export default function ConnectPage() {
  const pageSchema = getWebPageSchema({
    name: 'Connect with STRATRI',
    description:
      'Contact STRATRI to discuss AI governance, responsible technology, and policy.',
    url: `${SITE_URL}/connect`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ConnectPageClient />
    </>
  );
}
