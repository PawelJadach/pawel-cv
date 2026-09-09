import path from "node:path";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { content, profile, projectDisplayHost, type Locale } from "@/lib/cv";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: path.join(process.cwd(), "fonts/Inter-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: path.join(process.cwd(), "fonts/Inter-SemiBold.ttf"),
      fontWeight: 600,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const violet = "#6d28d9";
const ink = "#18181b";
const muted = "#52525b";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9,
    color: ink,
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 36,
    lineHeight: 1.25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  headerLeft: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: ink,
    lineHeight: 1.15,
  },
  role: {
    fontSize: 11,
    fontWeight: 600,
    color: violet,
    marginTop: 2,
    lineHeight: 1.2,
  },
  meta: {
    fontSize: 8.5,
    color: muted,
    marginTop: 3,
    lineHeight: 1.25,
  },
  headerContacts: {
    alignItems: "flex-end",
    gap: 2,
    maxWidth: 210,
  },
  contactLink: {
    color: muted,
    textDecoration: "none",
    fontSize: 8,
    lineHeight: 1.25,
  },
  rule: {
    height: 1.5,
    backgroundColor: violet,
    marginTop: 10,
    marginBottom: 6,
  },
  section: {
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 600,
    color: violet,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginBottom: 3,
    lineHeight: 1.2,
  },
  paragraph: {
    fontSize: 9,
    marginBottom: 3,
    lineHeight: 1.25,
  },
  job: {
    marginBottom: 5,
  },
  jobHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  company: {
    fontSize: 10.5,
    fontWeight: 600,
    lineHeight: 1.2,
    flexGrow: 1,
    flexShrink: 1,
  },
  period: {
    fontSize: 8,
    color: muted,
    lineHeight: 1.2,
    textAlign: "right",
  },
  jobRole: {
    fontSize: 9,
    fontWeight: 600,
    color: violet,
    marginTop: 1,
    marginBottom: 1,
    lineHeight: 1.2,
  },
  tech: {
    fontSize: 8,
    color: muted,
    marginBottom: 2,
    lineHeight: 1.2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
    paddingLeft: 2,
  },
  bulletMark: {
    color: violet,
    width: 10,
    fontSize: 9,
    lineHeight: 1.25,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.25,
  },
  note: {
    fontSize: 8,
    color: muted,
    marginTop: 1,
    lineHeight: 1.2,
  },
  projectLink: {
    color: violet,
    textDecoration: "none",
    fontSize: 8,
    marginTop: 1,
    lineHeight: 1.2,
  },
  skillsRow: {
    fontSize: 9,
    marginBottom: 1,
    lineHeight: 1.25,
  },
  skillLabel: {
    fontWeight: 600,
  },
  twoCol: {
    flexDirection: "row",
    gap: 20,
  },
  col: {
    flex: 1,
  },
  compactLine: {
    fontSize: 9,
    lineHeight: 1.25,
  },
});

export function CvDocument({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <Document
      title={`${profile.name} — CV`}
      author={profile.name}
      language={locale === "pl" ? "pl-PL" : "en-US"}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header} wrap={false}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{t.hero.role}</Text>
          </View>
          <View style={styles.headerContacts}>
            <Link src={`mailto:${profile.email}`} style={styles.contactLink}>
              {profile.email}
            </Link>
            <Link src={`tel:${profile.phoneHref}`} style={styles.contactLink}>
              {profile.phone}
            </Link>
            <Link src={profile.github} style={styles.contactLink}>
              github.com/paweljadach
            </Link>
            <Link src={profile.linkedin} style={styles.contactLink}>
              linkedin.com/in/paweljadach
            </Link>
          </View>
        </View>
        <View style={styles.rule} />

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{t.about.title}</Text>
          {t.about.paragraphs.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={48}>
            {t.experience.title}
          </Text>
          {t.experience.jobs.map((job) => (
            <View key={job.company} style={styles.job} wrap={false}>
              <View style={styles.jobHead}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.period}>
                  {job.location ? `${job.location} · ` : ""}
                  {job.period}
                </Text>
              </View>
              <Text style={styles.jobRole}>{job.role}</Text>
              {job.technologies.length > 0 ? (
                <Text style={styles.tech}>
                  {t.experience.technologies}: {job.technologies.join(", ")}
                </Text>
              ) : null}
              {job.points.map((point) => (
                <View key={point} style={styles.bullet}>
                  <Text style={styles.bulletMark}>•</Text>
                  <Text style={styles.bulletText}>{point}</Text>
                </View>
              ))}
              {"note" in job && job.note ? (
                <Text style={styles.note}>{job.note}</Text>
              ) : null}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={36}>
            {t.projects.title}
          </Text>
          {t.projects.items.map((project) => {
            const host = projectDisplayHost(project.href);

            return (
              <View key={project.href} wrap={false} style={styles.job}>
                <Text style={styles.company}>{project.name}</Text>
                <Text style={styles.paragraph}>{project.description}</Text>
                {host ? (
                  <Link src={project.href} style={styles.projectLink}>
                    {host}
                  </Link>
                ) : null}
              </View>
            );
          })}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{t.skills.title}</Text>
          {t.skills.groups.map((group) => (
            <Text key={group.title} style={styles.skillsRow}>
              <Text style={styles.skillLabel}>{group.title}: </Text>
              {group.items.join(" · ")}
            </Text>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{t.workStatus.title}</Text>
          <Text style={styles.paragraph}>{t.workStatus.text}</Text>
        </View>

        <View style={[styles.section, styles.twoCol]} wrap={false}>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>{t.languages.title}</Text>
            {t.languages.items.map((language) => (
              <Text key={language.name} style={styles.compactLine}>
                {language.name} — {language.level}
              </Text>
            ))}
          </View>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>{t.interests.title}</Text>
            {t.interests.items.map((interest) => (
              <Text key={interest.title} style={styles.compactLine}>
                {interest.title}
                {interest.detail ? ` — ${interest.detail}` : ""}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
