import { ArrowUpRight, Github } from 'lucide-react'
import type { Dictionary, Locale } from '@/dictionaries'
import { LINKS, PROJECTS } from '@/data/site'
import Section from '../layout/Section'
import AtCoderStatus from './AtCoderStatus'

export default function SoftwareSection({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary['software']
}): React.ReactNode {
  return (
    <Section
      id="software"
      title={dict.title}
      description={dict.description}
      action={
        <a
          href={LINKS.githubOrg}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:text-primary-hover"
        >
          <Github className="size-4" aria-hidden="true" />
          {dict.open}
        </a>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.key}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-150 ease-out hover:border-primary-border dark:border-gray-700 dark:bg-gray-800"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="font-mono-code text-sm font-semibold text-gray-900 transition-colors duration-150 ease-out group-hover:text-primary dark:text-gray-100">
                {project.name}
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-gray-400 dark:text-gray-500"
                aria-hidden="true"
              />
            </span>

            <span className="mt-2 block text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {dict.items[project.key]}
            </span>

            <span className="mt-auto flex flex-wrap items-center gap-2 pt-4">
              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                {project.language}
              </span>
              {project.license !== undefined && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                  {project.license}
                </span>
              )}
              {project.paused === true && (
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {dict.paused}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>

      <AtCoderStatus lang={lang} dict={dict.atcoder} />
    </Section>
  )
}
