import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Globe, 
  Instagram, 
  CreditCard, 
  Smartphone, 
  MessageSquare 
} from 'lucide-react';

interface BrandConsistencyProps {
  onOpenWhatsApp: () => void;
}

export const BrandConsistency: React.FC<BrandConsistencyProps> = ({ onOpenWhatsApp }) => {
  const steps = [
    { label: '1. LOGO SYSTEM', desc: 'Light, dark & stacked formats', icon: Sparkles },
    { label: '2. WEBSITE', desc: 'Fast, responsive & clean', icon: Globe },
    { label: '3. INSTAGRAM', desc: 'Matching branded post grid', icon: Instagram },
    { label: '4. FESTIVAL CREATIVES', desc: 'Promotional campaign posters', icon: Layers },
    { label: '5. BUSINESS CARD', desc: 'With WhatsApp instant QR', icon: CreditCard },
    { label: '6. WHATSAPP & APP', desc: 'Complete connected touchpoints', icon: Smartphone },
  ];

  return (
    <section id="brand-consistency" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>ONE BRAND. EVERYWHERE.</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            We Don’t Just Make One Logo.{' '}
            <span className="text-[#E25822] block mt-1">We Make Your Business Look Consistent Everywhere.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            When a customer sees your visiting card, visits your website, checks your Instagram, or messages you on WhatsApp, your business should feel like one single, professional, credible brand.
          </p>
        </div>

        {/* Connected Visual Pipeline */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DD] flex flex-col justify-between space-y-3 relative group hover:border-[#D0C7BC] transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E0D8CD] flex items-center justify-center text-[#E25822]">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="font-display font-extrabold text-xs text-[#16171D] block mb-1">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#555866] leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Bar */}
          <div className="p-6 rounded-2xl bg-[#16171D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E25822] font-bold">
                UNIFIED DIGITAL IDENTITY
              </span>
              <p className="font-display font-bold text-base sm:text-lg">
                Ready to make your business look like a complete, credible brand?
              </p>
            </div>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shrink-0"
            >
              <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
              <span>Discuss On WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
