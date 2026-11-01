'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShieldCheck, Calendar } from 'lucide-react';

import MuskoLogo from './MuskoLogo';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_TEL_NUMBER } from '../data/contact';

interface NavbarProps {
  onOpenInspection?: () => void;
}

export default function Navbar({ onOpenInspection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gwagwalada Lands', href: '/#estate-lands' },
    { label: 'Land Banking', href: '/#land-banking' },
    { label: 'Services', href: '/services' },
    { label: 'Leadership & Team', href: '/about' },
    { label: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      {/* Top Pre-header Trust Bar */}
      <div className="bg-[#022451] border-b border-[#083B7A] text-slate-300 text-[11px] font-mono py-2 px-4 sm:px-8 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-200">
            <ShieldCheck size={14} className="text-[#ECB209]" />
            <span>FCDA R of O &amp; AGIS Stamped Titles • Gwagwalada &amp; Abuja Growth Corridors</span>
          </span>
          <span className="text-[#083B7A]">|</span>
          <span className="text-[#ECB209] font-semibold tracking-wider">
            LAND • INVEST • DEVELOP • BUILD • GROW
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[#F5BE42]">
            <Phone size={12} />
            <a href={`tel:${WHATSAPP_TEL_NUMBER}`} className="hover:text-white transition-colors">
              Hotline: {WHATSAPP_DISPLAY_NUMBER}
            </a>
          </span>
          <span className="text-[#083B7A]">|</span>
          <span className="text-slate-400">CAC: RC-1849204</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-[#022451]/95 backdrop-blur-md border-b border-[#083B7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark & Official Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <MuskoLogo size="md" variant="standard" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#F5BE42] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ECB209] rounded-full shadow-sm shadow-[#ECB209]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenInspection}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] hover:from-[#D4A008] hover:to-[#E8AD10] text-[#022451] text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-[#ECB209]/20 transition-all hover:scale-[1.02]"
            >
              <Calendar size={14} />
              <span>Book Site Tour</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-[#083B7A] lg:hidden transition-all"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#011736] border-b border-[#083B7A] px-6 py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono uppercase tracking-wider text-slate-200 hover:text-[#F5BE42] py-2 border-b border-[#083B7A]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenInspection) onOpenInspection();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ECB209] to-[#F5BE42] text-[#022451] text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar size={15} />
                <span>Book Gwagwalada Inspection</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
