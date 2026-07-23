import { Calendar, GraduationCap, Briefcase } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Timeline({ items, type = 'education' }) {
  const Icon = type === 'education' ? GraduationCap : Briefcase

  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 md:-translate-x-1/2" />

      <div className="space-y-10">
        {items.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* center icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 flex items-center justify-center z-10 shadow-sm">
                <Icon size={18} className="text-primary-600 dark:text-primary-400" />
              </div>

              {/* spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* content */}
              <div className="md:w-1/2 pl-20 md:pl-0 md:px-10">
                <div
                  className={`p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:shadow-lg transition-shadow ${
                    idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className={`flex items-center gap-2 text-xs font-semibold text-accent-600 dark:text-accent-400 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} />
                    <span>{item.year || item.period}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{item.degree || item.role}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.institution || item.company}
                    {(item.score || item.bullets) && (
                      <span className="block mt-1 text-slate-500 dark:text-slate-500">
                        {item.score}
                      </span>
                    )}
                  </p>
                  {item.bullets && (
                    <ul className={`mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-400 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
