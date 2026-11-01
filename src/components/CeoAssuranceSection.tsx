'use client';

import Image from 'next/image';
import { ShieldCheck, Award, MessageCircle, Calendar, CheckCircle2, PhoneCall, Quote } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_TEL_NUMBER } from '../data/contact';

interface CeoAssuranceSectionProps {
  onBookInspection?: () => void;
}

export default function CeoAssuranceSection({ onBookInspection }: CeoAssuranceSectionProps) {
  const handleWhatsAppCeo = () => {
    const text = 'Hello CEO Mustapha and Musko Executive Office, I am interested in acquiring verified land in Abuja.';
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 px-5 md:px-12 bg-[#022451] text-white relative overflow-hidden border-y border-[#ECB209]/30" id="ceo-assurance">
      {/* Background ambient gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#ECB209]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#083B7A]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ECB209] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] font-bold">
              The Founder’s Fiduciary Guarantee &bull; Abuja, Nigeria
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 text-[#F5BE42] font-semibold">
              <ShieldCheck size={15} />
              <span>100% Title Guarantee</span>
            </span>
            <span className="text-[#083B7A]">|</span>
            <span className="text-white font-medium">CAC: RC-1849204</span>
            <span className="text-[#083B7A]">|</span>
            <span className="text-[#ECB209] font-medium">EFCC SCUML Regulated</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait & Credential Badge (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Gold Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#ECB209] via-[#F5BE42]/40 to-[#022451] opacity-90 blur-sm" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-[#011736] border-2 border-[#ECB209] shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#011736]">
                  <Image
                    src="/team/mustapha-ceo.jpg"
                    alt="CEO Mustapha - Founder & CEO of Musko Properties and Real Estate"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011736] via-[#011736]/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#022451]/95 border border-[#ECB209]/60 text-[#ECB209] font-mono text-[10px] uppercase tracking-wider backdrop-blur-md shadow-lg flex items-center gap-1.5 font-bold">
                      <Award size={12} className="text-[#ECB209]" />
                      <span>Chief Executive Officer</span>
                    </span>
                    <span className="w-8 h-8 rounded-xl bg-[#ECB209] text-[#022451] flex items-center justify-center font-serif text-sm font-black shadow-md">
                      M
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#022451]/90 backdrop-blur-md border border-[#ECB209]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                          Mustapha
                        </h3>
                        <p className="text-xs font-mono text-[#ECB209] mt-0.5 font-semibold">
                          Founder &amp; Chief Executive Officer
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-300 block">Abuja, FCT</span>
                        <span className="text-[10px] font-mono text-[#F5BE42] block font-bold">&bull; Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-bar below photo */}
                <div className="p-4 bg-[#011736] border-t border-[#083B7A] grid grid-cols-2 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-[#022451] border border-[#083B7A]">
                    <span className="block text-base font-serif text-white font-bold">₦45 Billion+</span>
                    <span className="block text-[10px] font-mono text-slate-300 uppercase">Protected Capital</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#022451] border border-[#083B7A]">
                    <span className="block text-base font-serif text-[#F5BE42] font-bold">0% Litigation</span>
                    <span className="block text-[10px] font-mono text-slate-300 uppercase">Clean AGIS Records</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The CEO's Letter & Fiduciary Pledge (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block mb-2 font-bold">
                A Personal Guarantee from CEO Mustapha
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight font-bold">
                &ldquo;Your Hard-Earned Capital Deserves <em className="italic text-[#ECB209]">100% Peace of Mind.&rdquo;</em>
              </h2>
            </div>

            {/* CEO Quote Card */}
            <div className="p-6 rounded-2xl bg-[#011736] border-l-4 border-[#ECB209] border-y border-r border-[#083B7A] space-y-3 relative shadow-xl">
              <Quote size={28} className="text-[#ECB209]/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed relative z-10">
                &ldquo;In Nigerian real estate, land fraud, unapproved layouts, and double allocations have caused too much pain. When I founded Musko Properties in Abuja, I resolved that we would operate with absolute honesty. When you buy land from us in Gwagwalada, I give you my personal word: every single plot is legally verified at AGIS, surveyed with satellite accuracy, and anchored with permanent concrete beacons in the soil.&rdquo;
              </p>
              <div className="pt-2 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="text-[#ECB209] font-bold">— Mustapha, MD/CEO, Musko Properties and Real Estate</span>
                <span className="text-slate-300 font-semibold">Abuja, Nigeria</span>
              </div>
            </div>

            {/* 4 Pillars of CEO Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#011736] border border-[#083B7A] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-serif text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#ECB209]" />
                  <span>Physical Beacons on Site</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We cast and plant your permanent concrete boundary beacons physically on the ground in Gwagwalada in your presence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#011736] border border-[#083B7A] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-serif text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#ECB209]" />
                  <span>Zero Omo-Onile Harassment</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full customary compensation and Area Council legal gazette covenants. Zero youth interference or illegal bush entry tolls.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#011736] border border-[#083B7A] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-serif text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#ECB209]" />
                  <span>Corporate Accounts Only</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We never ask for payments to personal accounts. All funds flow through CAC registered Musko corporate bank channels under SCUML monitoring.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#011736] border border-[#083B7A] space-y-1.5">
                <div className="flex items-center gap-2 text-white font-serif text-sm font-bold">
                  <CheckCircle2 size={16} className="text-[#ECB209]" />
                  <span>Doorstep Document Delivery</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Original Deeds of Assignment and stamped survey allocations are hand-delivered or sent via tracked courier to your doorstep.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppCeo}
                className="px-6 py-3.5 rounded-xl bg-[#011736] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>Chat with CEO&apos;s Office</span>
              </button>

              {onBookInspection && (
                <button
                  type="button"
                  onClick={onBookInspection}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D49918] hover:to-[#EAA812] text-[#022451] font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-[#ECB209]/25 transition-all hover:scale-[1.02]"
                >
                  <Calendar size={16} />
                  <span>Book Free Chauffeured Tour</span>
                </button>
              )}

              <a
                href={`tel:${WHATSAPP_TEL_NUMBER}`}
                className="px-5 py-3.5 rounded-xl bg-[#011736] hover:bg-[#083B7A] border border-[#083B7A] text-xs font-mono text-white transition-all flex items-center gap-2"
              >
                <PhoneCall size={14} className="text-[#ECB209]" />
                <span>{WHATSAPP_DISPLAY_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
