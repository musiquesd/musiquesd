"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { type Locale, getTranslation } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
  tObject: (key: string) => Record<string, unknown>
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? match[2] : undefined
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = getCookie("msd-locale") as Locale | undefined
    if (saved === "en" || saved === "fr") {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    setCookie("msd-locale", newLocale)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const result = getTranslation(locale, key)
      if (typeof result === "string") return result
      return key
    },
    [locale]
  )

  const tArray = useCallback(
    (key: string): string[] => {
      const result = getTranslation(locale, key)
      if (Array.isArray(result)) return result as string[]
      return []
    },
    [locale]
  )

  const tObject = useCallback(
    (key: string): Record<string, unknown> => {
      const result = getTranslation(locale, key)
      if (typeof result === "object" && !Array.isArray(result)) return result as Record<string, unknown>
      return {}
    },
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tArray, tObject }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}
