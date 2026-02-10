import type { SiteContent, Language } from '../../App';
import { Button } from '../Button';
import { 
  ConvergingPaths, 
  TriviumDiagram, 
  GovernanceRails,
  NetworkIcon,
  ShieldIcon,
  LensIcon,
  BookIcon
} from '../visuals';
import { t, contentTranslations } from '../../utils/translations';

interface AboutPageProps {
  content: SiteContent;
  language: Language;
}

export function AboutPage({ content, language }: AboutPageProps) {
  const aboutContent = contentTranslations.about;
  
  const principles = [
    {
      title: t(aboutContent.principles[0].title, language),
      description: t(aboutContent.principles[0].description, language),
      icon: NetworkIcon
    },
    {
      title: t(aboutContent.principles[1].title, language),
      description: t(aboutContent.principles[1].description, language),
      icon: ShieldIcon
    },
    {
      title: t(aboutContent.principles[2].title, language),
      description: t(aboutContent.principles[2].description, language),
      icon: LensIcon
    },
    {
      title: t(aboutContent.principles[3].title, language),
      description: t(aboutContent.principles[3].description, language),
      icon: BookIcon
    }
  ];

  return (
    <>
      {/* Section 1 - Who We Are */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: content.colors.cream }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-6 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
                {t(aboutContent.pageTitle, language)}
              </h1>
              <p className="font-serif text-2xl italic mb-6" style={{ color: content.colors.accent }}>
                {t(aboutContent.tagline, language)}
              </p>
              <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: `${content.colors.dark}B3` }}>
                <strong className="font-bold">STRATRI</strong> {t(aboutContent.intro1, language).replace('STRATRI is a ', '').replace('STRATRI, ', '')}
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                {t(aboutContent.intro2, language)}
              </p>
            </div>

            {/* Visual */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md">
                <TriviumDiagram className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Principles */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-4 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
              {t(aboutContent.principlesTitle, language)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
                  <div className="w-16 h-16 mb-6">
                    <Icon className="w-full h-full" color={content.colors.accent} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4" style={{ color: content.colors.dark }}>
                    {principle.title}
                  </h3>
                  <p className="font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - How We Navigate */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="flex justify-center items-center order-2 lg:order-1">
              <div className="w-full max-w-md">
                <GovernanceRails className="w-full h-auto" />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
                {language === 'tr' ? 'Nasıl yol gösteriyoruz' : 'How we navigate the crossroads'}
              </h2>
              <div className="space-y-4">
                <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {language === 'tr' 
                    ? 'Teknoloji ve toplum arasındaki kesişim karmaşıktır. Çoğu organizasyon ya yalnızca inovasyon üzerine odaklanır, ya sadece uyum üzerine, ya da bunlar arasında bağlantısız bir şekilde geçiş yapar.'
                    : 'The intersection between technology and society is complex. Most organizations either focus only on innovation, only on compliance, or switch between them without coherence.'}
                </p>
                <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {language === 'tr'
                    ? 'STRATRI yönetişimi strateji olarak konumlandırır. Düzenlemenin, etik standartların ve kamu güveninin sadece riskler değil, aynı zamanda rekabet avantajları olduğuna inanıyoruz.'
                    : 'STRATRI positions governance as strategy. We believe regulation, ethical standards, and public trust are not just risks—they are competitive advantages.'}
                </p>
                <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {language === 'tr'
                    ? 'Değerlendirme, politika tasarımı, eğitim ve paydaş katılımı aracılığıyla organizasyonlara teknoloji, toplum ve politikanın üç yolunu eşzamanlı ve sürdürülebilir bir şekilde yönetmelerine yardımcı oluyoruz.'
                    : 'Through assessments, policy design, training, and stakeholder engagement, we help organizations navigate the three roads of technology, society, and policy—simultaneously and sustainably.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Managing Partner */}
      <section id="partner" className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-4 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
              {t(aboutContent.founderTitle, language)}
            </h2>
          </div>

          <div className="bg-white border rounded-sm p-8 lg:p-12" style={{ borderColor: '#E8E4DF' }}>
            <h3 className="font-serif text-3xl font-medium mb-2" style={{ color: content.colors.dark }}>
              {t(aboutContent.founderName, language)}
            </h3>
            <p className="text-sm font-sans mb-6" style={{ color: content.colors.accent }}>
              {language === 'tr' ? 'Kurucu Ortak & Baş Danışman' : 'Founding Partner & Principal Consultant'}
            </p>
            
            <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
              {t(aboutContent.founderBio, language)}
            </p>
          </div>

          <div className="text-center mt-12">
            <Button href="/connect">
              {language === 'tr' ? 'İletişime geçin' : 'Get in touch'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
