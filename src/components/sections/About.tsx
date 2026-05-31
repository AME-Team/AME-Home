import { MapPin, Briefcase, User as UserIcon } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function AboutSection({ dict }: { dict: Dictionary['about'] }): React.ReactNode {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">{dict.title}</h2>
          </div>

          <div className="rounded-lg border border-border bg-white p-8 md:p-12">
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
              <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded bg-navy text-white">
                <UserIcon size={72} className="opacity-80" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-navy">
                    {dict.name}{' '}
                    <span className="text-lg font-normal text-muted">/ Taito Amemiya</span>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> Tokyo / Kanagawa
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} /> Freelance Engineer & Musician
                    </span>
                  </div>
                </div>

                <div className="space-y-4 leading-relaxed text-muted">
                  {dict.p1 && <p>{dict.p1}</p>}
                  {dict.p2 && <p>{dict.p2}</p>}
                  {dict.p3 && <p>{dict.p3}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
