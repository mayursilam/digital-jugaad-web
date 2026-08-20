import React from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Globe,
  TrendingUp,
  Share2
} from 'lucide-react';
import seoImg from '../assets/images/regenerated_image_1787238335187.jpg';

interface SEOSectionProps {
  onOpenWhatsApp: () => void;
}

export const SEOSection: React.FC<SEOSectionProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="seo" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Search className="w-3.5 h-3.5 text-[#E25822]" />
            <span>ONLINE VISIBILITY & LOCAL SEO</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Help Customers Find You <span className="text-[#E25822]">On Google & Maps.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A]">
            When nearby customers in Pune search for what you offer, your business should show up with accurate information, verified reviews, and a fast link to your website.
          </p>
        </div>

        {/* SEO Grid with Real Image */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Real Smartphone & Local Search Map Image (45-50% width) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative">
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={seoImg}
                  alt="Google Maps and local SEO search visibility optimization"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    LOCAL GOOGLE PRESENCE
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Google Business Profile + Maps Navigation Sync
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Local SEO Components */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E25822] shrink-0" />
                    <div>
                      <span className="font-bold text-[#16171D] block">Google Maps Pincode & Address Pinning</span>
                      <span className="text-[11px] text-[#7A7E8F]">Accurate driving directions for walk-in clients</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#25D366]/20 text-[#0F5132] font-bold px-2 py-0.5 rounded">Verified</span>
                </div>

                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Search className="w-4 h-4 text-[#16171D] shrink-0" />
                    <div>
                      <span className="font-bold text-[#16171D] block">Target Local Keywords</span>
                      <span className="text-[11px] text-[#7A7E8F]">Rank for Pune area search queries</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#E25822]/15 text-[#E25822] font-bold px-2 py-0.5 rounded">High Intent</span>
                </div>

                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Star className="w-4 h-4 text-[#F5A623] shrink-0" />
                    <div>
                      <span className="font-bold text-[#16171D] block">Google Review QR Code Generator</span>
                      <span className="text-[11px] text-[#7A7E8F]">Makes it effortless for happy customers to rate you</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#F5A623]/20 text-[#9C6800] font-bold px-2 py-0.5 rounded">Trust</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                  <span>Talk About Google & SEO</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
