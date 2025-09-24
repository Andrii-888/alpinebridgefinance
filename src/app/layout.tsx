import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlpineBridgeFinance",
  description: "Fiat ↔ Crypto ↔ Gold — Lugano, Switzerland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        {/* главный фавикон — ставим ПЕРВЫМ и ломаем кэш версией */}
        <link rel="icon" href="/favicon.ico?v=13" />

        {/* (опционально) png-версии — можно оставить */}
        <link rel="icon" type="image/png" sizes="16x16" href="/alpine-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/alpine-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/alpine-48.png" />

        {/* iOS / Android */}
        <link rel="apple-touch-icon" sizes="180x180" href="/alpine-apple.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/alpine-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/alpine-512.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <nav className="container mx-auto flex items-center justify-center gap-8 py-4 text-sm font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/offices">Offices</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-12 min-h-[70vh]">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AlpineBridgeFinance ·{" "}
          <Link href="/legal/terms" className="hover:underline">
            Terms
          </Link>{" "}
          ·{" "}
          <Link href="/legal/privacy" className="hover:underline">
            Privacy
          </Link>
        </footer>
      </body>
    </html>
  );
}
