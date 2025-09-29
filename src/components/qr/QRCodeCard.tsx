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
    <div
      className="mx-auto w-full max-w-sm rounded-2xl border border-gray-200/20 
                 bg-[var(--surface)] p-6 text-center shadow-lg 
                 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <h3 className="text-lg font-semibold text-gray-100">
        Scan to open mobile version
      </h3>

      <div
        className="mx-auto mt-4 w-[170px] rounded-xl bg-white p-3 shadow-md 
                   transition-transform duration-300 hover:scale-[1.05]"
      >
        <QRCode
          value={value}
          size={160}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          bgColor="#ffffff"
          fgColor="#111827"
          level="M"
        />
      </div>

      <p className="mt-4 text-sm text-gray-400">Available anytime, anywhere</p>
    </div>
  );
}
