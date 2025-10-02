"use client";

import { Home, Gem, Banknote, Briefcase } from "lucide-react";

export default function UseCases() {
  const cases = [
    {
      Icon: Home,
      title: "Real Estate Deals",
      text: "🏡 Покупка недвижимости с оплатой в криптовалюте.",
      color: "text-[var(--color-fiat)]",
    },
    {
      Icon: Gem,
      title: "Gold Exchange",
      text: "💎 Обмен USDT на золото с безопасным хранением.",
      color: "text-[var(--color-gold)]",
    },
    {
      Icon: Banknote,
      title: "Fiat ↔ Crypto",
      text: "💶 Быстрые сделки Fiat → Crypto бесопасно - прозрачно.",
      color: "text-[var(--color-crypto)]",
    },
    {
      Icon: Briefcase,
      title: "Corporate Solutions",
      text: "👔 Корпоративные сделки для компаний.",
      color: "text-[var(--color-fiat)]",
    },
  ];

  return (
    <section className="mt-12 w-full max-w-6xl mx-auto px-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
        Use Cases — Сценарии сделок
      </h2>
      <p className="mt-2 text-slate-700">
        Реальные сценарии, которые мы сопровождаем.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {cases.map(({ Icon, title, text, color }) => (
          <div
            key={title}
            className="rounded-2xl bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)] p-[1px] shadow-md"
          >
            <div className="rounded-2xl bg-white/85 backdrop-blur px-5 py-6 flex flex-col h-full">
              <div className="flex items-center gap-3">
                <Icon className={`h-6 w-6 ${color}`} />
                <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
