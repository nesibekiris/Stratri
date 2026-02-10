'use client';

import { ServicesPage } from '@/components/pages/ServicesPage';
import { defaultContent } from '@/lib/default-content';

export function ServicesPageClient() {
  return <ServicesPage content={defaultContent} />;
}
