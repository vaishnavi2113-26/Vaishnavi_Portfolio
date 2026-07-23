import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import ResumeDownload from './ResumeDownload'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-[10%] left-[10%] w-72 h-72 rounded-full bg-primary-400/20 blur-3xl animate-blob" />
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-accent-400/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] right-[30%] w-64 h-64 rounded-full bg-purple-400/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-slate-800 dark:text-primary-300 text-xs font-semibold tracking-wide uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <h2 className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium mb-6">
            {profile.title}
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ResumeDownload />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-white/40 dark:border-slate-700/50 shadow-2xl flex items-center justify-center animate-float">
            <div className="absolute inset-0 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm" />
            <div className="relative z-10 text-center px-8">
              <div className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                VB
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Secure Systems. Clean Code. Curious Mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 dark:bg-slate-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
