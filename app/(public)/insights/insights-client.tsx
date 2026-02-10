'use client';

import { InsightsPage } from '@/components/pages/InsightsPage';
import { defaultContent } from '@/lib/default-content';

export function InsightsPageClient() {
  return <InsightsPage content={defaultContent} />;
}
