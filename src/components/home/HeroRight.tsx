"use client";

export default function HeroRight() {
  return (
    <div
      className="
        w-full max-w-[600px] ml-auto
        flex flex-col gap-3 sm:gap-4 lg:gap-5
      "
      aria-label="Gradient-frame wide placeholder cards (compact)"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <section
          key={i}
          className="
            rounded-2xl
            bg-gradient-to-r from-[var(--color-fiat)] via-[var(--color-crypto)] to-[var(--color-gold)]
            p-[1px] shadow-md
          "
        >
          <div
            className="
              rounded-2xl bg-white/85 backdrop-blur
              h-[80px] sm:h-[96px] lg:h-[110px]
              px-4 py-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4
              flex flex-col justify-between
            "
          >
            {/* skeleton lines (placeholder only) */}
            <div className="h-3 w-[38%] rounded bg-black/10" />
            <div className="h-4 w-[62%] rounded bg-black/10" />
          </div>
        </section>
      ))}
    </div>
  );
}
