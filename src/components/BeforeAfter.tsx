import React from 'react';
import { 
  MapPin, 
  Star, 
  Store, 
  XCircle, 
  Globe, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  ArrowRight,
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface BeforeAfterProps {
  onOpenWhatsApp: () => void;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="the-idea" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <span>THE TRANSFORMATION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            From Just A Google Pin{' '}
            <span className="text-[#E25822] block mt-1">To A Complete Online Presence.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A]">
            Your Google Business Profile tells people that your business exists. Your website and branded digital presence tell them why they should choose you.
          </p>
        </div>

        {/* Visual Before vs After Grid with Real Visual Comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* BEFORE CARD */}
          <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-8 flex flex-col justify-between shadow-xs relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE4]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E85D4E]"></span>
                  <span className="font-mono text-xs font-black text-[#E85D4E] uppercase tracking-wider">
                    BEFORE DIGITAL JUGAAD
                  </span>
                </div>
                <span className="text-[11px] text-[#8A8D9B] font-semibold">
                  Incomplete Customer Journey
                </span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-2.5">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8A8D9B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#50525A]">
                    1. Basic Google Business Pin
                  </span>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-3">
                  <Star className="w-4 h-4 text-[#F5A623] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#50525A]">
                    2. Good Offline Reputation
                  </span>
                </div>

                <div className="p-3.5 bg-[#FFF0ED] rounded-xl border border-[#FCD9D3] flex items-center gap-3 text-[#D44D24]">
                  <XCircle className="w-4 h-4 text-[#D44D24] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold">
                    3. No Website / No Branded Social (Customer drops off or gets confused)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F2ECE4] text-xs text-[#7A7E8F]">
              Customers can't easily see pricing, full photos, or services in one clean place.
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="bg-[#16171D] text-white rounded-3xl border-2 border-[#16171D] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C2F3D]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#25D366]"></span>
                  <span className="font-mono text-xs font-black text-[#25D366] uppercase tracking-wider">
                    AFTER DIGITAL JUGAAD
                  </span>
                </div>
                <span className="text-[11px] text-[#25D366] font-bold bg-[#25D366]/10 px-2 py-0.5 rounded">
                  Unified Presence
                </span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-2.5">
                <div className="p-3 bg-[#20222B] rounded-xl border border-[#2D3140] flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    1. Professional Fast Website + SEO
                  </span>
                </div>

                <div className="p-3 bg-[#20222B] rounded-xl border border-[#2D3140] flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#E0E2EC]">
                    2. Logo System + Branded Social Posts
                  </span>
                </div>

                <div className="p-3.5 bg-[#25D366]/15 rounded-xl border border-[#25D366]/40 flex items-center gap-3 text-[#25D366]">
                  <MessageSquare className="w-4 h-4 fill-[#25D366] shrink-0" />
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    3. Direct WhatsApp & Call Inquiries Daily
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2C2F3D] flex items-center justify-between">
              <span className="text-xs text-[#A0A4B4]">
                Instant customer trust & clear clarity.
              </span>
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#25D366] hover:underline cursor-pointer"
              >
                <span>Transform Your Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
