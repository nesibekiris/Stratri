import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { Check, Building2, Users2, FileText, MessageSquare, Scale, Globe } from 'lucide-react';

interface PolicyAffairsPageProps {
  content: SiteContent;
}

export function PolicyAffairsPage({ content }: PolicyAffairsPageProps) {
  const services = [
    {
      icon: Building2,
      title: 'Policy Strategy & Positioning',
      description: 'Define your organization\'s policy stance, develop strategic narratives, and position your voice in technology and AI debates—aligned with what you actually do.'
    },
    {
      icon: Users2,
      title: 'Stakeholder Engagement & Coalition Building',
      description: 'Identify key policymakers, regulators, industry coalitions, and ecosystem actors. Build relationships that matter and navigate multi-stakeholder processes effectively.'
    },
    {
      icon: FileText,
      title: 'Regulatory Engagement Support',
      description: 'Prepare for consultations, hearings, and regulatory proceedings. Develop position papers, comment letters, and policy submissions that are clear, credible, and strategic.'
    },
    {
      icon: MessageSquare,
      title: 'Government Affairs Advisory',
      description: 'Navigate legislative processes, regulatory agencies, and government institutions. Build advocacy strategies that connect business objectives to policy outcomes.'
    },
    {
      icon: Scale,
      title: 'Public Policy Consultancy',
      description: 'Strategic advisory on technology policy, AI governance, data protection, platform regulation, and emerging digital policy frameworks across jurisdictions.'
    },
    {
      icon: Globe,
      title: 'Cross-Border Policy Navigation',
      description: 'Manage policy complexity across multiple markets. Understand how regulatory developments in one jurisdiction impact your global operations and strategic positioning.'
    }
  ];

  const sectors = [
    {
      name: 'Technology & AI',
      areas: ['AI governance and regulation', 'Platform regulation', 'Data protection and privacy', 'Digital services compliance']
    },
    {
      name: 'Fintech & Crypto',
      areas: ['Digital asset regulation', 'Payment services', 'Financial services innovation', 'Regulatory sandboxes']
    },
    {
      name: 'Healthtech',
      areas: ['Digital health regulation', 'Medical device compliance', 'Health data governance', 'Telemedicine frameworks']
    },
    {
      name: 'E-commerce & Retail Tech',
      areas: ['Consumer protection', 'Platform-to-business regulation', 'Digital marketplaces', 'Cross-border commerce']
    },
    {
      name: 'Venture Capital & Investment',
      areas: ['Investment regulation', 'Portfolio company policy support', 'Regulatory risk assessment', 'Market access strategy']
    }
  ];

  const experience = [
    {
      role: 'Government Affairs Director',
      organization: 'AmCham Turkey (American Chamber of Commerce)',
      period: '5+ years hands-on experience in government affairs and public policy',
      focus: 'Led government affairs, advocacy, and stakeholder engagement for 140+ multinational companies—including major technology platforms, fintech firms, e-commerce businesses, and digital economy leaders operating in Turkey and the region.',
      outcomes: [
        'Directed strategic advocacy and policy positioning for American and multinational technology, fintech, healthtech, e-commerce, and platform companies',
        'Built and maintained high-level relationships with government institutions, regulatory agencies, ministries, and policymakers across economic and technology portfolios',
        'Coordinated multi-stakeholder advocacy on digital economy regulation, technology policy, business environment reforms, and cross-border commerce',
        'Developed policy positions, position papers, and regulatory submissions aligned with member companies\' strategic objectives and regulatory obligations',
        'Represented member interests in legislative processes, regulatory consultations, public-private dialogues, and industry coalition efforts'
      ]
    },
    {
      role: 'Public Policy Consultant & Government Affairs Lead',
      organization: 'Ussal Consultancy, Lex Tech Consultancy, Lunapark Web3 Hub',
      period: 'Multi-year consulting and advisory engagements',
      focus: 'Provided strategic policy advisory, government relations, and regulatory engagement support to technology companies, platforms, fintech and crypto firms, venture capital organizations, and emerging technology sectors across AI, Web3, gig economy, and digital innovation.',
      outcomes: [
        'Advised clients on technology policy, AI governance, data protection, platform regulation, crypto/digital asset frameworks, and e-commerce compliance',
        'Supported regulatory engagement strategies, stakeholder mapping, and policy positioning for scaling technology companies and investment firms',
        'Delivered government affairs consulting across fintech, crypto/Web3, AI, e-commerce, big tech platforms, healthtech, and future of work sectors',
        'Facilitated relationships with policymakers, regulators, industry coalitions, and ecosystem actors to advance client policy objectives',
        'Developed policy research, regulatory briefings, and strategic intelligence on evolving technology regulations and political economy dynamics'
      ]
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
            <span style={{ color: content.colors.dark }}>Policy & Government Affairs Consultancy</span>
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
            Policy & Government Affairs Consultancy
          </h1>
          
          <p 
            className="text-xl sm:text-2xl font-medium mb-8"
            style={{ 
              color: content.colors.accent,
              fontFamily: 'IBM Plex Serif, Georgia, serif'
            }}
          >
            Engaging credibly with the public arena
          </p>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed font-sans" style={{ color: `${content.colors.dark}B3` }}>
            <p>
              You cannot outsource your voice in debates about technology and society. But showing up is not enough—you need to engage in ways that are informed, constructive, and consistent with what you actually do.
            </p>
            <p>
              STRATRI helps technology companies, platforms, fintech firms, venture capital organizations, and emerging sectors navigate the public policy arena. We build strategies for engaging with policymakers, regulators, industry coalitions, and multi-stakeholder processes—without the noise, without the performative gestures, and without pretending policy happens in a vacuum.
            </p>
            <p style={{ color: content.colors.dark, fontWeight: 500 }}>
              This is government affairs and policy advisory grounded in real experience: from leading multinational advocacy as Government Affairs Director at AmCham Turkey to advising technology companies on regulatory strategy as a public policy consultant.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border rounded-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ borderColor: '#E8E4DF' }}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#4A90A420' }}>
                    <Icon className="w-6 h-6" style={{ color: '#4A90A4' }} />
                  </div>
                  <h3 className="font-sans text-lg font-bold mb-3" style={{ color: content.colors.dark }}>
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors We Serve Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-center" style={{ color: content.colors.dark }}>
            Sectors We Serve
          </h2>
          <p className="text-base text-center mb-12 font-sans" style={{ color: `${content.colors.dark}99` }}>
            Policy and government affairs expertise across technology, fintech, healthtech, platforms, and venture capital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="bg-white border rounded-sm p-6"
                style={{ borderColor: '#E8E4DF' }}
              >
                <h3 className="font-sans text-xl font-bold mb-4" style={{ color: content.colors.dark }}>
                  {sector.name}
                </h3>
                <ul className="space-y-2">
                  {sector.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-start gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: content.colors.accent }}
                      />
                      <span className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why STRATRI Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-8 text-center" style={{ color: content.colors.dark }}>
            Why STRATRI for Policy & Government Affairs
          </h2>

          <div className="space-y-6">
            <div className="bg-white border rounded-sm p-6" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Real Experience in Government Affairs
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Not theoretical. Not second-hand. Direct experience leading advocacy for multinational companies across technology, fintech, healthtech, e-commerce, and platform sectors at AmCham Turkey and as a public policy consultant.
              </p>
            </div>

            <div className="bg-white border rounded-sm p-6" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Technology and Policy Fluency
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                We understand both sides of the equation: how technology works and how policy processes work. We speak both languages, which means we can translate your business reality into credible policy engagement.
              </p>
            </div>

            <div className="bg-white border rounded-sm p-6" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Strategic, Not Performative
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                We focus on engagement that serves your strategic objectives—not on gestures that look good in press releases. Policy work is most effective when it\'s aligned with what you\'re actually building and how you\'re actually operating.
              </p>
            </div>

            <div className="bg-white border rounded-sm p-6" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Multi-Stakeholder Navigation
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Policy happens in ecosystems, not silos. We help you navigate relationships with regulators, policymakers, industry coalitions, civil society, and other stakeholders—without losing your strategic coherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-6 lg:px-8 border-t" style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E4DF' }}>
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-16 text-center" style={{ color: content.colors.dark }}>
            Experience
          </h2>

          <div className="space-y-12">
            {/* Lex Tech */}
            <div className="pb-12 border-b" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <h3 className="font-sans text-lg font-semibold mb-4" style={{ color: '#1A1A1A', lineHeight: '1.6' }}>
                Lex Tech — Founder
              </h3>
              <p className="font-sans text-base leading-relaxed mb-3" style={{ color: '#4A5568' }}>
                Founded boutique consultancy delivering hands-on, tailored government affairs and policy research for technology companies navigating regulatory complexity. Led policy advisory, stakeholder engagement, and public affairs strategy across fintech, crypto, e-commerce, and digital platform sectors.
              </p>
              <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#1A1A1A' }}>
                Clients: CoinDesk, Lunapark, Çetinkaya, Eeva Fund, Aposto, Mükellef, Ofigopara, StaminaPA, Startupfon
              </p>
            </div>

            {/* Ussal Consultancy */}
            <div>
              <h3 className="font-sans text-lg font-semibold mb-4" style={{ color: '#1A1A1A', lineHeight: '1.6' }}>
                Ussal Consultancy — Public Policy Associate
              </h3>
              <p className="font-sans text-base leading-relaxed mb-3" style={{ color: '#4A5568' }}>
                Designed and executed tailored public policy strategies, regulatory compliance advisory, and government affairs programs for technology and digital economy companies. Provided hands-on support across policy research, stakeholder mapping, regulatory engagement, and strategic positioning for clients navigating Turkey's evolving tech policy landscape.
              </p>
              <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#1A1A1A', lineHeight: '1.8' }}>
                Clients: Mükellef, Delivery Hero, iyzico, Voltlines, Kolektif House, mutlubiev, tapu.com, BiLira, bitpanda, TÜBİSAD, endeksa, sahibinden.com, Foriba, Farmazon, Coinbase, Roche, BitOasis, Çiçeksepeti, Yemeksepeti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Ready to Build Your Policy Strategy?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss how STRATRI can support your engagement with policymakers, regulators, and the broader policy ecosystem—grounded in real experience and aligned with your strategic objectives.
          </p>
          <Button href="/connect">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}