'use client';

import { useState } from 'react';
import { MessageCircle, X, ShieldCheck, Calendar, Globe, PhoneCall } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: 'Book Free Gwagwalada Site Inspection',
      sub: 'Free VIP pickup from Abuja Airport or CBD',
      text: 'Hello Musko Properties, I would like to book a physical site inspection to your Gwagwalada estates.'
    },
    {
      label: 'Diaspora Land Verification Desk',
      sub: 'For Nigerians in UK, US, Canada & UAE',
      text: 'Hello Musko Properties, I am in the diaspora and would like to learn about verified Abuja land with 4K drone inspection.'
    },
    {
      label: 'Speak with CEO Mustapha’s Office',
      sub: 'Direct executive inquiries & land banking',
      text: 'Hello, I would like to make an executive inquiry with CEO Mustapha’s office regarding land banking in Abuja.'
    }
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const defaultText = 'Hello Musko Properties and Real Estate, I am interested in your verified lands in Gwagwalada, Abuja.';
    window.open(getWhatsAppUrl(customText || defaultText), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#0B182B] border-2 border-[#E5A823]/50 shadow-2xl overflow-hidden animate-fadeIn text-white">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#0A1C38] to-[#122544] border-b border-[#1B3762] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ECB209] text-[#022451] flex items-center justify-center font-bold shadow-md">
                <MessageCircle size={22} className="fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-white flex items-center gap-1.5">
                  Musko WhatsApp Desk
                  <span className="w-2 h-2 rounded-full bg-[#ECB209] animate-pulse" />
                </h4>
                <p className="text-[11px] text-[#E5A823] font-mono">Abuja Head Office &bull; Active Now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#8FA2BF] hover:text-white hover:bg-[#16335F] transition-all"
              aria-label="Close WhatsApp chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#07111F]/90">
            <div className="p-3 rounded-2xl bg-[#0E1F3B] border border-[#1B3762] text-xs text-[#8FA2BF] leading-relaxed">
              <span className="text-[#F5BE42] font-semibold block mb-1">Peace of Mind Guarantee:</span>
              Chat directly with our verified Abuja advisors. We share instant Google Pin coordinates, AGIS title records, and live drone videos.
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E5A823] block">
                Quick Action Options:
              </span>
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenWhatsApp(item.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#0E1F3B] hover:bg-[#16335F] border border-[#1B3762] hover:border-[#E5A823]/60 transition-all group"
                >
                  <span className="block text-xs font-semibold text-white group-hover:text-[#F5BE42]">
                    {item.label}
                  </span>
                  <span className="block text-[10px] text-[#8FA2BF]">
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-3 rounded-xl bg-[#022451] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={16} className="fill-current" />
              <span>Start WhatsApp Conversation</span>
            </button>

            <div className="pt-2 text-center text-[10px] font-mono text-[#6B82A6] flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-[#E5A823]" />
              <span>Official Musko Business Line &bull; SCUML Regulated</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#022451] to-[#083B7A] text-white shadow-2xl shadow-[#022451]/30 border-2 border-[#ECB209]/60 hover:scale-105 transition-all"
        aria-label="Chat with Musko on WhatsApp"
      >
        <div className="relative">
          <MessageCircle size={22} className="fill-[#F5BE42] text-[#F5BE42]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#E5A823] border border-white" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-xs font-bold font-mono tracking-wider leading-none">
            Chat on WhatsApp
          </span>
          <span className="block text-[9px] text-white/90 font-mono tracking-tight mt-0.5">
            Instant Land Due Diligence
          </span>
        </div>
      </button>
    </div>
  );
}
