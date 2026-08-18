import React from 'react';
import { 
  Globe, 
  Smartphone, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface WebsiteShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="website-showcase" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 text-[#E25822]" />
            <span>WEBSITE EXPERIENCE</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            A Professional Website <span className="text-[#E25822]">For Your Business.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            Imagine a clean, fast website that explains your services, displays photos, shows your location, and lets customers message you directly on WhatsApp.
          </p>
        </div>

        {/* Multi-Device Responsive Website Presentation with Real Images */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2ECE4]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#16171D] uppercase tracking-wider">
                Desktop + Tablet + Mobile Responsive System
              </span>
            </div>
            <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full uppercase self-start sm:self-auto">
              Example Website Experience
            </span>
          </div>

          {/* Desktop Browser Frame with Real Responsive Website Imagery */}
          <div className="rounded-2xl border border-[#D5CEC4] shadow-md overflow-hidden bg-[#FAF8F5]">
            
            {/* Browser Top Navigation Bar */}
            <div className="bg-[#FAF8F5] px-4 py-3 border-b border-[#EAE5DD] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E85D4E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5B543]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#4BC85B]"></div>
              </div>
              <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-[#E2DBD1] text-xs font-mono text-[#555]">
                <Globe className="w-3.5 h-3.5 text-[#E25822]" />
                <span>https://yourbusiness.in</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#25D366]">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                <span className="hidden sm:inline">SSL Secure & Fast</span>
              </div>
            </div>

            {/* Real Website Image Element */}
            <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-[#16171D]">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
                alt="Example Business Website Design by Digital Jugaad"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                      BUSINESS WEBSITE CONCEPT
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-2xl text-white">
                      Your Business Name | Services, Reviews & Booking
                    </h3>
                    <p className="text-xs text-[#C0C4D4] max-w-xl">
                      Fast-loading website with location map, transparent pricing, photo gallery, and direct 1-tap WhatsApp consultation.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want a website like this for my business.')}
                    className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#25D366] text-[#0A2917] font-extrabold text-xs px-4 py-2.5 rounded-xl cursor-pointer shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                    <span>WhatsApp Enquiries</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Service Clarity Row */}
            <div className="p-4 sm:p-6 bg-white grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#50525A]">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-bold text-[#16171D]">Full Services & Pricing Menu</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E25822] shrink-0" />
                <span className="font-bold text-[#16171D]">Embedded Google Maps Route</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-bold text-[#16171D]">Instant Phone & WhatsApp Call</span>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7A7E8F]">
              Every website is built mobile-first, optimized for Google search, and configured with 1-tap WhatsApp.
            </span>

            <button
              onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to get a professional business website.')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
              <span>Get A Website</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
