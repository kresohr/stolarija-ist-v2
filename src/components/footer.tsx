"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  companyInfo?: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  developer?: {
    name: string;
    url?: string;
  };
}

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = ({
  companyInfo = {
    name: "Stolarija IST",
    phone: "+38598373554",
    email: "ist.piskorevci@gmail.com",
    address: "Zagrebačka 20, 31417 Piškorevci",
  },
  developer = {
    name: "iKresimir",
    url: "https://ikresimir.com",
  },
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 md:py-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Kontakt</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />

                <a
                  href="https://maps.google.com/maps?ll=45.247027,18.40964&z=19&t=m&hl=hr&gl=HR&mapclient=embed&q=6CW5%2BRQ%20Pi%C5%A1korevci"
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                >
                  {companyInfo.address}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Pratite nas</h4>
              <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/profile.php?id=100057356263406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                  <span>@stolarija-ist</span>
                </a>
                <a
                  href="https://www.instagram.com/iststolarija/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>@iststolarija</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Naša lokacija</h4>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.2590166237107!2d18.40889032925582!3d45.24706344290003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c54695384f49b%3A0x6d2dc044efb89570!2zNkNXNStSUSwgUGnFoWtvcmV2Y2k!5e0!3m2!1shr!2shr!4v1679736911077!5m2!1shr!2shr"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                title="Stolarija IST Lokacija"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {companyInfo.name}. Sva prava pridržana.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Web stranica izradio{" "}
                <a
                  href={developer.url}
                  target="_blank"
                  className="text-[#C9D8F2] hover:text-[#e5ebf7] transition-colors"
                >
                  {developer.name}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
