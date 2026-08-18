import React from 'react';
import { ShieldCheck, RefreshCw, TrendingUp, ArrowRight, MessageSquare } from 'lucide-react';

interface MonthlySupportProps {
  onOpenWhatsApp: () => void;
}

export const MonthlySupport: React.FC<MonthlySupportProps> = ({ onOpenWhatsApp }) => {
  const supportPillars = [
    {
      icon: ShieldCheck,
      title: 'WEBSITE CARE',
      desc: 'Hosting, domain, security, backups and basic maintenance so your site is always fast and secure.',
    },
    {
      icon: RefreshCw,
      title: 'WEBSITE UPDATES',
      desc: 'Content, images, services, seasonal offers and business information updates on demand.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & GROWTH',
      desc: 'Ongoing search optimization, local visibility tune-ups and digital marketing guidance.',
    },
  ];

  return (
    <section id="monthly-support" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>NEED HELP AFTER LAUNCH?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            We Can <span className="text-[#E25822]">Stay With You.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            Your website may need updates after it goes live. New photos, new services, offers, business information or technical maintenance. We can manage the digital side for you so you can focus on your business.
          </p>
        </div>

        {/* 3 Clean Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#E2DBD1] hover:border-[#D0C7BC] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] flex items-center justify-center mb-5 text-[#E25822]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-extrabold text-base uppercase tracking-wider text-[#16171D] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#50525A] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4]">
                  <button
                    onClick={onOpenWhatsApp}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16171D] hover:text-[#E25822] cursor-pointer"
                  >
                    <span>Ask About Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
