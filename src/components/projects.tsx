"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
}

interface ProjectsProps {
  title?: string;
  subtitle?: string;
  images?: ProjectImage[];
}

const Projects = ({
  title = "Projekti",
  subtitle = "Pogledajte naše najnovije radove i projekte",
  images = [
    {
      src: "/project1.jpg",
      alt: "Projekt 1",
      title: "Kuhinjska stolarija",
    },
    {
      src: "/project2.jpg",
      alt: "Projekt 2",
      title: "Spavaća soba",
    },
    {
      src: "/project3.jpg",
      alt: "Projekt 3",
      title: "Dnevni boravak",
    },
    {
      src: "/project4.jpg",
      alt: "Projekt 4",
      title: "Uredski prostor",
    },
    {
      src: "/project5.jpg",
      alt: "Projekt 5",
      title: "Garderoba",
    },
  ],
}: ProjectsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, currentIndex]);

  const handleUserInteraction = (action: () => void) => {
    setAutoPlay(false);
    action();
  };

  return (
    <section className="h-[calc(100vh-68px)] md:h-[calc(100vh-73px)] flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-[16/10] w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {image.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleUserInteraction(prevSlide)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Prethodna slika"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={() => handleUserInteraction(nextSlide)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Sljedeća slika"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleUserInteraction(() => goToSlide(index))}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-gray-800 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Idi na sliku ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-4 text-gray-600">
              <span className="text-sm md:text-base">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
