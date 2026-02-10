export type Language = 'en' | 'tr';

export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    backgroundImage?: string;
  };
  threeRoads: {
    title: string;
    description1: string;
    description2: string;
    conclusion: string;
    roads: Array<{
      name: string;
      description: string;
      icon?: string;
    }>;
  };
  services: {
    title: string;
    pillars: Array<{
      id: string;
      title: string;
      subtitle: string;
      icon: string;
      points: string[];
      link: string;
      image?: string;
    }>;
  };
  howWeWork: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      image?: string;
    }>;
  };
  forTeams: {
    title: string;
    intro: string;
    items: string[];
    conclusion: string;
    buttonText: string;
    backgroundImage?: string;
  };
  insights: {
    title: string;
    subtitle: string;
    posts: Array<{
      id: string;
      title: string;
      summary: string;
      category: string;
      date: string;
      slug: string;
      readingTime: string;
      illustrationType: string;
      featuredImage?: string;
    }>;
  };
  trainings: {
    title: string;
    items: Array<{
      title: string;
      outcome: string;
    }>;
    buttonText: string;
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  settings: {
    siteName: string;
    tagline: string;
    email: string;
    linkedinUrl: string;
    logoText: string;
    logoImage?: string;
    faviconImage?: string;
  };
  navigation: Array<{
    name: string;
    path: string;
  }>;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  images: Array<{
    id: string;
    url: string;
    name: string;
    alt: string;
    uploadedAt: string;
  }>;
}
