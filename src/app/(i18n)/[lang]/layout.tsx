import type { Metadata, Viewport } from 'next'
import '@/app/globals.css'
import { getDictionary, type Locale } from '@/dictionaries'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ja: '/ja',
        en: '/en',
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: 'AME',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export function generateStaticParams(): { lang: string }[] {
  return [{ lang: 'ja' }, { lang: 'en' }]
}

// 初回描画時のテーマちらつき（FOUC）を防ぐため、本文の描画前に .dark を適用する。
const THEME_INIT_SCRIPT = `(function(){try{var s=JSON.parse(localStorage.getItem('app_settings')||'{}');var m=s&&s.themeMode;var dark=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.style.colorScheme=dark?'dark':'light';}catch(e){}})();`

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}>): Promise<React.ReactNode> {
  const { lang } = await params

  return (
    <html lang={lang} className="scroll-smooth motion-reduce:scroll-auto" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {children}
      </body>
    </html>
  )
}
