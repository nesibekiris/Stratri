import type { SiteContent } from '../../App';
import type { Language } from '../../App';
import { Button } from '../Button';
import { StepNumber } from '../visuals';
import { 
  AIStrategyMaturityIcon, 
  AIGovernanceEthicsIcon, 
  MarketPolicyResearchIcon, 
  PolicyGovernmentAffairsIcon 
} from '../Icons';
import { CrossroadsInk } from '../visuals';
import { ArrowRight } from 'lucide-react';
import { t, contentTranslations } from '../../utils/translations';

interface ServicesPageProps {
  content: SiteContent;
  language: Language;
}

export function ServicesPage({ content, language }: ServicesPageProps) {
  const servicesData = contentTranslations.servicesOverview.services;
  
  const services = [
    {
      title: t(servicesData[0].title, language),
      tagline: t(servicesData[0].tagline, language),
      description: t(servicesData[0].description, language),
      icon: AIStrategyMaturityIcon,
      buttonText: t(servicesData[0].buttonText, language),
      link: '/services/ai-maturity-governance'
    },
    {
      title: t(servicesData[1].title, language),
      tagline: t(servicesData[1].tagline, language),
      description: t(servicesData[1].description, language),
      icon: AIGovernanceEthicsIcon,
      buttonText: t(servicesData[1].buttonText, language),
      link: '/services/ai4whom-training'
    },
    {
      title: t(servicesData[2].title, language),
      tagline: t(servicesData[2].tagline, language),
      description: t(servicesData[2].description, language),
      icon: MarketPolicyResearchIcon,
      buttonText: t(servicesData[2].buttonText, language),
      link: '/services/market-research'
    },
    {
      title: t(servicesData[3].title, language),
      tagline: t(servicesData[3].tagline, language),
      description: t(servicesData[3].description, language),
      icon: PolicyGovernmentAffairsIcon,
      buttonText: t(servicesData[3].buttonText, language),
      link: '/services/policy-affairs'
    }
  ];

  return (
    <>
      {/* Hero Band - DARK */}
      <section 
        className="py-16 sm:py-20 lg:py-24" 
        style={{ backgroundColor: '#1E2A45' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-8 text-center tracking-tight" style={{ color: '#FEFBF8', letterSpacing: '-0.05em' }}>
            Where strategy meets the everyday
          </h1>
          <div className="space-y-4 text-lg font-sans leading-relaxed text-center" style={{ color: '#FEFBF8E6' }}>
            <p>
              We work where your technology decisions actually happen, not only where the org chart says they should.
            </p>
            <p>
              Each service tackles the same reality: technology, policy, and society are converging, and most organizations lack a coherent way to navigate all three at once. STRATRI helps you build that coherence.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section - LIGHT BACKGROUND */}
      <section 
        className="relative py-16 sm:py-20 lg:py-24 border-t" 
        style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <CrossroadsInk animate={true} className="w-full h-full" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-medium mb-4 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              {content.howWeWork.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {content.howWeWork.steps.map((step) => (
              <div key={step.number} className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
                <div className="w-20 h-20 mb-6">
                  <StepNumber number={step.number} className="w-full h-full" color="#184A5A" />
                </div>
                <h3 
                  className="font-serif text-2xl font-medium mb-4" 
                  style={{ color: content.colors.accent }}
                >
                  {step.title}
                </h3>
                <p 
                  className="font-sans leading-relaxed" 
                  style={{ color: `${content.colors.dark}B3` }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Service Cards Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div 
                  key={index} 
                  className="bg-white border rounded-sm p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ borderColor: '#E8E4DF' }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3" style={{ color: content.colors.dark }}>
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p 
                    className="text-base sm:text-lg font-medium mb-4" 
                    style={{ 
                      color: content.colors.accent,
                      fontFamily: 'IBM Plex Serif, Georgia, serif'
                    }}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: `${content.colors.dark}B3` }}>
                    {service.description}
                  </p>

                  {/* Button */}
                  <a
                    href={service.link}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', service.link);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-sm font-sans text-sm font-semibold transition-all duration-200 hover:bg-[#4A90A4] hover:text-white hover:gap-3"
                    style={{ 
                      borderColor: '#4A90A4',
                      color: '#4A90A4',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* For Teams Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 border-t" 
        style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              {content.forTeams.title}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-8 lg:p-10">
            <p 
              className="font-sans text-lg leading-relaxed mb-6" 
              style={{ color: `${content.colors.dark}B3` }}
            >
              {content.forTeams.intro}
            </p>

            <ul className="space-y-4 mb-8">
              {content.forTeams.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 flex-shrink-0 font-serif text-lg" 
                    style={{ color: content.colors.accent }}
                  >
                    •
                  </span>
                  <span 
                    className="font-sans leading-relaxed" 
                    style={{ color: `${content.colors.dark}B3` }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p 
              className="font-sans text-lg leading-relaxed italic" 
              style={{ color: content.colors.dark }}
            >
              {content.forTeams.conclusion}
            </p>
          </div>

          <div className="text-center mt-12">
            <Button href="/connect">{content.forTeams.buttonText}</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Ready to work together?
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss how <strong className="font-bold">STRATRI</strong> can help your organization navigate the intersection of <span className="font-bold italic">technology</span>, <span className="font-bold italic">society</span> and <span className="font-bold italic">policy</span>.
          </p>
          <Button href="/connect">Get in touch</Button>
        </div>
      </section>
    </>
  );
}