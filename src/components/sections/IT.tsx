import { Terminal, Settings, Server, Bot } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function ITSection({ dict }: { dict: Dictionary['it'] }): React.ReactNode {
  const skills = [
    {
      name: 'C# / .NET',
      description: dict.items.desktop,
      icon: <Terminal className="text-blue-500" />,
    },
    {
      name: 'Python',
      description: dict.items.data,
      icon: <Server className="text-yellow-500" />,
    },
    {
      name: 'AI Agent',
      description: dict.items.ai,
      icon: <Bot className="text-green-500" />,
    },
    {
      name: 'Automation',
      description: dict.items.ci,
      icon: <Settings className="text-gray-500" />,
    },
  ]

  return (
    <section id="it" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-blue-500">{dict.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
