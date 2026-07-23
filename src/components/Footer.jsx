import { Heart } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent-500 fill-accent-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  )
}
