import { Code2, Music } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function WorksSection({ dict }: { dict: Dictionary['works'] }): React.ReactNode {
  const works = [
    {
      title: dict.items.agent.title,
      category: 'IT / Dev',
      description: dict.items.agent.desc,
      tags: ['Python', 'React', 'AI'],
      icon: <Code2 className="text-navy" size={24} />,
    },
    {
      title: dict.items.score.title,
      category: 'Music',
      description: dict.items.score.desc,
      tags: ['Dorico', 'Sibelius', 'Score'],
      icon: <Music className="text-navy" size={24} />,
    },
    {
      title: dict.items.tool.title,
      category: 'IT / Dev',
      description: dict.items.tool.desc,
      tags: ['C#', 'CLI', 'Automation'],
      icon: <Code2 className="text-navy" size={24} />,
    },
    {
      title: dict.items.ep.title,
      category: 'Music',
      description: dict.items.ep.desc,
      tags: ['Cubase', 'Bass', 'Keys'],
      icon: <Music className="text-navy" size={24} />,
    },
  ]

  return (
    <section id="works" className="bg-section-alt py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
          <p className="text-muted">{dict.desc}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="group rounded border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded bg-section-alt p-3">{work.icon}</div>
                <span className="rounded bg-section-alt px-3 py-1 text-xs font-semibold text-muted">
                  {work.category}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">{work.title}</h3>
              <p className="mb-6 text-muted">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded bg-section-alt px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
