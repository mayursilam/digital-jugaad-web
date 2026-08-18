import React from 'react';
import { 
  MessageCircle, 
  Wrench, 
  Smartphone, 
  PhoneCall, 
  Target, 
  ArrowRight,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface WhyDigitalJugaadProps {
  onOpenWhatsApp: () => void;
}

export const WhyDigitalJugaad: React.FC<WhyDigitalJugaadProps> = ({ onOpenWhatsApp }) => {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'SIMPLE',
      desc: 'We explain everything in simple language. No confusing acronyms or buzzwords.',
    },
    {
      icon: Wrench,
      title: 'PRACTICAL',
      desc: 'We build for real businesses, not just for presentation. Everything serves a real customer purpose.',
    },
    {
      icon: Smartphone,
      title: 'MOBILE FIRST',
      desc: 'Your customers are on their phones. Your website should work quickly and smoothly on every screen.',
    },
    {
      icon: PhoneCall,
      title: 'EASY CONTACT',
      desc: 'WhatsApp and direct phone call options are always easy to find in one tap.',
    },
    {
      icon: Target,
      title: 'BUSINESS FOCUSED',
      desc: 'Every page has one clear purpose: help your customer understand your business and contact you.',
    },
  ];

  return (
    <section id="why-digital-jugaad" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>WHY DIGITAL JUGAAD?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            No Complicated <span className="text-[#E25822]">Digital Talk.</span>
          </h2>

          <div className="mt-5 space-y-2 text-base sm:text-lg text-[#50525A] leading-relaxed">
            <p className="font-bold text-[#16171D]">
              You know your business. We know digital.
            </p>
            <p>
              You don't need to understand websites, hosting, SEO or marketing. Tell us what you do. We'll help you choose what you actually need.
            </p>
          </div>
        </div>

        {/* 5 Compact Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white p-7 rounded-2xl border border-[#E2DBD1] hover:border-[#D0C7BC] transition-all flex flex-col justify-between ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] flex items-center justify-center mb-4 text-[#E25822]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-extrabold text-base uppercase tracking-wider text-[#16171D] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#50525A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2DBD1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#0F5132] flex items-center justify-center font-bold text-xs">
              ✓
            </div>
            <div>
              <span className="font-display font-extrabold text-sm text-[#16171D] block">
                Have a quick question about what your business needs?
              </span>
              <span className="text-xs text-[#7A7E8F]">
                Send a quick message on WhatsApp — no sales pitch, just honest advice.
              </span>
            </div>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-xs shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
