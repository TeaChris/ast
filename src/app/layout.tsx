import type { Metadata } from 'next'
import { Comfortaa, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const comfortaa = Comfortaa({
      preload: true,
      display: 'swap',
      subsets: ['latin'],
      fallback: ['sans-serif'],
      variable: '--font-comfortaa',
      weight: ['400', '500', '600', '700'],
})

const cormorantGaramond = Cormorant_Garamond({
      preload: true,
      display: 'swap',
      subsets: ['latin'],
      variable: '--font-serif',
      weight: ['300', '400', '500', '600', '700'],
      style: ['normal', 'italic'],
})

export const metadata: Metadata = {
      icons: {
            icon: '/icon.svg',
      },
      title: 'Aura — Premium Appointment Scheduling',
      description:
            'Aura is a premium, intelligent appointment scheduling platform for elite concierge service businesses. Eliminate no-shows, automate reminders, and delight your clients.',
}

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode
}>) {
      return (
            <html
                  lang="en"
                  className={cn(
                        'h-full',
                        'antialiased',
                        comfortaa.variable,
                        cormorantGaramond.variable,
                  )}
            >
                  <body className={cn(
                    "min-h-full flex flex-col bg-background text-foreground animate-in fade-in duration-500",
                    comfortaa.className
                  )}>
                        {children}
                  </body>
            </html>
      )
}
