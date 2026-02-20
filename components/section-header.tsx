export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 text-center">
      <h1 className="font-[var(--font-oswald)] text-4xl font-bold tracking-wider text-primary md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-24 bg-primary" />
    </div>
  )
}
