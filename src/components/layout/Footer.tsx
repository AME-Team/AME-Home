import Link from 'next/link'
import type { Dictionary, Locale } from '@/dictionaries'
import { LINKS } from '@/data/site'
import Logo from './Logo'

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary
}): React.ReactNode {
  const links = [
    { label: 'GitHub', href: LINKS.github },
    { label: 'AME-Team', href: LINKS.githubOrg },
    { label: 'Piascore', href: LINKS.piascore },
    { label: 'YouTube', href: LINKS.youtube },
    { label: 'Note', href: LINKS.note },
    { label: 'Qiita', href: LINKS.qiita },
    { label: 'X', href: LINKS.x },
    { label: 'AtCoder', href: LINKS.atcoder },
  ]

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2 text-base font-bold tracking-tight text-gray-900 dark:text-gray-100"
            >
              <Logo className="size-6" />
              <span>AME</span>
            </Link>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{dict.footer.tagline}</p>
          </div>

          <nav aria-label={dict.footer.linksTitle} className="grid grid-cols-2 gap-x-12 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 underline-offset-4 transition-colors duration-150 ease-out hover:text-primary hover:underline dark:text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between dark:text-gray-400">
          <p>{dict.footer.copyright}</p>
          <p>
            {dict.footer.design}:{' '}
            <a
              href={LINKS.designSkills}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-150 ease-out hover:text-primary dark:text-gray-400"
            >
              {dict.footer.designName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
