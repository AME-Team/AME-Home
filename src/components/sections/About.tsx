import type { Dictionary } from '@/dictionaries'
import Section from '../layout/Section'

export default function AboutSection({ dict }: { dict: Dictionary['about'] }): React.ReactNode {
  const facts = Object.values(dict.facts)

  return (
    <Section id="about" title={dict.title} description={dict.lead}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>
          <p>{dict.p3}</p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {dict.factsTitle}
          </h3>
          <dl className="mt-4 space-y-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-gray-600 dark:text-gray-400">{fact.label}</dt>
                <dd className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
