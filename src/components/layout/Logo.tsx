import type { ReactNode } from 'react'

export default function Logo({ className = '' }: { className?: string }): ReactNode {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="6" fill="#1A2A3A" />
      <path
        d="M16 8L8 24H11.5L13.5 19H18.5L20.5 24H24L16 8ZM16 12L17.5 16.5H14.5L16 12Z"
        fill="white"
      />
    </svg>
  )
}
