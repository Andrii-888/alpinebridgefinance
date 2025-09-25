import QRCodeCard from "@/components/qr/QRCodeCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          AlpineBridgeFinance
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl">
          <span className="text-rose-500 font-medium">Fiat</span> ↔{" "}
          <span className="text-emerald-600 font-medium">Crypto</span> ↔{" "}
          <span className="text-amber-600 font-medium">Gold</span>{" "}
          <span className="text-slate-500">— Lugano, Switzerland</span>
        </p>

        <p className="mt-3 text-xs text-slate-500 sm:text-sm">
          Official platform coming soon
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/request"
            className="w-full rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
          >
            Request
          </Link>

          {/* QR для быстрого открытия на телефоне */}
          <section className="px-4 pb-14">
            <QRCodeCard />
          </section>
          <Link
            href="/services"
            className="w-full rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-900 transition hover:bg-slate-50 sm:w-auto"
          >
            Services
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Safe ✅</h3>
            <p className="mt-2 text-sm text-slate-600">
              Deals in licensed offices. Funds are not transferred to third
              parties.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Legal ✅</h3>
            <p className="mt-2 text-sm text-slate-600">
              KYC/AML support, transparent rules for amounts and documents.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Personalized. ✅
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              From consultation to deal completion: office appointment, document
              list, address screening.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
