"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1C1917] text-[#FDFBF7] rounded-2xl border border-[#292524] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12 lg:p-16">
            
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C28E58] font-bold">
                Besplatna ponuda i izmjera
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Planirate uređenje doma ili trebate namještaj po mjeri?
              </h2>
              <p className="text-base sm:text-lg text-[#D6D3D1] leading-relaxed max-w-xl">
                Javite nam se s povjerenjem. Nazovite nas direktno ili pošaljite upit s okvirnim mjerama i željama. Odgovaramo u najkraćem roku s besplatnim informativnim izračunom.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+38598373554"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-[#C28E58] text-[#1C1917] font-bold text-base hover:bg-[#A8733E] transition-colors shadow-md"
                >
                  <Phone className="w-5 h-5 text-[#1C1917]" />
                  <span>Nazovite: 098 373 554</span>
                </a>
                <a
                  href="mailto:ist.piskorevci@gmail.com"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-md bg-[#292524] text-white font-semibold text-base hover:bg-[#44403C] transition-colors border border-[#44403C]"
                >
                  <Mail className="w-5 h-5 text-[#C28E58]" />
                  <span>Pošaljite e-mail</span>
                </a>
              </div>
            </div>

            {/* Right Column: Workshop Info Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5 border-t lg:border-t-0 lg:border-l border-[#292524] pt-8 lg:pt-0 lg:pl-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#292524] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#C28E58]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Adresa radionice</h4>
                  <p className="text-sm text-[#A8A29E] mt-0.5">Zagrebačka 20, 31417 Piškorevci</p>
                  <p className="text-xs text-[#78716C] mt-0.5">Đakovo, Osječko-baranjska županija</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#292524] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C28E58]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Radno vrijeme radionice</h4>
                  <p className="text-sm text-[#A8A29E] mt-0.5">Ponedjeljak – Petak: 08:00 – 17:00</p>
                  <p className="text-xs text-[#78716C] mt-0.5">Subotom po dogovoru za izmjere na terenu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#292524] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#C28E58]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">E-mail za upite i nacrte</h4>
                  <p className="text-sm text-[#A8A29E] mt-0.5">ist.piskorevci@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
