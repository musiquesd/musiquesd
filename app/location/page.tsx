"use client"

import { SectionHeader } from "@/components/section-header"
import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function LocationPage() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const { t, locale } = useLanguage()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeader
        title={t("location.title").toUpperCase()}
        subtitle={t("location.subtitle")}
      />

      {sent ? (
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-12 text-center">
          <h2 className="font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-primary">
            {locale === "fr" ? "MERCI\u00A0!" : "THANK YOU!"}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {locale === "fr"
              ? "Votre demande a \u00E9t\u00E9 envoy\u00E9e. Une soumission vous sera envoy\u00E9e sous peu."
              : "Your request has been sent. A quote will be sent to you shortly."}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-card p-8 md:p-12"
        >
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                {t("location.formName")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={locale === "fr" ? "Votre nom" : "Your name"}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                {t("location.formEmail")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={locale === "fr" ? "votre@courriel.com" : "your@email.com"}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                {t("location.formPhone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="514-000-0000"
              />
            </div>
            <div>
              <label htmlFor="eventDate" className="mb-2 block text-sm font-medium text-foreground">
                {t("location.formDate")}
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="equipment" className="mb-2 block text-sm font-medium text-foreground">
                {t("location.formEquipment")}
              </label>
              <textarea
                id="equipment"
                name="equipment"
                required
                rows={4}
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={t("location.formEquipmentPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="details" className="mb-2 block text-sm font-medium text-foreground">
                {locale === "fr" ? "D\u00E9tails suppl\u00E9mentaires" : "Additional details"}
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={locale === "fr" ? "Type d\u2019\u00E9v\u00E9nement, nombre de personnes, etc." : "Event type, number of people, etc."}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 font-[var(--font-oswald)] text-sm font-bold tracking-wider text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {sending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {sending
                ? (locale === "fr" ? "ENVOI EN COURS..." : "SENDING...")
                : t("location.formSubmit").toUpperCase()}
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
