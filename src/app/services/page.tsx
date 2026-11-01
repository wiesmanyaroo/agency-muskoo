'use client';

import { useState } from 'react';
import { ShieldCheck, TrendingUp, Compass, FileCheck, Globe, Building2, CheckCircle2, ArrowRight, Mail, Calendar, MessageCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InspectionModal from '../../components/InspectionModal';
import WhatsAppWidget from '../../components/WhatsAppWidget';

export default function ServicesPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [serviceType, setServiceType] = useState('Gwagwalada Land Banking Capital Allocation');
  const [budgetRange, setBudgetRange] = useState('₦ 5,000,000 - ₦ 15,000,000');
  const [clientNotes, setClientNotes] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const servicePillars = [
    {
      id: 'estate-lands',
      number: '01',
      title: 'Selling Lands for Master-Planned Estates in Gwagwalada',
      subtitle: 'Ready-to-Build Gated Residential & Commercial Layouts in Abuja',
      icon: Building2,
      description: 'We master-plan, grade, and deliver serviced estate plots in prime Gwagwalada growth sectors (adjacent UniAbuja Permanent Site, Giri Junction, and Paiko Kore). Every parcel features 100% dry savannah table land, perimeter fencing, concrete beacons, and unencumbered FCDA/Area Council titles.',
      highlights: [
        '100% Solid Savannah Table Land with zero flood risk',
        'Direct connection to Abuja-Lokoja dual carriageway and Kuje link road',
        'Standard plot cuts: 300 sqm (Villa), 500 sqm (Executive), 1,000+ sqm (Dual Duplex)',
        'Registered titles: FCDA Right of Occupancy (R of O) & AGIS Recertified Allocations'
      ],
      deliverable: 'Physical concrete beacon pegs, registered deed of assignment, immediate site possession.'
    },
    {
      id: 'land-banking',
      number: '02',
      title: 'Strategic Land Banking in High-Yield Abuja Corridors',
      subtitle: 'Defensive Capital Preservation with 40%–55% Target Annual Yields',
      icon: TrendingUp,
      description: 'For private investors, doctors, senior civil servants, and diaspora professionals seeking inflation immunity over devaluing currency. We acquire wholesale acreage along the Dobi expansion ring and Giri logistics corridor before tertiary infrastructure peaks.',
      highlights: [
        'Contractual corporate buyback guarantee options (12, 24, or 36 months)',
        'Wholesale acreage (1 to 10+ Acres) at pre-launch pricing with high liquidity',
        'Complete protection against currency devaluation via physical capital land backing',
        'Independent valuation and exit management managed by our investment board'
      ],
      deliverable: 'Investor prospectus, surveyed cadastral boundary deed, guaranteed liquidation covenant.'
    },
    {
      id: 'due-diligence',
      number: '03',
      title: 'Cadastral Title Diligence & AGIS Search Verification',
      subtitle: 'Forensic Legal Investigation Led by Senior Advocates of Nigeria',
      icon: FileCheck,
      description: 'Before any land transaction takes place in Gwagwalada, our legal task force conducts exhaustive investigations at AGIS (Abuja Geographic Information Systems) and the Gwagwalada Area Council Land Department, charting coordinates against government acquisitions and forestry reserves.',
      highlights: [
        'Coordinate charting with the Surveyor General of the Federation (OSGOF) database',
        'Verification of root of title, excision gazettes, and official minister consents',
        'Zero-litigation indemnity against native community claims or double allocations',
        'Guidance on FCDA title perfection and Certificate of Occupancy processing'
      ],
      deliverable: 'Official Forensic Title Search Report stamped by Senior Advocates.'
    },
    {
      id: 'diaspora-concierge',
      number: '04',
      title: 'Diaspora Real Estate Concierge Desk',
      subtitle: '100% Anti-Fraud Remote Acquisition for Nigerians Abroad',
      icon: Globe,
      description: 'Designed specifically for Nigerians residing in the UK, USA, Canada, UAE, and Europe. We eliminate the chronic risk of sending funds through relatives or unverified agents. You inspect via live WhatsApp video call with our on-site team and receive original deeds at your overseas doorstep.',
      highlights: [
        'Live 1-on-1 WhatsApp video walk-throughs timed to your overseas timezone',
        'Dedicated diaspora advisory desk with direct WhatsApp video support',
        'Milestone escrow payments with transparent photo and video proofs',
        'Doorstep DHL/FedEx worldwide courier of registered original title deeds'
      ],
      deliverable: 'Live WhatsApp video site walk-through, verified photo archive, courier-tracked title documentation.'
    },
    {
      id: 'joint-ventures',
      number: '05',
      title: 'Joint Ventures & Gwagwalada Civil Infrastructure',
      subtitle: 'Partnering with Landowners & Communities to Build Gated Enclaves',
      icon: Compass,
      description: 'We partner with families, institutional landholders, and community trusts possessing unencumbered large-scale acreage in Gwagwalada to design, finance, and execute modern gated residential and commercial communities.',
      highlights: [
        'Urban master-planning and cadastral plot subdivision',
        'Civil works: Graded road networks, storm drainage, and solar electrification',
        'Perimeter security fencing and biometric gatehouse installation',
        'End-to-end sales, marketing, and legal title allocation execution'
      ],
      deliverable: 'Joint venture development deed, civil engineering schedule, revenue-sharing escrow.'
    }
  ];

  return (
    <main className="bg-[#F8FAFC] text-[#022451] min-h-screen">
      {/* Sticky Navbar */}
      <Navbar onOpenInspection={() => setInspectionModalOpen(true)} />

      {/* Subpage Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden px-5 sm:px-8 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=90')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022451]/95 via-[#022451]/90 to-[#011736]/80" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              Capabilities in Gwagwalada • Abuja, FCT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
              Real Estate Services for<br />
              <em className="italic text-[#F5BE42]">Security &amp; High Yields.</em>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              From serviced estate plots in Gwagwalada and high-yield land banking to forensic AGIS cadastral title diligence, we bring unmatched legal rigor and engineering precision to every transaction in Abuja.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Methodology Intro */}
      <section className="py-16 px-5 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#ECB209]/40 transition-all">
            <ShieldCheck size={26} className="text-[#ECB209] mb-3" />
            <h4 className="font-serif text-lg text-[#022451]">0% Encumbrance Guarantee</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Every hectare in Gwagwalada is forensically vetted. Zero traditional land grabbing, no double allocations, and no government overrides.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#ECB209]/40 transition-all">
            <TrendingUp size={26} className="text-[#ECB209] mb-3" />
            <h4 className="font-serif text-lg text-[#022451]">40% - 55% Capital Growth</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Gwagwalada is Abuja&apos;s fastest-growing satellite hub. Land banking near UniAbuja and expressway interchanges delivers superior returns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#ECB209]/40 transition-all">
            <MessageCircle size={26} className="text-[#ECB209] mb-3" />
            <h4 className="font-serif text-lg text-[#022451]">Live WhatsApp Site Inspections</h4>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              We conduct live WhatsApp video walk-throughs and broadcast physical beaconing ceremonies so diaspora investors always see unedited truth on the ground.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Pillars */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#022451]">
              What We Deliver in <em className="italic text-[#ECB209]">Gwagwalada &amp; Abuja</em>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Explore our structured real estate and land asset solutions designed for private individuals, doctors, civil servants, and diaspora families.
            </p>
          </div>

          <div className="space-y-12">
            {servicePillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="rounded-3xl p-8 sm:p-10 md:p-12 bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#ECB209]/40 transition-all"
                >
                  {/* Left Column (6 cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#ECB209]/15 text-[#022451] flex items-center justify-center font-mono text-sm font-bold border border-[#ECB209]/30">
                        {pillar.number}
                      </span>
                      <IconComp size={24} className="text-[#ECB209]" />
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#ECB209] block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#022451] font-normal">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600">
                      <strong className="text-[#022451] block font-mono uppercase text-[10px] text-[#ECB209] mb-1">
                        Tangible Client Deliverable:
                      </strong>
                      <span>{pillar.deliverable}</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setInspectionModalOpen(true)}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ECB209] hover:text-[#022451] transition-colors"
                      >
                        <span>Schedule Advisory on this Service</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column (6 cols) */}
                  <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block border-b border-slate-200 pb-3">
                      Service Standards &amp; FCT Guarantees:
                    </span>

                    <div className="space-y-3.5">
                      {pillar.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                          <CheckCircle2 size={16} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>AGIS &amp; FCDA Compliant</span>
                      <span className="text-[#ECB209] font-bold">100% Guaranteed</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step-by-Step Acquisition Roadmap */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-[#022451] border-t border-[#083B7A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white">
              The 4-Step <em className="italic text-[#F5BE42]">Gwagwalada Acquisition Roadmap</em>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              How we guide you from initial inquiry to legal title ownership and physical beacon planting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Strategic Consultation',
                desc: 'Meet with an executive advisor to define your goals: residential plot near UniAbuja, commercial strip on expressway, or land banking reserve.'
              },
              {
                step: '02',
                title: 'Physical or WhatsApp Inspection',
                desc: 'Tour the site in person via complimentary chauffeur from Abuja Airport/CBD, or watch a customized live WhatsApp video walk-through from overseas.'
              },
              {
                step: '03',
                title: 'AGIS Title Clearance',
                desc: 'Review cadastral coordinates, verify Area Council records, and execute structured milestone agreement with escrow protection.'
              },
              {
                step: '04',
                title: 'Beaconing & Deed Delivery',
                desc: 'Receive physical concrete boundary pegs planted on-site in Gwagwalada, with doorstep DHL delivery of registered Deed of Assignment.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#011736] border border-[#083B7A] flex flex-col justify-between hover:border-[#ECB209] transition-all"
              >
                <div>
                  <span className="font-mono text-2xl text-[#ECB209] font-bold block mb-3">
                    {item.step}
                  </span>
                  <h4 className="font-serif text-lg text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#083B7A] flex items-center gap-1.5 text-[10px] font-mono text-[#F5BE42]">
                  <CheckCircle2 size={13} />
                  <span>Documented Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Consultation Booking Form */}
      <section className="py-20 md:py-28 px-5 md:px-12 bg-white border-t border-slate-100" id="advisory-form">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] block">
              Direct Abuja Senior Advisory
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#022451]">
              Consult With Our <em className="italic text-[#ECB209]">Gwagwalada Land Board</em>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Whether you are acquiring a single plot near UniAbuja or structuring a ₦50M+ Land Banking reserve, our senior partners respond within 4 business hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ECB209]/20 text-[#B77900] mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-serif text-[#022451]">Advisory Request Dispatched</h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#022451]">{clientName}</strong>. Your consultation inquiry regarding <strong className="text-[#ECB209]">{serviceType}</strong> has been assigned to our Abuja Senior Partner &amp; Legal Advisory desk.
              </p>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Assigned Officer:</span>
                  <strong className="text-[#022451]">Senior Partner (Gwagwalada Assets)</strong>
                </div>
                <div className="flex justify-between">
                  <span>Priority SLA:</span>
                  <strong className="text-[#022451]">Under 4 Hours Response (Phone / WhatsApp)</strong>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] text-[#022451] text-xs font-mono font-bold tracking-wider uppercase shadow-md shadow-[#ECB209]/20"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Alhaji Sani Bello / Dr. Ngozi"
                    className="w-full bg-white border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full bg-white border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Service Pillar of Interest *
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209]"
                  >
                    <option value="Gwagwalada Master Estate Lands">Gwagwalada Master Estate Lands</option>
                    <option value="Gwagwalada Land Banking Capital Allocation">Gwagwalada Land Banking Capital Allocation</option>
                    <option value="AGIS & FCDA Cadastral Title Due Diligence">AGIS &amp; FCDA Cadastral Title Due Diligence</option>
                    <option value="Diaspora Real Estate Concierge">Diaspora Real Estate Concierge</option>
                    <option value="Joint Venture Development in Gwagwalada">Joint Venture Development in Gwagwalada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                    Target Investment Allocation (₦)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-white border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209]"
                  >
                    <option value="₦ 2,000,000 - ₦ 5,000,000">₦ 2,000,000 - ₦ 5,000,000 (Individual Gwagwalada Plot)</option>
                    <option value="₦ 5,000,000 - ₦ 15,000,000">₦ 5,000,000 - ₦ 15,000,000 (Executive / Multi-Plot)</option>
                    <option value="₦ 15,000,000 - ₦ 40,000,000">₦ 15,000,000 - ₦ 40,000,000 (Commercial Strip / Acre)</option>
                    <option value="₦ 40,000,000+">₦ 40,000,000+ (Institutional Land Banking / Acreage)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-500 mb-1.5">
                  Brief Overview of Your Objectives
                </label>
                <textarea
                  rows={3}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Tell us about your preferred sector (UniAbuja gate, Giri expressway, Dobi road), timeline, or diaspora location..."
                  className="w-full bg-white border border-slate-200 text-[#022451] rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#ECB209] placeholder-slate-400"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-[#022451]/5 border border-[#022451]/10 flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck size={18} className="text-[#ECB209] flex-shrink-0" />
                <span>
                  Strict Confidentiality: Your inquiry is governed by attorney-client non-disclosure standards and will never be shared with third parties.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D4A008] hover:to-[#E8AD10] text-[#022451] font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#ECB209]/20 transition-all hover:scale-[1.01]"
              >
                <span>Submit Confidential Advisory Request</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Floating WhatsApp Concierge Widget */}
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
