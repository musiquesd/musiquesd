"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
    </svg>
  )
}

function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/logo.jpg"
            alt="MusiqueSD - Studio Desjardins"
            width={180}
            height={63}
            className="h-14 w-auto object-contain"
          />
          <h3 className="font-[var(--font-oswald)] text-lg font-bold tracking-wider text-foreground">
            MARC DESJARDINS
          </h3>
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <Link href="tel:5149434552" className="transition-colors hover:text-primary">
              514-943-4552
            </Link>
            <Link
              href="mailto:musiquesd90@gmail.com"
              className="transition-colors hover:text-primary"
            >
              musiquesd90@gmail.com
            </Link>
            <p className="mt-1 text-xs">{t("footer.region")}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/MUSIQUESD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/musiquesd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@musiquesd?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.twitch.tv/musiquesd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitch"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/@musiquesd5812"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            {`\u00A9 MusiqueSD. ${t("footer.rights")}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
