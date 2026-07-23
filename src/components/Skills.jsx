import { skills } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

const accentMap = {
  Languages: 'from-emerald-500 to-teal-500',
  'Web & Database': 'from-primary-500 to-sky-500',
  Cybersecurity: 'from-accent-500 to-rose-500',
  'Tools & Platforms': 'from-violet-500 to-purple-500',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="Languages, security practices, and tools I use to build and protect applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <ScrollReveal key={group.category} delay={idx * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6 hover:shadow-lg transition-shadow">
                <div className={`w-10 h-1.5 mb-5 rounded-full bg-gradient-to-r ${accentMap[group.category] || 'from-primary-500 to-accent-500'}`} />
                <h3 className="text-lg font-bold mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
