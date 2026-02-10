import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { LiteracyInk } from '../visuals';
import { Check, Users, Shield, Lightbulb, ArrowRight } from 'lucide-react';

interface AI4WhomTrainingPageProps {
  content: SiteContent;
}

export function AI4WhomTrainingPage({ content }: AI4WhomTrainingPageProps) {
  const programs = [
    {
      title: 'AI4Everyone – Ethics & Governance Essentials',
      badge: 'Open Enrollment',
      badgeColor: '#8B9D83',
      metaLine: '4 hours | Awareness & Literacy | Open to all',
      audience: 'For: Students, career changers, professionals entering AI-adjacent roles',
      description: 'Build foundational AI literacy through practical understanding of AI types, ethical reasoning, and algorithmic harms. Learn the Data-Algorithm-Compute triad, distinguish supervised vs. unsupervised vs. reinforcement learning, and understand agentic AI levels 0-3 with daily examples. Master the AI4Whom 6 Questions framework to identify risks and know when to escalate decisions. Fulfills EU AI Act Article 4 individual literacy requirements.',
      whatYouLearn: [
        'AI anatomy: Data, Algorithm, Compute with ESG dimensions',
        'Machine learning types: Supervised, unsupervised, reinforcement',
        'Agentic AI levels 0-3: From prediction to bounded autonomy',
        'Ethical principles: Fairness, transparency, accountability, privacy',
        'AI4Whom 6 Questions ethical reasoning framework',
        'Automation bias awareness and verification strategies'
      ],
      format: '4 modules | Interactive exercises | Certificate of completion | Pocket reference card',
      compliance: 'EU AI Act Article 4 individual literacy requirement',
      contactSlug: 'ai4everyone'
    },
    {
      title: 'AI4Business – Ethics & Governance',
      badge: 'Corporate Training',
      badgeColor: '#4A90A4',
      metaLine: '4 hours | Role-Aware Foundation | Organization-wide',
      audience: 'For: All employees—sales, marketing, HR, operations, finance, customer service',
      description: 'Organization-wide AI literacy training tailored to your company\'s actual AI systems and tools. We begin with a discovery phase mapping your AI ecosystem, then customize examples to roles: marketers learn prompt governance for content generation, HR teams explore bias in hiring algorithms, sales understands CRM automation boundaries. Establishes shared ethical vocabulary and escalation protocols across departments. Directly fulfills EU AI Act Article 4 organizational training obligations.',
      whatYouLearn: [
        'Role-specific AI use cases from your actual tool stack',
        'The AI Triad applied to your organization\'s systems',
        'Agentic AI levels: Which do you encounter in your role?',
        'Automation bias and human oversight responsibilities',
        'Fairness concerns in your department\'s AI applications',
        'Escalation protocols and accountability chains',
        'Your company\'s AI governance policies in practice'
      ],
      format: '4 modules | Discovery phase pre-work | Role-based breakout sessions | Company-specific examples | Certificate of completion',
      compliance: 'EU AI Act Article 4 organizational training requirement | GDPR/KVKK awareness',
      prerequisites: null,
      contactSlug: 'ai4business-eg'
    },
    {
      title: 'AI4Business – Governance Mastery',
      badge: 'Corporate Training - Advanced',
      badgeColor: '#4A90A4',
      metaLine: '2 days | Operational & Advanced | Managers & Compliance Teams',
      audience: 'For: Project managers, product owners, risk/compliance/legal/audit professionals, AI system designers',
      prerequisites: 'Requires: AI4Business E&G or equivalent organizational AI literacy',
      description: 'Transform the AI4Whom 6 Questions into operational governance with the SSK Framework (Sahiplik-Sınırlar-Kanıt / Ownership-Boundaries-Evidence). Master ISO 42001, NIST AI RMF, and Singapore Model AI Governance frameworks. Map ethical principles to technical metrics, design human oversight mechanisms for each agentic AI level, conduct fairness audits, build MLOps governance workflows, and implement red-teaming protocols. Operationalize EU AI Act compliance with audit-ready documentation and model cards.',
      whatYouLearn: [
        'SSK Framework (Ownership-Boundaries-Evidence) operational implementation',
        'ISO/IEC 42001 AI management systems architecture',
        'NIST AI RMF: Map, Measure, Manage, Govern functions',
        'Singapore Model AI Governance Framework integration',
        'EU AI Act high-risk system requirements and compliance workflows',
        'Fairness metrics and algorithmic auditing techniques',
        'Human oversight design for agentic AI levels 1-3',
        'Model cards, audit trails, and incident response protocols',
        'MLOps governance: Version control, testing, monitoring',
        'Red-teaming and adversarial testing methodologies'
      ],
      format: '2 days (7h 10min content + 75min breaks/lunch) | Workshop-intensive | Policy template exercises | Hands-on SSK framework application | Certificate of mastery',
      compliance: 'ISO 42001 aligned | NIST AI RMF ready | EU AI Act operational compliance',
      contactSlug: 'governance-mastery'
    },
    {
      title: 'AI4Strategy – RAI as ROI',
      badge: 'Executive Education',
      badgeColor: '#C67B5C',
      metaLine: '4 hours (modular) | Strategic & Embedded | C-Suite & Board',
      audience: 'For: CEO, CTO, CDO, CRO, CHRO, CFO, CLO, board members, chief risk officers, compliance directors',
      description: 'Case-driven executive program demonstrating how responsible AI governance creates measurable business value and competitive moats. Explore the 12-24 month strategic horizon for agentic AI deployment, translate technical risks into board-legible KPIs, and embed AI governance into existing risk frameworks without creating bureaucratic friction. Discussion-intensive format with minimal slides and maximum peer exchange. Pre-work includes 10-question organizational AI maturity assessment; aggregated results presented in Module 1 for benchmarking.',
      whatYouLearn: [
        'Responsible AI governance as competitive differentiation',
        'Agentic AI strategic risk modeling: 12-24 month horizon',
        'Regulatory horizon scanning: EU AI Act, GDPR/KVKK convergence',
        'Board oversight structures for AI system accountability',
        'Compute ESG metrics for investor and stakeholder reporting',
        'AI governance integration with existing enterprise risk management',
        'KPIs that matter: Translating technical metrics to board dashboards',
        'M&A due diligence for AI-enabled companies',
        'AI governance in brand reputation and public trust',
        'Building governance capacity without slowing innovation'
      ],
      format: '4 modules (modular, customizable) | Case method | Pre-work: Maturity assessment | Discussion-intensive | Minimal slides | Certificate of completion',
      preWork: 'Pre-Work: 10-question AI maturity self-assessment sent 1 week prior (15 min completion)',
      deliveryStyle: 'Delivery Style: Executive education format—peer discussion, case analysis, strategic frameworks',
      contactSlug: 'ai4strategy'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: content.colors.cream }}>
      {/* Hero Section - Dark teal gradient background */}
      <section 
        className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #2C5F6F 0%, #184A5A 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Label/Tag */}
          <div className="text-center mb-6">
            <span 
              className="inline-block px-4 py-2 rounded-sm border text-xs font-sans font-semibold uppercase tracking-wider"
              style={{ 
                borderColor: '#9FB7C8',
                color: '#9FB7C8'
              }}
            >
              AI Governance & Ethics Literacy
            </span>
          </div>

          {/* Title */}
          <h1 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-center mb-8"
            style={{ color: '#FEFBF8', letterSpacing: '-0.02em' }}
          >
            AI4Whom Training Portfolio
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-center leading-relaxed font-sans" style={{ color: '#FEFBF8E6' }}>
              We equip organizations and individuals with the literacy, frameworks, and strategic mindset to deploy AI responsibly—turning ethical governance into competitive advantage.
            </p>
            <p className="text-base sm:text-lg text-center leading-relaxed font-sans" style={{ color: '#FEFBF8E6' }}>
              Our curriculum architecture is built on a common spine: the <strong style={{ color: '#FEFBF8' }}>AI Triad</strong> (Data-Algorithm-Compute), <strong style={{ color: '#FEFBF8' }}>agentic AI maturity levels</strong>, and the <strong style={{ color: '#FEFBF8' }}>AI4Whom 6 Questions</strong> framework. Each program deepens these foundations according to audience needs—from awareness to board-level strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Common Spine Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-center" style={{ color: content.colors.dark }}>
            A Shared Foundation Across All Programs
          </h2>
          <p className="text-base sm:text-lg max-w-4xl mx-auto text-center mb-12 font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
            Every AI4Whom program shares a common backbone. Depth, examples, and exercises change by audience—but structural foundations remain consistent, creating a shared language across all organizational levels.
          </p>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: AI Triad */}
            <div className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#4A90A420' }}>
                <div className="w-6 h-6" style={{ 
                  borderLeft: '2px solid #4A90A4',
                  borderRight: '2px solid #4A90A4',
                  borderBottom: '2px solid #4A90A4',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                The AI Triad
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Data, Algorithm, Compute—the three pillars of every AI system. We teach how bias enters through data collection, how models make decisions through supervised, unsupervised, and reinforcement learning, and the ESG implications of computational infrastructure: energy consumption, water usage, and supply chain impacts.
              </p>
            </div>

            {/* Column 2: Agentic AI Levels */}
            <div className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#4A90A420' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                Agentic AI Maturity
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Four-level framework from non-agentic prediction (Level 0) to semi-autonomous operation (Level 3). Every program teaches the same levels with audience-appropriate examples: Level 1 tool-using agents, Level 2 planning and chaining, Level 3 bounded autonomy. Understand which governance controls apply at each maturity stage.
              </p>
            </div>

            {/* Column 3: AI4Whom 6 Questions */}
            <div className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-sm" style={{ backgroundColor: '#4A90A420' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A90A4" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                AI4Whom 6 Questions
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                An ethical reasoning framework embedded across all programs: (1) Is this AI-generated? (2) Who owns/is responsible? (3) What data, what boundaries? (4) How do I verify? (5) Who's affected, is it fair? (6) Who do I escalate to? From pocket card in AI4Everyone to board KPI dashboard in AI4Strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-4 text-center" style={{ color: content.colors.dark }}>
            Four Programs, One Coherent Journey
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-12 font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
            Build AI governance capacity from frontline awareness to strategic leadership
          </p>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: 'rgba(74, 144, 164, 0.2)' }}
              >
                {/* Badge */}
                <div className="mb-4">
                  <span 
                    className="inline-block px-3 py-1 rounded-sm text-xs font-sans font-semibold text-white"
                    style={{ backgroundColor: program.badgeColor }}
                  >
                    {program.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-medium mb-3" style={{ color: content.colors.dark }}>
                  {program.title}
                </h3>

                {/* Meta line */}
                <p className="font-sans text-sm mb-2 font-medium" style={{ color: content.colors.accent }}>
                  {program.metaLine}
                </p>

                {/* Audience */}
                <p className="font-sans text-xs mb-4 italic" style={{ color: `${content.colors.dark}99` }}>
                  {program.audience}
                </p>

                {/* Prerequisites if applicable */}
                {program.prerequisites && (
                  <p className="font-sans text-xs mb-4 font-semibold" style={{ color: '#C67B5C' }}>
                    {program.prerequisites}
                  </p>
                )}

                {/* Description */}
                <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: `${content.colors.dark}B3` }}>
                  {program.description}
                </p>

                {/* What You'll Learn */}
                <div className="mb-6">
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: content.colors.dark }}>
                    What You'll Learn
                  </h4>
                  <ul className="space-y-2">
                    {program.whatYouLearn.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1 flex-shrink-0">
                          <Check className="w-4 h-4" style={{ color: '#4A90A4' }} />
                        </span>
                        <span className="font-sans text-sm" style={{ color: `${content.colors.dark}B3` }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Format */}
                {program.format && (
                  <div className="mb-4">
                    <p className="font-sans text-xs font-semibold mb-1" style={{ color: content.colors.dark }}>
                      Program Format:
                    </p>
                    <p className="font-sans text-xs italic" style={{ color: `${content.colors.dark}99` }}>
                      {program.format}
                    </p>
                  </div>
                )}

                {/* Compliance */}
                {program.compliance && (
                  <div className="mb-4">
                    <p className="font-sans text-xs font-semibold mb-1" style={{ color: content.colors.dark }}>
                      Compliance:
                    </p>
                    <p className="font-sans text-xs font-semibold" style={{ color: '#4A90A4' }}>
                      {program.compliance}
                    </p>
                  </div>
                )}

                {/* Pre-Work (for AI4Strategy) */}
                {(program as any).preWork && (
                  <div className="mb-4">
                    <p className="font-sans text-xs italic" style={{ color: `${content.colors.dark}99` }}>
                      {(program as any).preWork}
                    </p>
                  </div>
                )}

                {/* Delivery Style (for AI4Strategy) */}
                {(program as any).deliveryStyle && (
                  <div className="mb-4">
                    <p className="font-sans text-xs italic" style={{ color: `${content.colors.dark}99` }}>
                      {(program as any).deliveryStyle}
                    </p>
                  </div>
                )}

                {/* Button */}
                <a
                  href={`/connect?program=${program.contactSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-sm font-sans text-sm font-semibold transition-all duration-200 hover:bg-opacity-10"
                  style={{ 
                    borderColor: '#4A90A4',
                    color: '#4A90A4',
                    backgroundColor: 'transparent'
                  }}
                >
                  Contact Us for Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI4Whom Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            Why Organizations Choose AI4Whom
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#4A90A420' }}>
                <Users className="w-8 h-8" style={{ color: '#4A90A4' }} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                Shared Language, Scalable Governance
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Our common spine architecture ensures executives, middle managers, and frontline employees speak the same AI governance language—from the 6 Questions framework to agentic AI levels. This creates organizational coherence rare in fragmented AI training markets. When your board discusses "Level 2 agentic systems," your product teams know exactly what that means.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#4A90A420' }}>
                <Shield className="w-8 h-8" style={{ color: '#4A90A4' }} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                Regulatory-Ready, Business-Focused
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                We embed EU AI Act, ISO 42001, and NIST AI RMF compliance without sacrificing strategic agility. Our training doesn't just check regulatory boxes—it builds governance structures that accelerate responsible innovation. Compliance becomes a strategic asset, not a compliance burden.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#4A90A420' }}>
                <Lightbulb className="w-8 h-8" style={{ color: '#4A90A4' }} />
              </div>
              <h3 className="font-sans text-xl font-bold mb-3" style={{ color: content.colors.dark }}>
                Customized to Your Reality
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Every corporate program begins with discovery: we map your AI tools, data practices, and risk exposure before a single slide is delivered. You won't hear generic ChatGPT examples—you'll work with your actual CRM system, your hiring algorithm, your supply chain optimization model. Your risks, your governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            From Discovery to Delivery
          </h2>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Discovery & Assessment',
                description: 'For corporate programs: 1-2 week discovery phase mapping your AI ecosystem, data practices, tool stack, and regulatory obligations. We identify which teams encounter which agentic AI levels and where governance gaps exist.'
              },
              {
                number: '2',
                title: 'Customization',
                description: 'We adapt examples, case studies, and exercises to your industry, products, and actual AI use cases. Your marketing team learns from your CRM system, not generic scenarios.'
              },
              {
                number: '3',
                title: 'Delivery',
                description: 'Interactive modules with role-based breakouts, ethical dilemma workshops, and hands-on policy development. We train, you practice, we refine together.'
              },
              {
                number: '4',
                title: 'Reinforcement',
                description: 'Post-training: pocket cards with AI4Whom 6 Questions, policy templates, escalation trees, and optional follow-up sessions as regulatory landscape evolves.'
              }
            ].map((step) => (
              <div key={step.number} className="flex items-start gap-6 border-l-4 pl-6" style={{ borderColor: '#4A90A4' }}>
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full font-serif text-xl font-bold"
                  style={{ backgroundColor: '#4A90A4', color: '#FFFFFF' }}
                >
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-sans text-xl font-bold mb-2" style={{ color: content.colors.dark }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Alignment Section - Dark teal */}
      <section 
        className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #2C5F6F 0%, #184A5A 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" style={{ color: '#FEFBF8' }}>
            Built for Regulatory Reality
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-sans mb-8" style={{ color: '#FEFBF8E6' }}>
            AI4Whom programs align with international AI governance standards and regulatory frameworks. Whether you're navigating EU AI Act obligations, pursuing ISO 42001 certification, or implementing NIST AI RMF, our training provides the literacy and operational frameworks your teams need.
          </p>

          {/* Logo/badge grid */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-sans font-semibold" style={{ color: '#9FB7C8' }}>
            <span className="px-4 py-2 border rounded-sm" style={{ borderColor: '#9FB7C8' }}>
              EU AI Act Article 4
            </span>
            <span className="px-4 py-2 border rounded-sm" style={{ borderColor: '#9FB7C8' }}>
              ISO/IEC 42001
            </span>
            <span className="px-4 py-2 border rounded-sm" style={{ borderColor: '#9FB7C8' }}>
              NIST AI RMF
            </span>
            <span className="px-4 py-2 border rounded-sm" style={{ borderColor: '#9FB7C8' }}>
              Singapore Model AI Governance
            </span>
            <span className="px-4 py-2 border rounded-sm" style={{ borderColor: '#9FB7C8' }}>
              GDPR/KVKK
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: '#F8F6F3' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Ready to Build AI Governance Capacity?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-sans mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss which AI4Whom programs align with your organizational maturity, regulatory requirements, and strategic objectives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/connect">Get in Touch</Button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-sm font-sans text-sm font-semibold transition-all duration-200"
              style={{ 
                borderColor: '#4A90A4',
                color: '#4A90A4',
                backgroundColor: 'transparent'
              }}
            >
              Download Overview
            </a>
          </div>
          
          {/* Small text below buttons */}
          <p className="mt-6 text-xs font-sans" style={{ color: `${content.colors.dark}99` }}>
            Corporate programs include complimentary discovery phase
          </p>
        </div>
      </section>
    </div>
  );
}