export default function Logo({ className = 'size-8' }: { className?: string }): React.ReactNode {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true" focusable="false" className={className}>
      <rect width="32" height="32" rx="6" className="fill-primary" />
      <path
        d="M16 8.5 23.5 23.5h-3.4l-1.3-2.9h-5.6l-1.3 2.9H8.5L16 8.5Zm0 5.1-1.5 3.9h3l-1.5-3.9Z"
        fill="#ffffff"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}
