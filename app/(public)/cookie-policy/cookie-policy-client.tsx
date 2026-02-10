'use client';

import { CookiePolicyPage } from '@/components/pages/CookiePolicyPage';
import { defaultContent } from '@/lib/default-content';

export function CookiePolicyPageClient() {
  return <CookiePolicyPage content={defaultContent} language="en" />;
}
