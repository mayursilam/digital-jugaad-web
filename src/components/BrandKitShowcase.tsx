import React, { useState } from 'react';
import { 
  Palette, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Sparkles,
  Eye,
  Layers,
  Sparkle
} from 'lucide-react';
import brandKitRealImage from '../assets/images/regenerated_image_1787049428575.png';

interface BrandKitShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

interface Surface {
  id: string;
  name: string;
  badge: string;
  bgClass: string;
  cardBg: string;
  textColor: string;
  subColor: string;
  accentBg: string;
  accentText: string;
}

const SURFACES: Surface[] = [
  {
    id: 'clean-white',
    name: 'Clean White',
    badge: 'Website & Letterhead',
    bgClass: 'bg-white border-[#E2DBD1]',
    cardBg: '#FFFFFF',
    textColor: 'text-[#16171D]',
    subColor: 'text-[#6A6D7C]',
    accentBg: '#E25822',
    accentText: '#FFFFFF',
  },
  {
    id: 'matte-charcoal',
    name: 'Matte Charcoal',
    badge: 'Dark Mode & Acrylic Signs',
    bgClass: 'bg-[#16171D] border-[#2A2C38]',
    cardBg: '#16171D',
    textColor: 'text-white',
    subColor: 'text-[#9FA4B7]',
    accentBg: '#E25822',
    accentText: '#FFFFFF',
  },
  {
    id: 'kraft-packaging',
    name: 'Kraft Box',
    badge: 'Packaging & Cartons',
    bgClass: 'bg-[#C9A882] border-[#B8966F]',
    cardBg: '#C9A882',
    textColor: 'text-[#24170E]',
    subColor: 'text-[#4A3828]',
    accentBg: '#16171D',
    accentText: '#FFFFFF',
  },
  {
    id: 'gold-foil',
    name: 'Gold Foil',
    badge: 'Luxury Visiting Cards',
    bgClass: 'bg-gradient-to-br from-[#1E2028] to-[#0D0E12] border-[#D4AF37]/40',
    cardBg: '#1E2028',
    textColor: 'text-[#F5E6A3]',
    subColor: 'text-[#C5B358]',
    accentBg: 'linear-gradient(135deg, #D4AF37, #AA771C)',
    accentText: '#16171D',
  },
];

export const BrandKitShowcase: React.FC<BrandKitShowcaseProps> = ({ onOpenWhatsApp }) => {
  const [activeSurface, setActiveSurface] = useState<Surface>(SURFACES[0]);

  return (
    <section id="brand-kit-showcase" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Shorter, Clearer, Minimal Copy */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5 text-[#E25822]" />
            <span>LOGO DESIGN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Looks Sharp <span className="text-[#E25822]">Everywhere.</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#50525A]">
            One clean, versatile logo formatted for high contrast and legibility across all digital screens, dark modes, stationery, and physical storefronts.
          </p>
        </div>

        {/* 2-Column Responsive Visual Showcase: Interactive Multi-Surface Logo + Real Brand Stationery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Multi-Surface Visual */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Top Surface Toggle */}
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#F2ECE4]">
              <span className="text-xs font-mono font-bold text-[#16171D] uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Test On Different Backgrounds:</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SURFACES.map((surf) => {
                const isActive = activeSurface.id === surf.id;
                return (
                  <button
                    key={surf.id}
                    onClick={() => setActiveSurface(surf)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isActive
                        ? 'bg-[#16171D] text-white border-[#16171D] shadow-xs'
                        : 'bg-[#FAF8F5] text-[#50525A] hover:bg-[#EAE5DD] hover:text-[#16171D] border-[#E2DBD1]'
                    }`}
                  >
                    <span className="block truncate">{surf.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Logo Preview Surface */}
            <div 
              className={`rounded-2xl border p-8 sm:p-12 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[260px] shadow-sm relative overflow-hidden ${activeSurface.bgClass}`}
            >
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/15 backdrop-blur-xs">
                  {activeSurface.badge}
                </span>
              </div>

              <div className="flex flex-col items-center space-y-3 z-10">
                {/* Clean Logo Emblem */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-2xl shadow-md border border-white/20 transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundColor: activeSurface.id === 'gold-foil' ? '#D4AF37' : activeSurface.accentBg,
                    color: activeSurface.id === 'gold-foil' ? '#16171D' : activeSurface.accentText,
                  }}
                >
                  DJ
                </div>

                <div>
                  <h4 className={`font-display font-black text-xl tracking-tight leading-tight uppercase ${activeSurface.textColor}`}>
                    DIGITAL JUGAAD
                  </h4>
                  <p className={`text-xs font-medium tracking-wide mt-0.5 ${activeSurface.subColor}`}>
                    Simple Digital Solutions • Pune
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 right-3">
                <span className="text-[10px] font-mono opacity-80">
                  Vector Scalable • 100% Crisp
                </span>
              </div>
            </div>

            {/* Surface description & specs */}
            <div className="flex items-center justify-between text-xs text-[#7A7E8F] pt-2">
              <span>Includes Light, Dark & Transparent PNGs</span>
              <span className="font-bold text-[#25D366]">Zero pixelation</span>
            </div>

          </div>

          {/* Right Column: Real Brand Stationery Mockup Image & Deliverables */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Real Stock Photo of Brand Kit & Stationery */}
            <div className="rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative group">
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={brandKitRealImage}
                  alt="Real Brand Kit and Identity Design by Digital Jugaad"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    COMPLETE BRAND IDENTITY PACK
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Business Cards, Social Icons, Invoices & Signboards
                  </span>
                </div>
              </div>
            </div>

            {/* Minimal Inclusions List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-[#16171D]">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Vector Master Files (.AI, .EPS, .SVG, .PDF)</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Transparent PNGs (No white background box)</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp, Instagram & Maps High-Res DP</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Brand Colors & Font Hierarchy Guide</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to talk about getting a clean, professional Logo Design for my business.')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                <span>Talk About Logo Design on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
