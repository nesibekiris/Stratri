import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-metadata';
import { CookiePolicyPageClient } from './cookie-policy-client';

export const metadata: Metadata = generatePageMetadata('cookie-policy');

export default function CookiePolicyPage() {
  return <CookiePolicyPageClient />;
}
