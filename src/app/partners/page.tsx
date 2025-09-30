// app/partners/page.tsx
import Link from "next/link";
import {
  Building2,
  Landmark,
  Scale,
  FileCheck2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function PartnersPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white/85 p-6 md:p-10 backdrop-blur">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent">
              Trusted Partners
            </h1>
            <p className="mt-4 text-slate-700">
              Our strength lies in a professional network: Swiss banks,
              notaries, legal and real estate experts, and fintech platforms.
              Together we deliver secure, transparent transactions.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Who we collaborate with
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Landmark,
              title: "Banks",
              text: "On/off-ramp support, account settlement, large transfers.",
            },
            {
              Icon: Scale,
              title: "Notaries",
              text: "Deal authentication, real estate and corporate contracts.",
            },
            {
              Icon: FileCheck2,
              title: "Legal Experts",
              text: "Structuring, compliance verification, dispute prevention.",
            },
            {
              Icon: Building2,
              title: "Real Estate",
              text: "Cross-border property purchases with crypto-to-fiat conversion.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-[var(--color-crypto)]" />
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASES */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Selected case examples
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Crypto → Fiat → Real Estate",
              text: "Assisting a client in converting digital assets into Swiss francs and completing a notary-supervised property purchase in Lugano.",
            },
            {
              title: "Large cross-border transfer",
              text: "Coordinating bank, compliance, and client needs for a seven-figure transfer within 48 hours.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER CALL TO ACTION */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-8 shadow-inner">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Interested in partnership?
            </h3>
            <p className="mt-2 text-slate-700">
              We welcome collaboration with regulated institutions and
              professionals. Contact us for an introduction.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Contact Us
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST NOTE */}
      <section className="mt-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-3 items-start">
          <ShieldCheck className="h-5 w-5 text-[var(--color-gold)] mt-1" />
          <p className="text-sm text-slate-700">
            Every partner we engage with passes due diligence and operates under
            Swiss or EU regulation.
          </p>
        </div>
      </section>
    </div>
  );
}
