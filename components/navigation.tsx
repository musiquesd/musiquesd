"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "./language-switcher"

const navKeys = [
  { href: "/a-propos", key: "nav.about" },
  { href: "/studio", key: "nav.studio" },
  { href: "/dj-animation", key: "nav.dj" },
  { href: "/location", key: "nav.location" },
  { href: "/cours", key: "nav.courses" },
  { href: "/galerie", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="MusiqueSD - Studio Desjardins"
            width={160}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {navKeys.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-3">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navKeys.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
