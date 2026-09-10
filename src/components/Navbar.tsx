import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import {
  Menu,
  X,
  Printer,
  Sparkles,
  ExternalLink,
  Send,
  UploadCloud,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  onOpenMediaModal: () => void;
  onPrintCV: () => void;
}

export function Navbar({ onOpenMediaModal, onPrintCV }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Monogram */}
            <a
              href="#"
              id="nav-brand-logo"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <span className="font-display tracking-wider text-sm">MF</span>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-60 blur-sm transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  Muhammad Farman
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                  Senior Digital Marketing Manager
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Media Hub Button */}
              <button
                id="btn-nav-media-upload"
                type="button"
                onClick={onOpenMediaModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-indigo-300 bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-700/40 transition-all hover:scale-[1.02] cursor-pointer"
                title="Upload custom headshot image / video & GitHub instructions"
              >
                <UploadCloud className="w-3.5 h-3.5 text-indigo-400" />
                <span>Media Hub</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              </button>

              {/* Print Resume */}
              <button
                id="btn-nav-print-cv"
                type="button"
                onClick={onPrintCV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-300 bg-slate-800/70 hover:bg-slate-700 border border-slate-700/60 transition-all hover:text-white cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>Export PDF</span>
              </button>

              {/* Contact Direct */}
              <a
                id="btn-nav-contact-cta"
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 hover:scale-[1.02]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenMediaModal}
                className="p-2 rounded-lg bg-slate-800/80 text-indigo-400 border border-slate-700"
                aria-label="Open Media Hub"
              >
                <UploadCloud className="w-4 h-4" />
              </button>
              <button
                id="btn-mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 backdrop-blur-xl mt-2 space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMediaModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-indigo-300 bg-indigo-950/70 border border-indigo-800/60"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Media Hub & GitHub Asset Guide</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPrintCV();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-slate-300 bg-slate-900 border border-slate-800"
              >
                <Printer className="w-4 h-4" />
                <span>Export Resume as PDF</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
              >
                <Send className="w-4 h-4" />
                <span>Contact Muhammad Farman</span>
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
