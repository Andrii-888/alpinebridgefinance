"use client";

import QRCode from "react-qr-code";

export default function HeroRight() {
  // статичные данные (USDT). потом легко заменим на fetch
  const coins = [
    { sym: "BTC/USDT", name: "Bitcoin", price: 114335.0, change: +3.23 },
    { sym: "ETH/USDT", name: "Ethereum", price: 4191.76, change: +3.54 },
    { sym: "SOL/USDT", name: "Solana", price: 213.5, change: +2.99 },
  ];

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    (typeof window !== "undefined" ? window.location.origin : "") ||
    "http://localhost:3000";
  const qrUrl = `${siteUrl}/?utm_source=hero_laptop_qr&utm_medium=desktop`;

  return (
    <div className="relative flex items-center justify-center">
      {/* мягкое внешнее свечение */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 45%, rgba(26,188,156,0.18), transparent 60%)",
        }}
      />

      {/* ноутбук: фиксированная макс-ширина для стабильной геометрии */}
      <div className="relative w-full max-w-[560px] md:max-w-[620px]">
        {/* крышка */}
        <div className="relative mx-auto w-full aspect-[16/10] rounded-[18px] border border-black/5 bg-gradient-to-b from-[#1a1d24] to-[#0f1217] shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          {/* камера */}
          <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/60 shadow-inner" />

          {/* экран */}
          <div className="absolute inset-[12px] md:inset-[18px] rounded-[14px] border border-white/10 overflow-hidden">
            {/* ВНУТРЕННЯЯ СЕТКА ЭКРАНА: строгое распределение пространства */}
            <div className="absolute inset-0 flex flex-col bg-[#0f1217]">
              {/* верхняя панель фикс. высоты */}
              <div className="h-9 px-3 sm:px-4 border-b border-white/10 flex items-center justify-between">
                <div className="text-[11px] sm:text-xs tracking-wide text-gray-300">
                  Markets
                </div>
                <div className="flex items-center gap-1.5">
                  {["1h", "24h", "1w"].map((t, i) => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] ${
                        i === 1 ? "bg-white/10 text-gray-100" : "text-gray-400"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* список: ровно 3 строки, высота строки зафиксирована.
                  нижний padding резервирует место под QR (чтобы не было наложения) */}
              <div className="relative flex-1 overflow-hidden pb-[88px] md:pb-[96px]">
                <ul className="divide-y divide-white/5">
                  {coins.map((c) => {
                    const neg = c.change < 0;
                    return (
                      <li
                        key={c.sym}
                        className="h-10 md:h-11 grid grid-cols-[auto,1fr,auto,auto] items-center
                                   gap-3 md:gap-4 px-3 sm:px-4 hover:bg-white/5 transition-colors"
                      >
                        {/* «иконка» */}
                        <div
                          className="h-8 w-8 md:h-9 md:w-9 rounded-full grid place-items-center text-[10px] font-semibold text-white shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-fiat), var(--color-crypto))",
                          }}
                          aria-hidden
                        >
                          {c.sym.replace("/USDT", "").slice(0, 3)}
                        </div>

                        {/* имя / пара */}
                        <div className="min-w-0">
                          <div className="text-[12px] sm:text-[13px] text-gray-100 leading-tight">
                            {c.name}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {c.sym}
                          </div>
                        </div>

                        {/* цена */}
                        <div className="text-right tabular-nums text-[12px] sm:text-[13px] text-gray-200">
                          {Intl.NumberFormat("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }).format(c.price)}
                          <span className="ml-1 hidden sm:inline text-[10px] text-gray-500">
                            USDT
                          </span>
                        </div>

                        {/* изменение */}
                        <div
                          className={`justify-self-end px-2 py-0.5 rounded-md text-[11px] md:text-xs tabular-nums ${
                            neg
                              ? "bg-red-500/10 text-red-400"
                              : "bg-emerald-500/10 text-emerald-400"
                          }`}
                        >
                          {`${neg ? "" : "+"}${c.change.toFixed(2)}%`}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* маленький QR — размер фикс, безопасные отступы от краёв */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
                    <div className="h-[64px] w-[64px] rounded-md overflow-hidden bg-white">
                      <QRCode
                        value={qrUrl}
                        size={64}
                        style={{ height: "100%", width: "100%" }}
                        bgColor="#ffffff"
                        fgColor="#111827"
                        level="M"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* лёгкая бренд-вуаль сверху для «дорогого» вида */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192,57,43,.04), rgba(26,188,156,.04) 55%, rgba(212,175,55,.04))",
                }}
              />
            </div>
          </div>
        </div>

        {/* подставка */}
        <div className="mx-auto -mt-2 h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-[#2a2f39] to-[#1a1e26] border-x border-b border-white/10" />
      </div>
    </div>
  );
}
