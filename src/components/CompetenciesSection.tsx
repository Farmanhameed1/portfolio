import {
  PenTool,
  TrendingUp,
  Layers,
  Search,
  BarChart3,
  Cpu,
  CheckCircle,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/resumeData';
import { Card3D } from './Card3D';

export function CompetenciesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="competencies" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Core Competencies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Engineered over 12+ years of continuous optimization across enterprise PPC, B2B demand generation, and emerging GEO algorithms.
          </p>
        </div>

        {/* 6 Core Competencies 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_COMPETENCIES.map((comp) => (
            <Card3D
              key={comp.id}
              depth={12}
              className="h-full"
            >
              <div className="h-full rounded-2xl p-6 sm:p-7 bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 transition-all flex flex-col justify-between backdrop-blur-md shadow-lg group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(comp.iconName)}
                    </div>
                    {comp.growthMetric && (
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                        {comp.growthMetric}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {comp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/90 mb-5 leading-relaxed">
                    {comp.summary}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {comp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-indigo-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Verified Execution</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </Card3D>
          ))}
        </div>

      </div>
    </section>
  );
}
