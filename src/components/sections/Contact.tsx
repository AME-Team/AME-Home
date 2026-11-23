import { ArrowUpRight, FileText, Github, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'
import { LINKS } from '@/data/site'
import Section from '../layout/Section'

interface ContactLink {
  href: string
  label: string
  Icon: LucideIcon
}

export default function ContactSection({ dict }: { dict: Dictionary['contact'] }): React.ReactNode {
  const links: ContactLink[] = [
    { href: LINKS.x, label: dict.x, Icon: MessageCircle },
    { href: LINKS.github, label: dict.github, Icon: Github },
    { href: LINKS.note, label: dict.note, Icon: FileText },
  ]

  return (
    <Section id="contact" title={dict.title} description={dict.description}>
      <div className="grid gap-6 sm:grid-cols-3">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-150 ease-out hover:border-primary-border dark:border-gray-700 dark:bg-gray-800"
          >
            <span className="flex items-center gap-3">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {label}
              </span>
            </span>
            <ArrowUpRight className="size-4 text-gray-400 dark:text-gray-500" aria-hidden="true" />
          </a>
        ))}
      </div>
    </Section>
  )
}
