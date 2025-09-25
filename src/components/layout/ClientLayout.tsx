"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/language"; // скрываем header/footer на /language

  return (
    <>
      {!hideLayout && <SiteHeader />}

      <main className="mx-auto mt-16 min-h-[70vh] w-full max-w-6xl px-4 py-8 sm:py-10 md:py-12 lg:mt-20">
        {children}
      </main>

      {!hideLayout && (
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} AlpineBridgeFinance</p>
            <nav className="flex gap-4">
              <Link href="/legal/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/legal/privacy" className="hover:underline">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      )}
    </>
  );
}
