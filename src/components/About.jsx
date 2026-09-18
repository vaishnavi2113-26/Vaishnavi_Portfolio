import { BookOpen, Shield, Code2, Brain } from 'lucide-react'
import { summary } from '../data/profile'
import ScrollReveal from './ScrollReveal'
import SectionTitle from './SectionTitle'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'PHP, MySQL, JavaScript, and Python for end-to-end web applications.',
  },
  {
    icon: Shield,
    title: 'VAPT & Security Testing',
    desc: 'Web, API, and mobile application security testing aligned with the OWASP Top 10.',
  },
  {
    icon: Brain,
    title: 'AI & Research',
    desc: 'Research presentation on the Future of AI and AI-integrated application work.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    desc: 'Always exploring new security tools, frameworks, and secure coding practices.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title="Who I Am"
          subtitle="A quick look at my background, interests, and the value I bring to secure development teams."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {summary.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['VAPT', 'OWASP Top 10', 'Burp Suite', 'Penetration Testing', 'PHP', 'MySQL', 'Python'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <div className="h-full p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-primary-400 dark:hover:border-primary-600 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
