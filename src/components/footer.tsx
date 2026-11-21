"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="lokacija" className="site-footer-optimized bg-[#1C1917] text-[#F5F5F4] border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/ist-logo.png"
                  alt="Stolarija IST logo"
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">STOLARIJA IST</span>
            </div>
            <p className="text-sm text-[#A8A29E] leading-relaxed">
              Tradicijska obrada slavonskog drva i izrada vrhunske stolarije po mjeri. Spajamo prirodne materijale, izdržljivost i moderan dizajn u svakom domu.
            </p>
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100057356263406"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#292524] flex items-center justify-center text-[#D6D3D1] hover:text-[#C28E58] hover:bg-[#44403C] transition-colors"
                aria-label="Facebook stranica Stolarije IST (otvara se u novom prozoru)"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/iststolarija/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-[#292524] flex items-center justify-center text-[#D6D3D1] hover:text-[#C28E58] hover:bg-[#44403C] transition-colors"
                aria-label="Instagram profil Stolarije IST (otvara se u novom prozoru)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-semibold text-white">Kontakt podaci</h3>
            <div className="space-y-3 text-sm text-[#A8A29E]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C28E58] flex-shrink-0" />
                <a href="tel:+38598373554" className="hover:text-white transition-colors">
                  098 373 554
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C28E58] flex-shrink-0" />
                <a href="mailto:ist.piskorevci@gmail.com" className="hover:text-white transition-colors">
                  ist.piskorevci@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C28E58] flex-shrink-0 mt-0.5" />
                <span>Zagrebačka 20, 31417 Piškorevci (Đakovo)</span>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Map */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-white">Gdje se nalazimo</h3>
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-[#292524]">
              <iframe
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.2590166237107!2d18.40889032925582!3d45.24706344290003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c54695384f49b%3A0x6d2dc044efb89570!2zNkNXNStSUSwgUGnFoWtvcmV2Y2k!5e0!3m2!1shr!2shr!4v1679736911077!5m2!1shr!2shr"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                title="Stolarija IST točna lokacija radionice u Piškorevcima"
              />
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-[#292524] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#78716C]">
          <p>© {currentYear} Stolarija IST Piškorevci. Sva prava pridržana.</p>
          <p>
            Dizajn i izrada:{" "}
            <a
              href="https://ikresimir.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C28E58] hover:underline"
            >
              iKresimir
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
