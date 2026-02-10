import type { SiteContent } from '../../../App';
import { ProgramHero } from '../../ProgramHero';
import { ProgramDetails } from '../../ProgramDetails';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../../ui/accordion';

interface AI4EveryonePageProps {
  content: SiteContent;
}

export function AI4EveryonePage({ content }: AI4EveryonePageProps) {
  const programData = {
    title: 'AI4Everyone – Ethics & Governance Essentials',
    format: 'Open Enrollment',
    duration: '4 hours',
    level: 'Awareness & Literacy',
    audience: 'Students, career changers, professionals entering AI-adjacent roles',
    
    overview: "AI4Everyone is a foundational program designed to build AI literacy from the ground up. Whether you're a student exploring career paths, a professional transitioning into tech, or simply curious about how AI shapes society, this course equips you with the conceptual tools to understand AI systems, recognize ethical dilemmas, and ask critical questions. No technical background required—just curiosity and a willingness to think critically.",

    topics: [
      'The AI Triad: Data, Algorithms, and Compute as the building blocks of AI systems',
      'Agentic AI Maturity Levels: Understanding different types of AI autonomy and decision-making',
      'Ethical principles in AI: Fairness, accountability, transparency, and human oversight',
      'Algorithmic harms: Bias, discrimination, and unintended consequences in real-world applications',
      'The AI4Whom 6 Questions framework for evaluating AI systems',
      'EU AI Act fundamentals: Risk-based regulation and what it means for users and creators',
      'Case studies: Real-world examples of AI gone wrong—and how to prevent it',
      'Critical questioning: How to assess AI systems in your own context'
    ],

    outcomes: [
      'Understand the technical foundations of AI without needing to code',
      'Identify ethical risks and algorithmic harms in AI applications',
      'Apply the AI4Whom framework to evaluate AI systems critically',
      'Speak confidently about AI governance in professional and public settings'
    ],

    whoShouldAttend: [
      'University students in social sciences, humanities, business, or law',
      'Career changers exploring roles in policy, ethics, or AI-adjacent fields',
      'Professionals who interact with AI tools but lack formal training',
      'Anyone seeking to understand AI\'s societal implications beyond the hype'
    ],

    deliveryFormat: 'Available as live online sessions (4 hours) or self-paced modules. Interactive exercises, case discussions, and reflection prompts throughout.',
    
    groupSize: 'Open enrollment sessions: up to 30 participants. Custom cohorts available for organizations.',

    compliance: [
      'EU AI Act Article 4',
      'AI Literacy Frameworks',
      'Ethical AI Principles'
    ],

    certificate: 'Participants receive a Certificate of Completion from STRATRI upon finishing all modules and exercises.',

    durationBreakdown: [
      'Module 1: AI Foundations (90 min)',
      'Module 2: Ethics & Harms (90 min)',
      'Module 3: Governance & Questions (60 min)'
    ]
  };

  const deepDiveTopics = [
    {
      title: 'The AI Triad: Data, Algorithms, Compute',
      content: 'AI systems are built on three pillars. Data provides the raw material—what the system learns from. Algorithms are the recipes that process that data. Compute is the infrastructure that makes it all run. Understanding this triad helps you see where things can go wrong: biased data, flawed algorithms, or concentrated compute power that excludes smaller actors.'
    },
    {
      title: 'Agentic AI Maturity Levels',
      content: 'Not all AI is created equal. We explore a spectrum from passive recommendation systems to autonomous agents that make high-stakes decisions. Knowing where an AI sits on this spectrum helps you calibrate trust, oversight, and accountability expectations.'
    },
    {
      title: 'The AI4Whom 6 Questions Framework',
      content: 'Six deceptively simple questions that reveal the power dynamics, value choices, and accountability gaps in any AI system: Who builds it? Who benefits? Who is harmed? Who decides? Who is accountable? Who can challenge it? This framework turns abstract ethics into concrete analysis.'
    },
    {
      title: 'Algorithmic Harms in Practice',
      content: 'Through real-world case studies—from facial recognition bias to hiring algorithms that discriminate—we examine how AI can amplify existing inequalities or create new ones. You\'ll learn to spot red flags and understand why "neutral" technology is never truly neutral.'
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
            Why AI4Everyone?
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg text-[#1A1A1AB3] font-sans leading-relaxed">
            <p>
              Most AI education falls into one of two traps: it's either too technical (requiring coding skills) or too abstract (staying in the realm of philosophy). AI4Everyone bridges that gap. You'll gain a working understanding of how AI systems function without needing to become an engineer, and you'll ground ethical concepts in real-world scenarios that matter.
            </p>
            
            <p>
              This program is ideal if you're entering a field where AI will shape your work—whether in policy, communications, product, or strategy—but you haven't had formal training. It's also perfect if you're simply tired of nodding along when people talk about "algorithms" and want to actually understand what's at stake.
            </p>
            
            <p>
              By the end, you won't just know about AI. You'll know how to question it, evaluate it, and contribute meaningfully to conversations about its role in society.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 text-[#1A1A1A]">
            Ready to Build AI Literacy?
          </h2>
          <p className="text-lg text-[#1A1A1AB3] font-sans mb-8">
            Join the next cohort or inquire about custom programs for your organization.
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
