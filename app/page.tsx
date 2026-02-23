"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Mic2,
  PartyPopper,
  MonitorPlay,
  GraduationCap,
  Phone,
  Mail,
  Star,
  Music,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const serviceCardKeys = [
  { href: "/studio", icon: Mic2, tKey: "studio", image: "/images/hero-studio.jpg" },
  { href: "/dj-animation", icon: PartyPopper, tKey: "dj", image: "/images/hero-dj.jpg" },
  { href: "/location", icon: MonitorPlay, tKey: "location", image: "/images/hero-location.jpg" },
  { href: "/cours", icon: GraduationCap, tKey: "cours", image: "/images/hero-cours.jpg" },
]

const software = [
  "Studio One",
  "Arturia Lab",
  "Kontakt 8",
  "Keyscape",
  "Guitar Rig",
  "iZotope",
  "Melodyne",
  "OBS Studio",
  "Roland Cloud",
  "Spitfire Audio",
]

export default function HomePage() {
  const { t, locale } = useLanguage()

  const eventTypes =
    locale === "fr"
      ? [
          "Mariages",
          "Festivals",
          "F\u00EAtes d\u2019enfants",
          "\u00C9v\u00E9nements corporatifs",
          "\u00C9v\u00E9nements sportifs",
          "Partys de No\u00EBl",
          "\u00C9v\u00E9nements scolaires",
          "Anniversaires (30, 40, 50, 60, 70\u00E8me)",
        ]
      : [
          "Weddings",
          "Festivals",
          "Children\u2019s parties",
          "Corporate events",
          "Sporting events",
          "Christmas parties",
          "School events",
          "Milestone birthdays",
        ]

  const courseTypes =
    locale === "fr"
      ? [
          "Cours d\u00E9butant (th\u00E9orique)",
          "Cours de chant",
          "Cours de piano",
          "Cours de basse",
          "Cours de guitare",
          "Cours de batterie",
          "Cours de studio",
        ]
      : [
          "Beginner course (theory)",
          "Voice lessons",
          "Piano lessons",
          "Bass lessons",
          "Guitar lessons",
          "Drum lessons",
          "Studio production lessons",
        ]

  const studioFeatures =
    locale === "fr"
      ? [
          "Enregistrement voix et instruments",
          "Production et mixage professionnel",
          "Vid\u00E9o YouTube et contenu multim\u00E9dia",
          "Plus de 15 logiciels et milliers de plugins",
        ]
      : [
          "Voice and instrument recording",
          "Professional production and mixing",
          "YouTube videos and multimedia content",
          "Over 15 software and thousands of plugins",
        ]

  const seeAll = locale === "fr" ? "+ Voir tout" : "+ See all"
  const learnMore = locale === "fr" ? "En savoir plus" : "Learn more"

  return (
    <div>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-studio.jpg"
            alt="Studio d'enregistrement professionnel MusiqueSD"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col md:flex-row md:items-center">
          <div className="flex basis-2/3 flex-col gap-6 px-6 py-16 md:py-20 md:pr-12">
            <h1 className="max-w-xl font-[var(--font-oswald)] text-4xl font-bold leading-tight tracking-wide text-foreground md:text-5xl">
              {t("home.hero.title")}
              <span className="text-primary">{t("home.hero.titleAccent")}</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-[var(--font-oswald)] font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("home.hero.cta")}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/galerie"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-card/60 px-7 py-3.5 font-[var(--font-oswald)] font-semibold tracking-wider text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
              >
                {t("home.hero.gallery")}
              </Link>
            </div>
          </div>

          <div className="flex basis-1/3 items-center justify-center px-6 py-10 md:py-20">
            <Image
              src="/images/logo.jpg"
              alt="MusiqueSD - Studio Desjardins"
              width={420}
              height={147}
              className="h-auto w-full max-w-[420px] object-contain opacity-80 drop-shadow-lg md:max-w-xs"
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== 4 SERVICE CARDS ========== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
            {t("home.services.title").toUpperCase()}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("home.services.subtitle")}
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCardKeys.map((card) => {
            const Icon = card.icon
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={t(`home.serviceCards.${card.tKey}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-[var(--font-oswald)] text-xl font-bold tracking-wider text-foreground">
                    {t(`home.serviceCards.${card.tKey}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`home.serviceCards.${card.tKey}.description`)}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary">
                    {learnMore}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ========== ABOUT / WHO IS MARC ========== */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
          <div className="flex-shrink-0">
            <Image
              src="/images/marc.png"
              alt="Marc Desjardins, fondateur de MusiqueSD"
              width={280}
              height={350}
              className="rounded-xl border-2 border-primary/30 object-cover shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
              MARC DESJARDINS
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("home.about.p1")}
            </p>
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              {t("home.about.p2")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                {t("home.about.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                {t("home.finalCta.cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STUDIO SPOTLIGHT ========== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <Mic2 className="h-4 w-4" />
              {t("home.serviceCards.studio.title")}
            </div>
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
              {t("home.spotlight.studioTitle").toUpperCase()}
            </h2>
            <p className="max-w-lg leading-relaxed text-muted-foreground">
              {t("home.spotlight.studioP1")}
            </p>
            <ul className="flex flex-col gap-2">
              {studioFeatures.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/studio"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 font-[var(--font-oswald)] font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("home.serviceCards.studio.cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/hero-studio.jpg"
              alt="Studio d'enregistrement MusiqueSD"
              width={600}
              height={400}
              className="rounded-xl border border-border object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ========== DJ / ANIMATION ========== */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-12 md:flex-row-reverse md:items-center">
            <div className="flex flex-1 flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                <PartyPopper className="h-4 w-4" />
                {t("home.serviceCards.dj.title")}
              </div>
              <h2 className="font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
                {t("home.spotlight.djTitle").toUpperCase()}
              </h2>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                {t("home.spotlight.djP1")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {eventTypes.map((evt) => (
                  <span
                    key={evt}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Star className="h-3 w-3 flex-shrink-0 text-primary" />
                    {evt}
                  </span>
                ))}
              </div>
              <Link
                href="/dj-animation"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 font-[var(--font-oswald)] font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("home.spotlight.djCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative flex-1">
              <Image
                src="/images/hero-dj.jpg"
                alt="DJ MusiqueSD"
                width={600}
                height={400}
                className="rounded-xl border border-border object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== COURSES ========== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <GraduationCap className="h-4 w-4" />
              {t("home.serviceCards.cours.title")}
            </div>
            <h2 className="font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
              {t("home.spotlight.coursTitle").toUpperCase()}
            </h2>
            <p className="max-w-lg leading-relaxed text-muted-foreground">
              {t("home.spotlight.coursP1")}
            </p>
            <div className="flex flex-col gap-2">
              {courseTypes.map((course) => (
                <span
                  key={course}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Music className="h-3 w-3 flex-shrink-0 text-primary" />
                  {course}
                </span>
              ))}
            </div>
            <Link
              href="/cours"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 font-[var(--font-oswald)] font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("home.spotlight.coursCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative flex-1">
            <Image
              src="/images/hero-cours.jpg"
              alt="Online music lessons MusiqueSD"
              width={600}
              height={400}
              className="rounded-xl border border-border object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ========== EQUIPMENT / LOCATION ========== */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <MonitorPlay className="h-4 w-4" />
            {t("home.serviceCards.location.title")}
          </div>
          <h2 className="mt-4 font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
            {t("home.serviceCards.location.description").toUpperCase()}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("home.spotlight.studioP2")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-[var(--font-oswald)] text-lg font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("home.hero.cta")}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 font-[var(--font-oswald)] text-lg font-semibold tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {t("home.hero.gallery")}
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SOFTWARE / TECH BADGES ========== */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-foreground md:text-3xl">
            {t("home.tech.title").toUpperCase()}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t("home.tech.subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {software.map((sw) => (
            <span
              key={sw}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {sw}
            </span>
          ))}
          <Link
            href="/studio"
            className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            {seeAll}
          </Link>
        </div>
      </section>

      {/* ========== SOCIAL PROOF / STATS ========== */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          {[
            { value: "20+", label: t("home.stats.years") },
            { value: "100+", label: t("home.stats.events") },
            { value: "15+", label: t("home.stats.software") },
            { value: "7", label: t("home.stats.courseTypes") },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <span className="font-[var(--font-oswald)] text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-10 text-center md:p-16">
          <Headphones className="h-12 w-12 text-primary" />
          <h2 className="max-w-2xl font-[var(--font-oswald)] text-3xl font-bold tracking-wider text-foreground md:text-4xl">
            {t("home.finalCta.title").toUpperCase()}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("home.finalCta.description")}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-[var(--font-oswald)] text-lg font-semibold tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("home.finalCta.cta")}
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="tel:5149434552"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-4 font-[var(--font-oswald)] text-lg font-semibold tracking-wider text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              514-943-4552
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/a-propos" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.about")}
            </Link>
            <Link href="/studio" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.studio")}
            </Link>
            <Link href="/dj-animation" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.dj")}
            </Link>
            <Link href="/location" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.location")}
            </Link>
            <Link href="/cours" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.courses")}
            </Link>
            <Link href="/galerie" className="text-muted-foreground transition-colors hover:text-primary">
              {t("nav.gallery")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
