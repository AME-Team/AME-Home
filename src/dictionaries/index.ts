import ja from './ja.json'
import en from './en.json'

const dictionaries = {
  ja,
  en,
}

export type Locale = keyof typeof dictionaries
export type Dictionary = typeof ja

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]
}

export const getMessage = (locale: Locale, key: string): string => {
  const dictionary = dictionaries[locale]
  const result = key.split('.').reduce((obj: unknown, k: string) => {
    if (typeof obj === 'object' && obj !== null && k in obj) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
      return (obj as Record<string, unknown>)[k]
    }
    return null
  }, dictionary)
  return typeof result === 'string' ? result : ''
}
