import React from 'react';
import { Instagram, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import socialMediaImg from '../assets/images/regenerated_image_1787237614527.png';

interface SocialMediaShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const SocialMediaShowcase: React.FC<SocialMediaShowcaseProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="social-media-showcase" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Instagram className="w-3.5 h-3.5 text-[#E25822]" />
            <span>SOCIAL MEDIA DESIGN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Consistent Creatives That <span className="text-[#E25822]">Stop The Scroll.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            Keep your Instagram, Facebook, and WhatsApp Status looking fresh with branded service flyers, seasonal offers, and educational carousels.
          </p>
        </div>

        {/* Single High-Impact Digital Post Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative group">
              <div className="aspect-16/10 sm:aspect-4/3 overflow-hidden relative">
                <img 
                  src={socialMediaImg}
                  alt="Digital Post and Social Media Design by Digital Jugaad" 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    BRANDED SOCIAL CREATIVES
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Festival Creatives • Service Flyers • Daily Status Updates
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#E25822] uppercase tracking-wider block">
                  STAND OUT ON INSTAGRAM & WHATSAPP
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#16171D]">
                  Clean, Scroll-Stopping Designs
                </h3>
                <p className="text-sm text-[#50525A] leading-relaxed">
                  Never scramble for last-minute festival banners or marketing posts. We create custom-branded social posts with your business logo, colors, and direct WhatsApp call-to-actions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#16171D]">
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Festive & Holiday Greetings</span>
                </div>
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Promotional Service Offers</span>
                </div>
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>WhatsApp Status Ready (9:16)</span>
                </div>
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Instagram & Facebook Posts</span>
                </div>
              </div>

              <button 
                onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want professional social media digital post designs & festive creatives.')}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                <span>Get Social Posts on WhatsApp</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
