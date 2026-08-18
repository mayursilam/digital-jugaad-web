import React from 'react';
import { Instagram, Sparkles, MessageSquare, ArrowRight, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

interface SocialMediaShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const SocialMediaShowcase: React.FC<SocialMediaShowcaseProps> = ({ onOpenWhatsApp }) => {
  const posts = [
    {
      category: 'SERVICE SPOTLIGHT',
      title: 'Premium Quality & Transparent Pricing',
      image: 'https://images.unsplash.com/photo-1542744094-3a31727221ec?auto=format&fit=crop&w=400&q=80',
      tag: 'Services',
    },
    {
      category: 'SPECIAL OFFER',
      title: 'Limited Time Seasonal Offer 20% Off',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=400&q=80',
      tag: 'Promotion',
    },
    {
      category: 'CUSTOMER TIP',
      title: '3 Ways To Choose The Right Solution',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      tag: 'Educational',
    },
    {
      category: 'TRANSFORMATION',
      title: 'Real Customer Work Showcase',
      image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=400&q=80',
      tag: 'Proof',
    },
    {
      category: 'BRAND VALUES',
      title: 'Crafted In Pune With Honest Care',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80',
      tag: 'Story',
    },
    {
      category: 'ANNOUNCEMENT',
      title: 'New Service Location Now Open',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
      tag: 'Updates',
    },
  ];

  return (
    <section id="social-media-showcase" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Instagram className="w-3.5 h-3.5 text-[#E25822]" />
            <span>SOCIAL MEDIA & FESTIVE CREATIVES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Make Your Business Social Media <span className="text-[#E25822]">Look Professional.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            From regular weekly posts to festive greetings for Diwali, Ganeshotsav, and New Year, we create clean, branded social media templates tailored to your business identity.
          </p>
        </div>

        {/* Visual Social Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6-Post Branded Instagram Grid with Real Images */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE4]">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E25822]" />
                <span className="text-xs font-mono font-bold text-[#16171D] uppercase tracking-wider">
                  Branded Instagram Grid Concept
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#7A7E8F] bg-[#FAF8F5] px-2 py-0.5 rounded">
                DESIGN EXAMPLE
              </span>
            </div>

            {/* 6 Grid Posts with Real Photography */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {posts.map((post, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl overflow-hidden border border-[#E2DBD1] bg-[#FAF8F5] flex flex-col justify-between hover:shadow-sm transition-all group"
                >
                  <div className="aspect-square relative overflow-hidden bg-[#16171D]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[8px] font-mono font-bold bg-[#16171D]/90 text-white px-1.5 py-0.5 rounded">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 space-y-1">
                    <span className="text-[8px] font-mono text-[#E25822] uppercase font-bold block">
                      {post.category}
                    </span>
                    <p className="text-[11px] font-bold text-[#16171D] leading-tight line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#7A7E8F]">
              <span>Consistent colors, logo placement & typography.</span>
              <button
                onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to talk about social media design templates.')}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E25822] hover:underline cursor-pointer"
              >
                <span>Talk About Social Posts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Festive Campaign Poster with Real Festival Image */}
          <div className="lg:col-span-5 bg-[#16171D] text-white rounded-3xl border border-[#2D303E] p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#2C2F3D]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F5A623]" />
                <span className="text-xs font-mono font-bold text-[#F5A623] uppercase tracking-wider">
                  Festive & Campaign Creative
                </span>
              </div>
              <span className="text-[10px] font-bold bg-[#F5A623]/20 text-[#F5A623] px-2 py-0.5 rounded">
                DESIGN EXAMPLE
              </span>
            </div>

            {/* High-Impact Festival Poster with Real Image */}
            <div className="rounded-2xl overflow-hidden border border-[#3A3E50] bg-[#20222B] shadow-inner relative">
              <div className="aspect-4/3 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80"
                  alt="Diwali and Festive Social Media Campaign Template by Digital Jugaad"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D] via-[#16171D]/40 to-transparent flex flex-col justify-between p-4">
                  <div className="self-end bg-[#E25822] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                    FESTIVE SPECIAL OFFER
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xl text-white leading-tight">
                      Celebrate The Season With Special Discounts
                    </h4>
                    <p className="text-[11px] text-[#D0D4E4] mt-1">
                      Custom festive wishes with your business logo & WhatsApp booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#A0A4B4]">
              <p>
                Never scramble for last-minute festival banners. We deliver professional festival creatives ready to post.
              </p>
            </div>

            <button
              onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want festival creatives and social media post designs.')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
              <span>Get Festival Creatives</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
