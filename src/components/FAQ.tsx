import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  onOpenWhatsApp: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Do I need a website if I already have Instagram?',
      answer:
        'Yes. While Instagram is great for updates, many potential customers search on Google first. An Instagram profile also doesn’t let customers easily view full pricing, organize service menus, read structured verified reviews, or find your exact location without logging into an app. A website is your business’s own online home that you control completely.',
    },
    {
      question: 'I already have a Google Business Profile. Do I still need a website?',
      answer:
        'A Google Business Profile tells people that your business exists, but a website tells them why they should choose you. Linking a professional, fast-loading website to your Google profile significantly boosts customer trust, provides complete service details, and increases high-intent calls and WhatsApp enquiries.',
    },
    {
      question: 'Will my website work on mobile?',
      answer:
        'Absolutely. We design mobile-first because over 85% of local Indian customers browse on their smartphones. Every page loads fast, text is easy to read without zooming, and WhatsApp or Call buttons are reachable with one thumb tap.',
    },
    {
      question: 'Can you arrange the domain and hosting?',
      answer:
        'Yes. We help you choose and set up your domain (.in, .com, etc.) and fast, reliable cloud hosting with SSL security included so you do not have to deal with technical setup.',
    },
    {
      question: 'Can you help my website rank on Google?',
      answer:
        'Yes. We build all websites with clean technical code, search-friendly service pages, proper meta tags, and local SEO structure aligned with your Google Business Profile. We give honest timelines without making fake "#1 ranking tomorrow" promises.',
    },
    {
      question: 'Can I contact you on WhatsApp?',
      answer:
        'Yes! WhatsApp is our primary communication channel. You can message us anytime with your business details, photos, or questions.',
    },
    {
      question: 'Can you manage the website after it goes live?',
      answer:
        'Yes. We offer straightforward monthly support for website updates, adding new photos/services, technical maintenance, and ongoing SEO assistance so you can focus on running your business.',
    },
    {
      question: 'Do you only work with businesses in Pune?',
      answer:
        'We are based in Pune, but we serve businesses across Maharashtra and all over India completely online via WhatsApp, phone, and video calls.',
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#E25822]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Clear Answers.{' '}
            <span className="text-[#E25822]">Zero Jargon.</span>
          </h2>

          <p className="mt-4 text-base text-[#50525A]">
            Common questions business owners ask before building their website with us.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2DBD1] hover:border-[#D0C7BC] transition-all overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-extrabold text-base sm:text-lg text-[#16171D]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#16171D] text-white'
                        : 'bg-[#FAF8F5] text-[#50525A] border border-[#EAE5DD]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#50525A] leading-relaxed border-t border-[#F2ECE4] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask Banner */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-[#E2DBD1]">
          <p className="text-sm font-bold text-[#16171D] mb-2">
            Have a different question about your business?
          </p>
          <button
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#25D366] hover:text-[#20bd5a] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-[#25D366]" />
            <span>Ask us directly on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
