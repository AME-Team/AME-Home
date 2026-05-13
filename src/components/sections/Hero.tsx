import { Code2, Music } from 'lucide-react'
import type { Locale } from '@/dictionaries'
import { getMessage } from '@/dictionaries'

export default function Hero({ locale }: { locale: string }): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const typedLocale = locale as Locale
  const message = getMessage(typedLocale, 'hero.message')

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 flex">
        <div className="w-1/2 bg-gradient-to-br from-blue-500/20 to-transparent" />
        <div className="w-1/2 bg-gradient-to-bl from-purple-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            {message}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-12">
          {getMessage(typedLocale, 'hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#it"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 transition-all"
          >
            <Code2 />
            <span className="font-semibold">{getMessage(typedLocale, 'hero.btn_it')}</span>
          </a>
          <a
            href="#music"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30 transition-all"
          >
            <Music />
            <span className="font-semibold">{getMessage(typedLocale, 'hero.btn_music')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
