'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Dictionary } from '@/dictionaries'
import { NAV_ITEMS } from './nav'

export default function MobileNav({ dict }: { dict: Dictionary }): React.ReactNode {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value)
        }}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
        className="inline-flex size-10 items-center justify-center rounded-md text-gray-600 transition-colors duration-150 ease-out hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-16 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
        >
          <nav aria-label={dict.nav.sections} className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {NAV_ITEMS.map(({ href, key, Icon }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => {
                      setOpen(false)
                    }}
                    className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-gray-700 transition-colors duration-150 ease-out hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  >
                    <Icon className="size-4 text-primary" aria-hidden="true" />
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
