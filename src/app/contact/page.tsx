// app/contact/page.tsx
import type { Metadata } from "next";
// import Link from "next/link";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — AlpineBridgeFinance",
  description:
    "Get in touch — licensed Swiss offices for secure fiat ↔ crypto ↔ gold deals.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO — фирменный аккуратный акцент */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white/85 p-6 md:p-10 text-center backdrop-blur">
          <h1
            className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight 
               bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] 
               bg-clip-text text-transparent"
          >
            AlpineBridgeFinance
          </h1>
          <p className="mt-2 text-sm text-gray-600">Fiat ↔ Crypto ↔ Gold.</p>
        </div>
      </section>

      {/* QUICK CONTACTS */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a
            href="mailto:info@alpinebridgefinance.com"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
              <Mail className="h-4 w-4 text-[var(--color-crypto)]" />
            </div>
            <div className="mt-3 text-sm font-medium text-gray-900">Email</div>
            <div className="mt-1 text-sm text-gray-600">
              info@alpinebridgefinance.com
            </div>
          </a>

          {/* Swiss Phone */}
          <a
            href="tel:+41221234567"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
              <Phone className="h-4 w-4 text-[var(--color-gold)]" />
            </div>
            <div className="mt-3 text-sm font-medium text-gray-900">
              Phone (CH)
            </div>
            <div className="mt-1 text-sm text-gray-600">+41 22 123 45 67</div>
            <div className="mt-1 text-xs text-gray-400">
              Mon–Fri, 09:00–18:00 CET
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/41221234567"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
              <MessageSquare className="h-4 w-4 text-[var(--color-fiat)]" />
            </div>
            <div className="mt-3 text-sm font-medium text-gray-900">
              WhatsApp
            </div>
            <div className="mt-1 text-sm text-gray-600">Chat via WhatsApp</div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/alpinebridgefinance"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-50">
              <Send className="h-4 w-4 text-[var(--color-crypto)]" />
            </div>
            <div className="mt-3 text-sm font-medium text-gray-900">
              Telegram
            </div>
            <div className="mt-1 text-sm text-gray-600">Chat via Telegram</div>
          </a>
        </div>
      </section>

      {/* OFFICES */}
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        {/* Lugano Centro */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[var(--color-crypto)]" />
            <div className="text-base font-semibold text-gray-900">
              Lugano — Centro (Main Office)
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Via Nassa 10, 6900 Lugano, Switzerland
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://maps.google.com/?q=Via%20Nassa%2010%2C%206900%20Lugano%2C%20Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              Open in Google Maps
            </a>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
              <Clock className="h-3.5 w-3.5" />
              Mon–Fri, 09:00–18:00
            </div>
          </div>
        </div>

        {/* Foxtown / Mendrisio (placeholder — если нужен) */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[var(--color-gold)]" />
            <div className="text-base font-semibold text-gray-900">
              Near Foxtown (Mendrisio)
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600">By appointment</div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://maps.google.com/?q=Foxtown%2C%20Mendrisio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              Open in Google Maps
            </a>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600">
              <Clock className="h-3.5 w-3.5" />
              By booking
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST FORM — простая заглушка (mailto) */}
      <section className="mx-auto mt-12 w-full max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900">
          Submit a request
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          Tell us briefly about your case and how we can reach you.
        </p>

        <form
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          action="mailto:info@alpinebridgefinance.com"
          method="GET"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="subject"
              placeholder="Your name"
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-crypto)]"
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="cc"
              placeholder="Your email"
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-crypto)]"
              required
              aria-label="Your email"
            />
            <input
              type="tel"
              name="body"
              placeholder="Phone or WhatsApp"
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-crypto)] sm:col-span-2"
              aria-label="Phone or WhatsApp"
            />
            <textarea
              name="body"
              placeholder="Tell us briefly about your case (asset, amount range, timing)"
              className="min-h-[120px] rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--color-crypto)] sm:col-span-2"
              aria-label="Case description"
            />
          </div>

          <div className="mt-4 flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-crypto)]"
            >
              Send Request
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-gray-500">
            <ShieldCheck className="inline h-3.5 w-3.5 align-[-2px] text-[var(--color-crypto)]" />{" "}
            Your data is protected. We comply with Swiss KYC/AML regulations.
          </p>
        </form>
      </section>

      {/* MINI FAQ */}
      <section className="mt-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Minimum transaction
            </div>
            <p className="mt-2 text-sm text-gray-600">From CHF 1,000.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              ID requirements
            </div>
            <p className="mt-2 text-sm text-gray-600">
              ID may be required depending on amount.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Crypto screening
            </div>
            <p className="mt-2 text-sm text-gray-600">
              We screen crypto addresses for compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              Execution venue
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Transactions are executed in licensed Swiss offices.
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL NOTE */}
      <section className="mt-12 text-center">
        <p className="text-xs text-gray-400">
          AlpineBridgeFinance acts as an introducing partner. All transactions
          are executed by the licensed Swiss entity in its offices.
        </p>
      </section>
    </div>
  );
}
