import React from "react";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, Shield, Sparkles, Ruler } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative bg-[#FDFBF7] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Value Props */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4EFEB] border border-[#E7DFD5] text-xs font-semibold text-[#78350F]">
              <Sparkles className="w-3.5 h-3.5 text-[#C28E58]" />
              <span>Tradicija &amp; ručna izrada u Slavoniji od 2004.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.15]">
              Vrhunska drvena stolarija i namještaj izrađen <span className="text-[#C28E58] italic font-serif">po vašoj mjeri</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed max-w-2xl font-normal">
              Spajamo toplinu prirodnih materijala s modernom preciznošću. Izrađujemo kuhinje, ormare, masivne stolove, unikatna vrata i još mnogo toga prilagođeno vašem prostoru.
            </p>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-sm text-[#44403C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C28E58] flex-shrink-0" />
                <span>100% slavonsko drvo</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C28E58] flex-shrink-0" />
                <span>Besplatna izmjera</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Shield className="w-4 h-4 text-[#C28E58] flex-shrink-0" />
                <span>Garancija kvalitete</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md bg-[#1C1917] text-[#FDFBF7] font-semibold text-base hover:bg-[#C28E58] hover:text-[#1C1917] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span>Zatražite besplatan izračun</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+38598373554"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#F4EFEB] border border-[#E7DFD5] text-[#1C1917] font-semibold text-base hover:bg-[#EAE2D8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C28E58]" />
                <span>098 373 554</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Woodcraft Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Frame with natural timber outline */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-xl overflow-hidden border border-[#E7DFD5] shadow-xl bg-[#F4EFEB]">
                <Image
                  src="/hero-woodcraft.jpg"
                  alt="Ručna izrada stola od masivnog slavonskog hrasta u Stolariji IST"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlaid Authentic Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#1C1917] text-[#FDFBF7] p-4 rounded-lg shadow-xl border border-[#292524] max-w-[240px]">
                <p className="text-2xl font-bold font-serif text-[#C28E58]">20+ godina</p>
                <p className="text-xs text-[#D6D3D1] mt-0.5 leading-snug">
                  Iskustva u stolarskoj obradi drva i uređenju interijera
                </p>
              </div>

              {/* Location Tag */}
              <div className="absolute -top-3 -right-3 sm:right-4 bg-[#FDFBF7] text-[#1C1917] px-3 py-1.5 rounded-md shadow-md border border-[#E7DFD5] text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span>Radionica Piškorevci</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
