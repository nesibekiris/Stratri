import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  format: string;
  duration: string;
  level: string;
  audience: string;
  teaser: string;
  slug: string;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  format,
  duration,
  level,
  audience,
  teaser,
  slug,
  onClick
}: ServiceCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = `/services/${slug}`;
    }
  };

  return (
    <article
      className="group relative bg-white border border-[#4A90A41A] rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-col"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Explore ${title} program details`}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-serif text-2xl font-medium mb-3 text-[#1A1A1A] leading-tight">
          {title}
        </h3>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge 
            variant="outline" 
            className="bg-[#4A90A40D] text-[#4A90A4] border-[#4A90A433] font-sans text-xs font-semibold"
          >
            {format}
          </Badge>
          <Badge 
            variant="outline" 
            className="bg-[#8B9D8315] text-[#8B9D83] border-[#8B9D8333] font-sans text-xs font-semibold"
          >
            {level}
          </Badge>
        </div>
        
        <p className="text-sm text-[#1A1A1A99] font-sans">{duration}</p>
      </div>

      {/* Target Audience */}
      <div className="mb-4">
        <p className="text-sm font-sans font-medium text-[#1A1A1AB3]">
          {audience}
        </p>
      </div>

      {/* Teaser */}
      <div className="mb-6 flex-grow">
        <p className="text-base leading-relaxed text-[#1A1A1ACC] font-sans">
          {teaser}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 text-[#4A90A4] font-sans font-medium text-sm group-hover:text-[#C67B5C] transition-colors">
          <span>Explore Program</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}
