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
    <div className="mt-4 flex flex-col items-center">
      <div
        className="
          w-[80px] h-[80px]
          sm:w-[96px] sm:h-[96px]
          lg:w-[112px] lg:h-[112px]
          bg-white p-1 rounded-lg shadow-sm
        "
      >
        <QRCode
          value={value}
          size={128}
          style={{ height: "100%", width: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
        />
      </div>

      <p className="mt-2 text-xs sm:text-sm font-medium text-slate-700">
        Install the App
      </p>
    </div>
  );
}
