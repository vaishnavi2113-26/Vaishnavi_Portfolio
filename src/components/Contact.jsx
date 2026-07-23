import { useState } from 'react'
import { Send, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

const links = [
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
  { icon: Github, label: 'GitHub', href: profile.github },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio inquiry from ${form.name}`
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Connect"
          subtitle="Have an opportunity or a project in mind? Send a message and I’ll get back to you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300">
                I&apos;m currently open to full-stack and cybersecurity roles, internships, and collaborative projects.
              </p>

              <div className="grid gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-400 dark:hover:border-primary-600 transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 dark:bg-slate-800 dark:text-primary-400 group-hover:scale-110 transition-transform">
                      <link.icon size={20} />
                    </div>
                    <span className="font-medium text-slate-700 dark:text-slate-200">{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin size={18} />
                <span>{profile.location}</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-400/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-400/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-400/50 transition-all resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>

              <p className="mt-4 text-xs text-center text-slate-500 dark:text-slate-500">
                This opens your default email client. You can also replace it with a Formspree endpoint later.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
