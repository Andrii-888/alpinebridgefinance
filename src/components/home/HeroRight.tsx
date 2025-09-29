"use client";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Мягкое свечение фона */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 45%, rgba(26,188,156,0.18), transparent 60%)",
        }}
      />

      {/* Минималистичный «ноутбук» */}
      <div className="relative w-full max-w-2xl">
        {/* Крышка */}
        <div className="relative mx-auto w-full aspect-[16/10] rounded-2xl border border-black/5 bg-gradient-to-b from-[#1a1d24] to-[#0f1217] shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          {/* Камера */}
          <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/60 shadow-inner" />

          {/* Экран */}
          <div className="absolute inset-3 rounded-xl border border-white/10 overflow-hidden">
            {/* Скрин интерфейса */}
            <div className="relative h-full w-full">
              {/* Едва заметный брендовый вуаль-оверлей для «дорогого» вида */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192,57,43,.06), rgba(26,188,156,.06) 55%, rgba(212,175,55,.06))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Подставка */}
        <div className="mx-auto -mt-2 h-3 w-[92%] rounded-b-2xl bg-gradient-to-b from-[#2a2f39] to-[#1a1e26] border-x border-b border-white/10" />
      </div>
    </div>
  );
}
