import { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Award,
  Wrench,
  Languages,
  CheckCircle,
  ExternalLink,
  BookOpen,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import {
  EDUCATION_ITEMS,
  CERTIFICATIONS,
  TOOLS_CATEGORIZED,
  LANGUAGES
} from '../data/resumeData';
import { Card3D } from './Card3D';

export function EducationCertsSection() {
  const [activeToolTab, setActiveToolTab] = useState<number>(0);

  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-purple-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Rigor & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-300">
            A comprehensive foundation in linguistic theory, modern AI models, and enterprise marketing platforms.
          </p>
        </div>

        {/* 2 Column Layout: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Academic Background
              </h3>
            </div>

            {EDUCATION_ITEMS.map((edu) => (
              <Card3D key={edu.id} depth={10}>
                <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800/80 backdrop-blur-md">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-indigo-400 bg-indigo-950/70 px-2.5 py-1 rounded-md border border-indigo-800/50 shrink-0">
                      {edu.years}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Professional Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <Card3D key={cert.id} depth={8} className="h-full">
                  <div className="h-full rounded-2xl p-5 bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center mb-3 text-cyan-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug mb-2">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{cert.issuer}</span>
                      <span className="text-emerald-400 font-medium">Verified</span>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

        </div>

        {/* Tools & Languages Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tools Stack */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <Wrench className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Technical Tools & Platforms
              </h3>
            </div>

            <div className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 backdrop-blur-md">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TOOLS_CATEGORIZED.map((cat, idx) => (
                  <button
                    key={cat.category}
                    type="button"
                    onClick={() => setActiveToolTab(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeToolTab === idx
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-800/70 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>

              {/* Tools tags for active category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TOOLS_CATEGORIZED[activeToolTab].tools.map((tool) => (
                  <div
                    key={tool}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2.5 hover:border-indigo-500/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Proficiency */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <Languages className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white font-display">
                Language Fluency
              </h3>
            </div>

            <div className="rounded-2xl p-6 bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-4">
              {LANGUAGES.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-slate-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
