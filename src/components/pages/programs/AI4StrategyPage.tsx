import type { SiteContent } from '../../../App';
import { ProgramHero } from '../../ProgramHero';
import { ProgramDetails } from '../../ProgramDetails';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../../ui/accordion';

interface AI4StrategyPageProps {
  content: SiteContent;
}

export function AI4StrategyPage({ content }: AI4StrategyPageProps) {
  const programData = {
    title: 'AI4Strategy – RAI as ROI',
    format: 'Executive Education',
    duration: '4 hours (modular)',
    level: 'Strategic & Embedded',
    audience: 'C-suite, board members, strategic leaders',
    
    overview: "AI4Strategy is an executive program built around a simple but transformative premise: Responsible AI (RAI) is not a compliance cost—it's a source of competitive advantage. Through case-driven analysis, board-level simulations, and strategic frameworks, you'll learn to recognize how ethical governance creates measurable business value, translate technical AI risks into strategic decision criteria, and ask the right questions to hold AI initiatives accountable.",

    topics: [
      'RAI as ROI: The business case for responsible AI governance',
      'Case studies: Organizations that gained competitive advantage through ethical AI',
      'Board-level AI oversight: What questions to ask, what metrics to track',
      'Translating technical risks into strategic language: From "bias" to "reputation risk"',
      'AI governance as enabler, not bottleneck: How to accelerate innovation responsibly',
      'Regulatory positioning: Turning EU AI Act compliance into market differentiation',
      'Stakeholder trust and brand equity: The long-term value of responsible AI',
      'Strategic KPIs for AI governance: Measuring what matters at the board level',
      'The AI4Whom framework for strategic decision-making',
      'Building AI accountability into organizational culture and incentives'
    ],

    outcomes: [
      'Articulate the strategic value of responsible AI governance to boards and investors',
      'Translate technical AI risks into business-relevant decision criteria',
      'Define board-level KPIs for monitoring AI initiatives',
      'Ask informed questions that hold AI teams accountable without micromanaging',
      'Position AI governance as competitive advantage, not compliance burden'
    ],

    whoShouldAttend: [
      'C-suite executives (CEO, CFO, CTO, COO, Chief Risk Officer)',
      'Board members overseeing technology strategy',
      'Strategic leaders responsible for AI transformation',
      'Investors and advisors evaluating AI companies',
      'Senior policymakers shaping organizational AI positions'
    ],

    deliveryFormat: 'Delivered as a concentrated half-day session or modular across multiple executive meetings. Combines case method teaching, board simulations, and facilitated discussions. Available in-person (preferred for board sessions) or virtual.',
    
    groupSize: 'Optimal: 8-15 executives for meaningful discussion. Can be customized for board retreats or executive teams.',

    compliance: [
      'Corporate Governance Best Practices',
      'ESG Reporting Standards',
      'EU AI Act (strategic implications)',
      'Fiduciary Responsibilities'
    ],

    certificate: 'Participants receive an Executive Certificate in Strategic AI Governance from STRATRI.',

    durationBreakdown: [
      'Module 1: RAI as ROI – The Strategic Case (90 min)',
      'Module 2: Board-Level Oversight & KPIs (90 min)',
      'Module 3: Case Simulations & Decision Frameworks (90 min)',
      'Optional: Follow-up advisory sessions (custom)'
    ]
  };

  const deepDiveTopics = [
    {
      title: 'RAI as ROI: The Business Case',
      content: "Responsible AI governance isn't philanthropy—it's strategy. Organizations that invest early in ethical AI frameworks experience fewer public incidents, faster regulatory approval, stronger customer trust, and better talent retention. We analyze real-world cases where responsible AI created measurable financial returns: reduced legal risk, premium pricing enabled by trust, and competitive moats built through transparency."
    },
    {
      title: 'Translating Technical Risks to Strategic Language',
      content: 'When an engineer says "the model has demographic parity issues," what does that mean for the business? This module teaches executives to decode technical AI language into strategic concerns: reputational risk, regulatory exposure, customer churn, talent attrition. You\'ll learn to bridge the gap between technical teams and boardrooms so governance conversations are grounded in business impact.'
    },
    {
      title: 'Board-Level AI Oversight',
      content: "Boards can't and shouldn't try to understand every algorithm. But they must ask the right questions. What are the strategic questions that reveal whether AI initiatives are managed responsibly? How do you hold teams accountable without slowing down innovation? This session provides frameworks for effective board oversight: what to monitor, when to intervene, and how to structure reporting."
    },
    {
      title: 'Strategic KPIs for AI Governance',
      content: "You can't manage what you don't measure. But traditional compliance metrics (number of policies, percentage of staff trained) don't reveal strategic outcomes. We help executives define meaningful KPIs: time-to-resolution for AI incidents, diversity metrics in training data, trust scores from customer surveys, regulatory approval timelines. Metrics that connect governance to business value."
    },
    {
      title: 'Regulatory Positioning as Competitive Advantage',
      content: 'The EU AI Act creates compliance burdens—but also opportunities. Early movers who build robust governance can market themselves as "trustworthy AI" providers, command premium pricing, and enter risk-averse markets (healthcare, finance, government) faster than competitors. This module shows how to turn regulatory compliance into strategic positioning.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ProgramHero {...programData} />

      {/* Program Details */}
      <ProgramDetails {...programData} />

      {/* Deep Dive Topics */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-8 text-[#1A1A1A]">
            Core Topics Deep Dive
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {deepDiveTopics.map((topic, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-[#1A1A1A0D] rounded-lg px-6"
              >
                <AccordionTrigger className="font-sans text-lg font-semibold text-[#1A1A1A] hover:text-[#4A90A4] py-4">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#1A1A1AB3] font-sans leading-relaxed pb-4">
                  {topic.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Why This Program */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-8 text-[#1A1A1A]">
            Why AI4Strategy?
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-[#1A1A1AB3] font-sans leading-relaxed">
            <p>
              Executives don't need to become AI engineers. But they do need to understand AI's strategic implications—and that's exactly what most executive education misses. AI4Strategy doesn't teach you how neural networks work. It teaches you how to govern AI systems in a way that creates business value.
            </p>
            
            <p>
              The program is built around real-world case studies: companies that succeeded because they invested in responsible AI, and companies that failed because they didn't. You'll see how governance decisions made at the board level ripple through organizations—and how strategic positioning around AI ethics can become a competitive moat.
            </p>
            
            <p>
              By the end, you won't just understand why responsible AI matters. You'll know how to measure it, how to incentivize it, and how to communicate its value to investors, regulators, and customers. That's the difference between AI governance as compliance theater and AI governance as strategic asset.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 text-[#1A1A1A]">
            Ready to Turn AI Governance into Competitive Advantage?
          </h2>
          <p className="text-lg text-[#1A1A1AB3] font-sans mb-8">
            Schedule a consultation to bring AI4Strategy to your board or executive team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/connect"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#4A90A4] text-white font-sans font-medium rounded hover:bg-[#C67B5C] transition-colors shadow-sm"
            >
              Contact Us
            </a>
            <button 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#4A90A4] border border-[#4A90A4] font-sans font-medium rounded hover:bg-[#4A90A40D] transition-colors"
              onClick={() => alert('Program overview PDF coming soon')}
            >
              Download Program Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
