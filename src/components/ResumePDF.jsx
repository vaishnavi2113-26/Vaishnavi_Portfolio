import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer'
import {
  profile,
  summary,
  education,
  experience,
  projects,
  research,
  certifications,
  skills,
} from '../data/profile'

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.5,
    color: '#1e293b',
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#0ea5e9',
    paddingBottom: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  title: {
    fontSize: 11,
    color: '#475569',
    marginBottom: 6,
  },
  contact: {
    fontSize: 9.5,
    color: '#334155',
  },
  link: {
    color: '#0284c7',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0f172a',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 3,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  itemMeta: {
    fontSize: 9.5,
    color: '#475569',
    textAlign: 'right',
  },
  itemSub: {
    fontSize: 9.5,
    color: '#475569',
    marginBottom: 3,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 2,
    fontSize: 9.5,
  },
  paragraph: {
    textAlign: 'justify',
  },
  tagGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 2,
  },
  tag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 8.5,
    color: '#334155',
  },
})

export default function ResumePDF() {
  return (
    <Document title={`${profile.name} - Resume`} author={profile.name}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <View style={styles.contact}>
            <Text>
              {profile.phone} |{' '}
              <Link style={styles.link} src={`mailto:${profile.email}`}>
                {profile.email}
              </Link>
            </Text>
            <Text>
              LinkedIn:{' '}
              <Link style={styles.link} src={profile.linkedin}>
                {profile.linkedin}
              </Link>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.paragraph}>{summary.text}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.itemTitle}>{edu.degree}</Text>
                <Text style={styles.itemMeta}>{edu.year}</Text>
              </View>
              <Text style={styles.itemSub}>
                {edu.institution} | {edu.score}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((exp, i) => (
            <View key={i}>
              <View style={styles.row}>
                <Text style={styles.itemTitle}>
                  {exp.role}, {exp.company}
                </Text>
                <Text style={styles.itemMeta}>{exp.period}</Text>
              </View>
              {exp.bullets.map((b, j) => (
                <Text key={j} style={styles.bullet}>
                  • {b}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projects.map((p, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <View style={styles.row}>
                <Text style={styles.itemTitle}>{p.title}</Text>
                <Text style={styles.itemMeta}>{p.period}</Text>
              </View>
              <Text style={styles.itemSub}>{p.description}</Text>
              {p.features.slice(0, 4).map((f, j) => (
                <Text key={j} style={styles.bullet}>
                  • {f}
                </Text>
              ))}
              <View style={styles.tagGroup}>
                {p.tech.map((t, k) => (
                  <Text key={k} style={styles.tag}>
                    {t}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Research</Text>
          <Text style={styles.itemTitle}>{research.title}</Text>
          <Text style={styles.itemSub}>
            Presented at {research.venue} — {research.date}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((c, i) => (
            <Text key={i} style={styles.bullet}>
              • {c.name} — {c.issuer} ({c.date})
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((s, i) => (
            <Text key={i} style={styles.bullet}>
              <Text style={{ fontWeight: 'bold' }}>{s.category}:</Text>{' '}
              {s.items.join(', ')}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  )
}
