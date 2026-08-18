import React, { useState } from 'react';
import { MessageSquare, X, Check, Copy, ExternalLink, Settings2, Sparkles, Send } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  configuredNumber: string;
  onUpdateNumber: (newNumber: string) => void;
  initialMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  configuredNumber,
  onUpdateNumber,
  initialMessage,
}) => {
  const [tempNumber, setTempNumber] = useState<string>(configuredNumber || '');
  const [message, setMessage] = useState<string>(
    initialMessage || BRAND_CONFIG.whatsappPresets[0].text
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSaveNumber = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateNumber(tempNumber);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    const cleanNum = tempNumber.replace(/[^0-9]/g, '');
    if (cleanNum) {
      const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121316]/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E6E0D8] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E0D8]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center">
              <MessageSquare className="w-5 h-5 fill-[#25D366]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#121316]">
                WhatsApp Digital Jugaad
              </h3>
              <p className="text-[11px] text-[#6B7080]">
                Direct connection • Configurable business destination
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D8] text-[#555] hover:text-[#121316] flex items-center justify-center cursor-pointer text-sm font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5">
          {/* WhatsApp Destination Configurator */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E0D8]">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="whatsapp-number-input" className="text-xs font-bold uppercase tracking-wider text-[#121316] flex items-center gap-1.5">
                <Settings2 className="w-3.5 h-3.5 text-[#E25822]" />
                <span>Verified WhatsApp Number (Configurable)</span>
              </label>
              {saveSuccess && (
                <span className="text-[11px] font-semibold text-[#12B886]">
                  Saved!
                </span>
              )}
            </div>

            <form onSubmit={handleSaveNumber} className="flex gap-2">
              <input
                id="whatsapp-number-input"
                type="text"
                value={tempNumber}
                onChange={(e) => setTempNumber(e.target.value)}
                placeholder="e.g. 919876543210 (Country code + number)"
                className="flex-1 px-3.5 py-2 rounded-lg bg-white border border-[#D5CEC4] text-xs text-[#121316] focus:outline-hidden focus:border-[#25D366]"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-[#121316] hover:bg-[#252830] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Save
              </button>
            </form>
            <p className="text-[10px] text-[#7A7E8F] mt-1.5">
              {tempNumber
                ? `Active WhatsApp Destination: wa.me/${tempNumber.replace(/[^0-9]/g, '')}`
                : 'No default number set yet. Enter your verified WhatsApp number or copy the message below.'}
            </p>
          </div>

          {/* Quick Message Presets */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-2">
              Select Quick Topic
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BRAND_CONFIG.whatsappPresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setMessage(preset.text)}
                  className={`p-2 rounded-lg text-left text-xs font-medium transition-all border cursor-pointer ${
                    message === preset.text
                      ? 'bg-[#25D366]/10 text-[#0F5132] border-[#25D366]/40 font-semibold'
                      : 'bg-[#FFFFFF] text-[#4A4C55] border-[#E6E0D8] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="custom-whatsapp-msg" className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-2">
              Message to Send
            </label>
            <textarea
              id="custom-whatsapp-msg"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E0D8CD] text-xs text-[#121316] focus:outline-hidden focus:border-[#25D366] resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-[#E6E0D8] flex items-center justify-between gap-3">
            <button
              onClick={handleCopyText}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FAF8F5] hover:bg-[#EFEAE2] text-[#121316] text-xs font-bold py-3 rounded-xl border border-[#E0D8CD] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#12B886]" />
                  <span className="text-[#12B886]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Message</span>
                </>
              )}
            </button>

            {tempNumber ? (
              <button
                onClick={handleSendWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch WhatsApp</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleCopyText();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#121316] hover:bg-[#252830] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors cursor-pointer"
              >
                <span>Copy & Paste to WhatsApp</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
