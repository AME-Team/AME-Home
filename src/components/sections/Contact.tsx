import { Mail, ArrowRight } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function ContactSection({ dict }: { dict: Dictionary['contact'] }): React.ReactNode {
  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">{dict.title}</h2>
          <p className="text-muted">{dict.desc}</p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-lg p-8 border border-border">
          <div className="space-y-8">
            <a
              href="mailto:contact@example.com"
              className="flex items-center justify-between p-4 rounded bg-gray-50 hover:bg-gray-100 text-navy transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-navy text-white rounded">
                  <Mail />
                </div>
                <div className="text-left">
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-muted">{dict.email}</p>
                </div>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-xs text-center text-muted mt-6">{dict.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
