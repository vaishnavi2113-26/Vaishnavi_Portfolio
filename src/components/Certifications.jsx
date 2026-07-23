import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, ExternalLink, Eye, FileText, X } from 'lucide-react'
import { certifications } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

function CertificatePreview({ certificate }) {
  const isPdf = certificate.file.toLowerCase().endsWith('.pdf')
  const encodedFile = encodeURI(certificate.file)

  if (isPdf) {
    return (
      <iframe
        src={encodedFile}
        title={`${certificate.name} certificate`}
        loading="lazy"
        className="w-full h-[52vh] min-h-80 rounded-xl border border-slate-200 dark:border-slate-700 bg-white"
      />
    )
  }

  return (
    <img
      src={encodedFile}
      alt={`${certificate.name} certificate`}
      loading="lazy"
      className="w-full max-h-[52vh] min-h-80 object-contain rounded-xl bg-slate-100 dark:bg-slate-950"
    />
  )
}

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Certifications"
          title="Credentials & Training"
          subtitle="Certifications and hackathon participation that validate my technical and security skills."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.name} delay={idx * 0.08}>
              <button
                type="button"
                onClick={() => setSelectedCertificate(cert)}
                className="w-full h-full text-left p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-all group"
                aria-label={`View ${cert.name} certificate`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    <Award size={22} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 opacity-70 group-hover:opacity-100 transition-opacity">
                  <Eye size={16} />
                  View Certificate
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[60] p-4 md:p-8 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelectedCertificate(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-title"
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5 md:p-8"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>

              <CertificatePreview certificate={selectedCertificate} />

              <div className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400 shrink-0">
                    <FileText size={21} />
                  </div>
                  <div>
                    <h3 id="certificate-title" className="text-xl md:text-2xl font-bold leading-snug">
                      {selectedCertificate.name}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {selectedCertificate.issuer}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-500 dark:text-slate-400">Date</dt>
                    <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.date}</dd>
                  </div>
                  {selectedCertificate.certificateNumber && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Certificate No.</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.certificateNumber}</dd>
                    </div>
                  )}
                  {selectedCertificate.instructor && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Instructor</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.instructor}</dd>
                    </div>
                  )}
                  {selectedCertificate.score && (
                    <div>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Score</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.score}</dd>
                    </div>
                  )}
                  {selectedCertificate.event && (
                    <div className="sm:col-span-2">
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Event</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.event}</dd>
                    </div>
                  )}
                  {selectedCertificate.organizedBy && (
                    <div className="sm:col-span-2">
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Organized By</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.organizedBy}</dd>
                    </div>
                  )}
                  {selectedCertificate.affiliation && (
                    <div className="sm:col-span-2">
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">Affiliation</dt>
                      <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{selectedCertificate.affiliation}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {selectedCertificate.verifyUrl && (
                    <a
                      href={selectedCertificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/25 transition-shadow"
                    >
                      Verify Certificate
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {selectedCertificate.file.toLowerCase().endsWith('.pdf') && (
                    <a
                      href={encodeURI(selectedCertificate.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Open PDF in New Tab
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
