import type { SiteContent } from '../../App';
import { ServiceCard } from '../ServiceCard';
import { CTASection } from '../CTASection';
import { LiteracyInk } from '../visuals';

interface TrainingServicesPageProps {
  content: SiteContent;
  onNavigate?: (path: string) => void;
}

export function TrainingServicesPage({ content, onNavigate }: TrainingServicesPageProps) {
  const programs = [
    {
      title: 'AI4Everyone – Ethics & Governance Essentials',
      format: 'Open Enrollment',
      duration: '4 hours',
      level: 'Awareness & Literacy',
      audience: 'Students, career changers, professionals entering AI-adjacent roles',
      teaser: 'Build foundational AI literacy through practical understanding of AI types, ethical reasoning, and algorithmic harms. Learn to identify risks and ask critical questions about AI systems.',
      slug: 'ai4everyone'
    },
    {
      title: 'AI4Business – Ethics & Governance',
      format: 'Corporate Training',
      duration: '4 hours',
      level: 'Role-Aware Foundation',
      audience: 'All employees across departments',
      teaser: 'Organization-wide AI literacy tailored to your actual AI systems and tools. Fulfills EU AI Act Article 4 training obligations while establishing shared ethical vocabulary.',
      slug: 'ai4business-ethics-governance'
    },
    {
      title: 'AI4Business – Governance Mastery',
      format: 'Corporate Training',
      duration: '2 days',
      level: 'Operational & Advanced',
      audience: 'Managers, risk, compliance, legal teams',
      teaser: 'Master the SSK Framework (Ownership-Boundaries-Evidence) and operationalize EU AI Act compliance. Map ethical principles to technical metrics and design human oversight mechanisms.',
      slug: 'governance-mastery'
    },
    {
      title: 'AI4Strategy – RAI as ROI',
      format: 'Executive Education',
      duration: '4 hours (modular)',
      level: 'Strategic & Embedded',
      audience: 'C-suite, board members, strategic leaders',
      teaser: 'Case-driven executive program demonstrating how responsible AI governance creates measurable business value. Translate technical risks into board-legible KPIs.',
      slug: 'ai4strategy'
    }
  ];

  const handleProgramClick = (slug: string) => {
    if (onNavigate) {
      onNavigate(`/services/${slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Visual Element */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40">
              <LiteracyInk className="w-full h-full text-[#4A90A4]" />
            </div>
          </div>

          {/* Title */}
          <h1 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-center mb-6 text-[#1A1A1A]"
            style={{ letterSpacing: '-0.02em' }}
          >
            AI Governance & Ethics Literacy
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto text-[#1A1A1AB3] font-sans leading-relaxed">
            We equip organizations and individuals with the literacy, frameworks, and strategic mindset to deploy AI responsibly—turning ethical governance into competitive advantage.
          </p>
        </div>
      </section>

      {/* Training Portfolio Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-[#1A1A1A] text-center">
              AI4Whom Training Portfolio
            </h2>
            
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-center text-[#1A1A1AB3] font-sans leading-relaxed">
              Our curriculum architecture is built on a common spine: the <strong>AI Triad</strong> (Data-Algorithm-Compute), <strong>agentic AI maturity levels</strong>, and the <strong>AI4Whom 6 Questions</strong> framework. Each program deepens these foundations according to audience needs—from awareness to board-level strategy.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <ServiceCard
                key={index}
                {...program}
                onClick={() => handleProgramClick(program.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection content={content} />
    </div>
  );
}
