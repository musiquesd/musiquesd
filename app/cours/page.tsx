"use client"

import { SectionHeader } from "@/components/section-header"
import {
  BookOpen, Mic2, Piano, Guitar, Drum, Headphones, Music,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const courseKeys = [
  { icon: BookOpen, key: "theorie" },
  { icon: Mic2, key: "chant" },
  { icon: Piano, key: "piano" },
  { icon: Guitar, key: "basse" },
  { icon: Guitar, key: "guitare" },
  { icon: Drum, key: "batterie" },
  { icon: Headphones, key: "ukulele" },
]

export default function CoursPage() {
  const { t, locale } = useLanguage()

  const levelLabel = (key: string) => {
    if (key === "theorie") return locale === "fr" ? "D\u00E9butant" : "Beginner"
    if (key === "ukulele") return locale === "fr" ? "D\u00E9butant" : "Beginner"
    return locale === "fr" ? "Tous niveaux" : "All levels"
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        title={t("cours.title").toUpperCase()}
        subtitle={t("cours.subtitle")}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {courseKeys.map((course) => {
          const Icon = course.icon
          return (
            <div
              key={course.key}
              className="group flex gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-[var(--font-oswald)] text-lg font-bold tracking-wider text-foreground">
                    {t(`cours.instruments.${course.key}.title`)}
                  </h3>
                  <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                    {levelLabel(course.key)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`cours.instruments.${course.key}.description`)}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-16 flex items-center gap-3 rounded-lg border border-border bg-card p-6">
        <Music className="h-6 w-6 shrink-0 text-primary" />
        <p className="text-muted-foreground">
          {locale === "fr"
            ? "Des vid\u00E9os tutoriel sont aussi disponibles. Contactez-moi pour en savoir plus sur les horaires et les tarifs."
            : "Tutorial videos are also available. Contact me to learn more about schedules and pricing."}
        </p>
      </div>
    </section>
  )
}
