import type { Metadata } from 'next'
import '@/app/globals.css'
import { Locale } from '@/dictionaries'

export const metadata: Metadata = {
  title: 'Taito Amemiya | IT Engineer & Musician',
  description: 'Portfolio of Taito Amemiya - IT Engineer and Musician.',
}

export function generateStaticParams(): { lang: string }[] {
  return [{ lang: 'ja' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}>): Promise<React.ReactNode> {
  const { lang } = await params
  return (
    <html lang={lang} className="scroll-smooth antialiased">
      <body className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
