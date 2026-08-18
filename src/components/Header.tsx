import React, { useState } from 'react';
import { MessageSquare, Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenWhatsApp,
  onOpenCall,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'WHAT WE DO', id: 'what-we-do' },
    { label: 'HOW IT WORKS', id: 'how-it-works' },
    { label: 'ABOUT', id: 'about' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left flex items-center gap-2 group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-2xl tracking-tight text-[#16171D] group-hover:text-[#E25822] transition-colors">
                    DIGITAL JUGAAD
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#E25822]"></span>
                </div>
                <p className="text-[11px] text-[#7A7874] tracking-wider uppercase font-medium">
                  Pune • Simple Digital Solutions
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-xs font-bold tracking-wider transition-colors uppercase cursor-pointer py-1 ${
                      isActive
                        ? 'text-[#E25822] border-b-2 border-[#E25822]'
                        : 'text-[#50525A] hover:text-[#16171D]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenCall}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#DCD5CB] text-xs font-bold uppercase tracking-wider text-[#16171D] hover:bg-[#F2ECE4] transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#50525A]" />
                <span>Call Us</span>
              </button>

              <button
                id="header-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#0A2917] text-xs font-extrabold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex sm:hidden items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-[#0A2917] text-xs font-bold uppercase"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white border border-[#EAE5DD] text-[#16171D] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE5DD] px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-[#16171D] hover:bg-[#F2ECE4] hover:text-[#E25822] transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EAE5DD] grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCall();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#DCD5CB] bg-white text-xs font-bold uppercase tracking-wider text-[#16171D]"
              >
                <Phone className="w-3.5 h-3.5 text-[#50525A]" />
                <span>Call Us</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-[#0A2917] text-xs font-extrabold uppercase tracking-wider shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0A2917]" />
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Compact Sticky Mobile Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE5DD] px-3 py-2.5 shadow-lg flex items-center gap-2">
        <button
          onClick={onOpenCall}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border border-[#D5CEC4] text-[#16171D] text-xs font-bold uppercase tracking-wider"
        >
          <Phone className="w-4 h-4 text-[#50525A]" />
          <span>Call Us</span>
        </button>

        <button
          onClick={onOpenWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-[#0A2917] text-xs font-extrabold uppercase tracking-wider shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-[#0A2917]" />
          <span>WhatsApp Us</span>
        </button>
      </div>
    </>
  );
};
