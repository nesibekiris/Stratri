import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { RailwayVisual } from '../visuals';
import { Check, BookOpen } from 'lucide-react';

interface AIMaturityGovernancePageProps {
  content: SiteContent;
}

export function AIMaturityGovernancePage({ content }: AIMaturityGovernancePageProps) {
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
            <span style={{ color: content.colors.dark }}>AI Maturity & Governance Advisory</span>
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
            AI Maturity & Governance Advisory
          </h1>
          
          <p 
            className="text-xl sm:text-2xl font-medium mb-8"
            style={{ 
              color: content.colors.accent,
              fontFamily: 'IBM Plex Serif, Georgia, serif'
            }}
          >
            From scattered experiments to coherent strategy—with governance that works
          </p>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed font-sans" style={{ color: `${content.colors.dark}B3` }}>
            <p>
              Most organizations have AI pilots scattered across departments: a chatbot in customer service, a recommendation engine in marketing, an automation script in operations. Few have a strategy that connects those pilots to business value, societal impact, regulatory obligations, and long-term competitive positioning.
            </p>
            <p>
              STRATRI works on two fronts. First, we help you understand where you truly are in your AI journey through honest assessments across products, data infrastructure, governance maturity, and team capabilities. We surface where innovation actually lives—not just in strategy decks, but in workflows, relationships, and quiet experiments no one has mapped yet.
            </p>
            <p>
              Second, we design the governance and strategy structures that turn experiments into coherent plans. We build roadmaps that link experimentation to measurable outcomes. We define operating models using our R.A.I.L.W.A.Y. Framework—a governance methodology that connects leadership decisions to frontline actions. We create policies, review mechanisms, and compliance strategies so innovation does not outrun responsibility.
            </p>
            <p style={{ color: content.colors.dark, fontWeight: 500 }}>
              This is not a 200-slide deck. It is strategy and governance that travels across your organization and adapts as technology, regulation, and market conditions shift.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Maturity & Strategy */}
            <div className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-6" style={{ color: content.colors.accent }}>
                AI Maturity & Strategy
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    AI Maturity Assessments & Diagnostics
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    Comprehensive evaluation across six dimensions: technology infrastructure, data readiness, algorithmic capabilities, governance structures, workforce literacy, and regulatory preparedness. We identify where you are, where gaps exist, and what closing them requires.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    Strategic Roadmaps
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    Plans aligned with business objectives, societal value, and public trust. We map dependencies, define milestones, identify quick wins and long-term bets, and create decision frameworks for build/buy/partner choices.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    Operating Models & Decision Rights
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    Role definitions, accountability structures, and workflows for responsible AI deployment. Who approves high-risk systems? Who owns fairness audits? How do product, legal, and ethics teams collaborate without bottlenecks?
                  </p>
                </div>
              </div>
            </div>

            {/* AI Governance & Compliance */}
            <div className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-6" style={{ color: content.colors.accent }}>
                AI Governance & Compliance
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    Governance Frameworks & Policies (Built with R.A.I.L.W.A.Y.)
                  </h4>
                  <p className="font-sans text-sm leading-relaxed mb-2" style={{ color: `${content.colors.dark}B3` }}>
                    Custom governance architectures that start from your values and regulatory obligations. We use our R.A.I.L.W.A.Y. Framework—a two-level system with macro strategy (7 phases) and micro operations (R.A.I.L. Loop)—to connect leadership direction to frontline decisions.
                  </p>
                  <a 
                    href="#railway-section"
                    className="inline-flex items-center gap-1 text-sm font-sans font-semibold hover:underline"
                    style={{ color: '#4A90A4' }}
                  >
                    Learn more about R.A.I.L.W.A.Y. Framework →
                  </a>
                </div>

                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    Ethical Review Mechanisms
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    AI ethics committees, review boards, red-teaming protocols, fairness auditing. We operationalize principles: What does "fairness" mean for your hiring algorithm? What does "human oversight" mean for Level 2 agentic systems?
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    EU AI Act Compliance & ISO 42001 Readiness
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    High-risk system identification, compliance workflows, ISO/IEC 42001 certification preparation, NIST AI RMF implementation. We map your AI systems to regulatory requirements and build audit-ready documentation.
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-base font-bold mb-2" style={{ color: content.colors.dark }}>
                    Advisory on AI System Design, Risk Assessment & Compliance Strategy
                  </h4>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    Technical governance: Model cards, data lineage tracking, risk classification, vendor due diligence frameworks, procurement controls, audit trails, and incident response protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R.A.I.L.W.A.Y. Framework Section */}
      <section 
        id="railway-section"
        className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 scroll-mt-24"
        style={{ 
          background: 'linear-gradient(135deg, #2C5F6F 0%, #184A5A 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Label */}
          <div className="text-center mb-6">
            <span 
              className="inline-block px-4 py-2 rounded-sm border text-xs font-sans font-semibold uppercase tracking-wider"
              style={{ 
                borderColor: '#9FB7C8',
                color: '#9FB7C8'
              }}
            >
              Our Governance Framework for Responsible AI
            </span>
          </div>
          
          {/* Title */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-center" style={{ color: '#FEFBF8', letterSpacing: '-0.02em' }}>
            R.A.I.L.W.A.Y. Framework
          </h2>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-medium text-center mb-8" style={{ color: '#9FB7C8', fontFamily: 'IBM Plex Serif, Georgia, serif' }}>
            Structure, direction, and confidence for the AI journey
          </p>

          {/* Description */}
          <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
            <p className="font-sans text-base sm:text-lg leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              Most governance frameworks live in documents on SharePoint. <strong style={{ color: '#FEFBF8' }}>R.A.I.L.W.A.Y.</strong> lives in how your organization actually works.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              We designed R.A.I.L.W.A.Y. after seeing the same pattern: principles without practice, or controls without strategy. Organizations needed a system that connects leadership decisions to frontline actions and adapts as regulations and risks evolve.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              R.A.I.L.W.A.Y. operates on two integrated levels: a <strong style={{ color: '#FEFBF8' }}>macro framework</strong> that sets strategic direction across seven phases, and a <strong style={{ color: '#FEFBF8' }}>micro loop (R.A.I.L.)</strong> that embeds responsible decision-making into everyday operations. Both are aligned with ISO/IEC 42001.
            </p>
          </div>

          {/* Railway Visual */}
          <div className="mb-20">
            <RailwayVisual className="w-full max-w-4xl mx-auto" />
          </div>

          {/* The Macro Framework (7 Phases) */}
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-medium mb-3 text-center" style={{ color: '#FEFBF8' }}>
              The Macro Framework (7 Phases)
            </h3>
            <p className="font-sans text-base mb-8 text-center italic" style={{ color: '#9FB7C8' }}>
              Strategic direction across the full AI governance lifecycle
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  letter: 'R',
                  title: 'Recognize',
                  description: 'What you are building, its risks and responsibilities. Build your AI inventory, identify risks, establish accountability before you scale.'
                },
                {
                  letter: 'A',
                  title: 'Architect',
                  description: 'The strategy and alignment. Define your AI strategy in connection with organizational values and objectives. Make trade-offs explicit.'
                },
                {
                  letter: 'I',
                  title: 'Institutionalize',
                  description: 'Policies, infrastructure, and capabilities. Create policies, allocate resources, build governance infrastructure.'
                },
                {
                  letter: 'L',
                  title: 'Learn & Lift',
                  description: 'AI literacy across the organization. Train teams, build workforce confidence, develop insight capabilities at every level.',
                  note: 'This connects to AI4Whom Training.'
                },
                {
                  letter: 'W',
                  title: 'Workflows with R.A.I.L.',
                  description: 'Operational integration. Embed the R.A.I.L. Loop into daily operations so governance is not separate from work but part of it.',
                  highlight: true
                },
                {
                  letter: 'A',
                  title: 'Assess',
                  description: 'Performance, compliance, and the regulatory landscape. Monitor metrics, conduct audits, track compliance.'
                },
                {
                  letter: 'Y',
                  title: 'Yield & Adapt',
                  description: 'To the evolving AI landscape. Learn from what you measure, improve continuously, adapt to new regulations and emerging risks.'
                }
              ].map((phase, index) => (
                <div 
                  key={`${phase.letter}-${index}`} 
                  className={`border rounded-sm p-6 ${phase.highlight ? 'ring-2 ring-offset-2' : ''}`}
                  style={{ 
                    borderColor: phase.highlight ? '#9FB7C8' : '#FEFBF820', 
                    backgroundColor: phase.highlight ? '#1d5768' : '#184A5A80',
                    ringColor: phase.highlight ? '#9FB7C8' : undefined,
                    ringOffsetColor: phase.highlight ? '#2C5F6F' : undefined
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-sm"
                      style={{ backgroundColor: '#9FB7C8' }}
                    >
                      <span className="font-serif text-2xl font-medium" style={{ color: '#1E2A45' }}>
                        {phase.letter}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-sans text-base font-bold mb-2" style={{ color: '#FEFBF8' }}>
                        {phase.title}
                      </h4>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                        {phase.description}
                      </p>
                      {phase.note && (
                        <p className="font-sans text-xs mt-2 italic" style={{ color: '#9FB7C8' }}>
                          {phase.note}
                        </p>
                      )}
                      {phase.highlight && (
                        <p className="font-sans text-xs mt-2 font-semibold" style={{ color: '#9FB7C8' }}>
                          This is the integration point.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The R.A.I.L. Loop (Operational) */}
          <div className="mb-12 border-t pt-16" style={{ borderColor: '#FEFBF820' }}>
            <h3 className="font-serif text-3xl font-medium mb-3 text-center" style={{ color: '#FEFBF8' }}>
              The R.A.I.L. Loop (Operational)
            </h3>
            <p className="font-sans text-base mb-8 text-center italic" style={{ color: '#9FB7C8' }}>
              Four steps that bring governance into everyday decisions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  step: 'Reflect',
                  description: 'What could go wrong? Who is affected? Are there fairness or rights concerns?'
                },
                {
                  step: 'Align',
                  description: 'Check policies, classify risk level, route for approval if needed.'
                },
                {
                  step: 'Implement',
                  description: 'Execute with human oversight, testing, monitoring, appropriate technical controls.'
                },
                {
                  step: 'Log',
                  description: 'Document decisions, create model cards, maintain audit trails.'
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 mt-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#9FB7C8' }}
                  />
                  <div className="flex-1">
                    <h4 className="font-sans text-base font-bold mb-1" style={{ color: '#FEFBF8' }}>
                      {item.step}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Integration Point */}
          <div className="mb-8 p-8 rounded-sm border" style={{ backgroundColor: '#0F3642', borderColor: '#FEFBF820' }}>
            <h4 className="font-sans text-lg font-bold mb-3" style={{ color: '#FEFBF8' }}>
              The Integration Point
            </h4>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              The <strong style={{ color: '#FEFBF8' }}>W</strong> phase of R.A.I.L.W.A.Y. (Workflows with R.A.I.L.) is where governance strategy meets operational execution. Leadership sets direction through the macro framework, frontline teams apply it through the micro loop, and insights flow back up to inform strategy. This is how governance becomes culture, not paperwork.
            </p>
          </div>

          {/* ISO 42001 Alignment */}
          <div className="text-center p-6 rounded-sm border" style={{ backgroundColor: '#0F3642', borderColor: '#FEFBF820' }}>
            <h4 className="font-sans text-base font-bold mb-2" style={{ color: '#FEFBF8' }}>
              ISO 42001 Alignment
            </h4>
            <p className="font-sans text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: '#FEFBF8E6' }}>
              R.A.I.L.W.A.Y. is designed to support compliance with ISO/IEC 42001, the international standard for AI management systems. Each phase maps to specific ISO clauses, making audit preparation and certification readiness a natural outcome of implementation.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            How We Work
          </h2>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Recognize the Junctions',
                description: 'We surface where innovation actually lives in your organization through interviews, system mapping, workflow observation.'
              },
              {
                number: '2',
                title: 'Design the Strategic Layer',
                description: 'Together, we build structures that connect technology, policy, and society: governance frameworks, roadmaps, operating models, R.A.I.L.W.A.Y. implementation.'
              },
              {
                number: '3',
                title: 'Embed and Iterate',
                description: 'Strategy and governance are practices, not documents. We stay close as you roll out, adjust to regulatory shifts, and learn from real cases.'
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

      {/* Who This Is For Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            Who This Is For
          </h2>

          <ul className="space-y-4 max-w-3xl mx-auto">
            {[
              'Technology companies moving from experiments to production AI systems',
              'Organizations deploying AI across operations in retail, manufacturing, fintech, healthtech',
              'Companies facing EU AI Act obligations or pursuing ISO 42001 certification',
              'Leadership teams needing both strategy AND governance in one coherent system',
              'Organizations where innovation is outrunning accountability structures',
              'Boards requiring oversight frameworks that connect to operational reality'
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

      {/* Related Services Callout */}
      <section className="py-12 px-6 lg:px-8 border-t border-b" style={{ backgroundColor: '#F8F6F3', borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: '#4A90A420' }}>
              <BookOpen className="w-6 h-6" style={{ color: '#4A90A4' }} />
            </div>
            <div className="flex-1">
              <h3 className="font-sans text-lg font-bold mb-2" style={{ color: content.colors.dark }}>
                Need AI Literacy Training?
              </h3>
              <p className="font-sans text-sm leading-relaxed mb-3" style={{ color: `${content.colors.dark}B3` }}>
                Our AI4Whom Training portfolio supports the "Learn & Lift" phase of R.A.I.L.W.A.Y., building literacy from individual awareness to board strategy.
              </p>
              <a
                href="/services/ai4whom-training"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/services/ai4whom-training');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 text-sm font-sans font-semibold hover:underline"
                style={{ color: '#4A90A4' }}
              >
                Explore AI4Whom Training →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 lg:px-8" style={{ backgroundColor: content.colors.cream }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Ready to Build Strategy and Governance That Work?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss how STRATRI can help your organization navigate the intersection of technology, policy, and society with coherent AI strategy and governance.
          </p>
          <Button href="/connect">Get in Touch</Button>
        </div>
      </section>
    </div>
  );
}
