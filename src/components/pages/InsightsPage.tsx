import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { InsightsHeroInk, BlogCoverTemplate } from '../visuals';
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface InsightsPageProps {
  content: SiteContent;
}

export function InsightsPage({ content }: InsightsPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [techletterArticles, setTechletterArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Get current language from content (assuming it's available in content object)
  // If not available, default to 'en'
  const currentLanguage = (content as any).language || 'en';

  // Report translations
  const reportsContent = {
    en: [
      {
        title: 'ISO 42001 Starter Guide',
        summary: 'A comprehensive research report providing practical guidance for organizations implementing ISO 42001 AI management systems standard.',
        date: 'October 2025',
        readingTime: '45 min read',
        category: 'Reports',
        visual: 'research' as const,
        link: 'https://huxai.tech/wp-content/uploads/2025/10/ISO-42001-Starter-Guide_HUXAI_ResearchReport.pdf',
        author: 'Co-authored by Nesibe Kırış Can'
      },
      {
        title: 'Artificial Intelligence and Democratic Values',
        summary: 'An index examining how AI systems and policies align with democratic principles across different jurisdictions and contexts.',
        date: '2025',
        readingTime: '60 min read',
        category: 'Reports',
        visual: 'policy' as const,
        link: 'https://www.caidp.org/app/download/8578066163/CAIDP-Index-2025.pdf?t=1758138678',
        author: 'Contributor: Nesibe Kırış Can'
      },
      {
        title: 'Civil Society AI Capacity Building and Digital Transformation Roadmap for Turkey',
        summary: 'A strategic roadmap developed by gov2ai for strengthening civil society organizations\' AI capabilities and guiding digital transformation in Turkey.',
        date: '2024',
        readingTime: '50 min read',
        category: 'Reports',
        visual: 'framework' as const,
        link: 'https://statik.cdr.org.tr/gov2_ai_rapor_a90c32db77.pdf',
        author: 'Co-author & Researcher: Nesibe Kırış Can'
      }
    ],
    tr: [
      {
        title: 'ISO 42001 Başlangıç Kılavuzu',
        summary: 'ISO 42001 yapay zeka yönetim sistemleri standardını uygulamak isteyen organizasyonlar için pratik rehberlik sağlayan kapsamlı bir araştırma raporu.',
        date: 'Ekim 2025',
        readingTime: '45 dk okuma',
        category: 'Raporlar',
        visual: 'research' as const,
        link: 'https://huxai.tech/wp-content/uploads/2025/10/ISO-42001-Starter-Guide_HUXAI_ResearchReport.pdf',
        author: 'Ortak Yazar: Nesibe Kırış Can'
      },
      {
        title: 'Yapay Zeka ve Demokratik Değerler',
        summary: 'Yapay zeka sistemleri ve politikalarının farklı yargı bölgeleri ve bağlamlarda demokratik ilkelerle nasıl uyumlu olduğunu inceleyen bir endeks.',
        date: '2025',
        readingTime: '60 dk okuma',
        category: 'Raporlar',
        visual: 'policy' as const,
        link: 'https://www.caidp.org/app/download/8578066163/CAIDP-Index-2025.pdf?t=1758138678',
        author: 'Katkıda Bulunan: Nesibe Kırış Can'
      },
      {
        title: 'Türkiye\'de Sivil Toplumun Yapay Zeka Kapasitesini Geliştirme ve Dijital Dönüşüm Yol Haritası',
        summary: 'Sivil toplum kuruluşlarının yapay zeka kapasitelerini güçlendirmek ve Türkiye\'de dijital dönüşümü yönlendirmek için gov2ai tarafından geliştirilen stratejik bir yol haritası.',
        date: '2024',
        readingTime: '50 dk okuma',
        category: 'Raporlar',
        visual: 'framework' as const,
        link: 'https://statik.cdr.org.tr/gov2_ai_rapor_a90c32db77.pdf',
        author: 'Ortak Yazar & Araştırmacı: Nesibe Kırış Can'
      }
    ]
  };

  // Get reports in current language
  const languageReports = reportsContent[currentLanguage as 'en' | 'tr'] || reportsContent.en;

  // HBR Turkey Articles - bilingual
  const hbrArticles = currentLanguage === 'tr' ? [
    {
      title: 'Yapay Zekâ Çağında Mikro-İktidarlar, Algoritmik Öznellik ve Yönetişim',
      summary: 'İktidar artık kod satırlarında: Yapay zeka sistemlerinin toplumsal iktidar ilişkilerini nasıl yeniden şekillendiği ve algoritmik yönetişimin etik boyutları üzerine bir inceleme.',
      date: 'Aralık 2024',
      readingTime: '10 dk okuma',
      category: 'Makaleler',
      visual: 'governance' as const,
      link: 'https://www.linkedin.com/posts/legal-ai-network-turkey_lant-aralik-sayisi-activity-7404819215410745344-rQOE',
      source: 'LANT (Legal AI Network Turkey)'
    },
    {
      title: 'Yapay Zeka Etik Komitesi: Bir Gereklilik mi?',
      summary: 'Yapay zeka sistemlerinin etik kullanımını denetlemek için kurumların etik komitelere ihtiyacı var mı? Bu soruyu irdeliyoruz.',
      date: '2025',
      readingTime: '6 dk okuma',
      category: 'Makaleler',
      visual: 'governance' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-etik-komitesi-bir-gereklilik-mi',
      source: 'HBR Türkiye'
    },
    {
      title: 'Yapay Zeka Etik Uygulamaları: İlkelerden Gerçeğe',
      summary: 'Etik yapay zeka ilkelerini pratiğe dönüştürmek: Kurumların karşılaştığı zorluklar ve çözüm önerileri.',
      date: '2025',
      readingTime: '7 dk okuma',
      category: 'Makaleler',
      visual: 'concentric' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-etik-uygulamalari-ilkelerden-gercege',
      source: 'HBR Türkiye'
    },
    {
      title: 'Yapay Zeka ve Kadınlar: Eşitlik, İnovasyon ve Ekonomik Büyüme',
      summary: 'Yapay zeka ekosisteminde kadınların rolü, cinsiyet eşitliği ve bu alandaki fırsatların ekonomik ve sosyal etkileri.',
      date: '2025',
      readingTime: '8 dk okuma',
      category: 'Makaleler',
      visual: 'policy' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-ve-kadinlar-esitlik-inovasyon-ve-ekonomik-buyume',
      source: 'HBR Türkiye'
    },
    {
      title: 'Algoritmik Çoğulculuğun Etik Yapay Zekaya Etkisi',
      summary: 'Çeşitlilik ve kapsayıcılık yapay zeka sistemlerinin etik tasarımında nasıl kritik bir rol oynar?',
      date: '2025',
      readingTime: '6 dk okuma',
      category: 'Makaleler',
      visual: 'framework' as const,
      link: 'https://hbrturkiye.com/blog/algoritmik-cogulculugun-etik-yapay-zekaya-etkisi',
      source: 'HBR Türkiye'
    },
    {
      title: 'Sevgili İnsan, Seni Anlıyorum',
      summary: 'Yapay zeka sistemlerinin empati ve insan anlayışı üzerine düşünceler: Makineler gerçekten bizi anlayabilir mi?',
      date: '2025',
      readingTime: '5 dk okuma',
      category: 'Makaleler',
      visual: 'concentric' as const,
      link: 'https://hbrturkiye.com/blog/sevgili-insan-seni-anliyorum',
      source: 'HBR Türkiye'
    },
    {
      title: 'Çok Dilli Yapay Zeka: Sadece Teknolojik İhtiyaç Değil, Toplumsal Sorumluluk',
      summary: 'Yapay zeka sistemlerinde dil çeşitliliği ve erişilebilirlik neden teknik bir özellikten öte toplumsal bir zorunluluktur?',
      date: '2025',
      readingTime: '7 dk okuma',
      category: 'Makaleler',
      visual: 'policy' as const,
      link: 'https://hbrturkiye.com/blog/cok-dilli-yapay-zeka-sadece-teknolojik-ihtiyac-degil-toplumsal-sorumluluk',
      source: 'HBR Türkiye'
    },
    {
      title: 'Algoritmaların Gölgesinde Zihinsel Özgürlük Arayışı',
      summary: 'Yapay zeka çağında bireysel özerklik ve zihinsel özgürlük: Algoritmalar düşüncelerimizi nasıl şekillendiriyor?',
      date: '2025',
      readingTime: '8 dk okuma',
      category: 'Makaleler',
      visual: 'governance' as const,
      link: 'https://hbrturkiye.com/blog/algoritmalarin-golgesinde-zihinsel-ozgurluk-arayisi',
      source: 'HBR Türkiye'
    },
    {
      title: 'Cahit Arf ve Yapay Zekanın Düşünme Yetisi Üzerine Bitmeyen Soru',
      summary: 'Türk matematikçi Cahit Arf\'ın mirası ışığında yapay zekanın gerçek düşünme kapasitesi üzerine felsefi bir inceleme.',
      date: '2025',
      readingTime: '9 dk okuma',
      category: 'Makaleler',
      visual: 'research' as const,
      link: 'https://hbrturkiye.com/blog/cahit-arf-ve-yapay-zekanin-dusunme-yetisi-uzerine-bitmeyen-soru',
      source: 'HBR Türkiye'
    }
  ] : [
    {
      title: 'Micro-Powers, Algorithmic Subjectivity and Governance in the Age of AI',
      summary: 'Power now resides in lines of code: An examination of how AI systems reshape social power relations and the ethical dimensions of algorithmic governance.',
      date: 'December 2024',
      readingTime: '10 min read',
      category: 'Articles',
      visual: 'governance' as const,
      link: 'https://www.linkedin.com/posts/legal-ai-network-turkey_lant-aralik-sayisi-activity-7404819215410745344-rQOE',
      source: 'LANT (Legal AI Network Turkey)'
    },
    {
      title: 'AI Ethics Committee: A Necessity?',
      summary: 'Do organizations need ethics committees to oversee the ethical use of AI systems? We examine this critical question.',
      date: '2025',
      readingTime: '6 min read',
      category: 'Articles',
      visual: 'governance' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-etik-komitesi-bir-gereklilik-mi',
      source: 'HBR Turkey'
    },
    {
      title: 'AI Ethics in Practice: From Principles to Reality',
      summary: 'Translating ethical AI principles into practice: Challenges organizations face and proposed solutions.',
      date: '2025',
      readingTime: '7 min read',
      category: 'Articles',
      visual: 'concentric' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-etik-uygulamalari-ilkelerden-gercege',
      source: 'HBR Turkey'
    },
    {
      title: 'AI and Women: Equality, Innovation and Economic Growth',
      summary: 'The role of women in the AI ecosystem, gender equality, and the economic and social impacts of opportunities in this field.',
      date: '2025',
      readingTime: '8 min read',
      category: 'Articles',
      visual: 'policy' as const,
      link: 'https://hbrturkiye.com/blog/yapay-zeka-ve-kadinlar-esitlik-inovasyon-ve-ekonomik-buyume',
      source: 'HBR Turkey'
    },
    {
      title: 'The Impact of Algorithmic Pluralism on Ethical AI',
      summary: 'How diversity and inclusion play a critical role in the ethical design of AI systems.',
      date: '2025',
      readingTime: '6 min read',
      category: 'Articles',
      visual: 'framework' as const,
      link: 'https://hbrturkiye.com/blog/algoritmik-cogulculugun-etik-yapay-zekaya-etkisi',
      source: 'HBR Turkey'
    },
    {
      title: 'Dear Human, I Understand You',
      summary: 'Reflections on AI systems\' capacity for empathy and human understanding: Can machines truly understand us?',
      date: '2025',
      readingTime: '5 min read',
      category: 'Articles',
      visual: 'concentric' as const,
      link: 'https://hbrturkiye.com/blog/sevgili-insan-seni-anliyorum',
      source: 'HBR Turkey'
    },
    {
      title: 'Multilingual AI: Not Just a Technical Need, But a Social Responsibility',
      summary: 'Why language diversity and accessibility in AI systems is a social imperative beyond a technical feature.',
      date: '2025',
      readingTime: '7 min read',
      category: 'Articles',
      visual: 'policy' as const,
      link: 'https://hbrturkiye.com/blog/cok-dilli-yapay-zeka-sadece-teknolojik-ihtiyac-degil-toplumsal-sorumluluk',
      source: 'HBR Turkey'
    },
    {
      title: 'The Quest for Mental Freedom in the Shadow of Algorithms',
      summary: 'Individual autonomy and mental freedom in the age of AI: How algorithms shape our thoughts.',
      date: '2025',
      readingTime: '8 min read',
      category: 'Articles',
      visual: 'governance' as const,
      link: 'https://hbrturkiye.com/blog/algoritmalarin-golgesinde-zihinsel-ozgurluk-arayisi',
      source: 'HBR Turkey'
    },
    {
      title: 'Cahit Arf and the Eternal Question of AI\'s Thinking Capacity',
      summary: 'A philosophical examination of AI\'s true thinking capacity in light of Turkish mathematician Cahit Arf\'s legacy.',
      date: '2025',
      readingTime: '9 min read',
      category: 'Articles',
      visual: 'research' as const,
      link: 'https://hbrturkiye.com/blog/cahit-arf-ve-yapay-zekanin-dusunme-yetisi-uzerine-bitmeyen-soru',
      source: 'HBR Turkey'
    }
  ];

  // Static insights (AI Wrapped only - Reports come from languageReports, Articles from hbrArticles)
  const staticInsights = [
    {
      title: 'AI Wrapped 2025: The Year in Review',
      summary: 'A comprehensive look back at the most significant developments, trends, and shifts in AI governance and policy throughout 2025.',
      date: 'December 18, 2025',
      readingTime: '10 min read',
      category: 'AI Wrapped',
      visual: 'wrapped' as const,
      link: 'https://www.canva.com/design/DAG6k1HkvcE/K7lvvmT8NwaQPP7V7bs6Eg/view'
    },
    {
      title: 'AI Wrapped 2024: The Year in Review',
      summary: 'Looking back at 2024\'s transformative year in AI - from breakthrough regulations to emerging governance frameworks and industry shifts.',
      date: 'December 20, 2024',
      readingTime: '12 min read',
      category: 'AI Wrapped',
      visual: 'wrapped' as const,
      link: 'https://www.canva.com/design/DAGXgeM1NXM/oCfthZHCra0Yo2QKDGh1QQ/view'
    }
  ];

  // Featured Videos - bilingual
  const featuredVideos = currentLanguage === 'tr' ? [
    {
      title: 'Yapay Zeka ve Etik: Panel Tartışması',
      summary: 'Yapay zeka sistemlerinin etik boyutları, toplumsal etkileri ve yönetişim yaklaşımları üzerine derinlemesine bir panel tartışması.',
      date: '2024',
      readingTime: '45 dk',
      category: 'Videolar',
      visual: 'policy' as const,
      link: 'https://www.youtube.com/watch?v=KJ1dYK08KzE',
      videoId: 'KJ1dYK08KzE',
      isVideo: true
    },
    {
      title: 'AI Yönetişimi ve Regülasyon',
      summary: 'Yapay zeka düzenlemeleri, politika oluşturma süreçleri ve kurumsal AI yönetişimi stratejileri.',
      date: '2024',
      readingTime: '30 dk',
      category: 'Videolar',
      visual: 'governance' as const,
      link: 'https://www.youtube.com/watch?v=WO-tNnxk41o',
      videoId: 'WO-tNnxk41o',
      isVideo: true
    },
    {
      title: 'Yapay Zeka Stratejileri',
      summary: 'Organizasyonlar için yapay zeka stratejisi geliştirme, uygulama ve ölçme konularında pratik rehberlik.',
      date: '2024',
      readingTime: '35 dk',
      category: 'Videolar',
      visual: 'framework' as const,
      link: 'https://www.youtube.com/watch?v=H2T-SCCUWDE',
      videoId: 'H2T-SCCUWDE',
      isVideo: true
    },
    {
      title: 'AI ve Toplumsal Etki',
      summary: 'Yapay zeka teknolojilerinin toplum, ekonomi ve çalışma hayatı üzerindeki dönüştürücü etkileri.',
      date: '2024',
      readingTime: '40 dk',
      category: 'Videolar',
      visual: 'concentric' as const,
      link: 'https://www.youtube.com/watch?v=CdcWohlSvvs',
      videoId: 'CdcWohlSvvs',
      isVideo: true
    },
    {
      title: 'Etik Yapay Zeka Uygulamaları',
      summary: 'Etik ilkelerden pratik uygulamaya: Sorumlu AI geliştirme ve dağıtım stratejileri.',
      date: '2024',
      readingTime: '25 dk',
      category: 'Videolar',
      visual: 'research' as const,
      link: 'https://www.youtube.com/watch?v=Yxw161Yw9yM',
      videoId: 'Yxw161Yw9yM',
      isVideo: true
    },
    {
      title: 'AI Politikası ve Karar Alma',
      summary: 'Yapay zeka politikalarının oluşturulması, uygulanması ve değerlendirilmesi süreçleri.',
      date: '2024',
      readingTime: '38 dk',
      category: 'Videolar',
      visual: 'policy' as const,
      link: 'https://www.youtube.com/watch?v=qdkBrviS3Ng',
      videoId: 'qdkBrviS3Ng',
      isVideo: true
    },
    {
      title: 'Yapay Zeka Ekosistemi',
      summary: 'AI ekosisteminin farklı paydaşları, roller ve sorumluluklar üzerine kapsamlı bir bakış.',
      date: '2024',
      readingTime: '32 dk',
      category: 'Videolar',
      visual: 'governance' as const,
      link: 'https://www.youtube.com/watch?v=07fR5fROqFk',
      videoId: '07fR5fROqFk',
      isVideo: true
    }
  ] : [
    {
      title: 'AI and Ethics: Panel Discussion',
      summary: 'An in-depth panel discussion on the ethical dimensions, societal impacts, and governance approaches of AI systems.',
      date: '2024',
      readingTime: '45 min',
      category: 'Videos',
      visual: 'policy' as const,
      link: 'https://www.youtube.com/watch?v=KJ1dYK08KzE',
      videoId: 'KJ1dYK08KzE',
      isVideo: true
    },
    {
      title: 'AI Governance and Regulation',
      summary: 'AI regulations, policy-making processes, and organizational AI governance strategies.',
      date: '2024',
      readingTime: '30 min',
      category: 'Videos',
      visual: 'governance' as const,
      link: 'https://www.youtube.com/watch?v=WO-tNnxk41o',
      videoId: 'WO-tNnxk41o',
      isVideo: true
    },
    {
      title: 'AI Strategies',
      summary: 'Practical guidance on developing, implementing, and measuring AI strategies for organizations.',
      date: '2024',
      readingTime: '35 min',
      category: 'Videos',
      visual: 'framework' as const,
      link: 'https://www.youtube.com/watch?v=H2T-SCCUWDE',
      videoId: 'H2T-SCCUWDE',
      isVideo: true
    },
    {
      title: 'AI and Social Impact',
      summary: 'The transformative effects of AI technologies on society, economy, and the future of work.',
      date: '2024',
      readingTime: '40 min',
      category: 'Videos',
      visual: 'concentric' as const,
      link: 'https://www.youtube.com/watch?v=CdcWohlSvvs',
      videoId: 'CdcWohlSvvs',
      isVideo: true
    },
    {
      title: 'Ethical AI Practices',
      summary: 'From ethical principles to practical implementation: Responsible AI development and deployment strategies.',
      date: '2024',
      readingTime: '25 min',
      category: 'Videos',
      visual: 'research' as const,
      link: 'https://www.youtube.com/watch?v=Yxw161Yw9yM',
      videoId: 'Yxw161Yw9yM',
      isVideo: true
    },
    {
      title: 'AI Policy and Decision Making',
      summary: 'Processes for creating, implementing, and evaluating AI policies and governance frameworks.',
      date: '2024',
      readingTime: '38 min',
      category: 'Videos',
      visual: 'policy' as const,
      link: 'https://www.youtube.com/watch?v=qdkBrviS3Ng',
      videoId: 'qdkBrviS3Ng',
      isVideo: true
    },
    {
      title: 'AI Ecosystem',
      summary: 'A comprehensive view of the AI ecosystem, different stakeholders, roles, and responsibilities.',
      date: '2024',
      readingTime: '32 min',
      category: 'Videos',
      visual: 'governance' as const,
      link: 'https://www.youtube.com/watch?v=07fR5fROqFk',
      videoId: '07fR5fROqFk',
      isVideo: true
    }
  ];

  // Fetch TechLetter articles from backend
  useEffect(() => {
    const fetchTechLetter = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-9581034c/techletter`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.articles) {
            setTechletterArticles(data.articles.map((article: any) => ({
              ...article,
              readingTime: '5 min read' // Default reading time for techletter
            })));
            
            if (data.articles.length === 0) {
              console.log('TechLetter RSS feed not available, showing static content only');
            }
          }
        } else {
          console.log('TechLetter API returned non-OK status, showing static content only');
        }
      } catch (error) {
        console.log('Could not fetch TechLetter articles, showing static content only:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechLetter();
  }, []);

  // Combine all insights
  const allInsights = [...languageReports, ...hbrArticles, ...techletterArticles, ...staticInsights, ...featuredVideos];

  const getCategoryColor = (category: string) => {
    const colors: any = {
      'Articles': content.colors.accent,
      'Makaleler': content.colors.accent,
      'Techletter': '#9FB7C8',
      'Reports': content.colors.dark,
      'Raporlar': content.colors.dark,
      'AI Wrapped': '#1E2A45',
      'Videolar': '#FF6347',
      'Videos': '#FF6347'
    };
    return colors[category] || content.colors.accent;
  };

  // Category filter labels based on language
  const categoryLabels = currentLanguage === 'tr' 
    ? ['Tümü', 'Raporlar', 'Techletter', 'Makaleler', 'AI Wrapped', 'Videolar']
    : ['All', 'Reports', 'Techletter', 'Articles', 'AI Wrapped', 'Videos'];

  const categoryMapping: any = {
    'Tümü': 'All',
    'Raporlar': 'Reports',
    'Makaleler': 'Articles',
    'All': 'All',
    'Reports': 'Reports',
    'Articles': 'Articles',
    'Techletter': 'Techletter',
    'AI Wrapped': 'AI Wrapped',
    'Videolar': 'Videos',
    'Videos': 'Videos'
  };

  // Helper function to parse dates
  const parseDate = (dateStr: string): Date => {
    // Month mapping for both English and Turkish
    const monthMap: any = {
      'january': 0, 'ocak': 0,
      'february': 1, 'şubat': 1,
      'march': 2, 'mart': 2,
      'april': 3, 'nisan': 3,
      'may': 4, 'mayıs': 4,
      'june': 5, 'haziran': 5,
      'july': 6, 'temmuz': 6,
      'august': 7, 'ağustos': 7,
      'september': 8, 'eylül': 8,
      'october': 9, 'ekim': 9,
      'november': 10, 'kasım': 10,
      'december': 11, 'aralık': 11
    };

    const normalized = dateStr.toLowerCase().trim();
    
    // Check if it's just a year
    const yearOnly = normalized.match(/^\d{4}$/);
    if (yearOnly) {
      return new Date(parseInt(yearOnly[0]), 0, 1);
    }
    
    // Check for "Month YYYY" or "Month DD, YYYY" format
    const parts = normalized.split(' ');
    if (parts.length >= 2) {
      const monthStr = parts[0].replace(',', '');
      const month = monthMap[monthStr];
      
      if (month !== undefined) {
        // Get year (last part that's a number)
        const yearPart = parts.find(p => /^\d{4}$/.test(p));
        const year = yearPart ? parseInt(yearPart) : new Date().getFullYear();
        
        // Get day if exists
        const dayPart = parts.find(p => /^\d{1,2},?$/.test(p));
        const day = dayPart ? parseInt(dayPart.replace(',', '')) : 1;
        
        return new Date(year, month, day);
      }
    }
    
    // Default fallback
    return new Date(0);
  };

  const filteredInsights = activeFilter === 'All' 
    ? allInsights 
    : allInsights.filter(insight => {
        const filterKey = categoryMapping[activeFilter] || activeFilter;
        // Handle both Turkish "Raporlar" and English "Reports"
        if (filterKey === 'Reports') {
          return insight.category === 'Reports' || insight.category === 'Raporlar';
        }
        if (filterKey === 'Articles') {
          return insight.category === 'Articles' || insight.category === 'Makaleler';
        }
        if (filterKey === 'Videos') {
          return insight.category === 'Videos' || insight.category === 'Videolar';
        }
        return insight.category === filterKey;
      });

  // Sort insights by date (newest first)
  const sortedInsights = [...filteredInsights].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" 
        style={{ backgroundColor: content.colors.cream }}
      >
        {/* Animated geometric background layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Tech grid pattern - more visible */}
          <div 
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `linear-gradient(${content.colors.dark} 1px, transparent 1px), linear-gradient(90deg, ${content.colors.dark} 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Circuit board inspired lines - policy structure */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 20 40 M 40 20 L 80 20 M 80 0 L 80 60 M 100 40 L 140 40 M 140 20 L 140 80" 
                    stroke={content.colors.accent} 
                    strokeWidth="0.5" 
                    fill="none" 
                  />
                  <circle cx="20" cy="40" r="2" fill={content.colors.accent} />
                  <circle cx="80" cy="20" r="2" fill={content.colors.accent} />
                  <circle cx="140" cy="40" r="2" fill={content.colors.accent} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          
          {/* AI neural network connections */}
          <div className="absolute inset-0 opacity-[0.12]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              {/* Nodes */}
              <circle cx="15%" cy="30%" r="3" fill={content.colors.dark} opacity="0.3" />
              <circle cx="25%" cy="50%" r="3" fill={content.colors.dark} opacity="0.3" />
              <circle cx="35%" cy="35%" r="3" fill={content.colors.dark} opacity="0.3" />
              <circle cx="75%" cy="40%" r="3" fill={content.colors.accent} opacity="0.3" />
              <circle cx="85%" cy="60%" r="3" fill={content.colors.accent} opacity="0.3" />
              <circle cx="65%" cy="55%" r="3" fill={content.colors.accent} opacity="0.3" />
              
              {/* Connections */}
              <line x1="15%" y1="30%" x2="25%" y2="50%" stroke={content.colors.dark} strokeWidth="0.5" opacity="0.2" />
              <line x1="25%" y1="50%" x2="35%" y2="35%" stroke={content.colors.dark} strokeWidth="0.5" opacity="0.2" />
              <line x1="35%" y1="35%" x2="65%" y2="55%" stroke={content.colors.accent} strokeWidth="0.5" opacity="0.2" />
              <line x1="75%" y1="40%" x2="85%" y2="60%" stroke={content.colors.accent} strokeWidth="0.5" opacity="0.2" />
              <line x1="65%" y1="55%" x2="85%" y2="60%" stroke={content.colors.accent} strokeWidth="0.5" opacity="0.2" />
            </svg>
          </div>
          
          {/* Policy document/layers visualization */}
          <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-[0.04]">
            <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="140" height="2" fill={content.colors.dark} />
              <rect x="20" y="45" width="120" height="2" fill={content.colors.dark} />
              <rect x="20" y="60" width="130" height="2" fill={content.colors.dark} />
              <rect x="20" y="85" width="140" height="2" fill={content.colors.accent} />
              <rect x="20" y="100" width="110" height="2" fill={content.colors.accent} />
              <rect x="20" y="115" width="125" height="2" fill={content.colors.accent} />
              <rect x="20" y="140" width="135" height="2" fill={content.colors.dark} />
              <rect x="20" y="155" width="115" height="2" fill={content.colors.dark} />
            </svg>
          </div>
          
          {/* Data nodes - AI theme */}
          <div className="absolute left-0 bottom-1/4 w-1/4 h-1/3 opacity-[0.05]">
            <svg width="100%" height="100%" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="15" fill="none" stroke={content.colors.dark} strokeWidth="1" />
              <circle cx="90" cy="50" r="20" fill="none" stroke={content.colors.accent} strokeWidth="1" />
              <circle cx="60" cy="90" r="12" fill="none" stroke={content.colors.dark} strokeWidth="1" />
              <circle cx="110" cy="110" r="18" fill="none" stroke={content.colors.accent} strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-4 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
              Insights
            </h1>
            <p className="font-serif text-xl italic" style={{ color: content.colors.accent }}>
              Notes from the junction.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
              <strong className="font-bold">STRATRI</strong>'s work does not end with client projects. We map the wider <span className="font-bold italic">technology</span> and AI landscape and the rules that shape it, from regulatory drafts to boardroom narratives. Insights brings this together in one place: reports, explainers, "AI wrapped" briefs, published articles, and Techletter.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categoryLabels.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'shadow-sm'
                    : 'hover:border-[#1E2A45]'
                }`}
                style={{
                  backgroundColor: activeFilter === category ? '#1E2A45' : 'white',
                  color: activeFilter === category ? 'white' : '#1E2A45',
                  border: `1.5px solid ${activeFilter === category ? '#1E2A45' : '#1E2A45'}`
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {loading && (
            <div className="text-center py-12">
              <p className="font-sans text-lg" style={{ color: content.colors.dark }}>
                Loading insights...
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedInsights.map((insight, index) => (
              <article 
                key={index}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  if (insight.link) {
                    window.open(insight.link, '_blank');
                  }
                }}
              >
                {/* Blog cover visual */}
                <div className="h-32 bg-white border-b border-[#E8E4DF]/30 flex items-center justify-center p-6 overflow-hidden">
                  <BlogCoverTemplate variant={insight.visual} className="w-full h-full" />
                </div>

                <div className="p-8">
                  <div className="mb-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-sans font-semibold"
                      style={{ 
                        backgroundColor: `${getCategoryColor(insight.category)}20`,
                        color: getCategoryColor(insight.category)
                      }}
                    >
                      {insight.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium mb-3 leading-snug" style={{ color: content.colors.dark }}>
                    {insight.title}
                  </h3>
                  
                  <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: `${content.colors.dark}B3` }}>
                    {insight.summary}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs font-sans pt-4 border-t" style={{ color: `${content.colors.dark}80`, borderColor: '#E8E4DF' }}>
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readingTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}