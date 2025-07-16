import React from "react";

interface AboutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const About = ({
  title = "O nama",
  subtitle = "Više od 20 godina iskustva u proizvodnji stolarije",
  description = "Stolarija IST je obiteljska tvrtka koja se bavi proizvodnjom i ugradnjom kvalitetne drvene stolarije. Koristimo najkvalitetnije materijale i moderne tehnike kako bi vašem domu ili poslovnom prostoru pružili toplinu, sigurnost i eleganciju.",
  features = [
    {
      title: "Kvaliteta",
      description:
        "Koristimo samo najkvalitetnije materijale i moderne tehnike izrade",
    },
    {
      title: "Iskustvo",
      description:
        "Više od 20 godina iskustva u proizvodnji i ugradnji stolarije",
    },
    {
      title: "Pouzdanost",
      description:
        "Garantiramo kvalitetu našeg rada i poštujemo dogovorene rokove",
    },
  ],
}: AboutProps) => {
  return (
    <section
      id="about"
      className="h-[calc(100vh-68px)] md:h-[calc(100vh-73px)] flex items-center justify-center bg-gray-50"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:my-6">
              {title}
            </h2>
            <p className="hidden show-on-tall-screen text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 md:mb-8">
              {subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon && (
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                )}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
