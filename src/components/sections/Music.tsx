import { BookOpen, ExternalLink } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function MusicSection({ dict }: { dict: Dictionary['music'] }): React.ReactNode {
  const links = [
    {
      name: 'Piascore',
      url: 'https://store.piascore.com/search?c=9496',
      description: dict.items.piascore,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@tarminj1545',
      description: dict.items.youtube,
    },
  ]

  return (
    <section id="music" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">{dict.title}</h2>
          <p className="text-muted">{dict.desc}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-section-alt rounded">
                <BookOpen className="text-navy" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy">{dict.sheetMusicTitle}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-navy">{link.name}</h4>
                  <ExternalLink className="text-muted" size={20} />
                </div>
                <p className="text-muted">{link.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
