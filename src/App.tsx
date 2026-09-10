import { useState } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ParallaxBanner } from './components/ParallaxBanner';
import { PhilosophySection } from './components/PhilosophySection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertsSection } from './components/EducationCertsSection';
import { ContactSection } from './components/ContactSection';
import { MediaUploadModal } from './components/MediaUploadModal';
import { PrintResumeView } from './components/PrintResumeView';
import { CustomMediaAssets } from './types';

export default function App() {
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [customAssets, setCustomAssets] = useState<CustomMediaAssets>({
    avatarUrl: null,
    videoUrl: null,
    heroTagline: 'Senior Digital Marketing Manager | Performance & Narrative Strategist',
  });

  const handleUpdateAssets = (newAssets: Partial<CustomMediaAssets>) => {
    setCustomAssets((prev) => ({ ...prev, ...newAssets }));
  };

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Three.js 3D WebGL Canvas Layer */}
      <ThreeBackground />

      {/* Screen-Only App Content */}
      <div className="relative z-10 no-print flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          onOpenMediaModal={() => setIsMediaModalOpen(true)}
          onPrintCV={handlePrintCV}
        />

        {/* Hero Section with Parallax Depth & 3D Tilt Identity Card */}
        <main className="flex-1">
          <HeroSection
            customAssets={customAssets}
            onOpenMediaModal={() => setIsMediaModalOpen(true)}
            onPrintCV={handlePrintCV}
          />

          {/* Kinetic Typography Parallax Ribbon */}
          <ParallaxBanner />

          {/* Narrative Strategy Philosophy & Quantitative Rigor */}
          <PhilosophySection />

          {/* 6 Core Competencies 3D Grid */}
          <CompetenciesSection />

          {/* Professional Experience Interactive 3D Timeline */}
          <ExperienceTimeline />

          {/* Academic Background, Certifications, Tools & Languages */}
          <EducationCertsSection />

          {/* Direct Connect, Islamabad Time & Inquiry Form */}
          <ContactSection />
        </main>
      </div>

      {/* Media Upload & GitHub Asset Configuration Hub */}
      <MediaUploadModal
        isOpen={isMediaModalOpen}
        onClose={() => setIsMediaModalOpen(false)}
        customAssets={customAssets}
        onUpdateAssets={handleUpdateAssets}
      />

      {/* Clean A4 Print & PDF Export Document */}
      <PrintResumeView />
    </div>
  );
}
