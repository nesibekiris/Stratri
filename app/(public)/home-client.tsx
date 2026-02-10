'use client';

import { useState, useEffect } from 'react';
import { HomePage } from '@/components/pages/HomePage';
import { defaultContent } from '@/lib/default-content';

const mockTechletterPosts = [
  {
    id: 'techletter-1',
    title: 'How I Protect My Brain in the Age of AI',
    summary: 'A personal framework for using AI tools without outsourcing your thinking. Exploring practical strategies to maintain cognitive autonomy in an AI-driven world...',
    category: 'Techletter',
    date: 'Jan 15, 2026',
    slug: 'https://techletter.co',
    readingTime: '6 min read',
    illustrationType: 'network',
    isExternal: true,
  },
  {
    id: 'techletter-2',
    title: "This Month's Reports by TechLetter: January 2026",
    summary: 'AI, Work, and the New Geography of Power. A comprehensive analysis of how artificial intelligence is reshaping global economic and political landscapes...',
    category: 'Techletter',
    date: 'Jan 28, 2026',
    slug: 'https://techletter.co',
    readingTime: '8 min read',
    illustrationType: 'circles',
    isExternal: true,
  },
  {
    id: 'techletter-3',
    title: 'Davos 2026 AI Recap: From Pilots to Infrastructure',
    summary: "AI Governance, AGI Timelines, and What's Missing: Musk, Amodei, Nadella. Key insights from the world's leading tech executives on the future of AI...",
    category: 'Techletter',
    date: 'Jan 23, 2026',
    slug: 'https://techletter.co',
    readingTime: '7 min read',
    illustrationType: 'lines',
    isExternal: true,
  },
  {
    id: 'techletter-4',
    title: "Grok Bikini, OpenAI Logs & Trump's AI War: How 2026 Just Changed AI Governance",
    summary: 'AI Porn, Deepfakes & The Year Governance Gets Real. Examining the critical governance challenges emerging from recent AI developments...',
    category: 'Techletter',
    date: 'Jan 8, 2026',
    slug: 'https://techletter.co',
    readingTime: '6 min read',
    illustrationType: 'grid',
    isExternal: true,
  },
];

export function HomePageClient() {
  const [techletterPosts, setTechletterPosts] = useState(mockTechletterPosts);
  const [isLoadingTechletter, setIsLoadingTechletter] = useState(false);

  return (
    <HomePage
      content={defaultContent}
      language="en"
      techletterPosts={techletterPosts}
      isLoadingTechletter={isLoadingTechletter}
    />
  );
}
