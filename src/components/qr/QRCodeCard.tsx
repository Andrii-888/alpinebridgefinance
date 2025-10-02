"use client";

import QRCode from "react-qr-code";

type Props = { url?: string };

export default function QrSimple({ url }: Props) {
  const fallbackUrl =
    process.env.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_SITE_URL
      : typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";

  const value = url || fallbackUrl;

  return (
    <div
      className="
        flex flex-col items-center
        order-1 lg:order-first
        mt-3 lg:mt-0
      "
    >
      <div
        className="
          w-[64px] h-[64px]
          sm:w-[80px] sm:h-[80px]
          lg:w-[64px] lg:h-[64px]
          bg-white p-1 rounded-lg shadow-sm
        "
      >
        <QRCode
          value={value}
          size={96}
          style={{ height: "100%", width: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
        />
      </div>

      <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-700">
        Install the App
      </p>
    </div>
  );
}
