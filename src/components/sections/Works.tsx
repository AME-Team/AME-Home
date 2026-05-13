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
    <section id="works" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {dict.title}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">{work.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 dark:group-hover:text-purple-400 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
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
