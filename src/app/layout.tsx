"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Stolarija IST - Drvena stolarija po mjeri</title>
        <meta
          name="description"
          content="Više od 20 godina iskustva u izradi drvene stolarije u Slavoniji. Spoj tradicije, kvaliteta i vrhunske izrade za vaš dom ili poslovni prostor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Stolarija IST" />
        <meta
          name="keywords"
          content="stolarija, drvena stolarija, stolarija po mjeri, Slavonija, kuhinje, ormari, vrata"
        />

        <meta
          property="og:title"
          content="Stolarija IST - Drvena stolarija po mjeri"
        />
        <meta
          property="og:description"
          content="Više od 20 godina iskustva u izradi drvene stolarije u Slavoniji. Spoj tradicije, kvaliteta i vrhunske izrade za vaš dom ili poslovni prostor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stolarijaist.com" />
        <meta
          property="og:image"
          content="https://stolarijaist.com/og-image.png"
        />
        <meta property="og:locale" content="hr_HR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Stolarija IST - Drvena stolarija po mjeri"
        />
        <meta
          name="twitter:description"
          content="Više od 20 godina iskustva u izradi drvene stolarije u Slavoniji."
        />
        <meta
          name="twitter:image"
          content="https://stolarijaist.com/og-image.png"
        />

        <link rel="canonical" href="https://stolarijaist.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <Hero />
            <About />
            <Projects />
            <Footer />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
