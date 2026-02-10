import { Badge } from './ui/badge';
import { ChevronRight, Home } from 'lucide-react';

interface ProgramHeroProps {
  title: string;
  format: string;
  duration: string;
  level: string;
  audience: string;
  prerequisites?: string;
}

export function ProgramHero({
  title,
  format,
  duration,
  level,
  audience,
  prerequisites
}: ProgramHeroProps) {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-6 lg:px-8 bg-[#F8F6F3]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-sans text-[#1A1A1A99]" aria-label="Breadcrumb">
          <a 
            href="/services" 
            className="hover:text-[#4A90A4] transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            Services
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1A1A1A]" aria-current="page">{title}</span>
        </nav>

        {/* Title */}
        <h1 
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 text-[#1A1A1A]"
          style={{ letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge 
            variant="outline" 
            className="bg-[#4A90A40D] text-[#4A90A4] border-[#4A90A433] font-sans text-sm font-semibold px-4 py-1.5"
          >
            {format}
          </Badge>
          <Badge 
            variant="outline" 
            className="bg-white text-[#1A1A1A] border-[#1A1A1A33] font-sans text-sm px-4 py-1.5"
          >
            {duration}
          </Badge>
          <Badge 
            variant="outline" 
            className="bg-[#8B9D8315] text-[#8B9D83] border-[#8B9D8333] font-sans text-sm font-semibold px-4 py-1.5"
          >
            {level}
          </Badge>
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-semibold mb-2 text-[#1A1A1A]">
            {audience}
          </h2>
        </div>

        {/* Prerequisites (if any) */}
        {prerequisites && (
          <div className="bg-[#C67B5C15] border border-[#C67B5C33] rounded-lg p-4">
            <p className="text-sm font-sans">
              <span className="font-semibold text-[#C67B5C]">Prerequisites: </span>
              <span className="text-[#1A1A1AB3]">{prerequisites}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
