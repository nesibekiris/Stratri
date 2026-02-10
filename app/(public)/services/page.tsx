import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { getServiceSchema, getWebPageSchema } from '@/lib/structured-data';
import { ServicesPageClient } from './services-client';

export const metadata: Metadata = generatePageMetadata('services');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stratri.com';

export default function ServicesPage() {
  const serviceSchema = getServiceSchema();
  const pageSchema = getWebPageSchema({
    name: 'Services – AI Strategy, Governance, Market Research & Policy Advisory',
    description:
      "Explore STRATRI's services across AI strategy maturity, governance and ethics, market and policy research, and government affairs.",
    url: `${SITE_URL}/services`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ServicesPageClient />
    </>
  );
}
