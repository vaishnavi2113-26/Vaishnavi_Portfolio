import { useState, useEffect, Suspense, lazy } from 'react'
import { Loader2 } from 'lucide-react'

const ResumePDFButton = lazy(() => import('./ResumePDFButton'))

export default function ResumeDownload({ className = '' }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <button
        disabled
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all bg-slate-200 text-slate-500 cursor-not-allowed ${className}`}
      >
        <Loader2 size={18} className="animate-spin" />
        Resume
      </button>
    )
  }

  return (
    <Suspense
      fallback={(
        <button
          disabled
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all bg-slate-200 text-slate-500 cursor-not-allowed ${className}`}
        >
          <Loader2 size={18} className="animate-spin" />
          Resume
        </button>
      )}
    >
      <ResumePDFButton className={className} />
    </Suspense>
  )
}
