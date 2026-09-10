import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const keywords1 = [
    'PERFORMANCE MARKETING',
    'NARRATIVE STRATEGY',
    'GA4 ATTRIBUTION',
    'PPC & PMAX',
    'LINGUISTIC PERSUASION',
    'GENERATIVE ENGINE OPTIMIZATION',
  ];

  const keywords2 = [
    '12+ YEARS SCALING',
    '+30% CONVERSIONS',
    '$500K REVENUE LIFT',
    'ABM ARCHITECTURE',
    'SEMANTIC SEARCH',
    'MULTI-MILLION PORTFOLIOS',
  ];

  return (
    <div
      ref={containerRef}
      className="py-12 overflow-hidden border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative select-none"
    >
      {/* Row 1 - Moving Right */}
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap gap-8 text-2xl sm:text-4xl font-extrabold text-slate-800/80 uppercase font-display tracking-widest"
      >
        {[...keywords1, ...keywords1, ...keywords1].map((kw, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="hover:text-indigo-500/80 transition-colors">
              {kw}
            </span>
            <span className="text-indigo-500/40 text-lg">✦</span>
          </span>
        ))}
      </motion.div>

      {/* Row 2 - Moving Left */}
      <motion.div
        style={{ x: x2 }}
        className="flex whitespace-nowrap gap-8 text-xl sm:text-3xl font-bold text-slate-800/60 uppercase font-display tracking-wider mt-4"
      >
        {[...keywords2, ...keywords2, ...keywords2].map((kw, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="hover:text-cyan-500/80 transition-colors">
              {kw}
            </span>
            <span className="text-cyan-500/40 text-sm">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
