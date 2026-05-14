import { MapPin, Briefcase, User as UserIcon } from 'lucide-react'
import type { Dictionary } from '@/dictionaries'

export default function AboutSection({ dict }: { dict: Dictionary['about'] }): React.ReactNode {
  return (
    <section id="about" className="bg-white py-24 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold md:text-4xl">
              <span className="text-orange-500">{dict.title}</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-12 dark:border-gray-800 dark:bg-gray-900/50">
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
              <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-500 text-white shadow-xl">
                <UserIcon size={80} className="opacity-80" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="mb-2 text-3xl font-bold">
                    {dict.name}{' '}
                    <span className="text-xl font-normal text-gray-500">/ Taito Amemiya</span>
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} /> Tokyo / Kanagawa
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} /> Freelance Engineer & Musician
                    </span>
                  </div>
                </div>

                <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  <p>{dict.p1}</p>
                  <p>{dict.p2}</p>
                  <p>{dict.p3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
