"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { Logo } from "@/components/logo";
import { DownloadCv } from "@/components/download-cv";
import { useLanguage } from "@/components/language-provider";
import {
  ArrowIcon,
  CheckIcon,
  ExternalLinkIcon,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { profile } from "@/lib/cv";

const ctaClass =
  "inline-flex items-center justify-center px-8 py-3 text-base sm:text-lg font-semibold tracking-wide text-slate-100 bg-[#201034] hover:bg-[#30164f] border border-violet-900/70 shadow-sm shadow-black/70 hover:shadow-md hover:shadow-violet-950/80 transition-all duration-150 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function ContactIconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-violet-700 shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-violet-700/50">
      {children}
    </div>
  );
}

function SocialChip({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-300 transition-all hover:scale-105 hover:bg-zinc-700"
    >
      {icon}
      {label}
    </a>
  );
}

export function CvPage() {
  const { t, locale } = useLanguage();

  return (
    <div id="top" className="min-h-full bg-[#0a0a0a]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-violet-700 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        {t.skip}
      </a>

      <Nav />

      <main id="main-content">
        <section className="relative flex h-screen items-center justify-center overflow-hidden print:h-auto print:py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="animate-kenburns object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/95 via-zinc-950/95 to-violet-950/95 mix-blend-overlay" />
            <div className="animate-orb pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-violet-700/25 blur-3xl" />
            <div className="animate-orb-alt pointer-events-none absolute top-20 right-1/5 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:translate-y-[-10%] lg:px-12">
            <div key={locale} className="hero-stagger space-y-3 text-center">
              <p className="text-sm font-medium tracking-wide text-violet-300/90 uppercase">
                {t.contact.location} · {t.hero.availability}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                {t.hero.greeting}
              </h1>
              <p className="text-xl font-semibold text-violet-200/90 sm:text-2xl">
                {t.hero.title}
              </p>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300/80 sm:text-xl">
                {t.hero.lead}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <a href="#contact" className={ctaClass}>
                  {t.hero.cta}
                  <ArrowIcon />
                </a>
                <DownloadCv />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <Reveal className="space-y-8 text-center">
              <h2 className="text-4xl font-bold text-zinc-50 sm:text-5xl">{t.about.title}</h2>
              <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-zinc-50 sm:text-5xl">
                {t.experience.title}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-zinc-400">
                {t.experience.subtitle}
              </p>
            </Reveal>

            <div className="mx-auto max-w-4xl space-y-10">
              {t.experience.jobs.map((job, index) => (
                <Reveal key={job.company} delay={index * 0.1}>
                  <article
                    className={`card-shine group relative overflow-hidden rounded-xl border bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      job.current
                        ? "border-2 border-violet-500 shadow-lg hover:border-violet-400"
                        : "border-zinc-800 hover:border-violet-400"
                    }`}
                  >
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="flex justify-start sm:justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-violet-700 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
                          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 text-xl font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-700/50">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-zinc-50">{job.company}</h3>
                            <p className="font-semibold text-violet-200/90">{job.role}</p>
                          </div>
                          <p className="text-sm font-medium text-zinc-400">
                            {job.location ? `${job.location} · ` : ""}
                            {job.period}
                          </p>
                        </div>
                        {job.technologies.length > 0 ? (
                          <p className="mb-4 text-sm text-zinc-500">
                            {t.experience.technologies}: {job.technologies.join(", ")}
                          </p>
                        ) : null}
                        <ul className="space-y-2">
                          {job.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-zinc-400"
                            >
                              <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-300" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {"note" in job && job.note ? (
                          <p className="mt-4 text-sm italic text-zinc-500">{job.note}</p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-zinc-50 sm:text-5xl">
                {t.projects.title}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-zinc-400">
                {t.projects.subtitle}
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {t.projects.items.map((project, index) => (
                <Reveal key={project.href} delay={index * 0.04}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`card-shine group block h-full rounded-xl bg-zinc-950 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl ${
                      index === 0
                        ? "border-2 border-violet-500 md:col-span-2"
                        : "border border-zinc-800"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-50">{project.name}</h3>
                        <p className="mt-1 text-sm font-medium text-violet-300">
                          {project.meta}
                        </p>
                      </div>
                      <ExternalLinkIcon className="mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-violet-300" />
                    </div>
                    <p className="mt-4 leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm text-zinc-500">
                      {project.href
                        .replace(/^https?:\/\//, "")
                        .replace(/^www\./, "")}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-zinc-50 sm:text-5xl">
                {t.skills.title}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-zinc-400">
                {t.skills.subtitle}
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
              {t.skills.groups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.08}>
                  <div
                    className={`card-shine h-full rounded-xl border bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl ${
                      group.featured || group.title === "AI"
                        ? "border-2 border-violet-500 shadow-lg"
                        : "border-zinc-800"
                    }`}
                  >
                    <h3 className="mb-6 text-2xl font-bold text-zinc-50">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-zinc-400"
                        >
                          <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <Reveal>
              <div className="card-shine rounded-xl border-2 border-violet-500 bg-zinc-950 p-8 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-zinc-50">{t.workStatus.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{t.workStatus.text}</p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="card-shine h-full rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl">
                  <h3 className="mb-6 text-2xl font-bold text-zinc-50">
                    {t.languages.title}
                  </h3>
                  <ul className="space-y-3">
                    {t.languages.items.map((language) => (
                      <li
                        key={language.name}
                        className="flex items-center justify-between text-zinc-400"
                      >
                        <span>{language.name}</span>
                        <span className="text-sm font-medium text-violet-300">
                          {language.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="card-shine h-full rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl">
                  <h3 className="mb-6 text-2xl font-bold text-zinc-50">
                    {t.interests.title}
                  </h3>
                  <ul className="space-y-3">
                    {t.interests.items.map((interest) => (
                      <li key={interest.title} className="text-zinc-400">
                        <span className="font-medium text-zinc-50">{interest.title}</span>
                        {interest.detail ? <span> — {interest.detail}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
          <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
            <Reveal className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-zinc-50 sm:text-5xl">
                {t.contact.title}
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-zinc-400">
                {t.contact.subtitle}
              </p>
              <div className="flex justify-center pt-4">
                <DownloadCv />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-zinc-50">{t.contact.details}</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group flex items-start gap-4">
                    <ContactIconBox>
                      <MailIcon className="h-6 w-6 text-white" />
                    </ContactIconBox>
                    <div>
                      <p className="mb-1 text-sm font-medium text-zinc-400">{t.contact.email}</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-lg text-zinc-50 transition-colors hover:text-violet-300"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4">
                    <ContactIconBox>
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </ContactIconBox>
                    <div>
                      <p className="mb-1 text-sm font-medium text-zinc-400">{t.contact.phone}</p>
                      <a
                        href={`tel:${profile.phoneHref}`}
                        className="text-lg text-zinc-50 transition-colors hover:text-violet-300"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4">
                    <ContactIconBox>
                      <PinIcon className="h-6 w-6 text-white" />
                    </ContactIconBox>
                    <div>
                      <p className="mb-1 text-sm font-medium text-zinc-400">
                        {t.contact.locationLabel}
                      </p>
                      <p className="text-lg text-zinc-50">{t.contact.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="mb-4 text-sm font-medium text-zinc-400">{t.contact.social}</p>
                  <div className="flex flex-wrap gap-4">
                    <SocialChip
                      href={profile.github}
                      label="GitHub"
                      icon={<GitHubIcon className="h-5 w-5 text-zinc-100" />}
                    />
                    <SocialChip
                      href={profile.linkedin}
                      label="LinkedIn"
                      icon={<LinkedInIcon className="h-5 w-5 text-blue-400" />}
                    />
                    <SocialChip
                      href={profile.instagram}
                      label="Instagram"
                      icon={<InstagramIcon className="h-5 w-5 text-pink-400" />}
                    />
                    <SocialChip
                      href={profile.facebook}
                      label="Facebook"
                      icon={<FacebookIcon className="h-5 w-5 text-blue-400" />}
                    />
                    <SocialChip
                      href={profile.whatsapp}
                      label="WhatsApp"
                      icon={<WhatsAppIcon className="h-5 w-5 text-green-400" />}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 py-12 text-zinc-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:px-8 md:flex-row lg:px-12">
          <div className="flex items-center gap-3">
            <Logo />
            <p className="text-sm">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all hover:scale-110 hover:text-zinc-50"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all hover:scale-110 hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all hover:scale-110 hover:text-pink-400"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-all hover:scale-110 hover:text-green-400"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
