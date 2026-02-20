"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center overflow-hidden rounded-md border border-border text-sm font-medium">
      <button
        onClick={() => setLocale("fr")}
        className={`px-3 py-1.5 transition-colors ${
          locale === "fr"
            ? "bg-primary text-primary-foreground"
            : "bg-card text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Fran\u00E7ais"
      >
        FR
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-card text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
