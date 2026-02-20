"use client"

import { useEffect, useState } from "react"
import { type GalleryItem } from "@/lib/gallery-data"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface GalleryLightboxProps {
  item: GalleryItem
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const { locale } = useLanguage()

  function getCategoryLabel(cat: string) {
    if (locale === "en") {
      switch (cat) {
        case "studio": return "Recording Studio"
        case "equipement": return "Equipment"
        case "dj": return "DJ / Party"
        default: return cat
      }
    }
    switch (cat) {
      case "studio": return "Studio Enregistrement"
      case "equipement": return "\u00C9quipement"
      case "dj": return "DJ / Soir\u00E9e festive"
      default: return cat
    }
  }

  const title = locale === "en" && item.titleEn ? item.titleEn : item.title
  const description = locale === "en" && item.descriptionEn ? item.descriptionEn : item.description

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && onPrev) onPrev()
      if (e.key === "ArrowRight" && onNext) onNext()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-border bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {getCategoryLabel(item.category)}
            </span>
            <h2 className="font-[var(--font-oswald)] text-xl font-bold tracking-wider text-foreground">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={locale === "fr" ? "Fermer" : "Close"}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <LightboxImage item={item} />

        <div className="border-t border-border px-6 py-4">
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-muted-foreground shadow-lg transition-colors hover:text-primary"
            aria-label={locale === "fr" ? "Photo pr\u00E9c\u00E9dente" : "Previous photo"}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-card p-2 text-muted-foreground shadow-lg transition-colors hover:text-primary"
            aria-label={locale === "fr" ? "Photo suivante" : "Next photo"}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}

function LightboxImage({ item }: { item: GalleryItem }) {
  const [error, setError] = useState(false)
  const src = `/gallery/${encodeURIComponent(item.filename)}`

  if (error) {
    return (
      <div className="flex h-80 items-center justify-center bg-secondary p-8 md:h-[28rem]">
        <div className="flex flex-col items-center gap-3 text-center">
          <Camera className="h-16 w-16 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{item.filename}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-80 items-center justify-center bg-secondary md:h-[28rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={item.title}
        className="max-h-full max-w-full object-contain p-4"
        onError={() => setError(true)}
      />
    </div>
  )
}
