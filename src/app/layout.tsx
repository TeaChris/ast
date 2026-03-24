import type { Metadata } from 'next'
import { Comfortaa, Geist } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const comfortaa = Comfortaa({
      preload: true,
      display: 'swap',
      subsets: ['latin'],
      fallback: ['sans-serif'],
      variable: '--font-comfortaa',
      weight: ['400', '500', '600', '700'],
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
                        'font-sans',
                        geist.variable,
                  )}
            >
                  <body className="min-h-full flex flex-col">{children}</body>
            </html>
      )
}
