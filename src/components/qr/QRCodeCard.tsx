"use client";

import QRCode from "react-qr-code";

type Props = {
  /** Куда ведёт QR. Если не передать — возьмём адрес сайта из env или window */
  url?: string;
};

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
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
      <h3 className="text-m font-semibold text-gray-900">Open on your phone</h3>

      <div className="mx-auto w-[160px] rounded-xl bg-white p-1 shadow-sm">
        <QRCode
          value={value}
          size={160}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
        />
      </div>

      <p className="mt-4 text-sm text-gray-500">Scan the code</p>
    </div>
  );
}
