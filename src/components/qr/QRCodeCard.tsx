"use client";

import QRCode from "react-qr-code";

type Props = { url?: string };

export default function QRCodeCard({ url }: Props) {
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
      className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200/70
                 bg-[var(--surface)] p-4 text-center shadow-lg overflow-hidden"
    >
      <h3 className="text-sm sm:text-base font-semibold text-black">
        Scan to open mobile version
      </h3>

      <div className="mx-auto mt-3 w-full max-w-[128px] rounded-xl bg-white p-2 shadow-md">
        <QRCode
          value={value}
          size={120}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
        />
      </div>

      <p className="mt-2 text-xs sm:text-sm text-black">
        Available anytime, anywhere
      </p>
    </div>
  );
}
