import { Code2, Music } from 'lucide-react'
import type { Locale } from '@/dictionaries'
import { getMessage } from '@/dictionaries'

export default function Hero({ locale }: { locale: Locale }): React.ReactNode {
  const message = getMessage(locale, 'hero.message')

  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16 bg-navy">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          {message}
        </h1>
        <p className="mb-12 text-xl font-medium text-gray-300 md:text-2xl">
          {getMessage(locale, 'hero.subtitle')}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#it"
            className="group flex items-center justify-center gap-3 rounded border border-white/30 bg-white/10 px-8 py-4 text-white transition-all hover:bg-white/20"
          >
            <Code2 />
            <span className="font-semibold">{getMessage(locale, 'hero.btn_it')}</span>
          </a>
          <a
            href="#music"
            className="group flex items-center justify-center gap-3 rounded border border-white/30 bg-white/10 px-8 py-4 text-white transition-all hover:bg-white/20"
          >
            <Music />
            <span className="font-semibold">{getMessage(locale, 'hero.btn_music')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
