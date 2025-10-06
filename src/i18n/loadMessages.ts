export const SUPPORTED_LOCALES = ["en", "it", "ru"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Ленивая загрузка словаря по коду языка.
 * Если язык неизвестен/ошибка — отдаём EN.
 * Готово к расширению (позже добавим сборку из нескольких файлов-модулей).
 */
export async function loadMessages(
  locale: string
): Promise<Record<string, unknown>> {
  const safeLocale: Locale = (SUPPORTED_LOCALES as readonly string[]).includes(
    locale
  )
    ? (locale as Locale)
    : DEFAULT_LOCALE;

  try {
    switch (safeLocale) {
      case "it": {
        const mod = await import("./messages/it/it.json");
        return mod.default;
      }
      case "ru": {
        const mod = await import("./messages/ru/ru.json");
        return mod.default;
      }
      case "en":
      default: {
        const mod = await import("./messages/en/en.json");
        return mod.default;
      }
    }
  } catch {
    const mod = await import("./messages/en/en.json");
    return mod.default;
  }
}
