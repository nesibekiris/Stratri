'use client';

import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage';
import { defaultContent } from '@/lib/default-content';

export function PrivacyPolicyPageClient() {
  return <PrivacyPolicyPage content={defaultContent} language="en" />;
}
