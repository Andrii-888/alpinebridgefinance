"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/config/nav";

type Props = {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void; // удобно для закрытия мобильного меню
  size?: "sm" | "lg";       // sm — для хедера, lg — для мобильного меню
  align?: "center" | "start";
};

export default function NavLinks({
  items,
  className = "",
  onItemClick,
  size = "sm",
  align = "center",
}: Props) {
  const pathname = usePathname();

  const baseText =
    size === "sm"
      ? "text-sm text-gray-700 hover:text-gray-900"
      : "text-2xl md:text-3xl text-gray-800 hover:text-gray-600";

  const layout =
    align === "center"
      ? "items-center justify-center"
      : "items-start justify-start";

  return (
    <nav className={`flex gap-6 ${layout} ${className}`}>
      {items.map((i) => {
        const active =
          i.href === "/"
            ? pathname === "/"
            : pathname.startsWith(i.href);

        return (
          <Link
            key={i.href}
            href={i.href}
            onClick={onItemClick}
            className={`${baseText} transition-colors ${
              active ? "font-medium" : ""
            }`}
          >
            {i.label}
          </Link>
        );
      })}
    </nav>
  );
}
