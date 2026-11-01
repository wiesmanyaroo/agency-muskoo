'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, Users, Quote, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LeadershipShowcase from '../../components/LeadershipShowcase';
import CeoAssuranceSection from '../../components/CeoAssuranceSection';
import WhatsAppWidget from '../../components/WhatsAppWidget';
import { getWhatsAppUrl } from '../../data/contact';
import InspectionModal from '../../components/InspectionModal';
import { TRUST_METRICS } from '../../data/estateData';

export default function AboutPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);

  return (
    <main className="bg-[#F8FAFC] text-[#022451] min-h-screen">
      {/* Sticky Navbar */}
      <Navbar onOpenInspection={() => setInspectionModalOpen(true)} />

      {/* Subpage Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden px-5 sm:px-8 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022451]/95 via-[#022451]/90 to-[#011736]/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              Identity, Governance &amp; Integrity • Abuja, Nigeria
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              Rooted in Abuja.<br />
              <em className="italic text-[#F5BE42]">Built on Unassailable Trust.</em>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Musko Properties and Real Estate was founded by CEO Mustapha to solve the greatest challenge facing land buyers in the Federal Capital Territory: eliminating native land disputes, fake layout plans, unverified paper titles, and diaspora fraud.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Personal Assurance Spotlight */}
      <CeoAssuranceSection onBookInspection={() => setInspectionModalOpen(true)} />

      {/* Genesis & Philosophy */}
      <section className="py-20 md:py-24 px-5 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              The Genesis in Abuja
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#022451]">
              Why Musko Exists: <em className="italic text-[#ECB209]">Zero-Risk Land Ownership in Gwagwalada</em>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In Abuja and satellite expansion corridors like Gwagwalada, thousands of hardworking civil servants, doctors, university professors, and diaspora Nigerians have fallen victim to unapproved layouts, double allocations, or land encroached by local customary claimants.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              CEO Mustapha took an uncompromising stance. Before a single plot in our Gwagwalada layouts is offered to any buyer, our team physically surveys the coordinates with RTK satellite GPS, verifies title records with AGIS and the Gwagwalada Area Council, casts permanent concrete perimeter beacons, and secures complete legal indemnity.
            </p>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border-l-4 border-[#ECB209] space-y-2">
              <Quote size={20} className="text-[#ECB209]" />
              <p className="text-xs sm:text-sm font-serif italic text-[#ECB209] leading-relaxed">
                &ldquo;In Abuja real estate, paperwork is only valid when verified against the master-plan at AGIS and anchored by concrete beacons in the soil. We do not gamble with our clients&apos; hard-earned money.&rdquo;
              </p>
              <span className="text-[11px] font-mono text-slate-500 block">
                — Mustapha, Founder &amp; CEO, Musko Properties
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-[#ECB209]/40 bg-[#F8FAFC]">
                <Image
                  src="/team/mustapha-ceo.jpg"
                  alt="CEO Mustapha"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022451]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="block text-xs font-serif font-bold text-white">Mustapha</span>
                  <span className="block text-[9px] font-mono text-[#ECB209] uppercase">Founder &amp; CEO</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#022451] border border-[#083B7A] text-center">
                <span className="text-2xl font-serif text-white font-bold block">100%</span>
                <span className="text-[11px] font-mono text-[#ECB209] uppercase">AGIS Cadastral Clearance</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-5 rounded-2xl bg-[#022451] border border-[#083B7A] text-center">
                <span className="text-2xl font-serif text-white font-bold block">4,200+</span>
                <span className="text-[11px] font-mono text-[#ECB209] uppercase">Concrete Beacons Planted</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-slate-200 bg-[#F8FAFC]">
                <Image
                  src="/team/farida-abbas-hr.jpg"
                  alt="Farida Abbas - Head of HR & Governance"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022451]/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="block text-xs font-serif font-bold text-white">Farida Abbas</span>
                  <span className="block text-[9px] font-mono text-[#ECB209] uppercase">Head of HR &amp; Governance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Leadership Team */}
      <LeadershipShowcase
        showFullDetails={true}
        onBookExecutiveConsultation={() => setInspectionModalOpen(true)}
      />

      {/* The 5-Stage FCT Due Diligence Protocol */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-[#022451] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              FCT Diligence Engine
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
              Our 5-Stage <em className="italic text-[#F5BE42]">Gwagwalada Verification Protocol</em>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              How our executive leadership and licensed surveyors ensure absolute legal security for every plot before public offering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'AGIS Cadastral Charting',
                desc: 'Coordinate charting against Abuja Masterplan and FCDA acquisition boundaries to guarantee zero encroachment on public utilities.'
              },
              {
                step: '02',
                title: 'Area Council Validation',
                desc: 'Forensic title search at the Gwagwalada Area Council Land Department to confirm root of title and official allocation gazette.'
              },
              {
                step: '03',
                title: 'Soil & Topography Test',
                desc: 'Civil engineers test soil bearing capacity, verifying 100% dry savannah table land with zero flood vulnerability near River Usuma basin.'
              },
              {
                step: '04',
                title: 'GPS Beacon Implantation',
                desc: 'SURCON registered surveyors implant permanent concrete boundary pegs tied into the National Geodetic Grid.'
              },
              {
                step: '05',
                title: 'Deed Delivery & Allocation',
                desc: 'Execution of Deed of Assignment, Contract of Sale, and doorstep international DHL delivery of registered documents worldwide.'
              }
            ].map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-2xl bg-[#011736] border border-[#083B7A] flex flex-col justify-between hover:border-[#ECB209] transition-all"
              >
                <div>
                  <span className="font-mono text-xs text-[#ECB209] block mb-3">{stage.step}</span>
                  <h4 className="font-serif text-lg text-white mb-2">{stage.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#083B7A] flex items-center gap-1.5 text-[10px] font-mono text-[#F5BE42]">
                  <CheckCircle2 size={13} />
                  <span>FCT Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Transparency / Our Pledge */}
      <section className="py-20 md:py-24 px-5 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-xl space-y-5">
            <div className="flex items-center gap-2 text-[#B77900] font-mono text-xs uppercase tracking-wider">
              <MessageCircle size={16} />
              <span>Open-Book Gwagwalada Transparency</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#022451]">
              Why We Share Everything: <em className="italic text-[#ECB209]">WhatsApp-First FCT Real Estate</em>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never expect a client in London, Houston, Toronto, or Lagos to rely on promises. Our team conducts live WhatsApp video walk-throughs, beacon allocations, and road grading updates directly with every investor — unfiltered, in real-time.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Hello Musko Properties, I want a live inspection of Gwagwalada land.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#022451] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg"
              >
                <MessageCircle size={16} />
                <span>Request Live WhatsApp Inspection</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:max-w-md p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
            <h4 className="font-serif text-lg text-[#022451]">Our Gwagwalada Fiduciary Pledge</h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <span>Zero customary family interference or illegal youth levy extortion (omo-onile free).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <span>Immediate physical concrete beacon allocation upon reaching payment threshold.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <span>Contractual buyback guarantee on all strategic Land Banking parcels.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <span>Complimentary VIP inspection pickup from Abuja Airport or CBD to Gwagwalada.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={15} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <span>CAC Registered (RC-1849204) &amp; SCUML Certified for full regulatory compliance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Inspection Modal */}
      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
