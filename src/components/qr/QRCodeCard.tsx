"use client";

import QRCode from "react-qr-code";

type Props = { url?: string };

export default function QrSimple({ url }: Props) {
  // Домен из .env (NEXT_PUBLIC_SITE_URL), без лишних пробелов
  const envUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").trim();

  const isBrowser = typeof window !== "undefined";
  const isLocalhost =
    isBrowser &&
    /^(localhost|127\.0\.0\.1|::1)$/.test(window.location.hostname);

  // Приоритет: проп url > .env > window.origin (если не localhost)
  const value =
    url ||
    (envUrl ? envUrl : isBrowser && !isLocalhost ? window.location.origin : "");

  return (
    <a
      href={value || undefined}
      target={value ? "_blank" : undefined}
      rel={value ? "noopener noreferrer" : undefined}
      className="flex flex-col items-center order-1 lg:order-first mt-3 lg:mt-0 cursor-pointer transition-transform duration-200 hover:scale-105"
      aria-label="Open app link"
    >
      <div
        className="
          w-[96px] h-[96px]
          sm:w-[112px] sm:h-[112px]
          lg:w-[96px] lg:h-[96px]
          bg-white p-2 rounded-lg shadow-sm
        "
      >
        <QRCode
          value={value || "https://example.com"}
          level="M"
          style={{ width: "100%", height: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
        />
      </div>

      <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-700">
        Install the App
      </p>
    </a>
  );
}
