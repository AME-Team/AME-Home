import { Code2, Music } from 'lucide-react'
import type { Locale } from '@/dictionaries'
import { getMessage } from '@/dictionaries'

export default function Hero({ locale }: { locale: Locale }): React.ReactNode {
  const message = getMessage(locale, 'hero.message')

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 flex opacity-20">
        <div className="w-1/2 bg-linear-to-br from-blue-500/20 to-transparent" />
        <div className="w-1/2 bg-linear-to-bl from-purple-500/20 to-transparent" />
      </div>

      <div className="z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tighter md:text-7xl">
          <span className="block bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {message}
          </span>
        </h1>
        <p className="mb-12 text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-300">
          {getMessage(locale, 'hero.subtitle')}
        </p>

        <div className="flex flex-col justify-center gap-6 sm:flex-row">
          <a
            href="#it"
            className="group flex items-center justify-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-8 py-4 text-blue-600 transition-all hover:bg-blue-500/20 dark:text-blue-400"
          >
            <Code2 />
            <span className="font-semibold">{getMessage(locale, 'hero.btn_it')}</span>
          </a>
          <a
            href="#music"
            className="group flex items-center justify-center gap-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-8 py-4 text-purple-600 transition-all hover:bg-purple-500/20 dark:text-purple-400"
          >
            <Music />
            <span className="font-semibold">{getMessage(locale, 'hero.btn_music')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
