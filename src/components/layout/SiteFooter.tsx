"use client";

import Link from "next/link";

const legalLinks = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/privacy", label: "Privacy" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-gray-500">
        <p>© {year} AlpineBridgeFinance</p>

        <nav aria-label="Footer" className="flex gap-4">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
