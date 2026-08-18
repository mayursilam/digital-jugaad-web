import React, { useState } from 'react';
import { Phone, X, Copy, Check, ExternalLink, Settings2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  onUpdatePhoneNumber: (newNumber: string) => void;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  phoneNumber,
  onUpdatePhoneNumber,
}) => {
  const [tempNumber, setTempNumber] = useState<string>(phoneNumber || BRAND_CONFIG.displayPhoneNumber);
  const [copied, setCopied] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber || BRAND_CONFIG.displayPhoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePhoneNumber(tempNumber);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const cleanPhone = (phoneNumber || BRAND_CONFIG.displayPhoneNumber).replace(/[^0-9+]/g, '');

  return (
    <div className="fixed inset-0 z-50 bg-[#16171D]/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E2DBD1] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE5DD]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#16171D] text-white flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xl text-[#16171D]">
                Call Digital Jugaad
              </h3>
              <p className="text-xs text-[#7A7E8F]">
                Pune, Maharashtra
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EAE5DD] text-[#555] hover:text-[#16171D] flex items-center justify-center cursor-pointer font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-center">
          <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EAE5DD]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7A7E8F] block mb-2">
              Direct Phone Line
            </span>
            <span className="font-display font-black text-2xl sm:text-3xl text-[#16171D] tracking-tight block">
              {phoneNumber || BRAND_CONFIG.displayPhoneNumber}
            </span>
            <p className="text-xs text-[#6A6D7C] mt-2">
              Available 10:00 AM – 7:00 PM IST (Mon–Sat)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${cleanPhone}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#16171D] hover:bg-[#2A2C36] text-white text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly</span>
            </a>

            <button
              onClick={handleCopyNumber}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#16171D] border border-[#D5CEC4] text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#25D366]" />
                  <span className="text-[#25D366]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-3 border-t border-[#EAE5DD] text-left">
            {!isEditing ? (
              <div className="flex items-center justify-between text-[11px] text-[#7A7E8F]">
                <span>Configurable phone number destination</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="font-bold text-[#E25822] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Settings2 className="w-3 h-3" />
                  <span>Edit Number</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-2">
                <label className="text-[11px] font-bold text-[#16171D] block">
                  Set Verified Phone Number:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tempNumber}
                    onChange={(e) => setTempNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="flex-1 px-3 py-1.5 rounded-lg border border-[#D5CEC4] text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#16171D] text-white text-xs font-bold rounded-lg cursor-pointer"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
