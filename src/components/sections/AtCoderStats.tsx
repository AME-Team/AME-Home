import { ExternalLink } from 'lucide-react'
import type { ReactNode } from 'react'

interface AtCoderHistoryItem {
  IsRated: boolean
  Place: number
  OldRating: number
  NewRating: number
  Performance: number
  InnerPerformance: number
  ContestScreenName: string
  ContestName: string
  ContestNameEn: string
  EndTime: string
}

function getRatingColor(rating: number): string {
  if (rating < 400) return 'text-gray-500' // Gray
  if (rating < 800) return 'text-[#804000]' // Brown
  if (rating < 1200) return 'text-[#008000]' // Green
  if (rating < 1600) return 'text-[#00C0C0]' // Cyan
  if (rating < 2000) return 'text-[#0000FF]' // Blue
  if (rating < 2400) return 'text-[#C0C000]' // Yellow
  if (rating < 2800) return 'text-[#FF8000]' // Orange
  return 'text-[#FF0000]' // Red
}

export default async function AtCoderStats({
  title,
  username = 'TAmemiya',
}: {
  title: string
  username?: string
}): Promise<ReactNode> {
  let rating = 0
  let maxRating = 0
  let matchCount = 0

  try {
    const res = await fetch(`https://atcoder.jp/users/${username}/history/json`, {
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const data: AtCoderHistoryItem[] = await res.json()
      const ratedMatches = data.filter((m) => m.IsRated)
      matchCount = ratedMatches.length
      if (matchCount > 0) {
        rating = ratedMatches[ratedMatches.length - 1].NewRating
        maxRating = Math.max(...ratedMatches.map((m) => m.NewRating))
      }
    }
  } catch (error) {
    console.error('Failed to fetch AtCoder stats', error)
  }

  return (
    <a
      href={`https://atcoder.jp/users/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-6 rounded border border-border hover:shadow-md transition-shadow"
    >
      <div className="p-3 bg-section-alt rounded shrink-0 self-start sm:self-auto flex items-center justify-center">
        <span className="font-bold text-xl px-2">AtCoder</span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="text-sm text-muted">atcoder.jp/users/{username}</p>

        {matchCount > 0 && (
          <div className="flex gap-4 mt-2 text-sm font-medium">
            <div>
              <span className="text-muted">Rating: </span>
              <span className={`font-bold ${getRatingColor(rating)}`}>{rating}</span>
            </div>
            <div>
              <span className="text-muted">Highest: </span>
              <span className={`font-bold ${getRatingColor(maxRating)}`}>{maxRating}</span>
            </div>
            <div>
              <span className="text-muted">Matches: </span>
              <span className="font-bold">{matchCount}</span>
            </div>
          </div>
        )}
      </div>
      <ExternalLink className="text-muted self-end sm:self-auto" size={20} />
    </a>
  )
}
