import { experience } from '../data/profile'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experience"
          title="Work Experience"
          subtitle="Hands-on cybersecurity work and real-world vulnerability assessments."
        />
        <Timeline items={experience} type="work" />
      </div>
    </section>
  )
}
