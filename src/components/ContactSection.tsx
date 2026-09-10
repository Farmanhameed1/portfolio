import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  Copy,
  Check,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Card3D } from './Card3D';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Real-time Islamabad clock
  const [islamabadTime, setIslamabadTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIslamabadTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill mailto link
    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry for Muhammad Farman'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setFormSubmitted(true);
  };

  const copyText = (text: string, isEmail: boolean) => {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-semibold text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Let's Build High-Yield Narratives
          </h2>
          <p className="text-base text-slate-300">
            Available for Senior Marketing Leadership, Executive Advisory, and High-Velocity Growth Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card3D depth={10} glowColor="rgba(99, 102, 241, 0.25)">
              <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 backdrop-blur-xl space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-display">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium">
                    {PERSONAL_INFO.headline}
                  </p>
                </div>

                {/* Islamabad Live Time Card */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-950/70 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Local Time (Islamabad, PK)</div>
                      <div className="text-sm font-bold text-white font-mono">{islamabadTime || 'PKT (UTC+5)'}</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Available Online" />
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-3 text-sm">
                  
                  {/* Email */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200">{PERSONAL_INFO.email}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(PERSONAL_INFO.email, true)}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-200">{PERSONAL_INFO.phone}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyText(PERSONAL_INFO.phone, false)}
                      className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>

                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-blue-950/30 hover:bg-blue-900/40 border border-blue-800/50 text-blue-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.portfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-indigo-950/30 hover:bg-indigo-900/40 border border-indigo-800/50 text-indigo-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Globe className="w-4 h-4 text-indigo-400" />
                    <span>Live Portfolio</span>
                  </a>
                </div>

              </div>
            </Card3D>
          </div>

          {/* Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <Card3D depth={8} glowColor="rgba(6, 182, 212, 0.2)">
              <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-display">
                    Send a Direct Inquiry
                  </h3>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Inquiry Initialized</h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Your default mail client has been opened to send this inquiry directly to <strong>{PERSONAL_INFO.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Subject / Focus Area
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Growth Marketing Leadership / Advisory"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell Muhammad about your pipeline goals, role opening, or performance challenge..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-white text-sm focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to Muhammad Farman</span>
                    </button>
                  </form>
                )}

              </div>
            </Card3D>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-400 no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Muhammad Farman. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top</a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Vercel</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
