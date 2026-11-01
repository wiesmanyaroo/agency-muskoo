'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Mail, MessageCircle, Quote, CheckCircle2, ChevronRight } from 'lucide-react';
import { LEADERSHIP_TEAM, TeamMember } from '../data/estateData';
import { CONTACT_EMAIL, getWhatsAppUrl } from '../data/contact';

interface LeadershipShowcaseProps {
  showFullDetails?: boolean;
  onBookExecutiveConsultation?: () => void;
}

export default function LeadershipShowcase({ showFullDetails = false, onBookExecutiveConsultation }: LeadershipShowcaseProps) {
  const [activeTabMember, setActiveTabMember] = useState<TeamMember>(LEADERSHIP_TEAM[0]);

  const handleWhatsAppMember = (member: TeamMember) => {
    const text = `Hello ${member.name} (${member.role}), I am reaching out through the Musko Properties website regarding your Gwagwalada land offerings.`;
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 md:py-28 px-5 md:px-12 bg-white text-slate-800 relative overflow-hidden" id="leadership">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-[#022451] font-mono text-[11px] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ECB209]" />
              <span className="font-bold">Real Leadership &bull; Physical Presence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#022451]">
              Meet the Team Behind <em className="italic text-[#ECB209]">Musko Properties</em>
            </h2>
            <p className="text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed">
              We eliminate faceless middle-men and fraudulent third-party agents. Our executive team is physically based in Abuja and Gwagwalada, dedicated to protecting your capital with radical transparency, verified titles, and unwavering integrity.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <Award size={18} className="text-[#ECB209]" />
            <span className="font-semibold text-[#022451]">Dedicated Abuja Real Estate Advisors</span>
          </div>
        </div>

        {/* Featured Spotlight: Active Member (CEO Mustapha / Farida / Labari / Mary) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Active Spotlight Bio Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#022451] text-white border-2 border-[#ECB209]/40 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Role badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#083B7A]">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#ECB209] block font-bold">
                    {activeTabMember.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {activeTabMember.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#011736] text-slate-300 border border-[#083B7A]">
                  {activeTabMember.credentials}
                </span>
              </div>

              {/* Quote Block */}
              <div className="p-5 rounded-2xl bg-[#011736] border-l-4 border-[#ECB209] mb-6 relative">
                <Quote size={24} className="text-[#ECB209]/20 absolute top-4 right-4" />
                <p className="text-sm sm:text-base font-serif italic text-white leading-relaxed relative z-10">
                  &ldquo;{activeTabMember.quote}&rdquo;
                </p>
              </div>

              {/* Full Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {activeTabMember.bio}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#ECB209] block font-bold">
                  Executive Commitments &amp; Key Milestones:
                </span>
                {activeTabMember.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={15} className="text-[#ECB209] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#083B7A] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#ECB209]" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleWhatsAppMember(activeTabMember)}
                  className="px-4 py-2.5 rounded-xl bg-[#022451] hover:bg-[#083B7A] border border-[#ECB209]/50 text-[#F5BE42] text-xs font-bold font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>Chat on WhatsApp</span>
                </button>

                {onBookExecutiveConsultation && (
                  <button
                    type="button"
                    onClick={onBookExecutiveConsultation}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D49918] hover:to-[#EAA812] text-[#022451] text-xs font-bold font-mono tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-md shadow-[#ECB209]/20"
                  >
                    <span>Request Briefing</span>
                    <ChevronRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Active Portrait & Quick Switcher (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Big Portrait */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#022451] shadow-xl bg-slate-100">
              <Image
                src={activeTabMember.image}
                alt={activeTabMember.name}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022451] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-lg">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#022451]">{activeTabMember.name}</h4>
                  <p className="text-[11px] text-[#ECB209] font-mono font-bold">{activeTabMember.role}</p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#022451] text-[#ECB209] flex items-center justify-center font-serif text-sm font-bold">
                  M
                </div>
              </div>
            </div>

            {/* Quick Switcher Thumbnails */}
            <div className="grid grid-cols-4 gap-2.5">
              {LEADERSHIP_TEAM.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveTabMember(member)}
                  className={`p-1.5 rounded-2xl border text-left transition-all overflow-hidden ${
                    activeTabMember.id === member.id
                      ? 'border-[#ECB209] bg-[#022451] shadow-md ring-2 ring-[#ECB209]/50'
                      : 'border-slate-200 bg-white hover:border-[#022451] hover:shadow-md'
                  }`}
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-1.5 bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-1 pb-1">
                    <span className={`block text-[11px] font-mono font-bold truncate ${
                      activeTabMember.id === member.id ? 'text-white' : 'text-[#022451]'
                    }`}>
                      {member.name}
                    </span>
                    <span className={`block text-[8px] font-mono truncate uppercase ${
                      activeTabMember.id === member.id ? 'text-[#ECB209]' : 'text-slate-500'
                    }`}>
                      {member.role.split(' ')[0]} {member.role.split(' ')[1] || ''}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Card Leadership Grid (All Members) */}
        {showFullDetails && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.id}
                onClick={() => setActiveTabMember(member)}
                className={`cursor-pointer rounded-3xl p-5 border transition-all hover:-translate-y-1 ${
                  activeTabMember.id === member.id
                    ? 'bg-[#022451] text-white border-[#ECB209] shadow-xl'
                    : 'bg-[#F8FAFC] text-slate-800 border-slate-200 hover:border-[#022451] hover:shadow-lg'
                }`}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-200 border border-slate-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-[#022451] text-[#ECB209] font-bold shadow-sm">
                    {member.credentials.split(',')[0]}
                  </span>
                </div>
                <span className={`text-[10px] font-mono uppercase block tracking-wider mb-1 font-bold ${
                  activeTabMember.id === member.id ? 'text-[#ECB209]' : 'text-[#022451]'
                }`}>
                  {member.role}
                </span>
                <h4 className="text-base font-serif font-bold">{member.name}</h4>
                <p className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                  activeTabMember.id === member.id ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {member.bio}
                </p>
                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono font-semibold ${
                  activeTabMember.id === member.id ? 'border-[#083B7A] text-[#ECB209]' : 'border-slate-200 text-[#022451]'
                }`}>
                  <span>View full profile</span>
                  <ChevronRight size={13} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
