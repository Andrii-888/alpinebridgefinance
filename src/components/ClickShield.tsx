"use client";
import { useEffect } from "react";

/**
 * Глобально перехватывает клики/тапы в capture-фазе
 * и отменяет их, если target находится внутри элемента
 * по CSS-селектору `selector`.
 */
export default function ClickShield({ selector }: { selector: string }) {
  useEffect(() => {
    const stopIfInside = (e: Event) => {
      const root = document.querySelector(selector);
      if (!root) return;
      const target = e.target as Node | null;
      if (target && root.contains(target)) {
        // «жёсткая» отмена
        e.preventDefault();
        // @ts-ignore
        e.stopImmediatePropagation?.();
        e.stopPropagation();
      }
    };

    // ВАЖНО: true => capture-фаза, раньше любых родителей
    document.addEventListener("click", stopIfInside, true);
    document.addEventListener("pointerdown", stopIfInside, true);
    document.addEventListener("touchstart", stopIfInside, true);

    return () => {
      document.removeEventListener("click", stopIfInside, true);
      document.removeEventListener("pointerdown", stopIfInside, true);
      document.removeEventListener("touchstart", stopIfInside, true);
    };
  }, [selector]);

  return null;
}
