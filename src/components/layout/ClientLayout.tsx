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
  const hideLayout = pathname === "/language";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      {!hideLayout && <SiteHeader />}

      <main
        className={[
          "flex-1 w-full max-w-6xl mx-auto px-4 py-8 sm:py-10 md:py-12",
          !hideLayout ? "pt-14 md:pt-16" : "",
        ].join(" ")}
      >
        {children}
      </main>

      {/* Footer */}
      {!hideLayout && <SiteFooter />}
    </div>
  );
}
