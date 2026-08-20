import React, { useState } from 'react';
import { 
  Printer, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  CreditCard, 
  BookOpen, 
  Store, 
  Package 
} from 'lucide-react';
import printMediaImg from '../assets/images/regenerated_image_1787237608489.png';

interface PrintMediaShowcaseProps {
  onOpenWhatsApp: (msg?: string) => void;
}

interface PrintItem {
  id: string;
  label: string;
  title: string;
  caption: string;
  image: string;
  badge: string;
  features: string[];
}

const PRINT_ITEMS: PrintItem[] = [
  {
    id: 'cards',
    label: 'Business Cards',
    title: 'Luxury Visiting Cards',
    caption: 'Matte laminated, gold foil embossed, and velvet soft-touch business cards crafted for memorable handoffs.',
    image: printMediaImg,
    badge: '3.5" × 2.0" • 350 GSM Cotton Paper',
    features: ['Spot UV & Gold Foil Ready', 'QR Code for WhatsApp & Maps', 'Double-Sided 300 DPI CMYK', 'Precision 3mm Bleed Cut Margins'],
  },
  {
    id: 'brochures',
    label: 'Brochures & Flyers',
    title: 'Tri-Fold Brochures & Marketing Flyers',
    caption: 'Clean, structured product portfolios and promotional flyers designed to clearly communicate your services.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80',
    badge: 'A4 / A5 / Tri-Fold 6-Panel Layout',
    features: ['Crisp High-Res Typography', 'Product Pricing Tables', 'Accurate Fold Line Scoring', 'Press-Ready Vector AI & PDF'],
  },
  {
    id: 'standees',
    label: 'Standees & Banners',
    title: 'Rollup Standees & Shopfront Flex',
    caption: 'High-impact outdoor banners and exhibition standees engineered for maximum legibility from a distance.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80',
    badge: '6ft × 2.5ft Standee & Custom Flex',
    features: ['Bold High-Contrast Lettering', 'Color-Calibrated for Outdoor UV', 'Scaled to Exact Press Size', 'Direct Press Handover File'],
  },
  {
    id: 'packaging',
    label: 'Packaging & Menus',
    title: 'Product Packaging, Labels & Menus',
    caption: 'Laminated restaurant menus, bottle labels, and branded packaging boxes ready for die-cut printing.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    badge: 'Pantone Calibrated • Custom Die-Lines',
    features: ['Tamper-Proof Sticker Labels', 'Food & Cafe Laminated Menus', 'Barcode & Legal Label Spacing', 'Rich CMYK True-Color Profile'],
  },
];

export const PrintMediaShowcase: React.FC<PrintMediaShowcaseProps> = ({ onOpenWhatsApp }) => {
  const [activeItem, setActiveItem] = useState<PrintItem>(PRINT_ITEMS[0]);

  return (
    <section id="print-media" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EAE5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Short, Clear, Minimal Copy */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16171D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider mb-3">
            <Printer className="w-3.5 h-3.5 text-[#E25822]" />
            <span>PRINT DESIGN</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#16171D] tracking-tight leading-tight">
            Print-Ready, <span className="text-[#E25822]">High Resolution.</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#50525A]">
            Business cards, brochures, flyers, and physical branding formatted with calibrated CMYK colors and precise bleed lines for professional printing.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
          {PRINT_ITEMS.map((item) => {
            const isActive = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#16171D] text-white shadow-xs'
                    : 'bg-white text-[#50525A] hover:bg-[#EAE5DD] hover:text-[#16171D] border border-[#E2DBD1]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Card: Stack on mobile, side-by-side on desktop */}
        <div className="bg-white rounded-3xl border border-[#E2DBD1] p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Hero: Realistic High-Resolution Print Mockup Photo */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D5CEC4] shadow-md bg-[#16171D] relative group">
              <div className="aspect-4/3 overflow-hidden relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171D]/90 via-[#16171D]/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono text-[#E25822] uppercase tracking-wider font-bold block">
                    PRESS-READY CMYK 300 DPI
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base">
                    {activeItem.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Minimal Description, Features & WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#E25822] uppercase tracking-wider block">
                  DELIVERABLE SPECIFICATION
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#16171D] leading-tight">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#50525A] leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>

              {/* Clean 4-Bullet Feature Grid */}
              <div className="space-y-2.5 text-xs font-bold text-[#16171D]">
                {activeItem.features.map((feat, idx) => (
                  <div key={idx} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DD] flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button & Deliverable Note */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => onOpenWhatsApp(`Hi Digital Jugaad, I want to get print designs for "${activeItem.title}".`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                  <span>Get Print Files on WhatsApp</span>
                </button>
                <p className="text-[11px] text-[#7A7E8F] text-center">
                  Deliverable Files: Ready-to-Print PDF, Vector AI & EPS
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
