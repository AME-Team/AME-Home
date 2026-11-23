import { ArrowUpRight } from 'lucide-react'
import type { Dictionary, Locale } from '@/dictionaries'
import { LINKS } from '@/data/site'
import { formatDate } from '@/lib/format'

interface AtCoderHistoryItem {
  IsRated: boolean
  NewRating: number
  EndTime: string
}

interface AtCoderStatsData {
  rating: number
  highest: number
  matches: number
  lastContest: string
}

function isHistoryItem(value: unknown): value is AtCoderHistoryItem {
  if (typeof value !== 'object' || value === null) return false
  if (!('IsRated' in value) || !('NewRating' in value) || !('EndTime' in value)) return false
  return (
    typeof value.IsRated === 'boolean' &&
    typeof value.NewRating === 'number' &&
    typeof value.EndTime === 'string'
  )
}

async function fetchStats(): Promise<AtCoderStatsData | null> {
  try {
    const res = await fetch(`${LINKS.atcoder}/history/json`, {
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return null

    const data: unknown = await res.json()
    if (!Array.isArray(data)) return null

    const rated = data.filter(
      (item): item is AtCoderHistoryItem => isHistoryItem(item) && item.IsRated,
    )
    const last = rated.at(-1)
    if (last === undefined) return null

    return {
      rating: last.NewRating,
      highest: Math.max(...rated.map((item) => item.NewRating)),
      matches: rated.length,
      lastContest: last.EndTime.slice(0, 10),
    }
  } catch (error) {
    console.warn('AtCoder の参加履歴を取得できませんでした', error)
    return null
  }
}

export default async function AtCoderStatus({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary['software']['atcoder']
}): Promise<React.ReactNode> {
  const stats = await fetchStats()

  return (
    <div className="mt-6 flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          aria-hidden="true"
        >
          AC
        </span>
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{dict.title}</h3>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{dict.description}</p>
        </div>
      </div>

      {stats !== null && (
        <dl className="flex flex-wrap gap-x-8 gap-y-4">
          <div>
            <dt className="text-xs text-gray-600 dark:text-gray-400">{dict.rating}</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-gray-100">
              {stats.rating}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-600 dark:text-gray-400">{dict.highest}</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-gray-100">
              {stats.highest}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-600 dark:text-gray-400">{dict.matches}</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-gray-100">
              {stats.matches}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-600 dark:text-gray-400">{dict.lastContest}</dt>
            <dd className="mt-1 text-base font-semibold text-gray-900 dark:text-gray-100">
              {formatDate(lang, stats.lastContest)}
            </dd>
          </div>
        </dl>
      )}

      <a
        href={LINKS.atcoder}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:text-primary-hover"
      >
        {dict.profile}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}
