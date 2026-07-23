import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, FileText, Mic2, X } from 'lucide-react'
import { research } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

function CertificatePreview({ file, title }) {
  const isPdf = file.toLowerCase().endsWith('.pdf')
  const encodedFile = encodeURI(file)

  if (isPdf) {
    return (
      <iframe
        src={encodedFile}
        title={`${title} certificate`}
        loading="lazy"
        className="w-full h-[52vh] min-h-80 rounded-xl border border-slate-200 dark:border-slate-700 bg-white"
      />
    )
  }

  return (
    <img
      src={encodedFile}
      alt={`${title} certificate`}
      loading="lazy"
      className="w-full max-h-[52vh] min-h-80 object-contain rounded-xl bg-slate-100 dark:bg-slate-950"
    />
  )
}

export default function Research() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Research"
          title="Paper & Presentation"
          subtitle="Selected research work presented at an academic conference."
        />

        <ScrollReveal>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 p-8 md:p-10 shadow-sm text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-all hover:shadow-md"
            aria-label="View PRECCON research paper certificate"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Mic2 size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <FileText size={28} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{research.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Presented at <span className="font-medium">{research.venue}</span> — {research.presentationDate || research.date}.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-slate-800 dark:text-primary-300">
                    Conference Presentation
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 opacity-70 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                    View Certificate
                  </span>
                </div>
              </div>
            </div>
          </button>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] p-4 md:p-8 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="research-title"
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 md:p-8"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>

              <CertificatePreview file={research.certificateFile} title={research.title} />

              <div className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400 shrink-0">
                    <FileText size={21} />
                  </div>
                  <div>
                    <h3 id="research-title" className="text-xl md:text-2xl font-bold leading-snug">
                      {research.title}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {research.venue} — {research.presentationDate || research.date}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 grid gap-x-8 gap-y-4 text-sm">
                  {research.event && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Event</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{research.event}</dd>
                    </div>
                  )}
                  {research.organizedBy && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Organized By</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{research.organizedBy}</dd>
                    </div>
                  )}
                  {research.affiliation && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Presented Under Affiliation</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{research.affiliation}</dd>
                    </div>
                  )}
                </dl>

                <a
                  href={encodeURI(research.certificateFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Open Certificate in New Tab
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
