'use client';

import { AboutPage } from '@/components/pages/AboutPage';
import { defaultContent } from '@/lib/default-content';

export function AboutPageClient() {
  return <AboutPage content={defaultContent} />;
}
