'use client';

import { ShieldCheck, CheckCircle2, MapPin, Building2, Globe, FileCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/contact';

export default function NigerianTrustGuarantees() {
  const assurances = [
    {
      num: '01',
      title: 'AGIS & FCDA Cadastral Title Perfection',
      badge: 'Legal Due Diligence',
      icon: FileCheck,
      description: 'Every layout is legally charted against the Abuja Masterplan at the Abuja Geographic Information Systems (AGIS) and Gwagwalada Area Council. We only sell lands with verified Right of Occupancy (R of O), Certificate of Occupancy (C of O), or Area Council regularized gazettes.',
      detail: 'Zero risk of demolition, green-belt overlap, or government road reservation acquisitions.'
    },
    {
      num: '02',
      title: 'Zero Omo-Onile & Native Community Clashes',
      badge: '100% Customary Clearance',
      icon: ShieldCheck,
      description: 'In Nigeria, customary land claims often lead to harassment and stalled construction. At Musko, full financial and traditional compensation is executed, sealed by legal affidavits and community youth leader agreements before any plot is offered for sale.',
      detail: 'No youth interference, no illegal tolls, no double selling of ancestral lands.'
    },
    {
      num: '03',
      title: 'Instant Physical Concrete Beacon Planting',
      badge: 'Tangible Possession',
      icon: MapPin,
      description: 'We do not allocate on paper alone. When you reach your allocation milestone, concrete boundary beacons stamped with SURCON registered geodetic coordinates are physically cast and planted in the ground in your presence.',
      detail: 'Satellite coordinates tied into the Office of the Surveyor General of the Federation (OSGOF).'
    },
    {
      num: '04',
      title: 'Corporate Bank Accounts & EFCC SCUML Compliance',
      badge: 'Institutional Security',
      icon: Building2,
      description: 'Musko Properties is registered with the Corporate Affairs Commission (RC-1849204) and fully certified by the EFCC Special Control Unit Against Money Laundering (SCUML). All funds must be deposited into verified corporate bank accounts—never private individuals.',
      detail: 'Official receipting, milestone invoicing, and enforceable corporate contract covenants.'
    },
    {
      num: '05',
      title: 'Dedicated Client Concierge & Tracked Delivery',
      badge: 'Resident & Overseas Support',
      icon: Globe,
      description: 'Whether you reside in Abuja, Lagos, Kano, or overseas in the UK and USA, we provide complete transparency. You receive high-resolution photo logs, physical beacon inspection reports, and tracked delivery of your original stamped deeds.',
      detail: 'Complete remote transparency with direct CEO and executive office accessibility.'
    },
    {
      num: '06',
      title: 'Zero Hidden Fees & No Extortion Guarantee',
      badge: 'Transparent Pricing',
      icon: Sparkles,
      description: 'What you see is what you pay. Musko Properties operates an unshakeable zero-hidden-fee policy. No surprise "bush entry fees", no unannounced developmental levies, and no surveyor ransom charges after buying.',
      detail: 'All inclusive pricing with flexible 6 to 12-month payment options in Nigerian Naira (₦).'
    }
  ];

  return (
    <section className="py-20 md:py-28 px-5 md:px-12 bg-white text-slate-800 relative overflow-hidden" id="trust-guarantees">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022451]/10 border border-[#022451]/20 text-xs font-mono text-[#022451] font-semibold">
            <ShieldCheck size={15} className="text-[#ECB209]" />
            <span>The Musko Nigerian Land Covenant</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#022451] font-bold">
            Eliminating Fear in <em className="italic text-[#ECB209]">Abuja Real Estate</em>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We understand the challenges Nigerian buyers face: fake survey plans, land-grabbers, unapproved layouts, and funds lost to deceit. Here is how our corporate verification safeguards every Naira you invest.
          </p>
        </div>

        {/* 6 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {assurances.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="rounded-3xl p-7 bg-[#F8FAFC] border border-slate-200 hover:border-[#ECB209] transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#022451] text-[#ECB209] flex items-center justify-center transition-colors shadow-md shadow-[#022451]/20">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#ECB209] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#022451] font-bold px-2.5 py-0.5 rounded-md bg-[#ECB209]/20 border border-[#ECB209]/40 inline-block mb-3">
                    {item.badge}
                  </span>

                  <h3 className="text-lg sm:text-xl font-serif text-[#022451] font-bold mb-3 group-hover:text-[#ECB209] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600">
                  <CheckCircle2 size={14} className="text-[#B77900] flex-shrink-0" />
                  <span className="text-[11px] font-medium">{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Seal Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#022451] text-white flex flex-wrap items-center justify-between gap-6 shadow-xl border-2 border-[#ECB209]/40">
          <div className="space-y-1">
            <h4 className="text-base font-serif text-white font-bold">
              Ready to verify documents for any of our Gwagwalada layouts?
            </h4>
            <p className="text-xs text-slate-300">
              Request our AGIS coordinate charts, legal title search reports, or surveyor general beacons today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl('Hello, I would like to request the AGIS verification and title documents for Musko Properties.')}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#022451] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
            >
              <span>Request Title Verification Papers</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
