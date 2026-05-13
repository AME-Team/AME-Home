import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Taito Amemiya | IT Engineer & Musician',
  description: 'Portfolio of Taito Amemiya - IT Engineer and Musician.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactNode {
  return (
    <html lang="ja" className="scroll-smooth antialiased">
      <body className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
