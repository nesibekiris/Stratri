import type { SiteContent } from '../../../App';
import { ProgramHero } from '../../ProgramHero';
import { ProgramDetails } from '../../ProgramDetails';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../../ui/accordion';

interface AI4BusinessEthicsPageProps {
  content: SiteContent;
}

export function AI4BusinessEthicsPage({ content }: AI4BusinessEthicsPageProps) {
  const programData = {
    title: 'AI4Business – Ethics & Governance',
    format: 'Corporate Training',
    duration: '4 hours',
    level: 'Role-Aware Foundation',
    audience: 'All employees across departments',
    
    overview: "AI4Business Ethics & Governance is designed to meet EU AI Act Article 4 obligations while building genuine organizational literacy. This isn't generic training—it's tailored to your actual AI systems, tools, and risks. Every employee, regardless of role, gains a shared vocabulary for discussing AI ethics, understands how governance applies to their daily work, and can spot red flags before they become crises.",

    topics: [
      'Customized AI landscape mapping: What AI systems does your organization actually use?',
      'The AI Triad applied to your context: Data sources, algorithms, and compute in practice',
      'Agentic AI maturity: Recognizing different levels of autonomy in your tools',
      'Role-specific ethical scenarios: How governance plays out in product, sales, HR, ops',
      'EU AI Act Article 4 compliance: What literacy means under the regulation',
      'The AI4Whom 6 Questions framework applied to internal systems',
      'Shared responsibility: How everyone contributes to responsible AI deployment',
      'Escalation pathways: When and how to raise concerns'
    ],

    outcomes: [
      'Understand your organization\'s AI footprint and associated risks',
      'Speak a common ethical language across departments',
      'Recognize when AI decisions require human oversight',
      'Know how to escalate ethical concerns through proper channels'
    ],

    whoShouldAttend: [
      'All employees: product, engineering, design, operations, sales, marketing',
      'Managers responsible for teams using AI tools',
      'HR and people operations teams implementing AI-driven systems',
      'Anyone required to complete Article 4 training under the EU AI Act'
    ],

    deliveryFormat: 'Delivered as interactive workshops (in-person or virtual). Includes role-playing exercises, scenario discussions, and case studies tailored to your organization. Can be scaled to train entire organizations in cohorts.',
    
    groupSize: 'Optimal: 20-40 participants per session. Can run multiple sessions for larger organizations.',

    compliance: [
      'EU AI Act Article 4',
      'ISO 42001',
      'OECD AI Principles',
      'Internal Ethics Policies'
    ],

    certificate: 'Participants receive a Certificate of Completion for compliance documentation.',

    durationBreakdown: [
      'Session 1: AI Landscape & Your Role (2 hours)',
      'Session 2: Ethics in Practice (2 hours)',
      'Follow-up: Scenario library and resources'
    ]
  };

  const deepDiveTopics = [
    {
      title: 'Customized AI Mapping',
      content: 'Before training begins, we conduct a discovery process to identify which AI systems your organization uses—from customer-facing chatbots to internal analytics dashboards. Training scenarios are then built around these real systems, not hypothetical examples. Employees learn to evaluate the tools they actually interact with daily.'
    },
    {
      title: 'Role-Specific Ethical Scenarios',
      content: 'A salesperson faces different AI ethics questions than an engineer. We design role-specific scenarios: How does a sales team use AI-generated leads ethically? What does HR need to know about bias in recruitment tools? How should customer support escalate when a chatbot gives problematic advice? Everyone gets training that feels relevant to their work.'
    },
    {
      title: 'EU AI Act Article 4 Compliance',
      content: 'The EU AI Act requires organizations to ensure staff working with high-risk AI systems have "sufficient level of AI literacy." This program fulfills that obligation while going beyond checkbox compliance. Participants don\'t just get a certificate—they gain practical skills to work responsibly with AI.'
    },
    {
      title: 'Building a Shared Ethical Language',
      content: 'One of the biggest barriers to responsible AI isn\'t technical—it\'s cultural. Different departments use different words for the same concepts. This program establishes a common vocabulary rooted in the AI Triad, agentic AI levels, and the AI4Whom framework, so cross-functional teams can communicate about ethics without talking past each other.'
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
            Why AI4Business Ethics & Governance?
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-[#1A1A1AB3] font-sans leading-relaxed">
            <p>
              Generic AI training treats employees as passive recipients of compliance requirements. AI4Business Ethics & Governance treats them as active participants in governance. By grounding the program in your organization's actual AI systems, we ensure learning translates directly to daily work.
            </p>
            
            <p>
              This approach serves dual purposes: it fulfills regulatory obligations under Article 4 of the EU AI Act, and it builds the cultural foundation for responsible AI use. When everyone shares a common understanding of AI ethics, silos break down, cross-functional collaboration improves, and risks get flagged earlier in the process.
            </p>
            
            <p>
              Organizations that invest in organization-wide literacy don't just avoid regulatory penalties—they build competitive advantage. Teams equipped with ethical reasoning skills innovate more responsibly, customers trust them more, and they're better positioned to navigate future regulatory shifts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 text-[#1A1A1A]">
            Ready to Build AI Governance Capacity?
          </h2>
          <p className="text-lg text-[#1A1A1AB3] font-sans mb-8">
            Schedule a discovery call to customize this program for your organization.
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
