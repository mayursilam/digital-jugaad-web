import React from 'react';
import { Megaphone, Target, Users, TrendingUp, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import digitalMarketingImg from '../assets/images/regenerated_image_1787051158118.png';

interface DigitalMarketingShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const DigitalMarketingShowcase: React.FC<DigitalMarketingShowcaseProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="marketing-showcase" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Megaphone className="w-3.5 h-3.5 text-[#E25822]" />
            <span>DIGITAL MARKETING & LOCAL ADS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Reach More Potential Customers <span className="text-[#E25822]">Online.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            Targeted local campaigns that show your business to high-intent customers in your specific Pune neighborhood or service radius, directing them straight into a WhatsApp conversation.
          </p>
        </div>

        {/* Campaign Visual Breakdown with Real Image */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Real Digital Campaign Image (45-50% width) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative">
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={digitalMarketingImg}
                  alt="Digital Marketing and Local Advertising Strategy by Digital Jugaad"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    CAMPAIGN CONCEPT
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Targeted Local Reach • High-Intent Enquiries
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Sponsored Ad Mockup Frame */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#E2DBD1] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DD]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#16171D] text-white flex items-center justify-center font-black text-xs">
                    DJ
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#16171D] block leading-tight">Your Business Name</span>
                    <span className="text-[10px] text-[#7A7E8F]">Sponsored • Pune Area Target</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#0F5132] bg-[#25D366]/20 px-2 py-0.5 rounded">
                  Local Ad
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-[#50525A]">
                  Looking for trusted and reliable service in Pune? Get professional quality, transparent pricing, and instant WhatsApp support today.
                </p>

                {/* WhatsApp Call to Action Box */}
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DD] flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase text-[#7A7E8F] block">Direct Action</span>
                    <span className="text-xs font-bold text-[#16171D]">Send WhatsApp Message</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#25D366] text-[#0A2917] text-xs font-extrabold flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                    <span>Send Message</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-bold text-[#50525A]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Exact Pincode Targeting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Zero Wasted Ad Budget</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7A7E8F]">
              Set up local Meta & Google Ads targeted to your actual customer territory.
            </span>
            <button
              onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to discuss digital marketing and local ads.')}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
              <span>Talk About Marketing</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
