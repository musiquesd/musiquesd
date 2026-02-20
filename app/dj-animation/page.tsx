"use client"

import { SectionHeader } from "@/components/section-header"
import {
  PartyPopper, Trophy, School, Tent,
  Heart, TreePine, Building2, Cake,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const eventKeys = [
  { icon: Cake, key: "prive" },
  { icon: Trophy, key: "sportif" },
  { icon: School, key: "scolaire" },
  { icon: Tent, key: "festival" },
  { icon: Heart, key: "mariage" },
  { icon: TreePine, key: "levee" },
  { icon: Building2, key: "corporatif" },
  { icon: PartyPopper, key: "other" },
]

export default function DJAnimationPage() {
  const { t, locale } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        title={t("dj.title").toUpperCase()}
        subtitle={t("dj.subtitle")}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {eventKeys.map((event) => {
          const Icon = event.icon
          return (
            <div
              key={event.key}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-[var(--font-oswald)] text-lg font-bold tracking-wider text-foreground">
                {t(`dj.events.${event.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`dj.events.${event.key}.description`)}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <h2 className="font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-primary">
          {locale === "fr" ? "INT\u00C9RESS\u00C9\u00A0?" : "INTERESTED?"}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {locale === "fr"
            ? "Contactez-moi pour une soumission personnalis\u00E9e selon votre \u00E9v\u00E9nement."
            : "Contact me for a personalized quote tailored to your event."}
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-md bg-primary px-8 py-3 font-[var(--font-oswald)] text-sm font-bold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t("nav.contact").toUpperCase()}
        </a>
      </div>
    </section>
  )
}
