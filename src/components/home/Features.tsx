// components/home/Features.tsx
export type FeatureItem = {
  title: string;
  description: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: "Safe ✅",
    description:
      "Deals in licensed offices. Funds are not transferred to third parties.",
  },
  {
    title: "Compliant ✅",
    description:
      "KYC/AML support, transparent rules for amounts and documents.",
  },
  {
    title: "Concierge ✅",
    description:
      "From consultation to deal completion: office appointment, document list, address screening.",
  },
];

export default function Features() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-[14px] border border-black/5 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
