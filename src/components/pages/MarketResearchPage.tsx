import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { Check, FileText, TrendingUp, Users, Briefcase, Lock } from 'lucide-react';

interface MarketResearchPageProps {
  content: SiteContent;
}

export function MarketResearchPage({ content }: MarketResearchPageProps) {
  const deliverables = [
    {
      icon: FileText,
      title: 'Market Intelligence Reports',
      description: 'Deep-dive analysis of AI and technology markets, competitive landscapes, use case mapping, and adoption trends across sectors.'
    },
    {
      icon: TrendingUp,
      title: 'Policy & Regulatory Briefings',
      description: 'Timely analysis of emerging regulations (EU AI Act, GDPR, Digital Services Act), compliance requirements, and strategic implications for your business.'
    },
    {
      icon: Users,
      title: 'Stakeholder Mapping & Ecosystem Analysis',
      description: 'Identification of key players, regulatory actors, industry coalitions, and policy influencers relevant to your strategic positioning.'
    },
    {
      icon: Briefcase,
      title: 'Custom Research Projects',
      description: 'Tailored research addressing specific strategic questions—from technology adoption patterns to regulatory risk assessment.'
    }
  ];

  const workExamples = [
    {
      category: 'Venture Capital Advisory',
      description: 'Strategic research and policy advisory for venture capital firms navigating technology investments, regulatory risks, and market opportunities.',
      scope: 'Multi-year engagement',
      confidential: false
    },
    {
      category: 'Fintech Market Report',
      description: 'Comprehensive market intelligence report on fintech ecosystem, regulatory landscape, competitive dynamics, and emerging opportunities in digital financial services.',
      scope: 'Published research',
      confidential: false
    },
    {
      category: 'AI Regulatory Landscape Analysis',
      description: 'Detailed mapping of global AI regulations, compliance requirements across jurisdictions, and strategic implications for AI deployment.',
      scope: 'Custom research project',
      confidential: true
    },
    {
      category: 'Technology Platform Assessment',
      description: 'Strategic assessment of platform business models, regulatory exposure, and policy positioning for scaling technology companies.',
      scope: 'Advisory engagement',
      confidential: true
    }
  ];

  const researchExperience = [
    {
      role: 'Team Leader & Policy Research Fellow',
      organization: 'Center for AI and Digital Policy (Washington, D.C.)',
      period: 'Hands-on research and policy analysis experience',
      focus: 'Led policy research and analysis as part of an intensive, interdisciplinary working group focused on AI policy development, regulatory frameworks, and responsible AI governance.',
      outcomes: [
        'Conducted research on AI policy frameworks, regulatory approaches, and governance mechanisms across global jurisdictions',
        'Analyzed policy developments, regulatory trends, and compliance requirements for AI systems and digital technologies',
        'Developed policy briefs, research reports, and strategic recommendations on AI governance and digital policy',
        'Collaborated with interdisciplinary research team on policy evaluation, analysis methodologies, and strategic intelligence'
      ]
    },
    {
      role: 'Researcher - AI Governance Standards',
      organization: 'HUX AI (London)',
      period: 'Research contribution to international AI standards',
      focus: 'Contributed to the development of the ISO/IEC 42001 Guide, focusing on AI management systems standards and responsible AI governance frameworks.',
      outcomes: [
        'Researched and analyzed ISO/IEC 42001 AI management system requirements and implementation strategies',
        'Collaborated with global research cohort on translating AI standards into actionable organizational practices',
        'Developed guidance materials on AI governance, compliance workflows, and responsible AI implementation',
        'Supported development of practical tools and frameworks for organizations pursuing ISO 42001 certification'
      ]
    }
  ];

  const approach = [
    {
      step: '1',
      title: 'Define the Question',
      description: 'We start by understanding what you actually need to know—not what you think you should ask. Strategic research begins with the right question.'
    },
    {
      step: '2',
      title: 'Map the Landscape',
      description: 'We combine primary research, regulatory analysis, industry data, and ecosystem insights to build a complete picture of your strategic environment.'
    },
    {
      step: '3',
      title: 'Deliver Actionable Intelligence',
      description: 'Our deliverables are designed for decision-making, not just reading. Clear analysis, strategic implications, and next-step recommendations.'
    },
    {
      step: '4',
      title: 'Stay Connected',
      description: 'Markets and policies shift. We provide ongoing updates, briefings, and analysis as your strategic context evolves.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: content.colors.cream }}>
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6 lg:px-8 border-b" style={{ borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-sm" style={{ color: `${content.colors.dark}99` }}>
            <a 
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/services');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:underline"
            >
              Services
            </a>
            {' > '}
            <span style={{ color: content.colors.dark }}>Market & Policy Research</span>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-16 sm:pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6"
            style={{ color: content.colors.dark, letterSpacing: '-0.02em' }}
          >
            Market & Policy Research
          </h1>
          
          <p 
            className="text-xl sm:text-2xl font-medium mb-8"
            style={{ 
              color: content.colors.accent,
              fontFamily: 'IBM Plex Serif, Georgia, serif'
            }}
          >
            Making sense of shifting landscapes
          </p>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed font-sans" style={{ color: `${content.colors.dark}B3` }}>
            <p>
              Technology and policy maps move quickly and rarely in sync. A regulatory shift in Brussels changes your product roadmap in San Francisco. A new AI application reshapes competitive dynamics before the market even has a name for it. Investment decisions require understanding both what the technology can do and what the rules will allow.
            </p>
            <p>
              STRATRI delivers research and analysis that sits at the intersection of technology markets, regulatory developments, and strategic positioning. We help organizations understand where they are in a landscape that refuses to stand still—and what that means for their next move.
            </p>
            <p style={{ color: content.colors.dark, fontWeight: 500 }}>
              This is not desk research repackaged. It is intelligence designed for decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            What We Deliver
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border rounded-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ borderColor: '#E8E4DF' }}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#4A90A420' }}>
                    <Icon className="w-6 h-6" style={{ color: '#4A90A4' }} />
                  </div>
                  <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            How We Work
          </h2>

          <div className="space-y-8">
            {approach.map((item) => (
              <div key={item.step} className="flex items-start gap-6 border-l-4 pl-6" style={{ borderColor: '#4A90A4' }}>
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full font-serif text-xl font-bold"
                  style={{ backgroundColor: '#4A90A4', color: '#FFFFFF' }}
                >
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-sans text-xl font-bold mb-2" style={{ color: content.colors.dark }}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Examples Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-center" style={{ color: content.colors.dark }}>
            Examples of Our Work
          </h2>
          <p className="text-base text-center mb-12 font-sans" style={{ color: `${content.colors.dark}99` }}>
            Representative projects across venture capital, fintech, AI policy, and technology platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExamples.map((example, index) => (
              <div 
                key={index}
                className="bg-white border rounded-sm p-6 relative overflow-hidden"
                style={{ borderColor: '#E8E4DF' }}
              >
                {example.confidential && (
                  <div className="absolute top-4 right-4">
                    <div 
                      className="flex items-center gap-1 px-2 py-1 rounded-sm text-xs font-sans font-semibold"
                      style={{ backgroundColor: '#F8F6F3', color: `${content.colors.dark}80` }}
                    >
                      <Lock className="w-3 h-3" />
                      <span>Confidential</span>
                    </div>
                  </div>
                )}
                
                <h3 className="font-sans text-lg font-bold mb-2 pr-20" style={{ color: content.colors.dark }}>
                  {example.category}
                </h3>
                <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: `${content.colors.dark}B3` }}>
                  {example.description}
                </p>
                <p className="font-sans text-xs font-medium" style={{ color: content.colors.accent }}>
                  {example.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-sans text-sm mb-6" style={{ color: `${content.colors.dark}B3` }}>
              Many of our research projects remain confidential due to their strategic nature and client agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Published Research Callout */}
      <section className="py-12 px-6 lg:px-8 border-t border-b" style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: '#4A90A420' }}>
              <FileText className="w-6 h-6" style={{ color: '#4A90A4' }} />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Explore Our Published Research
              </h3>
              <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: `${content.colors.dark}B3` }}>
                Access in-depth reports, market analysis, and policy briefings on AI governance, technology trends, and regulatory developments.
              </p>
              <a
                href="/insights"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/insights');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-sm font-sans font-semibold hover:underline"
                style={{ color: '#4A90A4' }}
              >
                View All Insights & Reports →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            Who This Is For
          </h2>

          <ul className="space-y-4 max-w-3xl mx-auto">
            {[
              'Venture capital firms assessing technology investments and regulatory risks',
              'Technology companies navigating new markets, competitive landscapes, and policy constraints',
              'Fintech, healthtech, and platform businesses tracking regulatory developments',
              'Corporate strategy teams requiring actionable intelligence on AI and technology trends',
              'Policy teams needing deep-dive analysis on regulatory frameworks and compliance requirements',
              'Leadership teams making strategic decisions at the intersection of innovation and regulation'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4A90A4' }} />
                <span className="font-sans text-base leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t"
        style={{ 
          background: 'linear-gradient(135deg, #2C5F6F 0%, #184A5A 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-sm border text-xs font-sans font-semibold uppercase tracking-wider mb-4"
              style={{ 
                borderColor: '#9FB7C8',
                color: '#9FB7C8'
              }}
            >
              Research Background
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4" style={{ color: '#FEFBF8' }}>
              Research Experience That Informs Our Work
            </h2>
            <p className="text-base font-sans max-w-3xl mx-auto" style={{ color: '#FEFBF8E6' }}>
              STRATRI's research practice is built on hands-on experience in policy research, AI governance standards development, and strategic intelligence across technology and regulatory domains.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {researchExperience.map((exp, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border rounded-sm p-8"
                style={{ borderColor: '#FEFBF820' }}
              >
                <div className="mb-6">
                  <h3 className="font-sans text-xl font-bold mb-2" style={{ color: '#FEFBF8' }}>
                    {exp.role}
                  </h3>
                  <p className="font-sans text-base font-medium mb-3" style={{ color: '#9FB7C8' }}>
                    {exp.organization}
                  </p>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                    {exp.focus}
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: '#9FB7C8' }}>
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {exp.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#9FB7C8' }} />
                        <span className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="text-center mb-8">
            <span 
              className="inline-block px-4 py-2 rounded-sm border text-xs font-sans font-semibold uppercase tracking-wider mb-4"
              style={{ 
                borderColor: '#9FB7C8',
                color: '#9FB7C8'
              }}
            >
              Case Study
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4" style={{ color: '#FEFBF8' }}>
              Multi-Year Venture Capital Advisory
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border rounded-sm p-8" style={{ borderColor: '#FEFBF820' }}>
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: '#9FB7C8' }}>
                  Challenge
                </h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                  A venture capital firm needed ongoing strategic intelligence on technology markets, regulatory developments, and policy risks across their investment portfolio—covering AI, fintech, healthtech, and platform businesses.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: '#9FB7C8' }}>
                  Approach
                </h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                  STRATRI provided continuous market research, policy analysis, and strategic advisory over multiple years. We delivered regular briefings on regulatory shifts (EU AI Act, GDPR, DSA), competitive landscape mapping, sector-specific reports, and strategic recommendations for portfolio companies navigating compliance and market positioning.
                </p>
              </div>

              <div>
                <h3 className="font-sans text-sm font-bold mb-2 uppercase tracking-wider" style={{ color: '#9FB7C8' }}>
                  Outcome
                </h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                  The engagement enabled more informed investment decisions, proactive risk management, and strategic guidance for portfolio companies. Our research helped the firm identify emerging opportunities, anticipate regulatory challenges, and position investments ahead of market shifts.
                </p>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: '#FEFBF820' }}>
                <p className="font-sans text-sm italic" style={{ color: '#9FB7C8' }}>
                  "STRATRI's research doesn't just describe the landscape—it helps us navigate it strategically."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: content.colors.cream }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Need Strategic Research and Intelligence?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss how STRATRI's research and analysis can support your strategic decision-making at the intersection of technology, markets, and policy.
          </p>
          <Button href="/connect">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}