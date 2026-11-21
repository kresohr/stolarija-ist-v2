import React from "react";
import { TreePine, Hammer, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: TreePine,
    title: "Prirodno i probrano drvo",
    description:
      "Koristimo prvorazredni slavonski hrast, jasen, bukvu i orah, pažljivo sušeno i pripremljeno za dugovječnost bez deformacija.",
  },
  {
    icon: Hammer,
    title: "Tradicionalna izrada & preciznost",
    description:
      "Svaki spoj i obrada prolaze kroz ruke iskusnih majstora. Ne radimo serijski; svaki komad je unikatan projekt izrađen točno po vašem prostoru.",
  },
  {
    icon: ShieldCheck,
    title: "Poštivanje rokova i garancija",
    description:
      "Dogovoreni termin ugradnje za nas je obveza. Iza svakog ugrađenog elementa stojimo dugogodišnjim jamstvom kvalitete.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4EFEB] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#78350F] font-bold">
            Tradicija &amp; Vrijednosti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Obiteljska stolarija s tradicijom dužom od dva desetljeća
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Stolarija IST nastala je u Piškorevcima s jednostavnim ciljem: vratiti pravu vrijednost i trajnost drvenom namještaju. Danas opremamo obiteljske domove, hotele i poslovne prostore diljem Hrvatske, čuvajući duh izvorne slavonske drvodjeljske tradicije.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-xl border border-[#E7DFD5] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F4EFEB] border border-[#E7DFD5] flex items-center justify-center text-[#78350F]">
                    <Icon className="w-6 h-6 text-[#C28E58]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Statistics Strip */}
        <div className="mt-14 pt-12 border-t border-[#E7DFD5] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-serif text-[#78350F]">20+</p>
            <p className="text-xs sm:text-sm text-[#78716C] font-medium">Godina iskustva</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-serif text-[#78350F]">500+</p>
            <p className="text-xs sm:text-sm text-[#78716C] font-medium">Završenih projekata</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-serif text-[#78350F]">100%</p>
            <p className="text-xs sm:text-sm text-[#78716C] font-medium">Prirodno drvo</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-serif text-[#78350F]">1</p>
            <p className="text-xs sm:text-sm text-[#78716C] font-medium">Obiteljski tim</p>
          </div>
        </div>

      </div>
    </section>
  );
};
