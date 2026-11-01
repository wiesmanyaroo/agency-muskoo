'use client';

import Link from 'next/link';
import { Instagram, Linkedin, ShieldCheck, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import MuskoLogo from './MuskoLogo';
import { CONTACT_EMAIL, getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, WHATSAPP_TEL_NUMBER } from '../data/contact';

export default function Footer() {
  return (
    <footer className="bg-[#022451] text-slate-300 border-t border-[#083B7A]" id="contact">
      {/* Top Banner: Gwagwalada Inspection Callout */}
      <div className="border-b border-[#083B7A] bg-[#011736] py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ECB209] flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck size={16} />
              <span>Federal Capital Territory Fiduciary Guarantee</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Ready to acquire verified land in Gwagwalada, Abuja?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Schedule a physical chauffeured site inspection from Abuja Airport/CBD or reach us on WhatsApp for a live video walk-through with our licensed surveyors today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-6 py-3 rounded-xl bg-[#083B7A] hover:bg-[#022451] text-white border border-[#083B7A] hover:border-[#ECB209] text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <Mail size={15} />
              <span>Email FCT Investor Desk</span>
            </a>
            <a
              href="#estate-lands"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D4A008] hover:to-[#E8AD10] text-[#022451] font-bold text-xs font-mono tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-[#ECB209]/20"
            >
              <span>Explore Gwagwalada Plots</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto py-16 px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Values (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <MuskoLogo size="lg" variant="full" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Musko Properties and Real Estate is an institutional real estate firm delivering authenticated estate lands, strategic land banking, and master-planned layouts across Gwagwalada and the Federal Capital Territory, Abuja.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl('Hello Musko Properties, I want to inquire about land in Gwagwalada.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#011736] border border-[#ECB209]/40 text-[#F5BE42] hover:text-white hover:bg-[#083B7A] transition-all text-xs font-mono"
              >
                <Phone size={14} />
                <span>WhatsApp Us Now</span>
              </a>
            </div>
          </div>

          {/* Col 2: Portfolios (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ECB209]">
              Abuja Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/#estate-lands" className="hover:text-white transition-colors">
                  Gwagwalada Phase 1
                </Link>
              </li>
              <li>
                <Link href="/#land-banking" className="hover:text-white transition-colors">
                  Land Banking (Dobi Axis)
                </Link>
              </li>
              <li>
                <Link href="/#estate-lands" className="hover:text-white transition-colors">
                  Giri Expressway Plots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AGIS Title Diligence
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Diaspora Desk (UK/US)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Leadership (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ECB209]">
              Leadership &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Mustapha (MD/CEO)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Farida Abbas (Head of HR)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Labari Monday (Marketing Head)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Mary Shammah (Asst. Marketing)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ECB209]">
              Offices &amp; Inspection Hubs
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Gwagwalada Operations Hub:</strong>
                  <span className="text-slate-400">Suite 4B, Capital Plaza, Secretariat Road, Adjacent UniAbuja Gate, Gwagwalada, Abuja</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#ECB209] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Abuja Corporate Headquarters:</strong>
                  <span className="text-slate-400">Musko Place, Plot 1042 Central Business District (CBD), Abuja, FCT</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Phone size={15} className="text-[#ECB209]" />
                <a href={`tel:${WHATSAPP_TEL_NUMBER}`} className="text-white font-mono hover:text-[#F5BE42] transition-colors">
                  {WHATSAPP_DISPLAY_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#ECB209]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-mono hover:text-[#F5BE42] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Fiduciary Notice */}
        <div className="mt-12 pt-8 border-t border-[#083B7A] text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-300">FCT Regulatory Compliance Notice:</strong> Musko Properties and Real Estate is incorporated with the Corporate Affairs Commission (CAC RC-1849204) and fully registered with the Special Control Unit Against Money Laundering (SCUML). All estate layouts in Gwagwalada carry authentic cadastral coordinates validated with the Abuja Geographic Information Systems (AGIS) and the Gwagwalada Area Council Land Administration Department.
          </p>
        </div>

        {/* Copyright bar */}
        <div className="mt-8 pt-6 border-t border-[#083B7A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} Musko Properties and Real Estate (Nigeria) Limited. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
