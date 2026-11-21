import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1C1917",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stolarijaist.com"),
  title: "Stolarija IST - Drvena stolarija i namještaj po mjeri u Slavoniji",
  description:
    "Više od 20 godina obiteljskog iskustva u izradi vrhunske drvene stolarije, kuhinja po mjeri, masivnih stolova i ugradbenih ormara u Slavoniji (Piškorevci / Đakovo).",
  keywords: [
    "stolarija",
    "drvena stolarija",
    "namještaj po mjeri",
    "kuhinje po mjeri",
    "masivni stolovi",
    "slavonski hrast",
    "Slavonija",
    "Đakovo",
    "Piškorevci",
    "ugradbeni ormari",
  ],
  authors: [{ name: "Stolarija IST" }],
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://stolarijaist.com",
    title: "Stolarija IST - Vrhunska drvena stolarija i namještaj po mjeri",
    description:
      "Preko 20 godina tradicije, ručne izrade i kvalitete za vaš dom. Specijalizirani za slavonski masiv, kuhinje po mjeri i opremanje interijera.",
    siteName: "Stolarija IST",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stolarija IST - radionica drvene stolarije i namještaja po mjeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stolarija IST - Drvena stolarija i namještaj po mjeri",
    description:
      "Preko 20 godina iskustva u obradi drva i izradi namještaja po mjeri u Slavoniji.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stolarijaist.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans bg-[#FDFBF7] text-[#1C1917]`}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
