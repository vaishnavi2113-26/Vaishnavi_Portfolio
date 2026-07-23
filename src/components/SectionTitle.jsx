import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <ScrollReveal className="mb-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-2">
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-6 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
    </ScrollReveal>
  )
}
