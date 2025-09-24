import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="flex min-h-[72vh] flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          AlpineBridgeFinance
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          <span className="text-slate-700"> </span>
          <span className="text-rose-500 font-medium">Fiat</span> ↔{" "}
          <span className="text-emerald-600 font-medium">Crypto</span> ↔{" "}
          <span className="text-amber-600 font-medium">Gold</span>{" "}
          <span className="text-slate-500">— Lugano, Switzerland</span>
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Official platform coming soon
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-black text-white px-5 py-2.5 text-sm md:text-base hover:opacity-90 transition"
          >
            Contact
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm md:text-base hover:bg-slate-50 transition"
          >
            Services
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 pb-20">
        <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Безопасно</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Оффлайн-сделки в лицензированных швейцарских офисах. Ваши средства
              не передаются третьим лицам.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Легально</h3>
            <p className="mt-2 text-slate-600 text-sm">
              KYC/AML сопровождение, правила сумм и документов — всё прозрачно и
              по закону.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">
              Персональное сопровождение
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              От первой консультации до завершения сделки: запись в офис, список
              документов, проверка «чистоты» криптовалюты.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
