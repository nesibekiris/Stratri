import type { Language } from '../App';

// Translation helper type
export type TranslatedText = {
  en: string;
  tr: string;
};

// Helper function to get text in current language
export function t(text: TranslatedText | string, language: Language): string {
  if (typeof text === 'string') return text;
  return text[language];
}

// Static translations for UI elements
export const staticTranslations = {
  navigation: {
    home: { en: 'Home', tr: 'Ana Sayfa' },
    services: { en: 'Services', tr: 'Hizmetler' },
    insights: { en: 'Insights', tr: 'İçgörüler' },
    about: { en: 'About', tr: 'Hakkımızda' },
    connect: { en: 'Connect', tr: 'İletişim' },
  },
  common: {
    learnMore: { en: 'Learn more', tr: 'Daha fazla' },
    readMore: { en: 'Read more', tr: 'Devamını oku' },
    viewAll: { en: 'View all', tr: 'Tümünü gör' },
    backToHome: { en: 'Back to Home', tr: 'Ana Sayfaya Dön' },
    loading: { en: 'Loading...', tr: 'Yükleniyor...' },
    copyright: { en: 'All rights reserved', tr: 'Tüm hakları saklıdır' },
  },
  newsletter: {
    title: { en: 'Stay close to the thinking', tr: 'Düşünceye yakın kalın' },
    description: { 
      en: 'Occasional deep dives on AI governance, policy and literacy – no spam.', 
      tr: 'AI yönetişimi, politika ve okuryazarlık üzerine ara sıra derinlemesine analizler – spam yok.' 
    },
    placeholder: { en: 'nesibe@stratri.com', tr: 'nesibe@stratri.com' },
    buttonText: { en: 'Subscribe', tr: 'Abone Ol' },
    success: { en: 'Thanks for subscribing!', tr: 'Abone olduğunuz için teşekkürler!' },
    error: { en: 'Something went wrong. Please try again.', tr: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.' },
  },
};

// Content translations structure
export const contentTranslations = {
  hero: {
    title: {
      en: 'At the intersection of technology, society, and policy',
      tr: 'Teknoloji, toplum ve politikanın kesişiminde',
    },
    subtitle: {
      en: 'STRATRI turns that crossroads into strategy.',
      tr: 'STRATRI bu kavşağı stratejiye dönüştürür.',
    },
    description: {
      en: 'Your teams want to build. Regulators want assurance. The public wants to trust you. Most organizations feel these as competing forces. We help you align them.\n\nWe work at this intersection, with a deep focus on AI, so you can move forward without choosing one path at the expense of the others.',
      tr: 'Ekipleriniz inşa etmek istiyor. Düzenleyiciler güvence istiyor. Halk size güvenmek istiyor. Çoğu organizasyon bunları rekabet eden güçler olarak hisseder. Biz bunları hizalamanıza yardımcı oluruz.\n\nBu kesişimde, AI\'ya derin bir odaklanmayla çalışıyoruz, böylece bir yolu diğerlerinin pahasına seçmeden ilerleyebilirsiniz.',
    },
    primaryButtonText: {
      en: 'Explore how we work',
      tr: 'Nasıl çalıştığımızı keşfedin',
    },
    secondaryButtonText: {
      en: 'Talk to STRATRI',
      tr: 'STRATRI ile görüşün',
    },
  },
  threeRoads: {
    title: {
      en: 'Three roads. One decision point.',
      tr: 'Üç yol. Tek bir karar noktası.',
    },
    description1: {
      en: 'Most teams no longer make technology decisions from a single vantage point. Engineers, policy teams, executives, and communities all pull in different directions.',
      tr: 'Çoğu ekip artık teknoloji kararlarını tek bir bakış açısından vermiyor. Mühendisler, politika ekipleri, yöneticiler ve topluluklar farklı yönlere çekiyor.',
    },
    description2: {
      en: 'We treat your organization as a living junction of three roads:',
      tr: 'Organizasyonunuzu üç yolun canlı bir kavşağı olarak görüyoruz:',
    },
    conclusion: {
      en: 'STRATRI sits where those roads meet and helps you design how they move together instead of against each other.',
      tr: 'STRATRI bu yolların kesiştiği noktada durur ve birbirlerine karşı değil, birlikte nasıl ilerleyeceklerini tasarlamanıza yardımcı olur.',
    },
    roads: {
      technology: {
        name: { en: 'Technology', tr: 'Teknoloji' },
        description: { en: 'Systems, products, data, models', tr: 'Sistemler, ürünler, veri, modeller' },
      },
      policy: {
        name: { en: 'Policy', tr: 'Politika' },
        description: { en: 'Law, regulation, internal rules', tr: 'Hukuk, düzenleme, iç kurallar' },
      },
      society: {
        name: { en: 'Society', tr: 'Toplum' },
        description: { en: 'Users, workers, citizens, public trust', tr: 'Kullanıcılar, çalışanlar, vatandaşlar, kamu güveni' },
      },
    },
  },
  services: {
    title: {
      en: 'We do not ask you to pick a road. We help you design the junction.',
      tr: 'Sizden bir yol seçmenizi istemiyoruz. Kavşağı tasarlamanıza yardımcı oluyoruz.',
    },
    pillars: {
      strategy: {
        title: { en: 'AI Strategy & Maturity', tr: 'Yapay Zeka Stratejisi & Olgunluk' },
        subtitle: { en: 'From scattered pilots to a shared route.', tr: 'Dağınık pilotlardan ortak bir rotaya.' },
        points: [
          { 
            en: 'Technology and AI maturity assessments and diagnostics', 
            tr: 'Teknoloji ve Yapay Zeka olgunluk değerlendirmeleri ve teşhisleri' 
          },
          { 
            en: 'Roadmaps aligned with business, societal, and public value', 
            tr: 'İş, toplumsal ve kamusal değerle uyumlu yol haritaları' 
          },
          { 
            en: 'Operating models, roles, and decision rights for responsible use of technology and AI', 
            tr: 'Teknoloji ve Yapay Zeka\'nın sorumlu kullanımı için işletme modelleri, roller ve karar hakları' 
          },
        ],
      },
      governance: {
        title: { en: 'AI Governance, Ethics & Literacy', tr: 'Yapay Zeka Yönetişimi, Etik & Okuryazarlık' },
        subtitle: { en: 'Turning principles into everyday decisions.', tr: 'İlkeleri günlük kararlara dönüştürmek.' },
        points: [
          { 
            en: 'Governance frameworks, principles, and processes for technology and AI', 
            tr: 'Teknoloji ve Yapay Zeka için yönetişim çerçeveleri, ilkeler ve süreçler' 
          },
          { 
            en: 'Ethical guidelines and review mechanisms across the full lifecycle', 
            tr: 'Tam yaşam döngüsü boyunca etik yönergeler ve inceleme mekanizmaları' 
          },
          { 
            en: 'Literacy and capability programs for leaders, boards, and teams', 
            tr: 'Liderler, yönetim kurulları ve ekipler için okuryazarlık ve yetenek programları' 
          },
        ],
      },
      research: {
        title: { en: 'Market & Policy Research', tr: 'Pazar & Politika Araştırması' },
        subtitle: { en: 'Making sense of shifting markets and rules.', tr: 'Değişen pazarları ve kuralları anlamlandırmak.' },
        points: [
          { 
            en: 'Research on technology and AI markets, trends, and use cases', 
            tr: 'Teknoloji ve Yapay Zeka pazarları, trendler ve kullanım alanları üzerine araştırmalar' 
          },
          { 
            en: 'Analysis of technology and AI policy and regulatory landscapes', 
            tr: 'Teknoloji ve Yapay Zeka politika ve düzenleyici manzaralarının analizi' 
          },
          { 
            en: 'Reports, explainers, briefings, and policy papers', 
            tr: 'Raporlar, açıklayıcılar, brifingler ve politika belgeleri' 
          },
        ],
      },
      policy: {
        title: { en: 'Policy & Government Affairs', tr: 'Politika & Kamu İşleri' },
        subtitle: { en: 'Engaging credibly with the public arena.', tr: 'Kamusal alanda güvenilir şekilde yer almak.' },
        points: [
          { 
            en: 'Advisory on technology and AI policy', 
            tr: 'Teknoloji ve Yapay Zeka politikası danışmanlığı' 
          },
          { 
            en: 'Stakeholder mapping and engagement strategies', 
            tr: 'Paydaş haritalama ve katılım stratejileri' 
          },
          { 
            en: 'Support for consultations, hearings, and multi-stakeholder processes', 
            tr: 'Danışmalar, oturumlar ve çok paydaşlı süreçler için destek' 
          },
        ],
      },
    },
  },
  howWeWork: {
    title: {
      en: 'How we work at the crossroads',
      tr: 'Kavşakta nasıl çalışıyoruz',
    },
    steps: [
      {
        title: { en: 'Recognize the junctions', tr: 'Kavşakları tanımak' },
        description: { 
          en: 'We start by surfacing where innovation actually lives in your organization. Not just in strategy decks, but in products, workflows, relationships, and quiet experiments.', 
          tr: 'İnovasyonun organizasyonunuzda gerçekte nerede yaşadığını ortaya çıkararak başlıyoruz. Sadece strateji sunumlarında değil, ürünlerde, iş akışlarında, ilişkilerde ve sessiz deneylerde.' 
        },
      },
      {
        title: { en: 'Design the stratum', tr: 'Stratumu tasarlamak' },
        description: { 
          en: 'Together, we build the strategic ground: governance structures, roles, workflows, and narratives that connect technology, policy, and society into one coherent route instead of three competing ones.', 
          tr: 'Birlikte stratejik zemini inşa ediyoruz: teknoloji, politika ve toplumu rekabet eden üç yol yerine tutarlı bir rotada birleştiren yönetişim yapıları, roller, iş akışları ve anlatılar.' 
        },
      },
      {
        title: { en: 'Embed and iterate', tr: 'Yerleştirmek ve tekrarlamak' },
        description: { 
          en: 'Governance only works if people use it. We stay close as you roll out, adjust to regulation and market pressure, and learn from real cases.', 
          tr: 'Yönetişim ancak insanlar kullanırsa işe yarar. Hayata geçirirken, düzenleme ve pazar baskısına ayak uydururken ve gerçek vakalardan öğrenirken yanınızdayız.' 
        },
      },
    ],
  },
  forTeams: {
    title: {
      en: 'For teams who cannot afford "wait and see"',
      tr: '"Bekleyip görelim" diyemeyecek ekipler için',
    },
    intro: {
      en: 'STRATRI works with organizations that move at the intersection of innovation, rules, and public expectation. That includes:',
      tr: 'STRATRI, inovasyon, kurallar ve kamu beklentilerinin kesişiminde hareket eden organizasyonlarla çalışır. Bunlar:',
    },
    items: [
      { 
        en: 'Technology companies moving from experiments to real products and platforms', 
        tr: 'Deneylerden gerçek ürünlere ve platformlara geçen teknoloji şirketleri' 
      },
      { 
        en: 'Organizations in retail technologies, industrial and manufacturing, AI, fintech, ecommerce, healthtech, and crypto that are reshaping their business through technology', 
        tr: 'Perakende teknolojileri, endüstriyel ve imalat, Yapay Zeka, fintech, e-ticaret, sağlık teknolojisi ve kripto alanlarında teknoloji ile işlerini yeniden şekillendiren organizasyonlar' 
      },
      { 
        en: 'Venture investors and platforms that need a grounded view on risk, governance, and public perception', 
        tr: 'Risk, yönetişim ve kamuoyu algısı konusunda temelli bir görüşe ihtiyaç duyan girişim yatırımcıları ve platformlar' 
      },
      { 
        en: 'Public institutions facing new obligations and scrutiny', 
        tr: 'Yeni yükümlülükler ve incelemelerle karşı karşıya kalan kamu kurumları' 
      },
      { 
        en: 'Civil society and ecosystem actors who help define the rules of the game', 
        tr: 'Oyunun kurallarını tanımlamaya yardımcı olan sivil toplum ve ekosistem aktörleri' 
      },
    ],
    conclusion: {
      en: 'If you sit somewhere between "we cannot ship this" and "we cannot stop now", you are in the right place.',
      tr: '"Bunu yayınlayamayız" ile "şimdi duramayız" arasında bir yerdeyseniz, doğru yerdesiniz.',
    },
    buttonText: {
      en: 'Get in touch',
      tr: 'İletişime geçin',
    },
  },
  trainings: {
    title: {
      en: 'AI LITERACY & TRAININGS',
      tr: 'YAPAY ZEKA OKURYAZARLIĞI & EĞİTİMLER',
    },
    items: [
      {
        title: { 
          en: 'AI Governance & Ethics for Boards', 
          tr: 'Yönetim Kurulları için Yapay Zeka Yönetişimi & Etik' 
        },
        outcome: { 
          en: 'Equip board members to ask the right questions.', 
          tr: 'Yönetim kurulu üyelerini doğru soruları sormaya hazırlayın.' 
        },
      },
      {
        title: { 
          en: 'AI Policy & Regulation for Product and Policy Teams', 
          tr: 'Ürün ve Politika Ekipleri için Yapay Zeka Politikası & Düzenlemeleri' 
        },
        outcome: { 
          en: 'Understand the rules shaping your roadmap.', 
          tr: 'Yol haritanızı şekillendiren kuralları anlayın.' 
        },
      },
      {
        title: { 
          en: 'AI Literacy for Non-Technical Leaders', 
          tr: 'Teknik Olmayan Liderler için Yapay Zeka Okuryazarlığı' 
        },
        outcome: { 
          en: 'Demystify AI to make better strategic decisions.', 
          tr: 'Daha iyi stratejik kararlar için Yapay Zeka\'yı gizeminden arındırın.' 
        },
      },
    ],
    buttonText: {
      en: 'See all trainings',
      tr: 'Tüm eğitimleri görün',
    },
  },
  servicesOverview: {
    pageTitle: {
      en: 'Services',
      tr: 'Hizmetler',
    },
    intro: {
      en: 'We work at the crossroads',
      tr: 'Kavşakta çalışıyoruz',
    },
    description: {
      en: 'Four service areas designed to help you move at the intersection of innovation, regulation, and public trust.',
      tr: 'İnovasyon, düzenleme ve kamu güveninin kesişiminde ilerlemenize yardımcı olmak için tasarlanmış dört hizmet alanı.',
    },
    services: [
      {
        title: {
          en: 'AI Maturity & Governance Advisory',
          tr: 'Yapay Zeka Olgunluk & Yönetişim Danışmanlığı',
        },
        tagline: {
          en: 'From scattered experiments to coherent strategy—with governance that works',
          tr: 'Dağınık deneylerden tutarlı stratejiye—işleyen yönetişimle',
        },
        description: {
          en: 'Most organizations have pilots. Few have a strategy that connects those pilots to business value and regulatory obligations. STRATRI helps you understand where you truly are through honest assessments, design roadmaps that link experimentation to outcomes, and build governance frameworks using our R.A.I.L.W.A.Y. methodology—so innovation does not outrun responsibility.',
          tr: 'Çoğu organizasyonda pilot çalışmalar var. Ancak bu pilotları iş değeri ve düzenleyici yükümlülüklerle bağlayan bir stratejiye sahip olanlar az. STRATRI, dürüst değerlendirmelerle gerçekte nerede olduğunuzu anlamanıza, deneyleri sonuçlara bağlayan yol haritaları tasarlamanıza ve R.A.I.L.W.A.Y. metodolojimizi kullanarak yönetişim çerçeveleri oluşturmanıza yardımcı olur—böylece inovasyon sorumluluğu geçmez.',
        },
        buttonText: {
          en: 'Explore Advisory Services',
          tr: 'Danışmanlık Hizmetlerini Keşfedin',
        },
      },
      {
        title: {
          en: 'AI4Whom Ethics & Governance Training',
          tr: 'AI4Whom Etik & Yönetişim Eğitimi',
        },
        tagline: {
          en: 'Build AI literacy from awareness to board strategy',
          tr: 'Farkındalıktan yönetim kurulu stratejisine AI okuryazarlığı oluşturun',
        },
        description: {
          en: 'Four training programs sharing a common spine: the AI Triad, agentic AI levels, and the AI4Whom 6 Questions framework. From individual literacy to executive education—EU AI Act Article 4 compliant, ISO 42001 aligned, customized to your AI ecosystem.',
          tr: 'Ortak bir omurgayı paylaşan dört eğitim programı: AI Triadı, ajantik AI seviyeleri ve AI4Whom 6 Soru çerçevesi. Bireysel okuryazarlıktan yönetici eğitimine kadar—AB AI Yasası Madde 4 uyumlu, ISO 42001 hizalı, AI ekosisteeminize özelleştirilmiş.',
        },
        buttonText: {
          en: 'Explore Training Programs',
          tr: 'Eğitim Programlarını Keşfedin',
        },
      },
      {
        title: {
          en: 'Market & Policy Research',
          tr: 'Pazar & Politika Araştırması',
        },
        tagline: {
          en: 'Making sense of shifting landscapes',
          tr: 'Değişen manzaraları anlamlandırmak',
        },
        description: {
          en: 'Technology and policy maps move quickly and rarely in sync. We deliver explainers, briefings, and decision papers that help you orient your next move at the crossroads of innovation, regulation, and public expectation.',
          tr: 'Teknoloji ve politika haritaları hızlı hareket eder ve nadiren senkronize olurlar. İnovasyon, düzenleme ve kamu beklentilerinin kesişiminde bir sonraki hamlelerinizi yönlendirmenize yardımcı olan açıklayıcılar, brifingler ve karar belgeleri sunuyoruz.',
        },
        buttonText: {
          en: 'Explore Research Services',
          tr: 'Araştırma Hizmetlerini Keşfedin',
        },
      },
      {
        title: {
          en: 'Policy & Government Affairs Consultancy',
          tr: 'Politika & Kamu İşleri Danışmanlığı',
        },
        tagline: {
          en: 'Engaging credibly with the public arena',
          tr: 'Kamusal alanda güvenilir şekilde yer almak',
        },
        description: {
          en: 'You cannot outsource your voice in debates about technology and society. We help you engage with policymakers, regulators, and ecosystems in ways that are informed, constructive, and consistent with what you actually do.',
          tr: 'Teknoloji ve toplum tartışmalarında sesinizi dışarıdan alamazsınız. Politika yapıcılar, düzenleyiciler ve ekosistemlerle bilgili, yapıcı ve gerçekte yaptıklarınızla tutarlı şekillerde etkileşim kurmanıza yardımcı oluyoruz.',
        },
        buttonText: {
          en: 'Explore Policy Advisory',
          tr: 'Politika Danışmanlığını Keşfedin',
        },
      },
    ],
  },
  about: {
    pageTitle: {
      en: 'Who We Are',
      tr: 'Biz Kimiz',
    },
    tagline: {
      en: 'Strategy at the intersection',
      tr: 'Kesişimde strateji',
    },
    intro1: {
      en: 'STRATRI is a governance and technology policy studio built on a simple belief: governance belongs at the center of strategy, not at the edges of compliance.',
      tr: 'STRATRI, basit bir inanca dayanan bir yönetişim ve teknoloji politikası stüdyosudur: yönetişim, uyumun kenarlarında değil, stratejinin merkezinde olmalıdır.',
    },
    intro2: {
      en: 'The name brings together "strategy" and a triadic way of thinking. We look at every problem through the coordinated movement of three forces: Technology, Society, and Policy.',
      tr: 'İsim "strateji" ve üçlü bir düşünme biçimini bir araya getiriyor. Her soruna üç gücün koordineli hareketi üzerinden bakıyoruz: Teknoloji, Toplum ve Politika.',
    },
    principlesTitle: {
      en: 'Our Principles',
      tr: 'İlkelerimiz',
    },
    principles: [
      {
        title: {
          en: 'Technology, Society, Policy',
          tr: 'Teknoloji, Toplum, Politika',
        },
        description: {
          en: 'We work where these three forces converge. Sustainable technology strategy means navigating technical capability, societal impact, and policy constraints with equal rigor. None of them can be an afterthought.',
          tr: 'Bu üç gücün birleştiği yerde çalışıyoruz. Sürdürülebilir teknoloji stratejisi, teknik yetenek, toplumsal etki ve politika kısıtlamalarında eşit titizlikle gezinmek anlamına gelir. Hiçbiri sonradan düşünülemez.',
        },
      },
      {
        title: {
          en: 'Governance as strategy',
          tr: 'Strateji olarak yönetişim',
        },
        description: {
          en: 'Responsible technology governance is not a compliance burden. It is a strategic advantage. Organizations that govern well move faster, with greater confidence and fewer surprises.',
          tr: 'Sorumlu teknoloji yönetişimi bir uyum yükü değildir. Stratejik bir avantajdır. İyi yöneten organizasyonlar daha hızlı, daha güvenle ve daha az sürprizle ilerler.',
        },
      },
      {
        title: {
          en: 'Depth over hype',
          tr: 'Abartıdan çok derinlik',
        },
        description: {
          en: 'We prioritize nuance and long-term thinking over trends and buzzwords. Turning complexity into clarity requires deep understanding, not shallow excitement.',
          tr: 'Trendler ve moda kelimeler yerine nüansa ve uzun vadeli düşünceye öncelik veriyoruz. Karmaşıklığı netliğe dönüştürmek derin anlayış gerektirir, sığ heyecan değil.',
        },
      },
      {
        title: {
          en: 'Literacy as foundation',
          tr: 'Temel olarak okuryazarlık',
        },
        description: {
          en: 'Technology literacy is how leaders and teams gain real agency. Without shared understanding across the organization, there is no meaningful governance, no clear accountability, and no strategic clarity.',
          tr: 'Teknoloji okuryazarlığı, liderlerin ve ekiplerin gerçek faaliyet alanı kazanmasının yoludur. Organizasyon genelinde paylaşılan anlayış olmadan anlamlı yönetişim, net hesap verebilirlik ve stratejik netlik olmaz.',
        },
      },
    ],
    founderTitle: {
      en: 'Founder',
      tr: 'Kurucu',
    },
    founderName: {
      en: 'Nesibe Hazar Özdemir',
      tr: 'Nesibe Hazar Özdemir',
    },
    founderBio: {
      en: 'Nesibe brings together experience in technology policy, AI governance, and strategic communications across startup ecosystems, policy institutions, and corporate environments. She has built governance frameworks, designed training programs, and contributed to policy development processes in Europe and Turkey. Her work focuses on making technology governance actionable—translating regulatory complexity into strategic clarity for organizations navigating the crossroads of innovation, rules, and public trust.',
      tr: 'Nesibe, girişim ekosistemleri, politika kurumları ve kurumsal ortamlarda teknoloji politikası, AI yönetişimi ve stratejik iletişim deneyimlerini bir araya getiriyor. Avrupa ve Türkiye\'de yönetişim çerçeveleri oluşturdu, eğitim programları tasarladı ve politika geliştirme süreçlerine katkıda bulundu. Çalışması, teknoloji yönetişimini eyleme dönüştürmeye odaklanıyor—düzenleyici karmaşıklığı, inovasyon, kurallar ve kamu güveninin kesişiminde gezinen organizasyonlar için stratejik netliğe çevirmek.',
    },
  },
  connect: {
    pageTitle: {
      en: 'Connect',
      tr: 'İletişim',
    },
    intro: {
      en: 'Connect with STRATRI for conversations on AI governance, responsible technology and policy.',
      tr: 'AI yönetişimi, sorumlu teknoloji ve politika üzerine konuşmalar için STRATRI ile iletişime geçin.',
    },
    formTitle: {
      en: 'Send us a message',
      tr: 'Bize mesaj gönderin',
    },
    nameLabel: {
      en: 'Your Name',
      tr: 'Adınız',
    },
    namePlaceholder: {
      en: 'Nesibe Özdemir',
      tr: 'Nesibe Özdemir',
    },
    organizationLabel: {
      en: 'Organization',
      tr: 'Organizasyon',
    },
    organizationPlaceholder: {
      en: 'Your company or institution',
      tr: 'Şirketiniz veya kurumunuz',
    },
    emailLabel: {
      en: 'Email',
      tr: 'E-posta',
    },
    emailPlaceholder: {
      en: 'nesibe@stratri.com',
      tr: 'nesibe@stratri.com',
    },
    topicLabel: {
      en: 'What brings you here?',
      tr: 'Sizi buraya ne getirdi?',
    },
    topicPlaceholder: {
      en: 'Select a topic',
      tr: 'Bir konu seçin',
    },
    topics: [
      {
        value: 'advisory',
        label: {
          en: 'AI Governance & Strategy Advisory',
          tr: 'AI Yönetişim & Strateji Danışmanlığı',
        },
      },
      {
        value: 'training',
        label: {
          en: 'AI Literacy & Training Programs',
          tr: 'AI Okuryazarlık & Eğitim Programları',
        },
      },
      {
        value: 'research',
        label: {
          en: 'Market & Policy Research',
          tr: 'Pazar & Politika Araştırması',
        },
      },
      {
        value: 'policy',
        label: {
          en: 'Policy & Government Affairs',
          tr: 'Politika & Kamu İşleri',
        },
      },
      {
        value: 'partnership',
        label: {
          en: 'Partnership Opportunities',
          tr: 'Ortaklık Fırsatları',
        },
      },
      {
        value: 'other',
        label: {
          en: 'Other',
          tr: 'Diğer',
        },
      },
    ],
    messageLabel: {
      en: 'Your Message',
      tr: 'Mesajınız',
    },
    messagePlaceholder: {
      en: 'Tell us about your needs, questions, or ideas...',
      tr: 'İhtiyaçlarınız, sorularınız veya fikirleriniz hakkında bize bilgi verin...',
    },
    submitButton: {
      en: 'Send Message',
      tr: 'Mesaj Gönder',
    },
    successMessage: {
      en: 'Thank you for your message! We will get back to you within 2-3 business days.',
      tr: 'Mesajınız için teşekkür ederiz! 2-3 iş günü içinde size geri döneceğiz.',
    },
    directContactTitle: {
      en: 'Or reach out directly',
      tr: 'Veya doğrudan ulaşın',
    },
    emailUs: {
      en: 'Email us',
      tr: 'E-posta gönderin',
    },
    linkedinConnect: {
      en: 'Connect on LinkedIn',
      tr: 'LinkedIn\'de bağlantı kurun',
    },
  },
};