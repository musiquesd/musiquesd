"use client"

import { SectionHeader } from "@/components/section-header"
import { Mic2, Video, Headphones, Music } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const software = [
  "Studio One", "Filmora", "Arturia Lab", "Kontact 8", "Keyscape",
  "Guitar Rig", "Audacity", "OBS Studio", "Melodyne", "Izotope",
  "Roland Cloud", "UAudio", "Spitfire Audio", "Plugin Alliance",
  "Plugin Boutique", "UVI",
]

export default function StudioPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Mic2,
      title: t("studio.audioTitle"),
      desc: t("studio.audioDescription"),
    },
    {
      icon: Video,
      title: t("studio.videoTitle"),
      desc: t("studio.videoDescription"),
    },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        title={t("studio.title").toUpperCase()}
        subtitle={t("studio.subtitle")}
      />

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-[var(--font-oswald)] text-xl font-bold tracking-wider text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          )
        })}
      </div>

      <div className="rounded-lg border border-border bg-card p-8">
        <div className="mb-6 flex items-center gap-3">
          <Headphones className="h-6 w-6 text-primary" />
          <h2 className="font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-foreground">
            {t("studio.softwareTitle").toUpperCase()}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {software.map((s) => (
            <div
              key={s}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary p-3"
            >
              <Music className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
