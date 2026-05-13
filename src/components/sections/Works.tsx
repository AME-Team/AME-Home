import { Code2, Music } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function WorksSection({ dict }: { dict: Dictionary['works'] }): React.ReactNode {
  const works = [
    {
      title: dict.items.agent.title,
      category: 'IT / Dev',
      description: dict.items.agent.desc,
      tags: ['Python', 'React', 'AI'],
      icon: <Code2 className="text-blue-500" size={24} />,
    },
    {
      title: dict.items.score.title,
      category: 'Music',
      description: dict.items.score.desc,
      tags: ['Dorico', 'Sibelius', 'Score'],
      icon: <Music className="text-purple-500" size={24} />,
    },
    {
      title: dict.items.tool.title,
      category: 'IT / Dev',
      description: dict.items.tool.desc,
      tags: ['C#', 'CLI', 'Automation'],
      icon: <Code2 className="text-blue-500" size={24} />,
    },
    {
      title: dict.items.ep.title,
      category: 'Music',
      description: dict.items.ep.desc,
      tags: ['Cubase', 'Bass', 'Keys'],
      icon: <Music className="text-purple-500" size={24} />,
    },
  ]

  return (
    <section id="works" className="bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {dict.title}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.desc}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800">{work.icon}</div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {work.category}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-blue-500 dark:group-hover:text-purple-400">
                  {work.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
