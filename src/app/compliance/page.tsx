// app/compliance/page.tsx
import Link from "next/link";
import {
  ShieldCheck,
  IdCard,
  FileText,
  ClipboardList,
  Scale,
  UserCheck,
  Eye,
  AlertTriangle,
  Lock,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* HERO — сдержанный градиент-кант */}
      <section className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-lg">
        <div className="rounded-2xl bg-white/85 p-6 md:p-10 backdrop-blur">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] bg-clip-text text-transparent">
              Compliance & KYC
            </h1>
            <p className="mt-4 text-slate-700">
              We prepare clients for in-person transactions executed in licensed
              Swiss offices. Our role is to help you meet the required standards
              and move through the process efficiently—transparently and step by
              step.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold">Our principles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: (
                <ShieldCheck className="h-6 w-6 text-[var(--color-crypto)]" />
              ),
              title: "Compliance-first",
              text: "We align with AML/KYC standards followed by Swiss licensed offices.",
            },
            {
              icon: <Scale className="h-6 w-6 text-[var(--color-gold)]" />,
              title: "Transparency",
              text: "Clear requirements, realistic timing, and documented steps.",
            },
            {
              icon: <Lock className="h-6 w-6 text-[var(--color-fiat)]" />,
              title: "Data care",
              text: "We handle your information responsibly and only as needed for the process.",
            },
          ].map(({ icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {icon}
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE CHECK / KYC */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          KYC requirements (overview)
        </h2>
        <p className="mt-2 text-slate-700">
          The final checklist depends on the executing office and your case.
          Below is a typical baseline.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              Icon: IdCard,
              title: "Identity",
              text: "Valid passport or national ID; residence permit if applicable.",
            },
            {
              Icon: UserCheck,
              title: "Personal details",
              text: "Basic information consistent with your documents.",
            },
            {
              Icon: FileText,
              title: "Proof of funds / source",
              text: "Bank statements, contracts, invoices, or other origin evidence.",
            },
            {
              Icon: ClipboardList,
              title: "Transaction purpose",
              text: "Short rationale (e.g. purchase, diversification, settlement).",
            },
            {
              Icon: Eye,
              title: "Sanctions/PEP screening",
              text: "Standard checks applied by the office per policy.",
            },
            {
              Icon: Clock,
              title: "Timing",
              text: "Same day for simple cases; complex cases may take longer.",
            },
          ].map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-[var(--color-crypto)]" />
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-600">
          Note: exact requirements are confirmed during the intro call and may
          vary by office policy.
        </p>
      </section>

      {/* RED FLAGS / WE MAY DECLINE */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          When a case may be declined
        </h2>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-[var(--color-fiat)]" />
            <p className="font-medium">Examples of risk indicators</p>
          </div>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-700">
            <li>Incomplete or inconsistent documentation.</li>
            <li>Inability to reasonably demonstrate the source of funds.</li>
            <li>
              Sanctions exposure, prohibited jurisdictions, or policy conflicts.
            </li>
            <li>Attempts to bypass KYC or request non-compliant handling.</li>
          </ul>
          <p className="mt-3 text-xs text-slate-600">
            Decision to proceed is made by the executing office under its
            policies and obligations.
          </p>
        </div>
      </section>

      {/* DATA HANDLING */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Data handling & privacy
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Purpose limitation",
              text: "We collect and use information strictly for preparing your in-person appointment.",
            },
            {
              title: "Minimum necessary",
              text: "We ask only for the documents required to meet the executing office standards.",
            },
            {
              title: "Secure transfer",
              text: "Where possible we use secure channels; originals are presented on site.",
            },
            {
              title: "Retention",
              text: "Retention is limited and aligned with the purpose and policy of the executing office.",
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
        <p className="mt-4 text-xs text-slate-600">
          This page is an overview and not legal advice. Office policies prevail
          where applicable.
        </p>
      </section>

      {/* CTA — нейтральный, не «продажный» */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 md:p-8 shadow-inner">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              Checked the requirements?
            </h3>
            <p className="mt-2 text-slate-700">
              If everything is clear, send your scans for a quick pre-check and
              we’ll book an office slot.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              See the Process
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
