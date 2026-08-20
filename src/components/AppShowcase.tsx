import React from 'react';
import { Smartphone, CheckCircle2, MessageSquare, ArrowRight, Star, Download, ShieldCheck, Zap, Play, Layers } from 'lucide-react';
import androidAppImg from '../assets/images/regenerated_image_1787237618175.jpg';

interface AppShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const AppShowcase: React.FC<AppShowcaseProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="app-showcase" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>CUSTOM ANDROID APP DESIGN & DEVELOPMENT</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Get A Custom Android App <span className="text-[#E25822]">Built For Your Business.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#50525A] leading-relaxed">
            From customer ordering portals to appointment booking and field staff tracking, we design and build lightweight, intuitive Android apps tailored for Indian smartphones and 4G/5G networks.
          </p>
        </div>

        {/* Mobile App Visual with Real Image and Clean UI Screens */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Real Mobile App Development Image */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative">
              <div className="aspect-16/10 overflow-hidden relative">
                <img
                  src={androidAppImg}
                  alt="Custom Android App Design and Development by Digital Jugaad"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#25D366] uppercase tracking-wider font-bold block">
                    ANDROID APP DESIGN ARCHITECTURE
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    Material 3 UI • Google Play Store Ready • Fast APK Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Android Store-Style App Listing Card */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E2DBD1] space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-[#EAE5DD]">
                <div className="w-12 h-12 rounded-2xl bg-[#16171D] text-white flex items-center justify-center font-display font-black text-lg shadow-sm">
                  DJ
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base text-[#16171D]">Your Business Android App</h4>
                    <span className="text-[10px] bg-[#25D366]/15 text-[#0F5132] font-black px-2 py-0.5 rounded">
                      Android APK
                    </span>
                  </div>
                  <p className="text-xs text-[#7A7E8F]">Google Play Store Ready • Kotlin / Flutter</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#50525A]">
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-[#16171D]">Clean, Responsive Android UI / UX Design</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-[#16171D]">Direct WhatsApp Integration & One-Tap Calling</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-[#16171D]">Push Notifications for Daily Offers & Order Updates</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-[#16171D]">UPI / Razorpay Payment Gateway & Live Admin Panel</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#7A7E8F]">
                  Tested across Samsung, Xiaomi, Realme & OnePlus devices.
                </span>
                <button
                  onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I want to discuss custom Android App design and development for my business.')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16171D] hover:text-[#E25822] cursor-pointer"
                >
                  <span>Discuss Android App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#F2ECE4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7A7E8F]">
              Have an idea for a business ordering app, customer portal, or booking tool?
            </span>
            <button
              onClick={() => onOpenWhatsApp('Hi Digital Jugaad, I have an Android app idea for my business.')}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
              <span>Talk About Android App on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
