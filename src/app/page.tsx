'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EstateGrid from '../components/EstateGrid';
import LandBankingCalculator from '../components/LandBankingCalculator';
import LeadershipShowcase from '../components/LeadershipShowcase';
import CeoAssuranceSection from '../components/CeoAssuranceSection';
import NigerianTrustGuarantees from '../components/NigerianTrustGuarantees';
import WhatsAppWidget from '../components/WhatsAppWidget';
import InspectionModal from '../components/InspectionModal';
import { TRUST_METRICS, TESTIMONIALS } from '../data/estateData';

export default function Home() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [selectedEstateForInspection, setSelectedEstateForInspection] = useState<string | undefined>(undefined);

  const handleOpenInspection = (estateId?: string) => {
    setSelectedEstateForInspection(estateId);
    setInspectionModalOpen(true);
  };

  return (
    <main className="bg-[#07111F] text-white min-h-screen">
      {/* Sticky Navbar */}
      <Navbar onOpenInspection={() => handleOpenInspection()} />

      {/* Hero Section */}
      <section className="relative min-h-[680px] md:min-h-[760px] flex items-center overflow-hidden px-5 sm:px-8 py-24 md:py-28">
        {/* Background Layer with Dark Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D18]/95 via-[#07111F]/88 to-[#0A1628]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E5A823]/15 via-[#0F2240]/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] gap-12 items-center">
          <div className="max-w-3xl space-y-7">
            {/* Top Regulatory Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2240]/90 border border-[#214378] text-[11px] sm:text-xs font-mono text-[#F5BE42] shadow-xl backdrop-blur-md">
              <ShieldCheck size={15} className="text-[#E5A823]" />
              <span>Abuja, FCT <span aria-hidden="true">&bull;</span> CAC RC-1849204 <span aria-hidden="true">&bull;</span> SCUML Regulated</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-white leading-[1.04] tracking-tight">
              Own land in Abuja with confidence.
              <span className="block mt-2 text-[#F5BE42] italic">Grow with Gwagwalada.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#C3D0E2] leading-relaxed max-w-2xl font-light">
              Explore residential and investment land in Gwagwalada, backed by clear documentation, local guidance, and a straightforward path from enquiry to inspection.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenInspection()}
                className="justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-[#E5A823] to-[#F5BE42] hover:from-[#D49918] hover:to-[#EAA812] text-[#07111F] font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl shadow-[#E5A823]/25 transition-all hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                <span>Book a Site Inspection</span>
              </button>

              <a
                href="#estate-lands"
                className="justify-center px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <span>Explore Available Land</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="pt-7 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4 sm:gap-6">
              {TRUST_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-serif text-white font-semibold">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#E5A823]">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-[#6B82A6] hidden sm:block">
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="relative max-w-md ml-auto rounded-3xl border border-white/15 bg-[#07111F]/75 p-7 xl:p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#E5A823]/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[#F5BE42] text-xs font-mono uppercase tracking-widest">
                  <MapPin size={15} />
                  <span>Gwagwalada, Abuja FCT</span>
                </div>
                <h2 className="mt-5 text-2xl xl:text-3xl font-serif text-white leading-tight">
                  A clearer way to find your place.
                </h2>
                <p className="mt-3 text-sm text-[#AEBED3] leading-relaxed">
                  Compare current opportunities, understand the paperwork, and arrange a visit with a local team.
                </p>

                <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
                  {[
                    'Residential estate plots',
                    'Land banking opportunities',
                    'Commercial land options'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F5BE42]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#estate-lands"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F5BE42] hover:text-white transition-colors"
                >
                  Browse property listings
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-xs font-mono text-[#AEBED3]">
          <span>Explore Verified Estates</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* Trust & Due Diligence Banner */}
      <section className="bg-[#F8FAFC] text-[#022451] border-y border-slate-200 py-10 px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#022451] flex items-center justify-center text-[#F5BE42] flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#022451]">Title checks and due diligence</h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Every layout is legally checked against the Abuja Masterplan. We only offer lands with verifiable R of O, C of O, or Area Council regularized allocations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#022451] flex items-center justify-center text-[#F5BE42] flex-shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#022451]">On-site allocation and beaconing</h4>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                No delayed allocations or empty promises. When you reach your allocation milestone, concrete beacons marked with SURCON registered coordinates are cast in your presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Mustapha Personal Assurance Section */}
      <CeoAssuranceSection onBookInspection={() => handleOpenInspection()} />

      {/* 6 Nigerian Real Estate Guarantees */}
      <NigerianTrustGuarantees />

      {/* Featured Lands & Portfolios */}
      <EstateGrid
        onSelectInspection={(estateId) => handleOpenInspection(estateId)}
      />

      {/* Land Banking Calculator Section */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-[#050D18] relative" id="land-banking">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E5A823] block">
              Wealth Acceleration in FCT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              Why Smart Capital Banks in <em className="italic text-[#F5BE42]">Gwagwalada Soil</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#8FA2BF] leading-relaxed">
              With the ongoing expansion of the University of Abuja, the Teaching Hospital, and the dualization of Gwagwalada link roads, strategically positioned land provides 40%+ capital appreciation and total inflation immunity.
            </p>
          </div>

          <LandBankingCalculator onOpenInspection={() => handleOpenInspection()} />
        </div>
      </section>

      {/* Executive Leadership Showcase (Mustapha, Farida Abbas, Labari Monday, Mary Shammah Ayuba) */}
      <LeadershipShowcase
        showFullDetails={true}
        onBookExecutiveConsultation={() => handleOpenInspection()}
      />

      {/* Diaspora & Investor Testimonials */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-[#07111F] border-t border-[#162E52]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#1B3762]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E5A823] block mb-2">
                Real Client Voices
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
                Trusted by Nigerians at <em className="italic text-[#F5BE42]">Home &amp; in the Diaspora</em>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8FA2BF] max-w-md">
              Over 65% of our Gwagwalada estate and land banking clients reside in the United Kingdom, USA, Canada, and Saudi Arabia. Here is why they trust Musko Properties with their capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-7 rounded-3xl bg-[#0E1F3B] border border-[#1B3762] shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5A823] mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                    <span className="text-xs font-mono text-[#8FA2BF] ml-2">5.0 Verified Allocation</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C7D4E7] leading-relaxed italic mb-6">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-[#162E52] flex items-center gap-3.5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-[#E5A823]/40"
                  />
                  <div>
                    <h4 className="text-sm font-serif text-white font-semibold">{testimonial.clientName}</h4>
                    <p className="text-[11px] text-[#E5A823] font-mono">{testimonial.location}</p>
                    <p className="text-[10px] text-[#8FA2BF]">{testimonial.propertyAcquired}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Concierge Widget */}
      <WhatsAppWidget />

      {/* Physical & Virtual Inspection Modal */}
      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
        defaultEstateId={selectedEstateForInspection}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
