import Link from 'next/link'
import type { Dictionary, Locale } from '@/dictionaries'
import { NAV_ITEMS } from './nav'
import MobileNav from './MobileNav'
import Logo from './Logo'
import ThemeToggle from '../theme/ThemeToggle'

export default function Header({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary
}): React.ReactNode {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <div className="relative mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-base font-bold tracking-tight text-gray-900 dark:text-gray-100"
        >
          <Logo className="size-8" />
          <span>AME</span>
        </Link>

        <nav aria-label={dict.nav.sections} className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ href, key, Icon }) => (
            <Link
              key={key}
              href={href}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-150 ease-out hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              <Icon className="size-4" aria-hidden="true" />
              {dict.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle labels={dict.theme} />

          <div
            role="group"
            aria-label={dict.nav.language}
            className="flex items-center gap-1 rounded-md bg-gray-100 p-1 text-xs font-semibold dark:bg-gray-800"
          >
            <Link
              href="/ja"
              aria-current={lang === 'ja' ? 'page' : undefined}
              className={`rounded-md px-2 py-2 transition-colors duration-150 ease-out ${
                lang === 'ja'
                  ? 'bg-white text-primary dark:bg-gray-900 dark:text-gray-100'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              JA
            </Link>
            <Link
              href="/en"
              aria-current={lang === 'en' ? 'page' : undefined}
              className={`rounded-md px-2 py-2 transition-colors duration-150 ease-out ${
                lang === 'en'
                  ? 'bg-white text-primary dark:bg-gray-900 dark:text-gray-100'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              EN
            </Link>
          </div>

          <MobileNav dict={dict} />
        </div>
      </div>
    </header>
  )
}
