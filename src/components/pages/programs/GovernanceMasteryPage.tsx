import type { SiteContent } from '../../../App';
import { ProgramHero } from '../../ProgramHero';
import { ProgramDetails } from '../../ProgramDetails';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../../ui/accordion';

interface GovernanceMasteryPageProps {
  content: SiteContent;
}

export function GovernanceMasteryPage({ content }: GovernanceMasteryPageProps) {
  const programData = {
    title: 'AI4Business – Governance Mastery',
    format: 'Corporate Training',
    duration: '2 days',
    level: 'Operational & Advanced',
    audience: 'Managers, risk, compliance, legal teams',
    prerequisites: 'Participants should have completed AI4Business Ethics & Governance or possess equivalent foundational AI literacy.',
    
    overview: "Governance Mastery is an intensive, hands-on program for those responsible for operationalizing AI governance. Over two days, you'll master the SSK Framework (Ownership-Boundaries-Evidence), learn to map ethical principles to measurable technical metrics, and design human oversight mechanisms that work in practice—not just in policy documents. This is governance that ships, not governance that sits in a drawer.",

    topics: [
      'The SSK Framework: Ownership (who decides), Boundaries (what\'s allowed), Evidence (how we know)',
      'EU AI Act operational compliance: Translating legal requirements into technical controls',
      'Risk taxonomy and assessment: Identifying and prioritizing AI risks across the lifecycle',
      'Ethical principles to technical metrics: Making fairness, transparency, and accountability measurable',
      'Human oversight design: Building meaningful review mechanisms that don\'t slow down innovation',
      'Incident management and escalation protocols for AI systems',
      'Documentation and auditability: What records to keep and how to structure them',
      'Cross-functional governance: Aligning product, legal, risk, and engineering teams',
      'Third-party AI vendor assessment and contract governance',
      'Continuous monitoring and governance maturity evolution'
    ],

    outcomes: [
      'Apply the SSK Framework to design governance structures',
      'Operationalize EU AI Act compliance requirements',
      'Translate ethical principles into technical KPIs and monitoring systems',
      'Design and implement effective human oversight mechanisms',
      'Conduct risk assessments and manage AI incidents',
      'Build cross-functional governance processes that actually work'
    ],

    whoShouldAttend: [
      'AI governance and ethics officers',
      'Risk and compliance managers',
      'Legal teams overseeing AI deployments',
      'Product managers responsible for high-risk AI systems',
      'Engineering leads implementing governance controls',
      'Operations managers coordinating cross-functional AI projects'
    ],

    deliveryFormat: 'Two full days (or four half-days) combining lectures, workshops, and practical exercises. Participants work through real-world case studies and leave with governance frameworks tailored to their organizational context. In-person preferred; virtual available.',
    
    groupSize: 'Optimal: 12-20 participants for interactive exercises. Maximum 25 to maintain quality.',

    compliance: [
      'EU AI Act (full operational compliance)',
      'ISO 42001',
      'NIST AI Risk Management Framework',
      'GDPR (where applicable)',
      'Sector-specific regulations'
    ],

    certificate: 'Participants receive a Certificate of Advanced AI Governance Mastery from STRATRI.',

    durationBreakdown: [
      'Day 1 Morning: SSK Framework & Risk Assessment (4 hours)',
      'Day 1 Afternoon: Principles to Metrics (4 hours)',
      'Day 2 Morning: Human Oversight & Incident Management (4 hours)',
      'Day 2 Afternoon: Operational Integration & Case Studies (4 hours)'
    ]
  };

  const deepDiveTopics = [
    {
      title: 'The SSK Framework: Ownership-Boundaries-Evidence',
      content: 'Effective governance answers three questions: Who owns decisions at each stage? What boundaries constrain those decisions? What evidence proves compliance with those boundaries? The SSK Framework structures governance around these questions, making abstract principles concrete. Participants learn to apply SSK across the AI lifecycle—from procurement to deployment to decommissioning.'
    },
    {
      title: 'Principles to Metrics: Making Ethics Measurable',
      content: 'Everyone agrees AI should be "fair" and "transparent"—but what does that mean in practice? This module teaches you to translate high-level ethical principles into measurable technical metrics. You\'ll learn to define fairness metrics appropriate to your context, design transparency mechanisms that meet regulatory standards, and implement accountability trails that survive audits.'
    },
    {
      title: 'Human Oversight That Works',
      content: 'Human oversight is legally required for high-risk AI systems, but poorly designed oversight becomes either a rubber stamp or a bottleneck. We cover the spectrum: when to require human-in-the-loop approval, when human-on-the-loop monitoring suffices, and when human-in-command governance is needed. You\'ll design review processes calibrated to actual risk levels.'
    },
    {
      title: 'EU AI Act Operational Compliance',
      content: 'The EU AI Act sets legal requirements, but turning those into operational systems is complex. This deep dive walks through risk classification, conformity assessment procedures, documentation obligations, post-market monitoring, and incident reporting. You\'ll leave knowing exactly what your organization must do to comply—and how to integrate it into existing workflows.'
    },
    {
      title: 'Third-Party AI Governance',
      content: 'Most organizations don\'t build all their AI in-house. Governing third-party AI tools requires different strategies: vendor assessment criteria, contractual clauses that allocate risk, integration testing for ethical performance, and ongoing monitoring. We provide frameworks and checklists for managing AI supply chains responsibly.'
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
            Why Governance Mastery?
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-[#1A1A1AB3] font-sans leading-relaxed">
            <p>
              Most AI governance training stops at awareness. Governance Mastery starts where awareness ends. This program is for practitioners who need to actually build, implement, and maintain governance systems—not just understand them in theory.
            </p>
            
            <p>
              The SSK Framework (Ownership-Boundaries-Evidence) gives you a repeatable structure for designing governance that adapts to different AI systems, risk profiles, and organizational contexts. It's not a one-size-fits-all template—it's a thinking tool that scales from small pilots to enterprise-wide deployments.
            </p>
            
            <p>
              By the end of two days, participants leave with more than knowledge. They leave with frameworks they can apply immediately, templates they can customize, and the confidence to navigate governance challenges as they arise. This is the program for people who need governance to work in practice, not just look good on paper.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 text-[#1A1A1A]">
            Ready to Master AI Governance?
          </h2>
          <p className="text-lg text-[#1A1A1AB3] font-sans mb-8">
            Limited cohorts available. Contact us to reserve your team's spot.
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
