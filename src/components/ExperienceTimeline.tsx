import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';
import { Card3D } from './Card3D';

export function ExperienceTimeline() {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-emerald-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Professional Experience
          </h2>
          <p className="text-base text-slate-300">
            A chronological legacy of multi-million dollar performance campaigns, brand reinventions, and global cross-functional leadership.
          </p>
        </div>

        {/* Interactive Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isSelected = activeExpId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.isCurrent
                      ? 'bg-indigo-600 border-white text-white shadow-lg shadow-indigo-500/50 scale-110'
                      : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-indigo-400 group-hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Left Date Label for Desktop */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                  <span className={`text-xs font-semibold ${exp.isCurrent ? 'text-indigo-400' : 'text-slate-400'}`}>
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {exp.isCurrent ? 'Present' : exp.period.split('–')[1]?.trim()}
                  </div>
                </div>

                {/* 3D Experience Card */}
                <Card3D
                  depth={10}
                  glowColor={exp.isCurrent ? 'rgba(99, 102, 241, 0.25)' : 'rgba(148, 163, 184, 0.15)'}
                  onClick={() => setActiveExpId(exp.id)}
                  className="cursor-pointer"
                >
                  <div
                    className={`rounded-2xl p-6 sm:p-8 transition-all backdrop-blur-md border ${
                      isSelected
                        ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl shadow-indigo-950/40'
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    {/* Role & Company Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950/70 border border-emerald-700/60 text-emerald-400">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-indigo-300 font-semibold mt-1">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="flex items-center gap-1.5 text-slate-400 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-rose-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Mobile Date */}
                      <div className="md:hidden flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Key Quantified Metrics Bar */}
                    {exp.keyMetrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
                        {exp.keyMetrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center"
                          >
                            <div className="text-base sm:text-lg font-bold text-white font-display">
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                      <span className="text-xs text-slate-400 mr-1">Technologies & Focus:</span>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
