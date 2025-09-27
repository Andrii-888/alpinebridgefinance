"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/language"; // скрываем header/footer на /language

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      {!hideLayout && <SiteHeader />}

      {/* Main: тянется, чтобы прижать футер вниз; контейнер — внутри */}
      <main className={`${!hideLayout ? "pt-14 md:pt-16" : ""} flex-1`}>
        <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-10 md:py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      {!hideLayout && <SiteFooter />}
    </div>
  );
}
