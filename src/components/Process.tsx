import React from 'react';
import { 
  MessageSquare, 
  Layout, 
  Code2, 
  CheckCheck, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';

interface ProcessProps {
  onOpenWhatsApp: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenWhatsApp }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us About Your Business',
      desc: 'Send us your business details, photos, services and contact information.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'We Plan Your Website',
      desc: 'We organize the information into a simple website structure that your customers can understand.',
      icon: Layout,
    },
    {
      num: '03',
      title: 'We Design & Build',
      desc: 'We create the website, optimize it for mobile and add your business information.',
      icon: Code2,
    },
    {
      num: '04',
      title: 'You Review',
      desc: 'You check the website and tell us what needs to change.',
      icon: CheckCheck,
    },
    {
      num: '05',
      title: 'We Go Live',
      desc: 'Domain, hosting and website setup are completed and your website goes online.',
      icon: Rocket,
    },
    {
      num: '06',
      title: 'Grow Online',
      desc: 'If you need it, we can continue with SEO, social media and digital marketing.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>SIMPLE PROCESS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            You Tell Us.{' '}
            <span className="text-[#E25822]">We Build It.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A]">
            A clear, straightforward 6-step roadmap with zero technical headaches for you.
          </p>
        </div>

        {/* 6 Numbered Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white p-7 rounded-2xl border border-[#E2DBD1] hover:border-[#D0C7BC] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F2ECE4]">
                    <span className="font-mono text-sm font-black px-2.5 py-1 rounded-md bg-[#16171D] text-white">
                      {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#E25822]" />
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-[#16171D] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#50525A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Process Action Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2DBD1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs sm:text-sm font-semibold text-[#50525A]">
            Ready to start Step 01? Send us a message on WhatsApp with your business details.
          </span>

          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer transition-all shadow-xs shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
            <span>Start On WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
