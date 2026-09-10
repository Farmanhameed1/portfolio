import { motion } from 'motion/react';
import {
  Brain,
  Cpu,
  TrendingUp,
  Sparkles,
  Search,
  Target,
  BarChart,
  MessageSquareCode,
  Zap
} from 'lucide-react';
import { Card3D } from './Card3D';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      {/* Background Accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Dual-Engine Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-display">
            Linguistic Precision Meets <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              Quantitative Marketing Rigor
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most organizations suffer from a disconnect between creative copywriters and algorithmic data analysts. With a Master’s degree in English Literature and a decade of performance engineering, Muhammad Farman bridges this divide.
          </p>
        </div>

        {/* Dual Pillar Comparison Cards with 3D Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Pillar: Narrative & Linguistic Psychology */}
          <Card3D depth={14} glowColor="rgba(99, 102, 241, 0.25)">
            <div className="h-full rounded-3xl p-8 bg-slate-900/80 border border-indigo-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  1. Narrative & Linguistic Architecture
                </h3>
                <p className="text-sm font-medium text-indigo-300 mb-6">
                  Grounded in English Language & Behavioral Studies (M.A. 2017–2019)
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Conversion is an act of cognitive persuasion. By dissecting semantics, intent nuances, and subconscious emotional triggers, ad copies and landing flows overcome friction before the user even registers reluctance.
                </p>

                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <MessageSquareCode className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Generative Engine Optimization (GEO):</strong> Formatting brand narratives to be prominently indexed and cited by modern LLM answer engines.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <Target className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Intent-to-Copy Mapping:</strong> Aligning query intent levels (informational, commercial, transactional) with customized psychological hooks.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Micro-Copy Friction Elimination:</strong> Optimizing CTA phrasing and reassurance triggers to produce consistent +20% to +30% CTR lifts.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Core Output</span>
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-950/70 px-3 py-1 rounded-full border border-indigo-800/50">
                  Resonant Brand Authority
                </span>
              </div>
            </div>
          </Card3D>

          {/* Right Pillar: Algorithmic & Data Rigor */}
          <Card3D depth={14} glowColor="rgba(6, 182, 212, 0.25)">
            <div className="h-full rounded-3xl p-8 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">
                  2. Performance & Algorithmic Rigor
                </h3>
                <p className="text-sm font-medium text-cyan-300 mb-6">
                  Tested Across $1M+ Portfolios & 12+ Years Enterprise Execution
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Narrative without telemetry is guesswork. Every headline, ad extension, and email drip is backed by GA4 event schemas, Looker Studio multi-touch modeling, and strict bid-strategy management.
                </p>

                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <BarChart className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">GA4 & Attribution Intelligence:</strong> End-to-end tracking of customer journeys across multi-device, multi-session purchase paths.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">PPC & PMax Scalability:</strong> Scaling budgets above $100K/yr while preserving an elevated 25%+ ROI and capturing $500K+ incremental revenue.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <Search className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Technical Crawl Architecture:</strong> Optimizing Core Web Vitals, schema markup, and internal PageRank distribution to lift organic traffic 35%–40%.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Core Output</span>
                <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-800/50">
                  Predictable, Scalable Revenue
                </span>
              </div>
            </div>
          </Card3D>

        </div>

      </div>
    </section>
  );
}
