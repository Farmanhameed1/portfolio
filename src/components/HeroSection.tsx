import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Globe,
  ArrowDown,
  Sparkles,
  TrendingUp,
  FileCheck2,
  CheckCircle2,
  Copy,
  Check,
  UploadCloud
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Card3D } from './Card3D';
import { CustomMediaAssets } from '../types';

interface HeroSectionProps {
  customAssets: CustomMediaAssets;
  onOpenMediaModal: () => void;
  onPrintCV: () => void;
}

export function HeroSection({
  customAssets,
  onOpenMediaModal,
  onPrintCV,
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.1]);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Atmospheric Gradient Blobs for Depth */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Parallax Typography & Value Proposition */}
          <motion.div
            style={{ y: textY, opacity: opacityFade }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                Open for High-Impact Roles & Advisory
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-950/70 border border-indigo-800/60">
                12+ Yrs Exp
              </span>
            </motion.div>

            {/* Main Name Heading with 3D tracking */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-3"
            >
              <span className="block font-display">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Dual Role Sub-heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl sm:text-2xl font-semibold mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                {PERSONAL_INFO.headline}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300 font-medium text-lg sm:text-xl">
                {PERSONAL_INFO.subHeadline}
              </span>
            </motion.div>

            {/* Strategic Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8"
            >
              Bridging the gap between <span className="text-white font-medium underline decoration-indigo-500/60 decoration-2 underline-offset-4">complex data analytics</span> and <span className="text-white font-medium underline decoration-cyan-500/60 decoration-2 underline-offset-4">human-centric storytelling</span>. 
              Proven track record managing multi-million-dollar portfolios, scaling pipeline growth for global firms like 
              <span className="text-indigo-300 font-semibold"> SWAFOO</span> and <span className="text-cyan-300 font-semibold">HYNER Technologies</span>, and pioneering 
              <span className="text-white font-semibold"> Generative Engine Optimization (GEO)</span>.
            </motion.p>

            {/* Quick Contact & Verified Links Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-slate-300">{PERSONAL_INFO.location}</span>
              </div>

              {/* Email Button with copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer group"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* Phone Button with copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer group"
                title="Click to copy phone"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>

              {/* Verified LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              {/* Portfolio Link */}
              <a
                href={PERSONAL_INFO.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Vercel Portfolio</span>
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                id="hero-cta-experience"
                href="#experience"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
              >
                <span>View Career Timeline</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-export"
                type="button"
                onClick={onPrintCV}
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Print / Save Resume</span>
              </button>

              <button
                id="hero-cta-media"
                type="button"
                onClick={onOpenMediaModal}
                className="px-4 py-3 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 font-medium text-xs border border-indigo-800/50 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <UploadCloud className="w-4 h-4 text-indigo-400" />
                <span>Custom Media & GitHub Hub</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Parallax Interactive Holographic Card & Avatar */}
          <motion.div
            style={{ y: cardY }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <Card3D
              id="hero-3d-profile-card"
              depth={16}
              glowColor="rgba(99, 102, 241, 0.3)"
              className="w-full max-w-md"
            >
              <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-700/60 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Decorative Top Accent Light */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl" />

                {/* Profile Media Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[4/3] flex items-center justify-center group">
                  {customAssets.videoUrl ? (
                    <video
                      src={customAssets.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : customAssets.avatarUrl ? (
                    <img
                      src={customAssets.avatarUrl}
                      alt="Muhammad Farman"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    /* Default 3D Holographic Identity Visual */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950">
                      {/* 3D Geometric Ring Animation */}
                      <div className="relative w-28 h-28 rounded-full border-2 border-indigo-500/40 flex items-center justify-center mb-3 animate-[spin_20s_linear_infinite]">
                        <div className="w-20 h-20 rounded-full border border-cyan-400/50 border-dashed animate-[spin_10s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-3xl bg-gradient-to-tr from-indigo-400 via-cyan-300 to-white bg-clip-text text-transparent">
                          MF
                        </div>
                      </div>

                      <div className="text-sm font-semibold text-white">
                        Muhammad Farman
                      </div>
                      <div className="text-xs text-indigo-300 font-medium">
                        Linguistics & Growth Architecture
                      </div>

                      {/* Floating prompt overlay to upload real photo/video */}
                      <button
                        type="button"
                        onClick={onOpenMediaModal}
                        className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-[11px] text-indigo-200 transition-all cursor-pointer"
                      >
                        <UploadCloud className="w-3 h-3" />
                        <span>Upload photo or video</span>
                      </button>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/70 flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>GEO & GA4 Expert</span>
                  </div>
                </div>

                {/* Quick Profile Summary Points */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Core Disciplines</span>
                    <span className="text-slate-200 font-medium">Paid Search & GEO</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Academic Pedigree</span>
                    <span className="text-slate-200 font-medium">Master's in Linguistics</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Target Verticals</span>
                    <span className="text-slate-200 font-medium">B2B, SaaS, E-Commerce</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5">
                    <span className="text-slate-400">Remote Availability</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Global (US/UK/EU)
                    </span>
                  </div>
                </div>

                {/* Metrics Mini-Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                    <div className="text-xl font-bold text-white font-display">+30%</div>
                    <div className="text-[11px] text-slate-400">Conversion Rate</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                    <div className="text-xl font-bold text-indigo-400 font-display">$500K+</div>
                    <div className="text-[11px] text-slate-400">PPC Revenue Lift</div>
                  </div>
                </div>

              </div>
            </Card3D>
          </motion.div>

        </div>

        {/* Floating Metrics Ribbon (Parallax bottom bar) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md hover:border-indigo-500/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
