import React from 'react';
import { MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface FinalCTAProps {
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWhatsApp, onOpenCall }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#16171D] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E25822]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#252834] text-[#E25822] text-xs font-black uppercase tracking-wider mb-6 border border-[#373B4D]">
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span>GET STARTED TODAY</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6">
          Ready To Take Your Business Online?
        </h2>

        <div className="space-y-1 text-base sm:text-lg text-[#B8BAC8] max-w-xl mx-auto mb-8 leading-relaxed">
          <p className="font-bold text-white">Tell us about your business.</p>
          <p>We'll tell you what you actually need.</p>
        </div>

        {/* Primary and Secondary CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto">
          <button
            id="final-whatsapp-btn"
            onClick={onOpenWhatsApp}
            className="w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            id="final-call-btn"
            onClick={onOpenCall}
            className="w-auto inline-flex items-center justify-center gap-2 bg-[#252834] hover:bg-[#2F3342] text-white border border-[#3C4052] font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#A8ABB8]" />
            <span>Call Us</span>
          </button>
        </div>

        <p className="mt-6 text-xs text-[#8A8E9F]">
          No complicated forms. Just tell us about your business.
        </p>

        <div className="mt-8 pt-8 border-t border-[#262936] inline-flex items-center gap-2 text-xs text-[#8A8E9F]">
          <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
          <span>{BRAND_CONFIG.locationNote}</span>
        </div>
      </div>
    </section>
  );
};
