import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: "MusiqueSD | Studio d\u2019enregistrement, DJ, Animation, Cours de musique \u2013 Montr\u00E9al",
  description:
    "MusiqueSD par Marc Desjardins \u2013 Studio d\u2019enregistrement professionnel, DJ et animation pour mariages, festivals et \u00E9v\u00E9nements corporatifs, location d\u2019\u00E9quipement audio, cours de musique en ligne (piano, guitare, chant, batterie). 20 ans d\u2019exp\u00E9rience \u00E0 Montr\u00E9al.",
  keywords: [
    "studio enregistrement Montr\u00E9al",
    "DJ mariage Montr\u00E9al",
    "animation \u00E9v\u00E9nement",
    "cours de musique en ligne",
    "location \u00E9quipement audio",
    "MusiqueSD",
    "Marc Desjardins",
    "cours piano en ligne",
    "cours guitare en ligne",
    "DJ f\u00EAte",
    "production musicale",
    "studio d\u2019enregistrement",
  ],
  openGraph: {
    title: "MusiqueSD | Studio, DJ, Animation, Cours de musique",
    description: "Votre partenaire musical depuis 20 ans. Studio, DJ, location d\u2019\u00E9quipement et cours en ligne.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
