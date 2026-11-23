import { ArrowUpRight, ShoppingBag, Youtube } from 'lucide-react'
import type { Dictionary, Locale } from '@/dictionaries'
import { LINKS, SCORES, scoreTitle, type Score } from '@/data/site'
import { formatDate, formatPrice } from '@/lib/format'
import Section from '../layout/Section'

function ScoreCard({
  score,
  lang,
  dict,
}: {
  score: Score
  lang: Locale
  dict: Dictionary['music']
}): React.ReactNode {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-150 ease-out hover:border-primary-border dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <time dateTime={score.releasedAt} className="text-gray-600 dark:text-gray-400">
          {formatDate(lang, score.releasedAt)}
        </time>
        {score.isNew === true && (
          <span className="rounded-md bg-primary-solid px-2 py-1 font-semibold text-white">
            {dict.new}
          </span>
        )}
      </div>

      <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {scoreTitle(score, lang)}
      </h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{score.artist[lang]}</p>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {[
          dict.formats[score.format],
          dict.difficulty[score.difficulty],
          dict.pages.replace('{count}', String(score.pages)),
          formatPrice(lang, score.price),
        ].join(' / ')}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm font-medium">
        <a
          href={score.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:text-primary-hover"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          {dict.buy}
        </a>
        {score.videoUrl !== undefined && (
          <a
            href={score.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 transition-colors duration-150 ease-out hover:text-primary dark:text-gray-400"
          >
            <Youtube className="size-4" aria-hidden="true" />
            {dict.video}
          </a>
        )}
      </div>
    </article>
  )
}

export default function MusicSection({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary['music']
}): React.ReactNode {
  return (
    <Section
      id="music"
      title={dict.title}
      description={dict.description}
      action={
        <a
          href={LINKS.piascore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:text-primary-hover"
        >
          {dict.storeLink}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SCORES.map((score) => (
          <ScoreCard key={score.id} score={score} lang={lang} dict={dict} />
        ))}
      </div>

      <div className="mt-8 flex justify-end text-xs text-gray-500 dark:text-gray-400">
        <a
          href={LINKS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium text-gray-600 transition-colors duration-150 ease-out hover:text-primary dark:text-gray-400"
        >
          <Youtube className="size-4" aria-hidden="true" />
          {dict.channelLink}
        </a>
      </div>
    </Section>
  )
}
