'use client';

import { HomePage } from '@/components/pages/HomePage';
import { defaultContent } from '@/lib/default-content';

export function HomePageClient() {
  return (
    <HomePage
      content={defaultContent}
      language="en"
      techletterPosts={[]}
      isLoadingTechletter={false}
    />
  );
}
