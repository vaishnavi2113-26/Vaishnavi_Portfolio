import { PDFDownloadLink } from '@react-pdf/renderer'
import { Download, Loader2 } from 'lucide-react'
import ResumePDF from './ResumePDF'

export default function ResumePDFButton({ className = '' }) {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="Vaishnavi_Bhagwat_Resume.pdf"
      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 ${className}`}
    >
      {({ loading }) => (
        <>
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          {loading ? 'Preparing…' : 'Download Resume'}
        </>
      )}
    </PDFDownloadLink>
  )
}
