"use client";



export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Лёгкое свечение фона */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(26,188,156,0.18), transparent 60%)",
        }}
      />

      {/* «Ноутбук» — чистый CSS */}
      <div className="relative w-full max-w-2xl">
        {/* Крышка (рамка) */}
        <div className="relative mx-auto w-full aspect-[16/10] rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1d24] to-[#0f1217] shadow-[0_30px_80px_rgba(0,0,0,.45)]">
          {/* Камера */}
          <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/60 shadow-inner" />
          {/* Экран (контент внутри ноутбука) */}
          <div className="absolute inset-3 rounded-xl border border-white/10 overflow-hidden">
            {/* Фоновая подложка экрана */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(192,57,43,.18), rgba(26,188,156,.18) 55%, rgba(212,175,55,.18))",
              }}
            />
            {/* Ваш заглушечный «интерфейс» (можно заменить на <Image />/компонент) */}
            <div className="relative h-full w-full p-5 flex flex-col justify-end">
              <div className="text-sm text-gray-300/80">
                AlpineBridgeFinance
              </div>
              <div
                className="mt-1 h-1 w-40 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-fiat), var(--color-crypto), var(--color-gold))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Подставка */}
        <div className="mx-auto -mt-2 h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-[#2a2f39] to-[#1a1e26] border-x border-b border-white/10" />
      </div>

      {/* Карточка с QR — на переднем плане, «лежит» на ноутбуке */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 md:right-6 lg:right-10">
        <div className="relative">
          {/* мягкая подсветка под карточкой */}
          <div
            className="absolute -inset-3 -z-10 rounded-3xl opacity-50 blur-xl"
            style={{
              background:
                "radial-gradient(60% 70% at 60% 40%, rgba(26,188,156,.35), transparent 60%)",
            }}
          />
         
        </div>
      </div>
    </div>
  );
}
