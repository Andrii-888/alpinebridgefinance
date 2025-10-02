"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Handshake,
  FileCheck2,
  Lock,
  Clock,
  Users,
  Building2,
  MapPin,
  ChevronRight,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO — градиентный кант + светлая подложка */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white/85 p-6 md:p-10 backdrop-blur">
          {/* ⬇️ до lg оставляем колонку, чтобы на планшете ничего не вылазило */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent">
                End-to-end Deal Support in Switzerland
              </h1>
              <p className="mt-4 text-slate-700">
                We prepare clients for secure{" "}
                <span className="font-medium">Fiat ↔ Crypto ↔ Gold</span>{" "}
                transactions in licensed Swiss offices. We’re not an online
                exchanger — we’re your trusted guide with transparent
                compliance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Book a Consultation
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  How it Works
                </Link>
              </div>
            </div>

            {/* Trust mini-badges */}
            {/* ⬇️ на md: занимают всю ширину и переносятся; на lg: фиксированная ширина */}
            <ul className="grid grid-cols-2 gap-3 w-full lg:w-80">
              {[
                { Icon: ShieldCheck, label: "Compliance-first" },
                { Icon: Lock, label: "KYC/AML Guidance" },
                { Icon: Handshake, label: "Trusted Partners" },
                { Icon: Clock, label: "Time-boxed Steps" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 hover:shadow-sm transition-shadow min-w-0"
                >
                  <Icon className="h-5 w-5 text-[var(--color-crypto)] shrink-0" />
                  <span className="text-sm font-medium leading-tight break-words whitespace-normal">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VALUE PROPS — карточки */}
      <section className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">What we provide</h2>
        <p className="mt-2 text-slate-700">
          High-stakes, in-person deals. We act as your{" "}
          <span className="font-medium">trusted guide</span>.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              Icon: Users,
              title: "Personal Consultation",
              text: "One-to-one preparation, scenario planning, and clear next steps for your case.",
            },
            {
              Icon: FileCheck2,
              title: "KYC/AML Readiness",
              text: "Document checklist, timelines, and expectations aligned with Swiss standards.",
            },
            {
              Icon: Building2,
              title: "Office-based Deals",
              text: "Meet at one of our Swiss offices. Professional environment, secure workflow.",
            },
            {
              Icon: Handshake,
              title: "Partner Network",
              text: "Banks, notaries, legal and real-estate experts for complex transactions.",
            },
            {
              Icon: ShieldCheck,
              title: "Risk & Compliance",
              text: "We explain requirements, minimize friction, and keep the process transparent.",
            },
            {
              Icon: Clock,
              title: "Time-boxed Process",
              text: "Clear, step-by-step path with realistic timing at every stage.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-[var(--color-fiat)]/20 hover:via-[var(--color-crypto)]/20 hover:to-[var(--color-gold)]/20 transition-colors"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 min-w-0">
                  <Icon className="h-6 w-6 text-[var(--color-gold)] shrink-0" />
                  <h3 className="text-base font-semibold leading-tight break-words whitespace-normal">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          A clear, 5-step flow
        </h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-5">
          {[
            "Intro Call / Request",
            "KYC Checklist",
            "Quote & Timing",
            "Office Appointment",
            "Deal & Confirmation",
          ].map((step, idx) => (
            <li
              key={step}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] text-white text-xs font-semibold">
                  {idx + 1}
                </span>
              </div>
              <p className="mt-3 font-medium">{step}</p>
              {idx === 1 && (
                <p className="mt-1 text-slate-700">
                  We explain exactly what to bring and why — no guesswork.
                </p>
              )}
              {idx === 3 && (
                <p className="mt-1 text-slate-700">
                  Meet in a licensed Swiss office. Professional & secure.
                </p>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <Link
            href="/process"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:opacity-80"
          >
            See full process
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* OFFICES — карточки офисов */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">Where we meet</h2>
        <p className="mt-2 text-slate-700">
          All deals are handled <span className="font-medium">in person</span>{" "}
          in Switzerland. Choose the office most convenient for you.
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
              <div className="flex items-center gap-3 min-w-0">
                <MapPin className="h-5 w-5 text-[var(--color-crypto)] shrink-0" />
                <h3 className="text-base font-semibold leading-tight break-words whitespace-normal">
                  {city}
                </h3>
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

      {/* CTA — градиентная вторичная кнопка */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-8 shadow-inner">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Ready to prepare your deal?
            </h3>
            <p className="mt-2 text-slate-700">
              Get a clear checklist, timeline, and next steps — tailored to your
              case.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Contact Us
              <Phone className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/XXXXXXXXXXX"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-crypto)]"
            >
              WhatsApp
              <MessageSquare className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
