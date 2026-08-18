import React from 'react';
import { Globe, RefreshCw, Instagram, PhoneCall, ArrowRight, MessageSquare } from 'lucide-react';

interface ProblemSectionProps {
  onOpenWhatsApp: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenWhatsApp }) => {
  const problems = [
    {
      icon: Globe,
      title: 'NO WEBSITE',
      desc: "Customers can't easily see everything about your business in one place.",
    },
    {
      icon: RefreshCw,
      title: 'OLD WEBSITE',
      desc: "Your website doesn't represent the quality of your actual business.",
    },
    {
      icon: Instagram,
      title: 'ONLY INSTAGRAM',
      desc: "Social media is useful, but your business should have its own online home.",
    },
    {
      icon: PhoneCall,
      title: 'MISSED ENQUIRIES',
      desc: "Customers should be able to call or WhatsApp you easily.",
    },
  ];

  return (
    <section id="problem-section" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>DOES THIS SOUND LIKE YOUR BUSINESS?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Your Business Is Running.{' '}
            <span className="text-[#E25822] block mt-1">But Your Online Presence Is Missing.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            You may already have customers, good Google reviews and a strong local reputation. But when a new customer searches for your business, they may only find a Google profile or Instagram page.
          </p>
        </div>

        {/* 4 Small Easy-to-Scan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2DBD1] hover:border-[#D0C7BC] transition-all flex flex-col justify-between shadow-xs"
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

        {/* Bottom Transition Statement */}
        <div className="mt-12 p-6 rounded-2xl bg-[#16171D] text-[#FAF8F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E25822] font-bold block mb-1">
              THE SOLUTION
            </span>
            <p className="font-display font-bold text-xl sm:text-2xl text-white">
              That's where Digital Jugaad comes in.
            </p>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
