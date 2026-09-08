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
import { content, profile, type Locale } from "@/lib/cv";

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

const violet = "#6d28d9";
const ink = "#18181b";
const muted = "#52525b";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9.5,
    color: ink,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    lineHeight: 1.4,
  },
  name: {
    fontSize: 22,
    fontWeight: 600,
    color: ink,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: violet,
    marginTop: 3,
  },
  availability: {
    fontSize: 9,
    color: muted,
    marginTop: 4,
  },
  contacts: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
    fontSize: 8.5,
    color: muted,
  },
  contactLink: {
    color: muted,
    textDecoration: "none",
  },
  rule: {
    height: 1.5,
    backgroundColor: violet,
    marginTop: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: violet,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 6,
    marginTop: 10,
  },
  paragraph: {
    marginBottom: 5,
    color: ink,
  },
  jobHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 6,
  },
  company: {
    fontSize: 11,
    fontWeight: 600,
  },
  period: {
    fontSize: 8.5,
    color: muted,
  },
  role: {
    fontSize: 9.5,
    fontWeight: 600,
    color: violet,
    marginBottom: 2,
  },
  tech: {
    fontSize: 8,
    color: muted,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 2,
  },
  bulletMark: {
    color: violet,
    width: 8,
  },
  bulletText: {
    flex: 1,
  },
  note: {
    fontSize: 8.5,
    color: muted,
    marginTop: 3,
  },
  skillsRow: {
    marginBottom: 3,
  },
  skillLabel: {
    fontWeight: 600,
  },
  twoCol: {
    flexDirection: "row",
    gap: 18,
  },
  col: {
    flex: 1,
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
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{t.hero.title}</Text>
        <Text style={styles.availability}>
          {t.contact.location} · {t.hero.availability}
        </Text>
        <View style={styles.contacts}>
          <Link src={`mailto:${profile.email}`} style={styles.contactLink}>
            {profile.email}
          </Link>
          <Text>·</Text>
          <Link src={`tel:${profile.phoneHref}`} style={styles.contactLink}>
            {profile.phone}
          </Link>
          <Text>·</Text>
          <Link src={profile.github} style={styles.contactLink}>
            github.com/paweljadach
          </Link>
          <Text>·</Text>
          <Link src={profile.linkedin} style={styles.contactLink}>
            linkedin.com/in/paweljadach
          </Link>
        </View>
        <View style={styles.rule} />

        <Text style={styles.sectionTitle}>{t.about.title}</Text>
        {t.about.paragraphs.map((paragraph) => (
          <Text key={paragraph} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>{t.experience.title}</Text>
        {t.experience.jobs.map((job) => (
          <View key={job.company}>
            <View style={styles.jobHead}>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.period}>
                {job.location ? `${job.location} · ` : ""}
                {job.period}
              </Text>
            </View>
            <Text style={styles.role}>{job.role}</Text>
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

        <Text style={styles.sectionTitle}>{t.projects.title}</Text>
        {t.projects.items.map((project) => (
          <View key={project.href}>
            <View style={styles.jobHead}>
              <Text style={styles.company}>{project.name}</Text>
              <Text style={styles.period}>{project.meta}</Text>
            </View>
            <Text style={styles.paragraph}>{project.description}</Text>
            <Link src={project.href} style={styles.contactLink}>
              {project.href.replace("https://", "")}
            </Link>
          </View>
        ))}

        <Text style={styles.sectionTitle}>{t.skills.title}</Text>
        {t.skills.groups.map((group) => (
          <Text key={group.title} style={styles.skillsRow}>
            <Text style={styles.skillLabel}>{group.title}: </Text>
            {group.items.join(" · ")}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>{t.education.title}</Text>
        <Text style={styles.company}>{t.education.school}</Text>
        <Text>
          {t.education.degree} · {t.education.field} · {t.education.location} ·{" "}
          {t.education.period}
        </Text>

        <Text style={styles.sectionTitle}>{t.workStatus.title}</Text>
        <Text style={styles.paragraph}>{t.workStatus.text}</Text>

        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>{t.languages.title}</Text>
            {t.languages.items.map((language) => (
              <Text key={language.name}>
                {language.name} — {language.level}
              </Text>
            ))}
          </View>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>{t.interests.title}</Text>
            {t.interests.items.map((interest) => (
              <Text key={interest.title}>
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
