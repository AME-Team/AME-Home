import { redirect } from 'next/navigation'

export default function RootPage(): never {
  // next/navigation redirect works during static generation if used in layout/page
  // Wait, actually for `output: export`, redirect() inside a Server Component works by emitting a meta refresh tag in Next.js 14+.
  redirect('/ja')
}
