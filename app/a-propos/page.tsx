"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { Music, Heart, Briefcase, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

const highlightIcons = [Heart, Briefcase, Music, Clock]

export default function AProposPage() {
  const { locale } = useLanguage()

  const highlights =
    locale === "fr"
      ? [
          { icon: Heart, title: "Famille", text: "Mari\u00E9 depuis 3 ans avec mon \u00E2me s\u0153ur de 2009. 4 filles\u00A0: Ana\u00EFs (11 ans), Oc\u00E9ane (11 ans), Livia (6 ans) et Estelle (1 an)." },
          { icon: Briefcase, title: "Carri\u00E8re", text: "G\u00E9rant des ventes chez Spinelli Mazda \u00E0 Lachine. Dans l\u2019automobile depuis 13 ans." },
          { icon: Music, title: "Passion", text: "Passionn\u00E9 de musique depuis l\u2019\u00E2ge de 15 ans. Plusieurs soir\u00E9es DJ/Animation et studio d\u2019enregistrement." },
          { icon: Clock, title: "Exp\u00E9rience", text: "20 ans d\u2019exp\u00E9rience musicale et d\u2019amusement. Mon hobbie, ma passion." },
        ]
      : [
          { icon: Heart, title: "Family", text: "Married for 3 years to my soulmate since 2009. 4 daughters: Ana\u00EFs (11), Oc\u00E9ane (11), Livia (6) and Estelle (1)." },
          { icon: Briefcase, title: "Career", text: "Sales manager at Spinelli Mazda in Lachine. In the automotive industry for 13 years." },
          { icon: Music, title: "Passion", text: "Passionate about music since the age of 15. Numerous DJ/hosting evenings and a recording studio." },
          { icon: Clock, title: "Experience", text: "20 years of musical experience and fun. My hobby, my passion." },
        ]

  const bio1 =
    locale === "fr"
      ? "Je suis Marc Desjardins, passionn\u00E9 de musique depuis l\u2019\u00E2ge de 15 ans. Mari\u00E9 depuis 3 ans avec mon \u00E2me s\u0153ur de 2009, papa de 4 merveilleuses filles\u00A0: Ana\u00EFs (11 ans), Oc\u00E9ane (11 ans), Livia (6 ans) et Estelle (1 an). G\u00E9rant des ventes chez Spinelli Mazda \u00E0 Lachine, je suis dans l\u2019automobile depuis 13 ans."
      : "I\u2019m Marc Desjardins, passionate about music since the age of 15. Married for 3 years to my soulmate since 2009, father of 4 wonderful daughters: Ana\u00EFs (11), Oc\u00E9ane (11), Livia (6) and Estelle (1). Sales manager at Spinelli Mazda in Lachine, I\u2019ve been in the automotive industry for 13 years."

  const bio2 =
    locale === "fr"
      ? "Avec 20 ans d\u2019exp\u00E9rience musicale et d\u2019amusement, j\u2019ai anim\u00E9 plusieurs soir\u00E9es DJ/Animation et exploit\u00E9 un studio d\u2019enregistrement pour le plaisir. Venez me d\u00E9couvrir et construire ensemble de la musique."
      : "With 20 years of musical experience and fun, I\u2019ve hosted numerous DJ/hosting evenings and run a recording studio for the love of it. Come discover me and let\u2019s make music together."

  const outro =
    locale === "fr"
      ? "Vous trouverez sur mon site plusieurs volets\u00A0: Studio d\u2019enregistrement, Animateur et DJ pour vos \u00E9v\u00E9nements, possibilit\u00E9 de louer l\u2019\u00E9quipement, cours en ligne pour vous ou vos enfants peu importe l\u2019instrument, des vid\u00E9os tutoriel et photos d\u2019\u00E9quipement."
      : "On my website you\u2019ll find several sections: Recording studio, Event hosting and DJ services, equipment rental, online lessons for you or your children on any instrument, tutorial videos and equipment photos."

  const outroEnd = locale === "fr" ? "Bonne visite\u00A0!" : "Enjoy your visit!"

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        title={locale === "fr" ? "\u00C0 PROPOS" : "ABOUT"}
        subtitle={locale === "fr" ? "D\u00E9couvrez qui se cache derri\u00E8re MusiqueSD" : "Discover the person behind MusiqueSD"}
      />

      <div className="mb-16 flex flex-col items-center gap-8 rounded-lg border border-border bg-card p-8 md:flex-row md:items-start md:p-12">
        <div className="shrink-0">
          <Image
            src="/images/marc.png"
            alt="Marc Desjardins"
            width={240}
            height={300}
            className="rounded-lg border-2 border-primary/30 object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-4 font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-foreground">
            MARC DESJARDINS
          </h2>
          <p className="text-lg leading-relaxed text-foreground">{bio1}</p>
          <p className="mt-4 text-lg leading-relaxed text-foreground">{bio2}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-[var(--font-oswald)] text-lg font-semibold tracking-wider text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-lg leading-relaxed text-foreground">{outro}</p>
        <p className="mt-4 font-[var(--font-oswald)] text-xl font-bold tracking-wider text-primary">
          {outroEnd}
        </p>
      </div>
    </section>
  )
}
