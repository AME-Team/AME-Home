import { ArrowRight, Clock, Github, Music } from 'lucide-react'
import type { Dictionary, Locale } from '@/dictionaries'
import { getRecentActivity, LINKS, type ActivityKind } from '@/data/site'
import { formatDate } from '@/lib/format'

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }): React.ReactNode {
  const activities = getRecentActivity(lang)
  const kindLabels: Record<ActivityKind, string> = {
    score: dict.music.platform,
    note: dict.writing.noteLabel,
    qiita: dict.writing.qiitaLabel,
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <h1
              className={`text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-gray-100 ${
                lang === 'ja' ? 'tracking-wide' : 'tracking-tight'
              }`}
            >
              {dict.hero.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#music"
                className="inline-flex items-center gap-2 rounded-md bg-primary-solid px-4 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-primary-solid-hover"
              >
                <Music className="size-4" aria-hidden="true" />
                {dict.hero.primaryCta}
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition-colors duration-150 ease-out hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <Github className="size-4" aria-hidden="true" />
                {dict.hero.secondaryCta}
              </a>
              <a
                href="#writing"
                className="inline-flex items-center gap-2 py-2 text-sm font-medium text-gray-600 transition-colors duration-150 ease-out hover:text-primary dark:text-gray-400"
              >
                {dict.hero.tertiaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="recent-activity"
            className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800"
          >
            <h2
              id="recent-activity"
              className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100"
            >
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {dict.hero.recentTitle}
            </h2>

            <ul className="mt-4 space-y-4">
              {activities.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-medium text-primary">{kindLabels[item.kind]}</span>
                      <span aria-hidden="true" className="text-gray-400">
                        ·
                      </span>
                      <time dateTime={item.date} className="text-gray-600 dark:text-gray-400">
                        {formatDate(lang, item.date)}
                      </time>
                    </span>
                    <span className="mt-1 block text-sm font-medium leading-relaxed text-gray-800 transition-colors duration-150 ease-out group-hover:text-primary dark:text-gray-200">
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
