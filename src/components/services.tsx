import React from "react";
import { Utensils, Home, DoorClosed, Hotel, Wrench, Sparkles, ArrowRight } from "lucide-react";

const servicesList = [
  {
    icon: Utensils,
    title: "Kuhinje po mjeri",
    description:
      "Izrada modernih i klasičnih kuhinja prilagođenih svakom centimetru vašeg prostora, uz vrhunske materijale i dugotrajne okove.",
  },
  {
    icon: Home,
    title: "Masivni stolovi i namještaj",
    description:
      "Unikatni blagovaonski i klupski stolovi od masivnog slavonskog hrasta i oraha s prirodnim završnim uljima za trajnost kroz generacije.",
  },
  {
    icon: DoorClosed,
    title: "Sobna vrata i ormari",
    description:
      "Unutarnja drvena vrata, harmonika vrata i ugradbeni ormari od poda do stropa s maksimalnom iskoristivošću prostora.",
  },
  {
    icon: Hotel,
    title: "Opremanje interijera i hotela",
    description:
      "Kompletno drveno opremanje apartmana, vila za odmor, hotela, restorana i uredskih prostora prema arhitektonskim nacrtima.",
  },
  {
    icon: Wrench,
    title: "Stolarija po specifikaciji",
    description:
      "Vanjski pregradni drveni paneli, obloge zidova, stepeništa i specijalizirana drvena stolarija prilagođena vašim željama.",
  },
  {
    icon: Sparkles,
    title: "Besplatno savjetovanje i izmjera",
    description:
      "Stručni savjeti pri odabiru materijala, tehnička podrška i precizno mjerenje na licu mjesta prije same izrade.",
  },
];

export const Services = () => {
  return (
    <section id="usluge" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#78350F] font-bold">
            Naše usluge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            Širok spektar stolarskih radova i rješenja po mjeri
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Bilo da opremate novi dom, renovirate kuhinju ili uređujete poslovni prostor, nudimo cjelovitu uslugu od ideje do gotovog proizvoda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-xl border border-[#E7DFD5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#F4EFEB] border border-[#E7DFD5] flex items-center justify-center text-[#78350F] group-hover:bg-[#C28E58] group-hover:text-[#1C1917] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#A8733E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F4EFEB]">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] group-hover:text-[#C28E58] transition-colors"
                  >
                    <span>Zatražite ponudu za ovu uslugu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
