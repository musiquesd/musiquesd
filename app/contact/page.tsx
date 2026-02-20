"use client"

import { SectionHeader } from "@/components/section-header"
import { useState } from "react"
import { Send, Loader2, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ContactPage() {
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
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        title={t("contact.title").toUpperCase()}
        subtitle={t("contact.subtitle")}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact info */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                <a
                  href="tel:5149434552"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  514-943-4552
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                <a
                  href="mailto:musiquesd90@gmail.com"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  musiquesd90@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.region")}</p>
                <p className="font-medium text-foreground">
                  {locale === "fr" ? "Montr\u00E9al, Qu\u00E9bec" : "Montr\u00E9al, Quebec"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2">
          {sent ? (
            <div className="flex h-full items-center justify-center rounded-lg border border-primary/30 bg-primary/5 p-12 text-center">
              <div>
                <h2 className="font-[var(--font-oswald)] text-2xl font-bold tracking-wider text-primary">
                  {locale === "fr" ? "MESSAGE ENVOY\u00C9\u00A0!" : "MESSAGE SENT!"}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {locale === "fr"
                    ? "Merci pour votre message. Je vous r\u00E9pondrai dans les plus brefs d\u00E9lais."
                    : "Thank you for your message. I will respond as soon as possible."}
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.formName")}
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
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.formSubject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={locale === "fr" ? "Sujet de votre message" : "Subject of your message"}
                  />
                </div>
                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    className="w-full rounded-md border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={t("contact.formMessagePlaceholder")}
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
                    : t("contact.formSubmit").toUpperCase()}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
