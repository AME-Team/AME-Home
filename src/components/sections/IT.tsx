import { Github, ExternalLink } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'
import AtCoderStats from './AtCoderStats'

export default function ITSection({ dict }: { dict: Dictionary['it'] }): React.ReactNode {
  const apps = [
    {
      name: 'Ame Compression',
      url: 'https://github.com/tarminjapan/AmeCompression',
      description: dict.items.ameCompression,
    },
    {
      name: 'Markdown Design',
      url: 'https://github.com/tarminjapan/MarkdownDesign',
      description: dict.items.markdownDesign,
    },
    {
      name: 'TAME AtCoder Library',
      url: 'https://github.com/tarminjapan/TAmeAtCoderLibrary',
      description: dict.items.tameAtCoder,
    },
  ]

  return (
    <section id="it" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">{dict.title}</h2>
          <p className="text-muted">{dict.desc}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <a
            href="https://github.com/tarminjapan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-6 rounded border border-border hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-section-alt rounded">
              <Github className="text-navy" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-navy">{dict.github}</h3>
              <p className="text-sm text-muted">github.com/tarminjapan</p>
            </div>
            <ExternalLink className="text-muted" size={20} />
          </a>

          <AtCoderStats title={dict.atcoder || 'AtCoder アカウント'} />

          <div>
            <h3 className="text-xl font-bold text-navy mb-4">{dict.appsTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {apps.map((app, index) => (
                <a
                  key={index}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-bold text-navy">{app.name}</h4>
                    <ExternalLink className="text-muted" size={16} />
                  </div>
                  <p className="text-sm text-muted">{app.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
