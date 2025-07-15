"use client";
import React from "react";

interface HeroProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const Hero = ({
  backgroundImage = "/hero-bg.jpg",
  title = "Stolarija IST",
  subtitle = "Kvalitetna stolarija za Vaš dom",
}: HeroProps) => {
  return (
    <section
      id="top"
      className="relative h-[calc(100vh-68px)] md:h-[calc(100vh-73px)] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full px-6 lg:px-0">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export { Hero };
