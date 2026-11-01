'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Video, Car, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ESTATE_PLOTS } from '../data/estateData';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from '../data/contact';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEstateId?: string;
}

export default function InspectionModal({ isOpen, onClose, defaultEstateId }: InspectionModalProps) {
  const [tourType, setTourType] = useState<'physical' | 'virtual'>('physical');
  const [selectedEstate, setSelectedEstate] = useState(defaultEstateId || ESTATE_PLOTS[0].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupPoint, setPickupPoint] = useState('Abuja Airport / Airport Road Axis');
  const [preferredDate, setPreferredDate] = useState('');
  const [diasporaCountry, setDiasporaCountry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingWhatsAppUrl, setBookingWhatsAppUrl] = useState('');

  useEffect(() => {
    if (defaultEstateId) {
      setSelectedEstate(defaultEstateId);
    }
  }, [defaultEstateId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      setIsSubmitted(false);
      setBookingWhatsAppUrl('');
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hello Musko Properties, I would like to book a site inspection.',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Inspection type: ${tourType === 'physical' ? 'Physical site inspection' : 'Virtual WhatsApp video tour'}`,
      `Property: ${estateObj.title}`,
      `Preferred date: ${preferredDate || 'To be scheduled'}`,
      tourType === 'physical' ? `Pickup point: ${pickupPoint}` : `Country / timezone: ${diasporaCountry || 'Not specified'}`
    ].join('\n');
    const whatsappUrl = getWhatsAppUrl(message);
    setBookingWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const estateObj = ESTATE_PLOTS.find((e) => e.id === selectedEstate) || ESTATE_PLOTS[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl transition-all max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#022451]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ECB209] text-[#022451] flex items-center justify-center font-serif text-sm font-bold shadow-sm">
              M
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-mono text-slate-300 block">
                Musko Properties • Abuja VIP Inspection
              </span>
              <h3 className="text-base font-serif text-white">
                Book a Verified Site Tour
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-[#083B7A] transition-all"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-white">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECB209]/20 text-[#B77900] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-serif text-[#022451]">
                Your Inspection Request Is Ready
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#022451]">{fullName}</strong>. WhatsApp is opening with your {tourType === 'physical' ? 'site inspection' : 'virtual tour'} request for{' '}
                <strong className="text-[#B77900]">{estateObj.title}</strong>. Send the prepared message in WhatsApp to complete your booking.
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-left max-w-md mx-auto space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Selected Layout:</span>
                  <strong className="text-[#022451]">{estateObj.title}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <strong className="text-[#022451]">{preferredDate || 'To be scheduled with advisor'}</strong>
                </div>
                {tourType === 'physical' ? (
                  <div className="flex justify-between">
                    <span>Pickup Point:</span>
                    <strong className="text-[#022451]">{pickupPoint}</strong>
                  </div>
                ) : (
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <strong className="text-[#022451]">Live WhatsApp Video Call</strong>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>AGIS Ref Check:</span>
                  <strong className="text-[#ECB209]">{estateObj.agisRef || 'Verified Area Council Allocation'}</strong>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                If WhatsApp did not open, use the button below. Our team can confirm your preferred date and arrangements after receiving your message.
              </p>
              <a
                href={bookingWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#022451] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] font-bold text-xs tracking-wider uppercase transition-all"
              >
                <span>Open WhatsApp to Send Request</span>
                <ArrowRight size={16} />
              </a>
              <p className="text-[11px] text-slate-400">
                WhatsApp booking line: {WHATSAPP_DISPLAY_NUMBER}
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#ECB209] to-[#F5BE42] text-[#022451] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#ECB209]/20"
              >
                <span>Return to Gwagwalada Portfolio</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type Switcher */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-2.5">
                  1. Select Inspection Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTourType('physical')}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      tourType === 'physical'
                        ? 'bg-[#022451] border-[#ECB209] text-white shadow-md'
                        : 'bg-[#F8FAFC] border-slate-200 text-slate-600 hover:border-[#022451]/30'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${tourType === 'physical' ? 'bg-[#ECB209] text-[#022451]' : 'bg-slate-100 text-slate-500'}`}>
                      <Car size={18} />
                    </div>
                    <div>
                      <h4 className={`text-xs font-semibold ${tourType === 'physical' ? 'text-white' : 'text-[#022451]'}`}>Physical Site Inspection</h4>
                      <p className={`text-[11px] mt-0.5 ${tourType === 'physical' ? 'text-slate-300' : 'text-slate-500'}`}>Complimentary pickup from Airport / CBD straight to Gwagwalada</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      tourType === 'virtual'
                        ? 'bg-[#022451] border-[#ECB209] text-white shadow-md'
                        : 'bg-[#F8FAFC] border-slate-200 text-slate-600 hover:border-[#022451]/30'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${tourType === 'virtual' ? 'bg-[#ECB209] text-[#022451]' : 'bg-slate-100 text-slate-500'}`}>
                      <Video size={18} />
                    </div>
                    <div>
                      <h4 className={`text-xs font-semibold ${tourType === 'virtual' ? 'text-white' : 'text-[#022451]'}`}>Live WhatsApp Video Tour</h4>
                      <p className={`text-[11px] mt-0.5 ${tourType === 'virtual' ? 'text-slate-300' : 'text-slate-500'}`}>Live video walk-through for UK, US &amp; Diaspora investors</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Estate Selection */}
              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-2">
                  2. Select Gwagwalada Layout or Reserve
                </label>
                <div className="relative">
                  <select
                    value={selectedEstate}
                    onChange={(e) => setSelectedEstate(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209] appearance-none"
                    required
                  >
                    {ESTATE_PLOTS.map((estate) => (
                      <option key={estate.id} value={estate.id} className="bg-white text-[#022451]">
                        {estate.title} — {estate.location} ({estate.priceFormatted})
                      </option>
                    ))}
                  </select>
                  <MapPin size={16} className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Contact Info Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Aliyu Abubakar / Engr. Chidi"
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Phone / WhatsApp (+234 or Country Code) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 803 123 4567 or +44 79..."
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209]"
                    />
                    <Calendar size={14} className="absolute right-3.5 top-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {tourType === 'physical' ? (
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Preferred Abuja Pickup Point (Complimentary Chauffeur)
                  </label>
                  <select
                    value={pickupPoint}
                    onChange={(e) => setPickupPoint(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209]"
                  >
                    <option value="Nnamdi Azikiwe International Airport, Abuja">Nnamdi Azikiwe International Airport, Abuja</option>
                    <option value="Central Business District (CBD) / Wuse 2, Abuja">Central Business District (CBD) / Wuse 2, Abuja</option>
                    <option value="Gwagwalada Secretariat / UniAbuja Gate Axis">Gwagwalada Secretariat / UniAbuja Gate Axis</option>
                    <option value="Giri Junction / Airport Road Tollgate">Giri Junction / Airport Road Tollgate</option>
                    <option value="Meeting directly on site in Gwagwalada">Meeting directly on site in Gwagwalada</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Your Current Country &amp; Timezone (UK, USA, Canada, UAE...)
                  </label>
                  <input
                    type="text"
                    value={diasporaCountry}
                    onChange={(e) => setDiasporaCountry(e.target.value)}
                    placeholder="e.g. United Kingdom (BST), USA (EST), Canada, Germany..."
                    className="w-full bg-[#F8FAFC] border border-slate-200 text-[#022451] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>
              )}

              {/* Trust Badge */}
              <div className="p-3 rounded-xl bg-[#022451]/5 border border-[#022451]/15 flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck size={20} className="text-[#ECB209] flex-shrink-0" />
                <span>
                  <strong className="text-[#022451]">100% Guaranteed Diligence:</strong> Every inspection includes concrete beacon verification, AGIS cadastral printout check, and unencumbered FCT title preview.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D4A008] hover:to-[#E8AD10] text-[#022451] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#ECB209]/20 transition-all hover:scale-[1.01]"
              >
                <span>Confirm {tourType === 'physical' ? 'Gwagwalada Site Tour' : 'Live WhatsApp Video Tour'}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
