import type { Metadata } from 'next';
import { VisualsShowcaseClient } from './visuals-client';

export const metadata: Metadata = {
  title: 'Visual Components Showcase | STRATRI',
  description: 'STRATRI design system visual components and ink-inspired illustrations.',
  robots: { index: false, follow: false },
};

export default function VisualsPage() {
  return <VisualsShowcaseClient />;
}
