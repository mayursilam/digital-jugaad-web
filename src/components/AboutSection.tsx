import React from 'react';
import { 
  Building2, 
  MapPin, 
  Target, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Heart
} from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface AboutSectionProps {
  onOpenWhatsApp: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>ABOUT DIGITAL JUGAAD</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Practical Digital Solutions <span className="text-[#E25822]">Built In Pune.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A]">
            We started Digital Jugaad with one simple conviction: small and growing businesses deserve clean, high-quality digital assets without confusing agency jargon or bloated budgets.
          </p>
        </div>

        {/* Main Content Card with Real Image */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Real Creative Team & Studio Photo (45-50% width) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative">
              <div className="aspect-4/3 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Jugaad creative team collaborating on digital solutions in Pune"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    PUNE, MAHARASHTRA
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Everyday Practical Problem-Solving For Real Businesses
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Story & Principles */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE5DD] text-xs font-bold text-[#16171D]">
                <MapPin className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Serving Businesses Across Pune & Maharashtra</span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#16171D] leading-snug">
                Why The Name "Digital Jugaad"?
              </h3>

              <p className="text-sm sm:text-base text-[#50525A] leading-relaxed">
                In India, <strong className="text-[#16171D]">"Jugaad"</strong> means smart, resourceful, and practical problem-solving. We bring that same entrepreneurial agility to your website, branding, and digital presence.
              </p>

              <div className="space-y-2.5 pt-1 text-xs font-bold text-[#16171D]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Direct founder communication — no layers of account managers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Honest timelines and transparent one-time pricing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Complete ownership: you own your domain, code, and design assets</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                  <span>Connect With Our Team</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
