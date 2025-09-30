// app/process/page.tsx
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  IdCard,
  FileText,
  ClipboardList,
  Lock,
  CalendarClock,
  MapPin,
  Handshake,
  BadgeCheck,
  HelpCircle,
  Smartphone,
} from "lucide-react";

export default function ProcessPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO — аккуратный градиентный кант */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white/85 p-6 md:p-10 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent">
                How the Process Works
              </h1>
              <p className="mt-4 text-slate-700">
                Clear, in-person, compliance-first flow for{" "}
                <span className="font-medium">Fiat ↔ Crypto ↔ Gold</span> deals
                in Switzerland. We prepare you step by step and stay with you
                through the appointment.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Book an Intro Call
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="/compliance"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Compliance & KYC
                </Link>
              </div>
            </div>

            {/* мини-бейджи доверия */}
            <ul className="grid grid-cols-2 gap-3 md:w-80">
              {[
                { Icon: ShieldCheck, label: "Compliance-first" },
                { Icon: Lock, label: "Secure Offices" },
                { Icon: CalendarClock, label: "Time-boxed Steps" },
                { Icon: Handshake, label: "Assisted Appointments" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 hover:shadow-sm transition-shadow"
                >
                  <Icon className="h-5 w-5 text-[var(--color-crypto)]" />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE — 6 чётких шагов */}
      <section className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Step-by-step timeline
        </h2>
        <p className="mt-2 text-slate-700">
          A simple path from first contact to confirmation. Typical total time:{" "}
          <span className="font-medium">1–3 business days</span> depending on
          case and KYC.
        </p>

        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              n: 1,
              title: "Intro Call / Request",
              desc: "We clarify your scenario and outline next steps.",
              time: "~15–20 min",
              icon: Smartphone,
            },
            {
              n: 2,
              title: "KYC Checklist",
              desc: "We explain which documents are needed and why.",
              time: "~10–30 min",
              icon: ClipboardList,
            },
            {
              n: 3,
              title: "Document Review",
              desc: "You send scans; we pre-check and confirm readiness.",
              time: "same day",
              icon: FileText,
            },
            {
              n: 4,
              title: "Quote & Scheduling",
              desc: "We align the amount, fees window, and book an office slot.",
              time: "~30 min",
              icon: CalendarClock,
            },
            {
              n: 5,
              title: "Office Appointment",
              desc: "In-person, in a licensed Swiss office with our assistance.",
              time: "30–60 min",
              icon: MapPin,
            },
            {
              n: 6,
              title: "Deal & Confirmation",
              desc: "Execution, receipt/statement, post-deal support if needed.",
              time: "immediate",
              icon: BadgeCheck,
            },
          ].map(({ n, title, desc, time, icon: Icon }) => (
            <li
              key={n}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] text-white text-xs font-semibold">
                  {n}
                </span>
                <Icon className="h-5 w-5 text-[var(--color-gold)]" />
              </div>
              <h3 className="mt-3 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
              <p className="mt-3 text-xs font-medium text-slate-600">
                Typical time: {time}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:opacity-80"
          >
            Book your slot
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CHECKLIST — что взять с собой */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">What to bring</h2>
        <p className="mt-2 text-slate-700">
          We keep it simple. Bring originals to the appointment; scans can be
          sent beforehand for review.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              Icon: IdCard,
              title: "Valid ID",
              text: "Passport or national ID (and residence permit if applicable).",
            },
            {
              Icon: FileText,
              title: "Proof of Funds / Source",
              text: "Where the funds come from (bank statement, contract, invoice, etc.).",
            },
            {
              Icon: ClipboardList,
              title: "Deal Details",
              text: "Amounts, asset, direction (Fiat/Crypto/Gold), purpose of transaction.",
            },
            {
              Icon: Lock,
              title: "Compliance Extras",
              text: "Additional docs if requested by the office per AML/KYC policy.",
            },
            {
              Icon: CalendarClock,
              title: "Appointment Reference",
              text: "Your time slot and office address we confirmed with you.",
            },
            {
              Icon: Smartphone,
              title: "Contact Availability",
              text: "Stay reachable in case the office needs clarification.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[var(--color-fiat)]/20 hover:via-[var(--color-crypto)]/20 hover:to-[var(--color-gold)]/20 transition-colors"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-[var(--color-crypto)]" />
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Note: exact requirements may vary by office and case. We’ll confirm
          the final checklist during the intro call.
        </p>
      </section>

      {/* OFFICES — где встречаемся */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Where the deal happens
        </h2>
        <p className="mt-2 text-slate-700">
          In-person only. We work with licensed Swiss offices and assist you on
          site.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { city: "Lugano — Centro", note: "Main office", map: "#" },
            {
              city: "Near Foxtown (Mendrisio)",
              note: "Close to the border",
              map: "#",
            },
            { city: "Lugano — Border Area", note: "By appointment", map: "#" },
          ].map(({ city, note, map }) => (
            <div
              key={city}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-gold)]" />
                <h3 className="text-base font-semibold">{city}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">{note}</p>
              <div className="mt-3">
                <a
                  href={map}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:opacity-80"
                >
                  View on map
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — без аккордеона, чтобы не тянуть JS */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do you exchange online?",
              a: "No. We prepare and guide you for in-person deals executed in licensed Swiss offices.",
            },
            {
              q: "How long does KYC take?",
              a: "Basic cases are same-day if documents are ready. Complex cases can take longer per office policy.",
            },
            {
              q: "Can you assist with large transactions?",
              a: "Yes. We coordinate the required checks and help book an appropriate office slot.",
            },
            {
              q: "Are fees fixed?",
              a: "Fees depend on the asset, size, and office policy. We confirm the window before booking.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[var(--color-fiat)]" />
                <h3 className="font-semibold">{q}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">{a}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-600">
          For compliance details, see{" "}
          <Link href="/compliance" className="underline hover:opacity-80">
            Compliance & KYC
          </Link>
          .
        </p>
      </section>

      {/* CTA финальная */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-8 shadow-inner">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Ready to start?
            </h3>
            <p className="mt-2 text-slate-700">
              Get your personal checklist and book the nearest office slot.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-crypto)]"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
