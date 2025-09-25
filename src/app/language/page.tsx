"use client";

import { useRouter } from "next/navigation";

const languages = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ru", label: "Русский" },
  { code: "zh", label: "中文" },
];

export default function LanguagesPage() {
  const router = useRouter();

  const handleSelect = (code: string) => {
    localStorage.setItem("lang", code);
    router.push("/");
  };

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 text-center bg-white text-gray-900">
      <ul className="space-y-4">
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className="cursor-pointer text-lg sm:text-xl hover:text-blue-600 transition-colors"
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </main>
  );
}
