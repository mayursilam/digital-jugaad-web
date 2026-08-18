/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatWeDo } from './components/WhatWeDo';
import { BrandKitShowcase } from './components/BrandKitShowcase';
import { WebsiteShowcase } from './components/WebsiteShowcase';
import { SocialMediaShowcase } from './components/SocialMediaShowcase';
import { DigitalMarketingShowcase } from './components/DigitalMarketingShowcase';
import { AppShowcase } from './components/AppShowcase';
import { PrintMediaShowcase } from './components/PrintMediaShowcase';
import { BrandConsistency } from './components/BrandConsistency';
import { WhyDigitalJugaad } from './components/WhyDigitalJugaad';
import { BeforeAfter } from './components/BeforeAfter';
import { Process } from './components/Process';
import { SEOSection } from './components/SEOSection';
import { MonthlySupport } from './components/MonthlySupport';
import { AboutSection } from './components/AboutSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CallModal } from './components/CallModal';
import { BRAND_CONFIG } from './config';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);

  const [whatsappNumber, setWhatsappNumber] = useState<string>(() => {
    return localStorage.getItem('dj_whatsapp_number') || BRAND_CONFIG.whatsappNumber;
  });

  const [phoneNumber, setPhoneNumber] = useState<string>(() => {
    return localStorage.getItem('dj_phone_number') || BRAND_CONFIG.displayPhoneNumber;
  });

  const [customWhatsAppMsg, setCustomWhatsAppMsg] = useState<string>('');

  const handleUpdateWhatsAppNumber = (num: string) => {
    setWhatsappNumber(num);
    localStorage.setItem('dj_whatsapp_number', num);
  };

  const handleUpdatePhoneNumber = (num: string) => {
    setPhoneNumber(num);
    localStorage.setItem('dj_phone_number', num);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenWhatsAppModal = (initialMsg?: string) => {
    if (initialMsg) {
      setCustomWhatsAppMsg(initialMsg);
    } else {
      setCustomWhatsAppMsg(BRAND_CONFIG.whatsappPresets[0].text);
    }
    setIsWhatsAppModalOpen(true);
  };

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleObserver = () => {
      const sectionIds = [
        'home',
        'problem-section',
        'what-we-do',
        'brand-kit-showcase',
        'website-showcase',
        'social-media-showcase',
        'marketing-showcase',
        'app-showcase',
        'print-media',
        'brand-consistency',
        'why-digital-jugaad',
        'the-idea',
        'how-it-works',
        'seo',
        'monthly-support',
        'about',
        'faq',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#16171D] selection:bg-[#E25822] selection:text-white flex flex-col font-sans pb-16 sm:pb-0">
      {/* 1. Header Navigation */}
      <Header
        onNavigate={handleNavigate}
        onOpenWhatsApp={() => handleOpenWhatsAppModal()}
        onOpenCall={handleOpenCallModal}
        activeSection={activeSection}
      />

      {/* Main Content Flow: Visual Storytelling & Image-Led Modules */}
      <main className="flex-1">
        {/* 2. Hero Section (Connected Digital Ecosystem Visual) */}
        <Hero
          onOpenWhatsApp={() => handleOpenWhatsAppModal()}
          onSeeWhatWeDo={() => handleNavigate('what-we-do')}
        />

        {/* 3. Problem Section */}
        <ProblemSection
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to discuss fixing my business online presence.')}
        />

        {/* 4. What We Do (Service Hierarchy Overview) */}
        <WhatWeDo
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 5. Brand Identity Visual (Multi-Surface Logo System + Stationery) */}
        <BrandKitShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 6. Website Visual (Desktop + Tablet + Mobile Responsive System) */}
        <WebsiteShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 7. Social Media Visual (6-Post Branded Grid + Festival Poster Creative) */}
        <SocialMediaShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 8. Digital Marketing Visual (Targeted Social Ad & Lead Engine) */}
        <DigitalMarketingShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 9. Mobile App Visual (Android App UI + Play Store Concept) */}
        <AppShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 10. Print Media Visual (Visiting Cards, Flex Banners, Standees & Menus) */}
        <PrintMediaShowcase
          onOpenWhatsApp={(msg) => handleOpenWhatsAppModal(msg)}
        />

        {/* 11. Brand Consistency (One Brand. Everywhere.) */}
        <BrandConsistency
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to build a consistent brand identity across all platforms.')}
        />

        {/* 11. The Digital Jugaad Difference */}
        <WhyDigitalJugaad
          onOpenWhatsApp={() => handleOpenWhatsAppModal()}
        />

        {/* 12. Before → After (Visual Transformation) */}
        <BeforeAfter
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to connect my Google Maps profile to a professional website.')}
        />

        {/* 13. How It Works (6-Step Simple Process) */}
        <Process
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to get started with building my website.')}
        />

        {/* 14. Website + SEO (Local Search Ecosystem) */}
        <SEOSection
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to talk about optimizing my website for Google & local search.')}
        />

        {/* 15. Monthly Support */}
        <MonthlySupport
          onOpenWhatsApp={() => handleOpenWhatsAppModal('Hi Digital Jugaad, I want to know more about ongoing website support and maintenance.')}
        />

        {/* 16. About Digital Jugaad */}
        <AboutSection
          onOpenWhatsApp={() => handleOpenWhatsAppModal()}
        />

        {/* 17. FAQ */}
        <FAQ
          onOpenWhatsApp={() => handleOpenWhatsAppModal()}
        />

        {/* 18. Final CTA */}
        <FinalCTA
          onOpenWhatsApp={() => handleOpenWhatsAppModal()}
          onOpenCall={handleOpenCallModal}
        />
      </main>

      {/* 19. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsApp={() => handleOpenWhatsAppModal()}
        onOpenCall={handleOpenCallModal}
      />

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        configuredNumber={whatsappNumber}
        onUpdateNumber={handleUpdateWhatsAppNumber}
        initialMessage={customWhatsAppMsg}
      />

      {/* Call Modal */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber={phoneNumber}
        onUpdatePhoneNumber={handleUpdatePhoneNumber}
      />
    </div>
  );
}
