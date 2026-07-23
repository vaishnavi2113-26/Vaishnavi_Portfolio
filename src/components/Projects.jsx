import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Layers, Lightbulb, Calendar } from 'lucide-react'
import { projects } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A selection of full-stack, security, and research-driven projects built during my MCA and beyond."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group h-full flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-xl hover:border-primary-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400">
                      <Layers size={22} />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <Calendar size={12} />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelected(project)}
                    className="self-start inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400">
                  <Lightbulb size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                  {selected.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 pr-8">{selected.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selected.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-slate-800 dark:text-primary-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {selected.architecture && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                      Architecture & Diagrams
                    </h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      {selected.architecture.map((a, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.guide && (
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Guide: {selected.guide}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
