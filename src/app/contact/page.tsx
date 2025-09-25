import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — AlpineBridgeFinance",
  description:
    "Get in touch — licensed Swiss offices for secure fiat ↔ crypto ↔ gold deals.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Contact AlpineBridgeFinance
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Licensed Swiss offices. Fiat ↔ Crypto ↔ Gold.
        </p>
        <p className="mt-1 text-xs text-gray-400">
          We’ll reply within 24 hours.
        </p>
      </section>

      {/* QUICK CONTACTS */}
      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a
            href="mailto:info@alpinebridgefinance.com"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-medium text-gray-900">Email</div>
            <div className="mt-1 text-sm text-gray-600">
              info@alpinebridgefinance.com
            </div>
          </a>

          {/* Swiss Phone */}
          <a
            href="tel:+41221234567"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-medium text-gray-900">Phone (CH)</div>
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
            <div className="text-sm font-medium text-gray-900">WhatsApp</div>
            <div className="mt-1 text-sm text-gray-600">Chat via WhatsApp</div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/alpinebridgefinance"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="text-sm font-medium text-gray-900">Telegram</div>
            <div className="mt-1 text-sm text-gray-600">Chat via Telegram</div>
          </a>
        </div>
      </section>

      {/* LUGANO OFFICE */}
      <section className="mt-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="text-base font-semibold text-gray-900">
            Lugano Office
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Via Nassa 10, 6900 Lugano, Switzerland
          </div>
          <div className="mt-4">
            <a
              href="https://maps.google.com/?q=Via%20Nassa%2010%2C%206900%20Lugano%2C%20Switzerland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section className="mx-auto mt-12 w-full max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-semibold text-gray-900">
          Submit a request
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          Tell us briefly about your case and how we can reach you.
        </p>

        <p className="mt-3 text-center text-xs text-gray-400">
          Your data is protected. We comply with Swiss KYC/AML regulations.
        </p>
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
