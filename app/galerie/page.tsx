"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { galleryItems, type GalleryCategory, type GalleryItem } from "@/lib/gallery-data"
import { Mic2, Wrench, Disc3 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all")
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const { t, locale } = useLanguage()

  const categories: { key: GalleryCategory | "all"; label: string; icon: typeof Mic2 }[] = [
    { key: "all", label: locale === "fr" ? "Tout" : "All", icon: Disc3 },
    { key: "studio", label: locale === "fr" ? "Studio Enregistrement" : "Recording Studio", icon: Mic2 },
    { key: "equipement", label: locale === "fr" ? "\u00C9quipement" : "Equipment", icon: Wrench },
    { key: "dj", label: locale === "fr" ? "DJ / Soir\u00E9e festive" : "DJ / Party", icon: Disc3 },
  ]

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const currentIndex = lightboxItem
    ? filteredItems.findIndex((i) => i.id === lightboxItem.id)
    : -1

  function handlePrev() {
    if (currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1])
    }
  }

  function handleNext() {
    if (currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1])
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeader
        title={t("gallery.title").toUpperCase()}
        subtitle={t("gallery.subtitle")}
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon
          const isActive = activeCategory === cat.key
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
            >
              <Icon className="h-4 w-4" />
              {cat.label}
            </button>
          )
        })}
      </div>

      <p className="mb-6 text-center text-sm text-muted-foreground">
        {filteredItems.length} photo{filteredItems.length !== 1 ? "s" : ""}
      </p>

      <GalleryGrid items={filteredItems} onSelect={setLightboxItem} />

      {lightboxItem && (
        <GalleryLightbox
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
          onPrev={currentIndex > 0 ? handlePrev : undefined}
          onNext={currentIndex < filteredItems.length - 1 ? handleNext : undefined}
        />
      )}
    </section>
  )
}
