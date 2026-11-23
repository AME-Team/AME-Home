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
