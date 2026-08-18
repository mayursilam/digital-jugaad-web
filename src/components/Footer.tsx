import React from 'react';
import { ArrowUp, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Website', id: 'what-we-do' },
    { label: 'SEO', id: 'seo' },
    { label: 'Branding', id: 'what-we-do' },
    { label: 'Social Media', id: 'what-we-do' },
    { label: 'Digital Marketing', id: 'what-we-do' },
    { label: 'App Development', id: 'what-we-do' },
  ];

  const companyLinks = [
    { label: 'About', id: 'about' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#121316] text-[#FAF8F5] border-t border-[#262934] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262936]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                DIGITAL JUGAAD
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E25822]"></span>
            </div>

            <p className="text-xs uppercase tracking-widest text-[#E25822] font-bold">
              {BRAND_CONFIG.descriptor}
            </p>

            <p className="text-sm text-[#A8ABB8] max-w-sm leading-relaxed">
              We help local and growing businesses in Pune and beyond build clean, professional websites and digital solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 px-3.5 py-2 rounded-lg border border-[#25D366]/30 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp Digital Jugaad</span>
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-[#9A9DAE] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-[#9A9DAE] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#9A9DAE]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E25822] shrink-0" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <button
                onClick={onOpenWhatsApp}
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: Direct Chat</span>
              </button>
              <button
                onClick={onOpenCall}
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8ABB8] shrink-0" />
                <span>Call: Direct Support</span>
              </button>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E25822] shrink-0" />
                <span>{BRAND_CONFIG.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7E8F]">
          <div>
            <span>© 2026 Digital Jugaad. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8A8E9F]">
              Simple digital solutions for small businesses.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C1E26] hover:bg-[#252834] text-[#FAF8F5] border border-[#2F3342] transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
