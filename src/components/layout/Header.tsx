import { Code2, Music, User, Briefcase, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Header({ lang = 'ja' }: { lang?: string }): React.ReactNode {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-xl font-bold tracking-tighter">
          Taito Amemiya
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link
              href="#it"
              className="hover:text-blue-500 transition-colors flex items-center gap-2"
            >
              <Code2 size={16} /> IT
            </Link>
            <Link
              href="#music"
              className="hover:text-purple-500 transition-colors flex items-center gap-2"
            >
              <Music size={16} /> Music
            </Link>
            <Link
              href="#works"
              className="hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <Briefcase size={16} /> Works
            </Link>
            <Link
              href="#about"
              className="hover:text-orange-500 transition-colors flex items-center gap-2"
            >
              <User size={16} /> About
            </Link>
            <Link
              href="#contact"
              className="hover:text-red-500 transition-colors flex items-center gap-2"
            >
              <Mail size={16} /> Contact
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm font-bold bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
            <Link
              href="/ja"
              className={`transition-colors ${lang === 'ja' ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              JA
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link
              href="/en"
              className={`transition-colors ${lang === 'en' ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
