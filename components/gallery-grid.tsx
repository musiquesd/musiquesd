"use client"

import { useState } from "react"
import { type GalleryItem } from "@/lib/gallery-data"
import { Camera } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface GalleryGridProps {
  items: GalleryItem[]
  onSelect: (item: GalleryItem) => void
}

export function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  const { locale } = useLanguage()

  function getCategoryLabel(cat: string) {
    if (locale === "en") {
      switch (cat) {
        case "studio": return "Studio"
        case "equipement": return "Equipment"
        case "dj": return "DJ"
        default: return cat
      }
    }
    switch (cat) {
      case "studio": return "Studio"
      case "equipement": return "\u00C9quipement"
      case "dj": return "DJ"
      default: return cat
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <Camera className="h-12 w-12 text-muted-foreground" />
        <p className="text-muted-foreground">
          {locale === "fr" ? "Aucune photo dans cette cat\u00E9gorie." : "No photos in this category."}
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="group relative overflow-hidden rounded-lg border border-border bg-card text-left transition-all hover:border-primary/50"
        >
          <GalleryThumbnail item={item} />

          <div className="p-3">
            <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {getCategoryLabel(item.category)}
            </span>
            <h3 className="text-sm font-semibold leading-tight text-foreground">
              {locale === "en" && item.titleEn ? item.titleEn : item.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {locale === "en" && item.descriptionEn ? item.descriptionEn : item.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}

function GalleryThumbnail({ item }: { item: GalleryItem }) {
  const [error, setError] = useState(false)
  const src = `/gallery/${encodeURIComponent(item.filename)}`

  if (error) {
    return (
      <div className="flex aspect-square items-center justify-center bg-secondary p-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <Camera className="h-8 w-8 text-muted-foreground" />
          <p className="text-xs font-medium text-muted-foreground">{item.filename}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="aspect-square overflow-hidden bg-secondary">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        onError={() => setError(true)}
      />
    </div>
  )
}
