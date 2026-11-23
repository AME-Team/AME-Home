import { Code2, FileText, Music, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavKey = 'music' | 'software' | 'writing' | 'about'

export interface NavItem {
  href: string
  key: NavKey
  Icon: LucideIcon
}

export const NAV_ITEMS: NavItem[] = [
  { href: '#music', key: 'music', Icon: Music },
  { href: '#software', key: 'software', Icon: Code2 },
  { href: '#writing', key: 'writing', Icon: FileText },
  { href: '#about', key: 'about', Icon: User },
]
