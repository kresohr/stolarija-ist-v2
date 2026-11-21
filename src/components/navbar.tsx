"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Radovi", href: "#radovi" },
  { label: "Proces", href: "#proces" },
  { label: "Lokacija", href: "#lokacija" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top micro-bar for direct contact info on larger viewports */}
      <div className="hidden sm:block bg-[#1C1917] text-[#D6D3D1] text-xs py-2 px-6 border-b border-[#292524]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C28E58]" />
              Piškorevci (Đakovo), Slavonija
            </span>
            <span className="hidden md:inline text-[#78716C]">•</span>
            <span className="hidden md:inline">Preko 20 godina obiteljske tradicije</span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="tel:+38598373554"
              className="flex items-center gap-1.5 hover:text-[#C28E58] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C28E58]" />
              098 373 554
            </a>
            <span className="text-[#78716C]">•</span>
            <a
              href="mailto:ist.piskorevci@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#C28E58] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C28E58]" />
              ist.piskorevci@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        aria-label="Glavna navigacija"
        className={`w-full bg-[#FDFBF7]/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-sm border-b border-[#E7DFD5]" : "border-b border-[#E7DFD5]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C28E58] rounded-md p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
              <Image
                src="/ist-logo.png"
                alt="Stolarija IST logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#A8733E] transition-colors">
                STOLARIJA IST
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#78716C] font-medium -mt-0.5">
                Drvo &amp; Namještaj po mjeri
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-[#44403C] hover:text-[#1C1917] hover:bg-[#F4EFEB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1C1917] text-[#FDFBF7] text-sm font-semibold hover:bg-[#C28E58] hover:text-[#1C1917] transition-all duration-200 shadow-sm"
            >
              <span>Zatražite ponudu</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-[#1C1917] hover:bg-[#F4EFEB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C28E58]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Zatvori izbornik" : "Otvori navigacijski izbornik"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E7DFD5] px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-[#1C1917] hover:bg-[#F4EFEB] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E7DFD5] space-y-3">
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#1C1917] text-[#FDFBF7] font-semibold text-sm hover:bg-[#C28E58] hover:text-[#1C1917] transition-colors"
              >
                <span>Zatražite besplatnu ponudu</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex justify-around text-xs text-[#57534E] pt-2">
                <a href="tel:+38598373554" className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#C28E58]" /> 098 373 554
                </a>
                <a href="mailto:ist.piskorevci@gmail.com" className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#C28E58]" /> E-mail
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
