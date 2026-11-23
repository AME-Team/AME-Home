import type { Locale } from '@/dictionaries'

export const LINKS = {
  github: 'https://github.com/tarminjapan',
  githubOrg: 'https://github.com/AME-Team',
  x: 'https://x.com/AME_TarminJapan',
  note: 'https://note.com/ame_tarmin',
  qiita: 'https://qiita.com/tarminjapan',
  atcoder: 'https://atcoder.jp/users/TAmemiya',
  piascore: 'https://store.piascore.com/publishers/9496',
  youtube: 'https://www.youtube.com/@tarminj1545',
  designSkills: 'https://github.com/AME-Team/AME-Design-Skills',
} as const

export type ScoreFormat = 'band' | 'piano'
export type ScoreDifficulty = 'intermediate'

export interface Score {
  id: string
  title: string
  titleEn?: string
  artist: { ja: string; en: string }
  format: ScoreFormat
  difficulty: ScoreDifficulty
  pages: number
  price: number
  releasedAt: string
  url: string
  videoUrl?: string
  isNew?: boolean
}

export const SCORES: Score[] = [
  {
    id: '473378',
    title: '聖母たちのララバイ',
    titleEn: 'Seibo-tachi no Lullaby',
    artist: { ja: '岩崎宏美', en: 'Hiromi Iwasaki' },
    format: 'band',
    difficulty: 'intermediate',
    pages: 35,
    price: 380,
    releasedAt: '2026-11-12',
    url: 'https://store.piascore.com/scores/473378',
    videoUrl: 'https://www.youtube.com/watch?v=lDzNWVMBbqQ',
    isNew: true,
  },
  {
    id: '415821',
    title: 'fantasy',
    titleEn: 'fantasy',
    artist: { ja: 'Mr.Children', en: 'Mr.Children' },
    format: 'piano',
    difficulty: 'intermediate',
    pages: 4,
    price: 280,
    releasedAt: '2026-05-13',
    url: 'https://store.piascore.com/scores/415821',
    videoUrl: 'https://www.youtube.com/watch?v=NWqAYYOFCnM',
  },
  {
    id: '403305',
    title: '2億4千万の瞳',
    titleEn: 'Nioku Yonsenman no Hitomi',
    artist: { ja: '郷ひろみ', en: 'Hiromi Go' },
    format: 'band',
    difficulty: 'intermediate',
    pages: 38,
    price: 480,
    releasedAt: '2026-03-20',
    url: 'https://store.piascore.com/scores/403305',
    videoUrl: 'https://www.youtube.com/watch?v=Bj-hrVO5kts',
  },
  {
    id: '400414',
    title: 'milk',
    titleEn: 'milk',
    artist: { ja: 'aiko', en: 'aiko' },
    format: 'piano',
    difficulty: 'intermediate',
    pages: 5,
    price: 280,
    releasedAt: '2026-03-07',
    url: 'https://store.piascore.com/scores/400414',
    videoUrl: 'https://www.youtube.com/watch?v=iwcwWh5B7KY',
  },
]

export type ProjectKey =
  | 'aiReview'
  | 'designSkills'
  | 'agentChat'
  | 'aiSandbox'
  | 'compression'
  | 'notoFonts'
  | 'notation'
  | 'markdownDesign'
  | 'atcoderLibrary'

export interface Project {
  key: ProjectKey
  name: string
  href: string
  language: string
  license?: string
  paused?: boolean
}

export const PROJECTS: Project[] = [
  {
    key: 'aiReview',
    name: 'AME-AI-Review-System',
    href: 'https://github.com/AME-Team/AME-AI-Review-System',
    language: 'Python',
    license: 'MIT',
  },
  {
    key: 'designSkills',
    name: 'AME-Design-Skills',
    href: 'https://github.com/AME-Team/AME-Design-Skills',
    language: 'TypeScript',
    license: 'MIT',
  },
  {
    key: 'agentChat',
    name: 'AME-Agent-Chat',
    href: 'https://github.com/AME-Team/AME-Agent-Chat',
    language: 'TypeScript',
  },
  {
    key: 'aiSandbox',
    name: 'AME-AI-Sandbox',
    href: 'https://github.com/AME-Team/AME-AI-Sandbox',
    language: 'TypeScript',
    license: 'MIT',
  },
  {
    key: 'compression',
    name: 'AME-Compression',
    href: 'https://github.com/AME-Team/AME-Compression',
    language: 'Python',
    license: 'MIT',
  },
  {
    key: 'notoFonts',
    name: 'windows-noto-system-fonts',
    href: 'https://github.com/AME-Team/windows-noto-system-fonts',
    language: 'Python',
    license: 'MIT',
  },
  {
    key: 'notation',
    name: 'AME-Music-Notation-Assistance',
    href: 'https://github.com/AME-Team/AME-Music-Notation-Assistance',
    language: 'Python',
    paused: true,
  },
  {
    key: 'markdownDesign',
    name: 'MarkdownDesign',
    href: 'https://github.com/tarminjapan/MarkdownDesign',
    language: 'SCSS',
    license: 'MIT',
  },
  {
    key: 'atcoderLibrary',
    name: 'TAmeAtCoderLibrary',
    href: 'https://github.com/tarminjapan/TAmeAtCoderLibrary',
    language: 'C#',
    license: 'MIT',
  },
]

export type PostSource = 'note' | 'qiita'

export interface Post {
  source: PostSource
  date: string
  title: string
  titleEn: string
  url: string
}

export const POSTS: Post[] = [
  {
    source: 'qiita',
    date: '2026-09-19',
    title:
      'Qwen Cloudのアカウント誤削除で利用不能・返金不可になったが、PayPalの異議申し立てで全額返金された話',
    titleEn: 'How I accidentally deleted my Qwen Cloud account and got a full refund via PayPal',
    url: 'https://qiita.com/tarminjapan/items/adff0fd2afa66b9efe41',
  },
  {
    source: 'note',
    date: '2026-09-10',
    title: 'Windows のシステムフォントを Noto Sans に一括置き換えした技術記録',
    titleEn: 'Replacing Windows system fonts with Noto Sans',
    url: 'https://note.com/ame_tarmin/n/nb4f06daaa7c3',
  },
  {
    source: 'qiita',
    date: '2026-09-12',
    title: 'Windows のシステムフォントを Noto Sans に一括置き換えした技術記録',
    titleEn: 'Replacing Windows system fonts with Noto Sans',
    url: 'https://qiita.com/tarminjapan/items/fa3507f48a08409a15e3',
  },
  {
    source: 'note',
    date: '2026-09-02',
    title: 'AI レビューシステムを自作・運用して分かってきたこと',
    titleEn: 'What I learned from building and running an AI review system',
    url: 'https://note.com/ame_tarmin/n/ndfa882b04a47',
  },
  {
    source: 'qiita',
    date: '2026-09-11',
    title: '「読みやすさ」を Skill 化して、AI にデザインさせてみた',
    titleEn: 'Turning readability into a Skill and letting AI design with it',
    url: 'https://qiita.com/tarminjapan/items/82e4ad5db27589b33ee9',
  },
  {
    source: 'qiita',
    date: '2026-09-11',
    title: '1 万 7 千円台の中古ノート PC と Cloudflare Tunnel で、外出先から AI に開発させる',
    titleEn: 'Developing with AI from a used laptop and Cloudflare Tunnel',
    url: 'https://qiita.com/tarminjapan/items/93228e004b4e2ce209c6',
  },
  {
    source: 'note',
    date: '2026-08-26',
    title: 'Gemini 3.7 Flash のスピードがもたらす「思考の同期性」',
    titleEn: 'Gemini 3.7 Flash and the feeling of thinking in sync',
    url: 'https://note.com/ame_tarmin/n/n5e59860d7a54',
  },
  {
    source: 'note',
    date: '2026-08-23',
    title: '上司に気持ちを吐き出したら、少しだけ楽になった話',
    titleEn: 'Telling my manager how I felt, and feeling a little lighter',
    url: 'https://note.com/ame_tarmin/n/nbc634e2aff6d',
  },
  {
    source: 'note',
    date: '2026-08-17',
    title: '「読みやすさ」を Skill 化して、AI にデザインさせてみた',
    titleEn: 'Turning readability into a Skill and letting AI design with it',
    url: 'https://note.com/ame_tarmin/n/n19aa2968acd9',
  },
  {
    source: 'note',
    date: '2026-08-04',
    title: '1 万 7 千円台の中古ノート PC と Cloudflare Tunnel で、外出先から AI に開発させる',
    titleEn: 'Developing with AI from a used laptop and Cloudflare Tunnel',
    url: 'https://note.com/ame_tarmin/n/n2eb0c7f13b5d',
  },
  {
    source: 'note',
    date: '2026-07-26',
    title: '「とりあえずテストしました」の根拠を作る AI レビューシステム',
    titleEn: 'An AI review system that gives evidence to “I tested it”',
    url: 'https://note.com/ame_tarmin/n/n187ead557d69',
  },
]

export function scoreTitle(score: Score, lang: Locale): string {
  return lang === 'en' ? (score.titleEn ?? score.title) : score.title
}

export function postTitle(post: Post, lang: Locale): string {
  return lang === 'en' ? post.titleEn : post.title
}

export function getPosts(source: PostSource, limit?: number): Post[] {
  const posts = POSTS.filter((post) => post.source === source).sort((a, b) =>
    b.date.localeCompare(a.date),
  )
  return typeof limit === 'number' ? posts.slice(0, limit) : posts
}

function toTimestamp(date: string): number {
  return new Date(`${date}T00:00:00+09:00`).getTime()
}

export type ActivityKind = 'score' | 'note' | 'qiita'

export interface Activity {
  kind: ActivityKind
  date: string
  title: string
  href: string
}

/**
 * 楽譜・Note・Qiita からそれぞれ最新の1件を集め、日付順に返す。
 * 同じ記事を複数プラットフォームで公開している場合に重複させないための単位。
 */
export function getRecentActivity(lang: Locale, limit = 3): Activity[] {
  const latestScore: Score | undefined = [...SCORES]
    .sort((a, b) => toTimestamp(b.releasedAt) - toTimestamp(a.releasedAt))
    .at(0)
  const latestNote: Post | undefined = getPosts('note', 1).at(0)
  const latestQiita: Post | undefined = getPosts('qiita', 1).at(0)

  const items: Activity[] = []

  if (latestScore) {
    items.push({
      kind: 'score',
      date: latestScore.releasedAt,
      title: `${scoreTitle(latestScore, lang)}${
        lang === 'ja' ? `（${latestScore.artist.ja}）` : ` (${latestScore.artist.en})`
      }`,
      href: latestScore.url,
    })
  }

  if (latestNote) {
    items.push({
      kind: 'note',
      date: latestNote.date,
      title: postTitle(latestNote, lang),
      href: latestNote.url,
    })
  }

  if (latestQiita) {
    items.push({
      kind: 'qiita',
      date: latestQiita.date,
      title: postTitle(latestQiita, lang),
      href: latestQiita.url,
    })
  }

  return items.sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date)).slice(0, limit)
}
