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
          subtitle="From Cyber Security Intern to VAPT Analyst — real-world security assessments at Clavigerous Systems LLP."
        />
        <Timeline items={experience} type="work" />
      </div>
    </section>
  )
}
