"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

const projectsList: ProjectItem[] = [
  {
    id: "kuhinje",
    category: "kuhinje",
    title: "Kuhinje po mjeri",
    subtitle: "Moderna ergonomija u kombinaciji s prirodnim drvenim frontama i izdržljivim radnim pločama.",
    image: "/project1.jpg",
    tags: ["Hrast", "Ugradbeni elementi", "Soft-close okovi"],
  },
  {
    id: "hotel-central",
    category: "komercijalno",
    title: "Uređenje Hotela Central Zagreb",
    subtitle: "Kompletno drveno uređenje interijera, recepcije i hotelskih soba s najvišim standardima izdržljivosti.",
    image: "/project3.jpg",
    tags: ["Hotelijerski standard", "Masiv", "Arhitektonski nacrt"],
  },
  {
    id: "paneli",
    category: "vanjski-radovi",
    title: "Vanjski pregradni paneli & sjenila",
    subtitle: "Otporna drvena konstrukcija tretirana prirodnim zaštitnim uljima za vanjske uvjete i terase.",
    image: "/project4.jpg",
    tags: ["Vanjska zaštita", "UV otporno", "Moderna estetika"],
  },
  {
    id: "stolovi",
    category: "masiv",
    title: "Stolovi od masivnog slavonskog hrasta",
    subtitle: "Unikatne ploče s prirodnim rubom (live edge) ili čistim ravnim linijama za generacijsku upotrebu.",
    image: "/project5.jpg",
    tags: ["Masiv 40+ mm", "Ekološko ulje", "Čelične ili drvene noge"],
  },
  {
    id: "vrata",
    category: "vrata",
    title: "Unutarnja i harmonika vrata",
    subtitle: "Rješenja za optimizaciju prostora uz vrhunsku zvučnu izolaciju i precizno nalijeganje.",
    image: "/project6.jpg",
    tags: ["Zvučna izolacija", "Skriveni panti", "Ušteda prostora"],
  },
  {
    id: "ormari",
    category: "ormari",
    title: "Ugradbeni ormari & garderobe",
    subtitle: "Maksimalna iskoristivost od poda do stropa s promišljenim unutrašnjim rasporedom polica.",
    image: "/project2.jpg",
    tags: ["Klizni sustavi", "LED integracija", "Maksimalan prostor"],
  },
];

const categories = [
  { label: "Svi radovi", value: "sve" },
  { label: "Kuhinje", value: "kuhinje" },
  { label: "Masivni namještaj", value: "masiv" },
  { label: "Ormari & Vrata", value: "vrata-ormari" },
  { label: "Hoteli & Poslovni", value: "komercijalno" },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("sve");

  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === "sve") return true;
    if (activeFilter === "vrata-ormari") return project.category === "vrata" || project.category === "ormari";
    return project.category === activeFilter;
  });

  return (
    <section id="radovi" className="py-16 sm:py-24 bg-[#F4EFEB] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#78350F] font-bold">
              Galerija izvedenih radova
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
              Ponosni na svaki izrađeni detalj
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] max-w-2xl">
              Pregledajte stvarne fotografije naših projekata – od obiteljskih kuhinja i blagovaonskih stolova do cjelovitih hotelskih interijera.
            </p>
          </div>

          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#78350F] hover:text-[#C28E58] transition-colors"
          >
            <span>Trebate sličan projekt? Javite nam se</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat.value
                  ? "bg-[#1C1917] text-[#FDFBF7] shadow-sm"
                  : "bg-[#F4EFEB] text-[#57534E] hover:bg-[#EAE2D8] hover:text-[#1C1917]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid with natural aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-[#FFFFFF] rounded-xl overflow-hidden border border-[#E7DFD5] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFEB]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-[#F4EFEB] text-[#78716C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917] group-hover:text-[#A8733E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F4EFEB]">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] group-hover:text-[#C28E58] transition-colors"
                  >
                    <span>Zatražite ponudu za sličan rad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
