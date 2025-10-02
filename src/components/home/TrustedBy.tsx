"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FEATURED_PARTNERS,
  type FeaturedPartner,
} from "@/config/featuredPartners";

export default function TrustedBy() {
  const subtitle =
    "Selected real estate, banking and financial partners we collaborate with.";

  // refs + автопрокрутка
  const railRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);

  // дублируем для бесшовной ленты
  const ITEMS: FeaturedPartner[] = [...FEATURED_PARTNERS, ...FEATURED_PARTNERS];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let raf = 0;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const speed = prefersReduced ? 0 : 0.35; // px/frame
    const step = () => {
      if (!paused && speed > 0) {
        rail.scrollLeft += speed;
        const half = rail.scrollWidth / 2;
        if (rail.scrollLeft >= half) rail.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 mt-12">
      {/* Заголовок + ссылка */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">Trusted by</h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">{subtitle}</p>
        </div>
        <Link
          href="/partners"
          className="hidden sm:inline-flex text-sm font-semibold text-slate-900 hover:opacity-80"
        >
          View all partners →
        </Link>
      </div>

      {/* Лента: скрытый скролл, авто + ручная */}
      <div
        ref={railRef}
        className="mt-4 -mx-4 px-4 overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label="Partners marquee"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="flex items-stretch gap-4 w-max">
          {ITEMS.map((p, idx) => {
            const Content = () => {
              if (p.logo) {
                return (
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={200}
                    height={60}
                    sizes="(min-width:1024px) 180px, (min-width:768px) 160px, 140px"
                    className="h-9 md:h-10 w-auto object-contain opacity-90 grayscale"
                  />
                );
              } else if (p.icon) {
                const Icon = p.icon;
                return (
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-[var(--color-crypto)]/90" />
                );
              }
              return (
                <span className="px-3 py-2 text-xs md:text-sm font-medium text-slate-800">
                  {p.name}
                </span>
              );
            };

            // статичная рамка
            const Frame = ({ children }: { children: React.ReactNode }) => (
              <div
                className="snap-start flex-shrink-0 rounded-2xl
                           bg-gradient-to-r from-[var(--color-fiat)]
                           via-[var(--color-crypto)] to-[var(--color-gold)]
                           p-[1px]"
              >
                <div
                  className="rounded-2xl bg-white/80 backdrop-blur-sm
                             flex items-center justify-center
                             h-14 md:h-16 w-[180px] md:w-[220px]
                             shadow-sm"
                >
                  {children}
                </div>
              </div>
            );

            return p.href ? (
              <a
                key={`${p.name}-${idx}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block select-none"
              >
                <Frame>
                  <Content />
                </Frame>
              </a>
            ) : (
              <div key={`${p.name}-${idx}`} className="select-none">
                <Frame>
                  <Content />
                </Frame>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ссылка снизу для мобилы */}
      <div className="sm:hidden mt-4">
        <Link
          href="/partners"
          className="inline-flex text-sm font-semibold text-slate-900 hover:opacity-80"
        >
          View all partners →
        </Link>
      </div>
    </section>
  );
}
