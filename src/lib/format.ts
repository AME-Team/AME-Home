import type { Locale } from '@/dictionaries'

const localeMaps = {
  ja: 'ja-JP',
  en: 'en-US',
} as const satisfies Record<Locale, string>

export function formatDate(lang: Locale, isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00+09:00`)
  return new Intl.DateTimeFormat(localeMaps[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatPrice(lang: Locale, price: number): string {
  return new Intl.NumberFormat(localeMaps[lang], {
    style: 'currency',
    currency: 'JPY',
    maximumFractionDigits: 0,
  }).format(price)
}
