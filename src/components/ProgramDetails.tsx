import { CheckCircle2, Users, Award, FileText } from 'lucide-react';

interface ProgramDetailsProps {
  overview: string;
  topics: string[];
  outcomes: string[];
  whoShouldAttend: string[];
  deliveryFormat: string;
  groupSize?: string;
  compliance: string[];
  certificate?: string;
  durationBreakdown?: string[];
}

export function ProgramDetails({
  overview,
  topics,
  outcomes,
  whoShouldAttend,
  deliveryFormat,
  groupSize,
  compliance,
  certificate,
  durationBreakdown
}: ProgramDetailsProps) {
  return (
    <div className="bg-white">
      {/* Overview Section */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 border-b border-[#1A1A1A0D]">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg sm:text-xl leading-relaxed text-[#1A1A1AB3] font-sans">
            {overview}
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-12 sm:py-16 px-6 lg:px-8 bg-[#F8F6F3]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-8 text-[#1A1A1A]">
            What You'll Learn
          </h2>
          
          <ul className="space-y-4">
            {topics.map((topic, index) => (
              <li key={index} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4A90A4] flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg text-[#1A1A1AB3] font-sans leading-relaxed">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Program Details Grid */}
      <section className="py-12 sm:py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Logistics */}
            <div className="space-y-8">
              {/* Duration Breakdown */}
              {durationBreakdown && durationBreakdown.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-[#4A90A4]" />
                    <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">
                      Program Structure
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {durationBreakdown.map((item, index) => (
                      <li key={index} className="text-base text-[#1A1A1AB3] font-sans pl-7">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Delivery Format */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#4A90A4]" />
                  <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">
                    Delivery Format
                  </h3>
                </div>
                <p className="text-base text-[#1A1A1AB3] font-sans leading-relaxed">
                  {deliveryFormat}
                </p>
                {groupSize && (
                  <p className="text-sm text-[#1A1A1A99] font-sans mt-2">
                    {groupSize}
                  </p>
                )}
              </div>

              {/* Certificate */}
              {certificate && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#4A90A4]" />
                    <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">
                      Certificate
                    </h3>
                  </div>
                  <p className="text-base text-[#1A1A1AB3] font-sans">
                    {certificate}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Outcomes & Audience */}
            <div className="space-y-8">
              {/* Learning Outcomes */}
              <div>
                <h3 className="font-sans text-xl font-semibold text-[#1A1A1A] mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-[#4A90A4] font-semibold">→</span>
                      <span className="text-base text-[#1A1A1AB3] font-sans">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Attend */}
              <div>
                <h3 className="font-sans text-xl font-semibold text-[#1A1A1A] mb-4">
                  Who Should Attend
                </h3>
                <ul className="space-y-2">
                  {whoShouldAttend.map((person, index) => (
                    <li key={index} className="text-base text-[#1A1A1AB3] font-sans pl-7">
                      • {person}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance Alignment */}
              <div>
                <h3 className="font-sans text-xl font-semibold text-[#1A1A1A] mb-4">
                  Compliance & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {compliance.map((framework, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#8B9D8315] text-[#8B9D83] px-3 py-1.5 rounded-full text-sm font-sans font-medium"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
