import React from "react";
import { MessageSquare, Ruler, Cog, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konzultacije i ideje",
    description: "Javite nam se s vašim idejama, mjerama ili skicama. Dogovaramo željene materijale, boje i namjenu.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Mjerenje na licu mjesta",
    description: "Dolazimo na vašu lokaciju radi preciznog mjerenja prostora kako bi svaki element sjeo točno u milimetar.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Radionička izrada",
    description: "U našoj radionici u Piškorevcima probrano drvo krojimo, obrađujemo i ručno finiširamo visoko kvalitetnim uljima i lakovima.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Dostava i montaža",
    description: "Dostavljamo i montiramo gotov namještaj brzo, uredno i stručno, ostavljajući vaš prostor potpuno spreman za korištenje.",
  },
];

export const Process = () => {
  return (
    <section id="proces" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#78350F] font-bold">
            Od ideje do realizacije
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Kako radimo: Jednostavan i transparentan proces
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Nema skrivenih troškova ni neugodnih iznenađenja. Vodimo vas korak po korak od prvog razgovora do finalnog ugrađenog komada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FDFBF7] p-6 rounded-xl border border-[#E7DFD5] shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl sm:text-3xl font-extrabold font-serif text-[#C28E58]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F4EFEB] border border-[#E7DFD5] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#78350F]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1917]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
