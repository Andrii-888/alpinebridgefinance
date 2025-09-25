"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, TextAlignJustify, X } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/compliance", label: "Compliance" },
  { href: "/pricing", label: "Pricing" },
  // { href: "/offices", label: "Offices" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Блокируем скролл + закрываем по Esc
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = open ? "hidden" : prev || "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.documentElement.style.overflow = prev || "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* фиксированный хедер */}
      <header
        className={`fixed top-0 z-50 w-full border-b border-gray-200/60 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
          open ? "md:block hidden" : ""
        }`}
      >
        <div className="relative mx-auto flex max-w-6xl items-center px-4 py-3 md:py-4">
          {/* слева: язык */}
          <Link
            href="/language"
            aria-label="Select language"
            className="inline-flex items-center justify-center p-2 text-gray-900 hover:opacity-70 focus:outline-none"
          >
            <Globe className="h-5 w-5" />
          </Link>

          {/* центр: меню (десктоп) */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-sm text-gray-700 md:flex">
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

          {/* справа: бургер (мобайл) */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex items-center justify-center p-2 text-gray-900 hover:opacity-70 md:hidden focus:outline-none"
          >
            <TextAlignJustify className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* фуллскрин-меню (мобайл) */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-white md:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* крестик */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex items-center justify-center p-2 text-gray-900 hover:opacity-70 focus:outline-none"
        >
          <X className="h-6 w-6" />
        </button>

        {/* список ссылок */}
        <nav
          className={`flex h-full flex-col items-center justify-center gap-6 px-6 text-2xl font-medium text-gray-800 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          } md:text-3xl`}
        >
          {nav.map((i, idx) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="hover:text-gray-600 transition-colors"
              style={{ transitionDelay: open ? `${idx * 40}ms` : "0ms" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
