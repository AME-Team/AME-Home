interface SectionProps {
  id: string
  title: string
  description: string
  action?: React.ReactNode
  children: React.ReactNode
}

export default function Section({
  id,
  title,
  description,
  action,
  children,
}: SectionProps): React.ReactNode {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          {action}
        </div>
        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
