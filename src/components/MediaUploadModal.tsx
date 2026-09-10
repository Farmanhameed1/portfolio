import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  UploadCloud,
  Image as ImageIcon,
  Video as VideoIcon,
  Github,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  Info,
  RotateCcw
} from 'lucide-react';
import { CustomMediaAssets } from '../types';

interface MediaUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  customAssets: CustomMediaAssets;
  onUpdateAssets: (newAssets: Partial<CustomMediaAssets>) => void;
}

export function MediaUploadModal({
  isOpen,
  onClose,
  customAssets,
  onUpdateAssets,
}: MediaUploadModalProps) {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpdateAssets({ avatarUrl: url });
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpdateAssets({ videoUrl: url });
    }
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPath(text);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto no-print">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <UploadCloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Custom Media & GitHub Asset Manager
                </h3>
                <p className="text-xs text-slate-400">
                  Preview your photo/video live and prepare your repository files
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-5 space-y-6">
            
            {/* Live Preview & Upload Area */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-300">
                1. Live Interactive Preview (Upload to Test Instantly)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Photo Dropzone */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mb-2">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    Profile Headshot / Avatar
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Upload your high-res headshot (JPG, PNG, WEBP)
                  </p>

                  <label className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-all">
                    <span>Choose Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Video Dropzone */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-center flex flex-col items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-2">
                    <VideoIcon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    Intro Video / Reel
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Upload optional introduction video (MP4, WebM)
                  </p>

                  <label className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold cursor-pointer transition-all">
                    <span>Choose Video</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                  </label>
                </div>

              </div>

              {(customAssets.avatarUrl || customAssets.videoUrl) && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Custom media loaded in current session!
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateAssets({ avatarUrl: null, videoUrl: null })}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Default 3D Hologram</span>
                  </button>
                </div>
              )}
            </div>

            {/* GitHub Repo Setup Guide */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-slate-300">
                <Github className="w-4 h-4 text-white" />
                <span>2. How to Upload in GitHub for Permanent Hosting</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                When you push this codebase to your GitHub repository (e.g. for Vercel, GitHub Pages, or Netlify), simply save your media files in the <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">public/assets/</code> directory:
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                  <span>public/assets/headshot.jpg</span>
                  <button
                    type="button"
                    onClick={() => copyText('public/assets/headshot.jpg')}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                    title="Copy path"
                  >
                    {copiedPath === 'public/assets/headshot.jpg' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                  <span>public/assets/intro.mp4</span>
                  <button
                    type="button"
                    onClick={() => copyText('public/assets/intro.mp4')}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                    title="Copy path"
                  >
                    {copiedPath === 'public/assets/intro.mp4' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Responsiveness Confirmation */}
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/50 flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block mb-1">Fully Responsive on All Mobile Devices</strong>
                All layouts are optimized for smartphones, tablets, laptops, and ultra-wide screens. Includes smooth touch navigation, optimized touch targets (44px+), fluid typography, and GPU-accelerated 3D parallax.
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              Done & Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
