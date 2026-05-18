import { Code2, Music, User, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Header({ lang = 'ja' }: { lang?: string }): React.ReactNode {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tight text-navy">
          Taito Amemiya
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted">
            <Link href="#it" className="hover:text-navy transition-colors flex items-center gap-2">
              <Code2 size={16} /> IT
            </Link>
            <Link
              href="#music"
              className="hover:text-navy transition-colors flex items-center gap-2"
            >
              <Music size={16} /> Music
            </Link>
            <Link
              href="#about"
              className="hover:text-navy transition-colors flex items-center gap-2"
            >
              <User size={16} /> About
            </Link>
            <Link
              href="#contact"
              className="hover:text-navy transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 text-sm font-semibold bg-gray-100 px-3 py-1.5 rounded">
            <Link
              href="/ja"
              className={`transition-colors ${lang === 'ja' ? 'text-navy' : 'text-gray-400 hover:text-gray-600'}`}
            >
              JA
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/en"
              className={`transition-colors ${lang === 'en' ? 'text-navy' : 'text-gray-400 hover:text-gray-600'}`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
