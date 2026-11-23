import { ArrowRight, FileText, PenLine } from 'lucide-react'
import type { Dictionary, Locale } from '@/dictionaries'
import { LINKS, getPosts, postTitle, type Post, type PostSource } from '@/data/site'
import { formatDate } from '@/lib/format'
import Section from '../layout/Section'

const SOURCE_ICONS = {
  note: FileText,
  qiita: PenLine,
} as const

function PostColumn({
  source,
  label,
  href,
  hrefLabel,
  posts,
  lang,
}: {
  source: PostSource
  label: string
  href: string
  hrefLabel: string
  posts: Post[]
  lang: Locale
}): React.ReactNode {
  const Icon = SOURCE_ICONS[source]

  return (
    <div className="flex h-full flex-col">
      <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900 dark:text-gray-100">
        <Icon className="size-4 text-primary" aria-hidden="true" />
        {label}
      </h3>

      <ul className="mt-4 flex-1 space-y-6">
        {posts.map((post) => (
          <li key={post.url}>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
              <time dateTime={post.date} className="text-xs text-gray-600 dark:text-gray-400">
                {formatDate(lang, post.date)}
              </time>
              <span className="mt-1 block text-sm leading-relaxed text-gray-800 transition-colors duration-150 ease-out group-hover:text-primary dark:text-gray-200">
                {postTitle(post, lang)}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:text-primary-hover"
      >
        {hrefLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}

export default function WritingSection({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary['writing']
}): React.ReactNode {
  return (
    <Section id="writing" title={dict.title} description={dict.description}>
      <div className="grid gap-12 sm:grid-cols-2">
        <PostColumn
          source="note"
          label={dict.noteLabel}
          href={LINKS.note}
          hrefLabel={dict.noteLink}
          posts={getPosts('note', 5)}
          lang={lang}
        />
        <PostColumn
          source="qiita"
          label={dict.qiitaLabel}
          href={LINKS.qiita}
          hrefLabel={dict.qiitaLink}
          posts={getPosts('qiita')}
          lang={lang}
        />
      </div>
    </Section>
  )
}
