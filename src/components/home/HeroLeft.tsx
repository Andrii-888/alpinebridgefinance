"use client";

import ClickShield from "../ClickShield";
import QRCodeCard from "../qr/QRCodeCard";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://alpinebridgefinance.vercel.app"
).trim();

export default function HeroLeft() {
  return (
    <div className="flex flex-col items-start gap-5 max-w-lg mt-[1rem] sm:mt-[-4rem]">
      {/* Brand */}
      <h1 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.18] pb-1 bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
        AlpineBridgeFinance
      </h1>

      {/* Slogan */}
      <p className="text-base sm:text-lg md:text-xl text-gray-900">
        Secure path between Crypto, Fiat, Gold and Real Assets.
      </p>

      {/* Short description */}
      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
        Your assets deserve clarity and trust — we provide both.
        <br className="hidden sm:block" />
        Personal guidance and a compliant, step-by-step flow.
      </p>

      {/* Quick value bullets */}
      <ul className="mt-1 space-y-2 text-sm sm:text-base text-gray-900">
        {[
          "Personal consultation & scenario planning",
          "KYC/AML checklist and pre-check",
          "In-person execution in licensed offices",
          "Partner network: banks, notaries, legal, real estate",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span
              className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-crypto)]"
              aria-hidden
            />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      {/* CTA + QR */}
      <div className="mt-3 w-full flex flex-col sm:flex-row sm:items-center sm:gap-4">
        {/* кнопка */}
        <a
          href="#consult"
          className="block w-full sm:w-[260px] text-center rounded-xl px-5 py-3 text-sm sm:text-base font-medium
                 bg-[var(--color-crypto)] text-white transition-transform duration-200 active:scale-[0.98]
                 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0
                 focus-visible:ring-[var(--color-crypto)]"
        >
          Get Consultation
        </a>

        {/* QR справа на планшете/десктопе, снизу на мобилке */}
        <div className="mt-3 sm:mt-0 flex justify-center sm:justify-start sm:pl-12">
          {/* ГЛОБАЛЬНЫЙ ЩИТ ДЛЯ ЭТОЙ ЗОНЫ */}
          <ClickShield selector="#qr-zone" />

          {/* ЗОНА QR (только она блокируется) */}
          <div
            id="qr-zone"
            className="relative inline-block select-none [&_a]:pointer-events-none"
          >
            {/* сам QR — без ссылок */}
            <QRCodeCard url={SITE_URL} />
          </div>
        </div>
      </div>
    </div>
  );
}
