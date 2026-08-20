import React from 'react';
import { 
  Globe, 
  Search, 
  Palette, 
  Image as ImageIcon, 
  Megaphone, 
  Smartphone, 
  Printer,
  ArrowRight, 
  CheckCircle2,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import androidAppImg from '../assets/images/regenerated_image_1787237618175.jpg';
import socialMediaImg from '../assets/images/regenerated_image_1787237614527.png';
import printMediaImg from '../assets/images/regenerated_image_1787237608489.png';
import brandKitImg from '../assets/images/regenerated_image_1787049428575.png';
import seoImg from '../assets/images/regenerated_image_1787238335187.jpg';
import digitalMarketingImg from '../assets/images/regenerated_image_1787237612947.jpg';

interface WhatWeDoProps {
  onOpenWhatsApp: (message?: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenWhatsApp }) => {
  const secondaryServices = [
    {
      icon: Smartphone,
      title: 'ANDROID APP DESIGN',
      tagline: 'Custom Android Apps for your growing business.',
      details: 'Native Android UI, customer portals, booking systems, APK & Play Store ready.',
      image: androidAppImg,
      cta: 'Talk About Android Apps',
      msg: 'Hi Digital Jugaad, I want to talk about custom Android app design for my business.',
    },
    {
      icon: ImageIcon,
      title: 'DIGITAL POST DESIGN',
      tagline: 'Daily high-converting social media creatives.',
      details: 'Instagram/FB posts, WhatsApp status flyers, festival wishes, and product launch banners.',
      image: socialMediaImg,
      cta: 'Talk About Digital Posts',
      msg: 'Hi Digital Jugaad, I want to talk about digital post designs and social media creatives.',
    },
    {
      icon: Printer,
      title: 'PRINT MEDIA DESIGN',
      tagline: 'High-res print-ready designs for physical branding.',
      details: 'Visiting cards, flex banners, rollup standees, brochures, product packaging & menus (CMYK 300DPI).',
      image: printMediaImg,
      cta: 'Talk About Print Media',
      msg: 'Hi Digital Jugaad, I want to talk about print media designs (Visiting cards, Banners, Brochures).',
    },
    {
      icon: Palette,
      title: 'BRAND KIT & LOGO',
      tagline: 'Complete identity that works across all backgrounds.',
      details: 'Multi-background logo, typography guide, color palette, and vector master assets.',
      image: brandKitImg,
      cta: 'Talk About Brand Kit',
      msg: 'Hi Digital Jugaad, I want to talk about a brand kit and logo for my business.',
    },
    {
      icon: Search,
      title: 'GOOGLE & LOCAL SEO',
      tagline: 'Help local customers find your store on Google.',
      details: 'Google Business Profile ranking, local keywords, customer review cards & Maps presence.',
      image: seoImg,
      cta: 'Talk About Local SEO',
      msg: 'Hi Digital Jugaad, I want to talk about Google & SEO visibility for my business.',
    },
    {
      icon: Megaphone,
      title: 'DIGITAL MARKETING',
      tagline: 'Reach targeted buyers in your specific location.',
      details: 'Location-targeted ads on Meta and Google for high-intent inquiries sent to WhatsApp.',
      image: digitalMarketingImg,
      cta: 'Talk About Marketing',
      msg: 'Hi Digital Jugaad, I want to talk about digital marketing and local ads.',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>OUR SERVICES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Everything Your Business Needs To{' '}
            <span className="text-[#E25822]">Look Professional Online.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#50525A]">
            We start with a solid website foundation, then add the visibility and branding your business actually needs.
          </p>
        </div>

        {/* PRIMARY SERVICE BLOCK: Visually Dominant Business Website with Real Image */}
        <div className="bg-white rounded-3xl border-2 border-[#16171D] p-6 sm:p-10 mb-12 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded-md bg-[#E25822] text-white">
                  01 PRIMARY SERVICE
                </span>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#16171D]">
                  BUSINESS WEBSITE
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#16171D] leading-tight">
                A Professional Website For Your Business.
              </h3>

              <p className="text-base text-[#50525A] leading-relaxed">
                Services, photos, location, reviews, contact details and everything your customer needs to know in one clean, fast-loading destination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-bold text-[#16171D]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Mobile-friendly for all phones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Direct WhatsApp & Call buttons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Services & pricing clarity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Fast loading on Indian 4G/5G</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  id="primary-get-website-btn"
                  onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to build a professional website for my business.')}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                  <span>Get A Website</span>
                </button>

                <button
                  id="primary-talk-business-btn"
                  onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to talk about my business requirements.')}
                  className="inline-flex items-center gap-2 bg-[#16171D] hover:bg-[#2A2C36] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>Talk About Your Business</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Actual High-Quality Real Image of Web Development & Digital Showcase */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative group">
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional website development and responsive digital solutions by Digital Jugaad"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                        RESPONSIVE WEB SYSTEM
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base">
                        Clean Structure • Direct Conversions
                      </span>
                    </div>
                    <span className="text-[10px] bg-[#25D366] text-[#0A2917] font-bold px-2.5 py-1 rounded-md">
                      1-Tap WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY SERVICES GRID with Individual Real Image Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2DBD1] overflow-hidden hover:border-[#D0C7BC] hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Image Header on Each Service Card */}
                <div className="aspect-16/9 overflow-hidden bg-[#FAF8F5] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#16171D] shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#16171D] mb-1">
                      {service.title}
                    </h4>

                    <p className="text-xs font-bold text-[#E25822] mb-1.5">
                      {service.tagline}
                    </p>

                    <p className="text-xs text-[#50525A] leading-relaxed">
                      {service.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2ECE4]">
                    <button
                      onClick={() => onOpenWhatsApp(service.msg)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16171D] hover:text-[#E25822] cursor-pointer"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
