import { Piano, Headphones, BookOpen, Mic2 } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function MusicSection({ dict }: { dict: Dictionary['music'] }): React.ReactNode {
  const skills = [
    {
      name: 'Bassist / Keyboardist',
      description: dict.items.play,
      icon: <Piano className="text-purple-500" />,
    },
    {
      name: 'Score Publishing',
      description: dict.items.score,
      icon: <BookOpen className="text-pink-500" />,
    },
    {
      name: 'Notation Software',
      description: dict.items.engrave,
      icon: <Mic2 className="text-indigo-500" />,
    },
    {
      name: 'DAW & Production',
      description: dict.items.compose,
      icon: <Headphones className="text-fuchsia-500" />,
    },
  ]

  return (
    <section id="music" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-purple-500">{dict.title}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">{skill.icon}</div>
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
