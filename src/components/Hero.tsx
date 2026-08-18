import React from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  Globe, 
  MapPin, 
  Phone, 
  Smartphone, 
  Instagram, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface HeroProps {
  onOpenWhatsApp: () => void;
  onSeeWhatWeDo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp, onSeeWhatWeDo }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-[#FAF8F5] border-b border-[#EAE5DD] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E25822]/6 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-extrabold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#E25822]"></span>
              <span>{BRAND_CONFIG.heroEyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#16171D] tracking-tight leading-[1.06]">
              Your Business Is Good.{' '}
              <span className="text-[#E25822] block mt-1">Now Make It Look Good Online.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#50525A] font-normal leading-relaxed max-w-xl">
              {BRAND_CONFIG.heroSupporting}
            </p>

            {/* Service Capabilities Line */}
            <div className="inline-flex flex-wrap items-center gap-2 py-2 px-3.5 rounded-xl bg-[#F0EAE1] border border-[#E2DBD1] text-xs font-bold text-[#32343D]">
              <span>Website</span>
              <span className="text-[#A59F94]">•</span>
              <span>Google & SEO</span>
              <span className="text-[#A59F94]">•</span>
              <span>Brand Kit</span>
              <span className="text-[#A59F94]">•</span>
              <span>Social Media</span>
              <span className="text-[#A59F94]">•</span>
              <span>Apps</span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-whatsapp-cta"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
                <span>WhatsApp Us</span>
              </button>

              <button
                id="hero-see-what-we-do-cta"
                onClick={onSeeWhatWeDo}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2ECE4] text-[#16171D] border border-[#D5CEC4] font-bold text-sm uppercase tracking-wider px-7 py-4 rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                <span>See What We Do</span>
                <ArrowRight className="w-4 h-4 text-[#50525A]" />
              </button>
            </div>

            {/* Supporting Location Line */}
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-[#70737F]">
              <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
              <span>{BRAND_CONFIG.locationNote}</span>
            </div>
          </div>

          {/* Right Column: Prominent Real Image & Connected Digital Ecosystem Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Ecosystem Label Badge */}
              <div className="absolute -top-3.5 right-4 z-20 bg-[#16171D] text-white px-3.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border border-[#3A3D4D] shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>ONE BRAND. EVERYWHERE.</span>
              </div>

              {/* Main Desktop Window Frame with Real Image */}
              <div className="bg-white rounded-3xl border border-[#D5CEC4] shadow-xl overflow-hidden">
                {/* Browser Top Navigation Bar */}
                <div className="bg-[#FAF8F5] px-4 py-3 border-b border-[#EAE5DD] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E85D4E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5B543]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4BC85B]"></div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#E2DBD1] text-[11px] font-mono text-[#6A6D7C]">
                    <Globe className="w-3 h-3 text-[#E25822]" />
                    <span>yourbusiness.in</span>
                  </div>
                  <span className="text-[10px] bg-[#25D366]/15 text-[#0F5132] font-bold px-2 py-0.5 rounded">
                    Live Digital Presence
                  </span>
                </div>

                {/* Actual Real Image: High-Resolution Modern UI/UX & Responsive Digital Ecosystem */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#16171D]">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Digital Jugaad - Professional responsive website and mobile presence design"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay for visual hierarchy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/40 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-extrabold bg-[#16171D]/80 px-2 py-0.5 rounded border border-[#E25822]/30">
                            BUSINESS WEBSITE & BRANDING
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-bold text-[#F5A623] bg-[#16171D]/80 px-2 py-0.5 rounded">
                            ★ 4.9 Google Rated
                          </span>
                        </div>
                        <h4 className="font-display font-black text-base sm:text-xl text-white drop-shadow-xs">
                          Complete Digital Presence For Your Business
                        </h4>
                        <p className="text-xs text-[#D5D8E6] max-w-md hidden sm:block">
                          Services, verified Google reviews, photo gallery & 1-tap WhatsApp booking.
                        </p>
                      </div>
                      <div className="bg-[#25D366] text-[#0A2917] font-extrabold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md self-start sm:self-auto shrink-0">
                        <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                        <span>Direct WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer strip of the preview */}
                <div className="p-3.5 bg-white flex items-center justify-between text-xs text-[#50525A] border-t border-[#F0EBE3]">
                  <span className="font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                    Mobile-first design for all smartphones
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#16171D]">
                    Pune & Maharashtra
                  </span>
                </div>
              </div>

              {/* Overlaid Floating Mobile Screen Frame with Real UI */}
              <div className="hidden sm:block absolute -bottom-7 -left-5 w-52 bg-[#16171D] text-white p-3 rounded-2xl border-2 border-white shadow-2xl space-y-2 z-10">
                <div className="flex items-center justify-between text-[9px] text-[#A0A4B4] pb-1 border-b border-[#2C2F3D]">
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-[#25D366]" />
                    Mobile View
                  </span>
                  <span className="text-[#25D366] font-bold">1-Tap Direct</span>
                </div>
                <div className="p-2 bg-[#252834] rounded-xl text-[10px] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Your Business</span>
                    <span className="text-[8px] bg-[#E25822] text-white px-1.5 py-0.5 rounded font-bold">Open</span>
                  </div>
                  <p className="text-[9px] text-[#A0A4B4] leading-tight">
                    Instant appointment booking & location route.
                  </p>
                </div>
                <div className="bg-[#25D366] text-[#0A2917] text-[10px] font-extrabold text-center py-1.5 rounded-lg flex items-center justify-center gap-1">
                  <MessageSquare className="w-3 h-3 fill-[#0A2917]" />
                  <span>Chat on WhatsApp</span>
                </div>
              </div>

              {/* Overlaid Floating Social Card with Image Thumbnail */}
              <div className="hidden md:flex absolute -top-5 -right-5 bg-white p-2.5 rounded-2xl border border-[#D5CEC4] shadow-xl z-10 items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=150&q=80"
                  alt="Social Media Branding"
                  className="w-10 h-10 rounded-xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#16171D] block">
                    Branded Social Media
                  </span>
                  <span className="text-[9px] text-[#7A7E8F]">
                    Consistent Posts & Ads
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
