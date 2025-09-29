"use client";

import QRCodeCard from "../qr/QRCodeCard";

export default function HeroLeft() {
  return (
    <div className="flex flex-col items-start gap-5">
      {/* Brand */}
      <h1 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] pb-1 bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
        AlpineBridgeFinance
      </h1>

      {/* Slogan */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300">
        Bridge your assets — from Crypto to Real World.
      </p>

      {/* Short description */}
      <p className="max-w-xl text-sm sm:text-base text-gray-400">
        Secure exchange and full support for transactions with Crypto, Fiat,
        Gold, and Real Estate in Switzerland and Europe.
      </p>

      {/* CTA */}
      <a
        href="#consult"
        className="mt-2 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm sm:text-base font-medium
                  bg-[var(--color-crypto)] text-white transition-transform duration-200 active:scale-[0.98]
                  hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0
                  focus-visible:ring-[var(--color-crypto)]"
      >
        Get Consultation
      </a>

      <div className="hidden md:flex items-center gap-4 pt-2">
        <QRCodeCard />
      </div>
    </div>
  );
}
