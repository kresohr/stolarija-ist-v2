"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Navbar() {
  const [open, setOpen] = useState(false);
  /* Implement state reset when window >= 600px */
  return (
    <nav className={styles.navbar} aria-label="Glavna navigacija">
      <div className={styles["navbar-header"]}>
        <span className={styles["navbar-title"]}>Stolarija IST</span>
        <button
          className={styles["navbar-toggle"]}
          aria-label={open ? "Zatvori navigaciju" : "Otvori navigaciju"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>
      <ul className={`${styles["navbar-menu"]} ${open ? styles.open : ""}`}>
        <li>
          <Link href="/about">O nama</Link>
        </li>
        <li>
          <Link href="/projekti">Projekti</Link>
        </li>
        <li>
          <Link href="/kontakt" className={styles["navbar-contact"]}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
