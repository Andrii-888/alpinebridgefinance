import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

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
        {/* favicon / icons */}
        <link rel="icon" href="/favicon.ico?v=13" />
        <link rel="icon" type="image/png" sizes="16x16" href="/alpine-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/alpine-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/alpine-48.png" />
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
        {/* Весь UI (header/main/footer) переносим в клиентский контейнер,
            чтобы внутри можно было использовать usePathname и т.п. */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
