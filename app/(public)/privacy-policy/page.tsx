import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { PrivacyPolicyPageClient } from './privacy-policy-client';

export const metadata: Metadata = generatePageMetadata('privacy-policy');

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
