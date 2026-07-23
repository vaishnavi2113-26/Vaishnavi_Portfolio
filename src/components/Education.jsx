import { education } from '../data/profile'
import SectionTitle from './SectionTitle'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Education"
          title="Academic Background"
          subtitle="A strong foundation in computer applications with consistently high academic performance."
        />
        <Timeline items={education} type="education" />
      </div>
    </section>
  )
}
