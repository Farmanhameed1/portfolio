import {
  PERSONAL_INFO,
  CORE_COMPETENCIES,
  EXPERIENCES,
  EDUCATION_ITEMS,
  CERTIFICATIONS,
  TOOLS_CATEGORIZED,
  LANGUAGES
} from '../data/resumeData';

export function PrintResumeView() {
  return (
    <div className="hidden print-only p-8 text-black bg-white max-w-4xl mx-auto text-[13px] leading-relaxed font-sans">
      {/* Header */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide text-black mb-1">
          {PERSONAL_INFO.name}
        </h1>
        <div className="text-sm font-semibold text-neutral-800 mb-2">
          {PERSONAL_INFO.headline} | {PERSONAL_INFO.subHeadline}
        </div>
        <div className="text-xs text-neutral-600 flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>{PERSONAL_INFO.location}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.phone}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.email}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.linkedinDisplay}</span>
          <span>•</span>
          <span>{PERSONAL_INFO.portfolioDisplay}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
          Professional Summary
        </h2>
        <p className="text-neutral-800 text-justify">
          {PERSONAL_INFO.summary}
        </p>
      </div>

      {/* Core Competencies */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
          Core Competencies
        </h2>
        <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-neutral-800">
          {CORE_COMPETENCIES.map((comp) => (
            <li key={comp.id}>
              <strong>{comp.title}:</strong> {comp.skills.join(', ')}.
            </li>
          ))}
        </ul>
      </div>

      {/* Professional Experience */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
          Professional Experience
        </h2>
        <div className="space-y-3">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline font-bold text-neutral-900">
                <span>
                  {exp.role} | <span className="font-semibold text-neutral-700">{exp.company}</span>
                  {exp.location && <span className="font-normal text-xs text-neutral-500"> ({exp.location})</span>}
                </span>
                <span className="text-xs font-normal text-neutral-600">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-neutral-800 text-[12.5px]">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="pl-1">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
          Education
        </h2>
        <div className="space-y-2">
          {EDUCATION_ITEMS.map((edu) => (
            <div key={edu.id}>
              <div className="flex justify-between font-bold text-neutral-900">
                <span>{edu.degree} | <span className="font-normal">{edu.institution}</span></span>
                <span className="text-xs font-normal text-neutral-600">{edu.years}</span>
              </div>
              <div className="text-xs text-neutral-600 italic">{edu.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
          Certifications
        </h2>
        <ul className="list-disc list-inside space-y-0.5 text-neutral-800">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.id}>
              <strong>{cert.title}</strong> — {cert.issuer}
            </li>
          ))}
        </ul>
      </div>

      {/* Technical Skills & Languages */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
          Technical Skills & Languages
        </h2>
        <div className="space-y-1 text-neutral-800 text-xs">
          <div>
            <strong>Tools:</strong> {TOOLS_CATEGORIZED.flatMap(c => c.tools).join(', ')}.
          </div>
          <div>
            <strong>Languages:</strong> {LANGUAGES.map(l => `${l.name} (${l.level})`).join(', ')}.
          </div>
        </div>
      </div>
    </div>
  );
}
