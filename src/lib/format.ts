import type { Locale } from '@/dictionaries'

const localeMaps = {
  ja: 'ja-JP',
  en: 'en-US',
} as const satisfies Record<Locale, string>

/**
 * 掲載日は日本時間のカレンダー日付として扱う。
 * timeZone を指定しないとビルド環境（CI は UTC）のタイムゾーンで整形され、日付が 1 日ずれる。
 */
const SITE_TIME_ZONE = 'Asia/Tokyo'

export function formatDate(lang: Locale, isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00+09:00`)
  return new Intl.DateTimeFormat(localeMaps[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: SITE_TIME_ZONE,
  }).format(date)
}

export function formatPrice(lang: Locale, price: number): string {
  return new Intl.NumberFormat(localeMaps[lang], {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price)
}
