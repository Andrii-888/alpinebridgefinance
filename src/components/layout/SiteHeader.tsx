"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TextAlignJustify, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/compliance", label: "Compliance" },
  { href: "/pricing", label: "Pricing" },
  { href: "/offices", label: "Offices" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Блокируем скролл страницы при открытом меню
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.documentElement.style.overflow = prev || "";
    };
  }, [open]);

  return (
    <>
      {/* фиксированный хедер; на мобиле при открытом меню он скрыт */}
      <header
        className={`fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
          open ? "md:block hidden" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* бренд показываем только на десктопе */}
          <Link
            href="/"
            className="hidden font-medium tracking-tight text-gray-900 md:inline"
            aria-label="AlpineBridgeFinance"
          >
            AlpineBridgeFinance
          </Link>

          {/* десктоп-меню */}
          <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="hover:text-gray-900 transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          {/* мобильная кнопка (две черточки) */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300/70 md:hidden active:scale-95 transition"
          >
            <TextAlignJustify className="h-6 w-6 text-gray-900" />
          </button>
        </div>
      </header>

      {/* фуллскрин-меню на мобиле: без хедера/бренда, только крестик и ссылки */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-white md:hidden">
          {/* только крестик сверху справа */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300/70 active:scale-95 transition bg-white"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>

          {/* список ссылок по центру экрана */}
          <nav className="flex h-full flex-col items-center justify-center gap-6 px-6 text-2xl font-medium text-gray-800 md:text-3xl">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="hover:text-gray-600 transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
