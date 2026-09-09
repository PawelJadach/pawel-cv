export type Locale = "pl" | "en";

export const profile = {
  name: "Paweł Jadach",
  firstName: "Paweł",
  email: "pawel.jadach.96@gmail.com",
  phone: "+48 665 032 847",
  phoneHref: "+48665032847",
  github: "https://github.com/paweljadach",
  linkedin: "https://www.linkedin.com/in/paweljadach",
  pdf: "/pawel-jadach.pdf",
} as const;

const en = {
  skip: "Skip to main content",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm Paweł",
    title: "Frontend Developer",
    role: "Frontend Developer",
    availability: "10–20h / week · B2B",
    lead: "If your company needs an experienced frontend developer, not full-time — you're in the right place.",
    cta: "Get in touch",
    download: "Download CV",
    downloadPl: "PDF in Polish",
    downloadEn: "PDF in English",
  },
  about: {
    title: "About",
    paragraphs: [
      "For over 6 years I've been building frontend solutions in React and Next.js, but the path taught me to look at systems as a whole — I got comfortable with backend, databases, and UX.",
      "I can do more than write code: gather requirements, talk to teams, and ship software that actually solves the problem.",
      "Day to day I use AI tools — Cursor, Claude, Grok — that speed up my work, and because I know this space I can also advise companies where these tools would actually add value or improve a process.",
    ],
  },
  experience: {
    title: "Experience",
    technologies: "Technologies",
    jobs: [
      {
        company: "InPost",
        role: "Frontend Developer",
        period: "2025 — current",
        location: "",
        technologies: ["Next.js", "React"],
        current: true,
        points: [
          "I built a centralized login, registration, and onboarding system used across InPost apps.",
          "I integrated my solution into the InPost mobile app as a WebView.",
          "Developed self-service tools for customers and back-office applications for internal teams.",
          "Participated in building and maintaining the company Design System.",
        ],
      },
      {
        company: "Empik",
        role: "Frontend Developer",
        period: "2021 — 2025",
        location: "Warsaw",
        technologies: ["React", "Next.js", "Angular", "Freemarker"],
        current: false,
        points: [
          "Migrated part of a legacy Angular monolith (1M+ monthly users) to a modern microfrontend architecture using React and Next.js, reducing page load times and improving UX.",
          "Developed and maintained merchant-facing tools and administrative panels for managing platform features and configurations.",
          "Managed application deployment, configuration, and environment setup.",
          "Maintained and refactored parts of the legacy codebase built with Angular and Freemarker, ensuring stability during the transition to modern technologies.",
        ],
      },
      {
        company: "Connectico",
        role: "Frontend Developer",
        period: "2020 — 2021",
        location: "",
        technologies: ["React", "Next.js"],
        current: false,
        points: [
          "Developed an e-commerce store generator using React and Next.js.",
          "Managed the full project lifecycle: business requirements, UI design in Figma, development, and deployment.",
          "Built responsive and scalable frontend architecture.",
        ],
      },
    ],
  },
  projects: {
    title: "Side projects",
    subtitle: "Independent product work, from design to deployment",
    items: [
      {
        name: "Trainboard",
        href: "https://trainboard.pl",
        description:
          "Personal trainer platform: public profiles, online bookings, packages, and a trainer dashboard. Next.js, PostgreSQL, Clerk, Stripe.",
      },
      {
        name: "Squared Away",
        href: "https://squared-away-two.vercel.app",
        description:
          "One place to run household, money, and habits. Next.js monorepo with Neon, Clerk, and PWA — including a furnace and pellet tracker.",
      },
      {
        name: "Fighter Portfolio",
        href: "https://fighter-portfolio-ten.vercel.app",
        description:
          "Searchable portfolio of combat-sports athletes: public profiles, fight-ready status, and contact. Next.js, Neon, Clerk.",
      },
      {
        name: "Payflo",
        href: "https://payflo-alpha.vercel.app",
        description:
          "Invoicing SaaS for technical teams. Next.js, Convex, Clerk, and Resend.",
      },
      {
        name: "Suggestly",
        href: "https://suggestly.vercel.app",
        description:
          "Public feedback boards with voting, status workflow, analytics, and Stripe billing. Next.js, Prisma, Clerk.",
      },
      {
        name: "Moja półka",
        href: "https://book-checklist.vercel.app",
        description:
          "Personal bookshelf: reading lists, ratings, and notes. Next.js and Convex.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Tools I use every day",
    groups: [
      {
        title: "Frontend",
        featured: true,
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        featured: false,
        items: ["REST API", "Payload CMS", "PostgreSQL", "Nest", "Express"],
      },
      {
        title: "DevOps / Tools",
        featured: false,
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "Bitbucket",
          "Vercel",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Grafana",
          "Dynatrace",
          "macOS",
          "Jira",
          "Figma",
          "VPS management",
          "VS Code",
        ],
      },
      {
        title: "AI",
        featured: false,
        items: [
          "Cursor",
          "Claude",
          "ChatGPT",
          "GitHub Copilot",
        ],
      },
      {
        title: "Soft skills",
        featured: false,
        items: [
          "Problem solving",
          "Communication",
          "Team collaboration",
          "Ownership",
        ],
      },
    ],
  },
  workStatus: {
    title: "How I work",
    text: "I'm looking for B2B work, 10–20h a week — length of the engagement doesn't matter. I work remotely, but meeting in person is fine. I'm most comfortable on my own machine and tools, though I'm flexible about that.",
  },
  languages: {
    title: "Languages",
    items: [
      { name: "Polish", level: "Native" },
      { name: "English", level: "B2" },
    ],
  },
  interests: {
    title: "Interests",
    items: [
      { title: "Sport", detail: "Gym, MMA" },
      { title: "Games", detail: "" },
      {
        title: "Books",
        detail: "Business, self-development, psychology, entrepreneurship",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Open to part-time B2B work — let's talk.",
    details: "Contact details",
    email: "Email",
    phone: "Phone",
    social: "Online",
  },
};

const pl: typeof en = {
  skip: "Przejdź do treści głównej",
  nav: {
    about: "O mnie",
    experience: "Doświadczenie",
    projects: "Projekty",
    skills: "Umiejętności",
    contact: "Kontakt",
    menu: "Menu",
    close: "Zamknij menu",
  },
  hero: {
    greeting: "Cześć, jestem Paweł",
    title: "Frontend Developer",
    role: "Frontend Developer",
    availability: "10–20h / tydzień · B2B",
    lead: "Jeśli Twoja firma potrzebuje doświadczonego frontend developera, nie na pełen etat — świetnie trafiłeś.",
    cta: "Napisz do mnie",
    download: "Pobierz CV",
    downloadPl: "PDF po polsku",
    downloadEn: "PDF po angielsku",
  },
  about: {
    title: "O mnie",
    paragraphs: [
      "Od ponad 6 lat tworzę rozwiązania frontendowe w React i Next.js, ale moja droga nauczyła mnie patrzeć na systemy całościowo — zaznajomiłem się z backendem, bazami danych, UX-em.",
      "Potrafię nie tylko pisać kod, ale zbierać wymagania, rozmawiać z zespołami i dostarczać oprogramowanie, które realnie rozwiązuje problem.",
      "W pracy na co dzień wykorzystuję narzędzia AI — Cursor, Claude, Grok — które przyspieszają moją pracę, a jednocześnie dzięki obyciu z tym światem potrafię doradzić firmom, gdzie tego typu narzędzia mogłyby rzeczywiście dodać wartość lub usprawnić jakiś proces.",
    ],
  },
  experience: {
    title: "Doświadczenie",
    technologies: "Technologie",
    jobs: [
      {
        company: "InPost",
        role: "Frontend Developer",
        period: "2025 — obecnie",
        location: "",
        technologies: ["Next.js", "React"],
        current: true,
        points: [
          "Utworzyłem scentralizowany system logowania, rejestracji i onboardingu używany w aplikacjach InPost.",
          "Zintegrowałem moje rozwiązanie z aplikacją mobilną InPost jako WebView.",
          "Tworzyłem narzędzia self-service dla klientów oraz aplikacje back-office dla zespołów wewnętrznych.",
          "Uczestniczyłem w budowie i utrzymaniu firmowego Design Systemu.",
        ],
      },
      {
        company: "Empik",
        role: "Frontend Developer",
        period: "2021 — 2025",
        location: "Warszawa",
        technologies: ["React", "Next.js", "Angular", "Freemarker"],
        current: false,
        points: [
          "Zmigrowałem część monolitycznej aplikacji Angular (1M+ użytkowników miesięcznie) do nowoczesnej architektury mikrofrontendowej w React i Next.js, skracając czas ładowania i poprawiając UX.",
          "Rozwijałem i utrzymywałem narzędzia dla merchantów oraz panele administracyjne do zarządzania funkcjami i konfiguracją platformy.",
          "Odpowiadałem za wdrożenia, konfigurację i środowiska aplikacji.",
          "Utrzymywałem i refaktoryzowałem fragmenty legacy codebase w Angular i Freemarker, zapewniając stabilność w trakcie przejścia na nowoczesny stack.",
        ],
      },
      {
        company: "Connectico",
        role: "Frontend Developer",
        period: "2020 — 2021",
        location: "",
        technologies: ["React", "Next.js"],
        current: false,
        points: [
          "Zbudowałem generator sklepów e-commerce w React i Next.js.",
          "Prowadziłem pełny cykl projektu: wymagania biznesowe, projekt UI w Figma, development i wdrożenie.",
          "Zaprojektowałem responsywną i skalowalną architekturę frontendu.",
        ],
      },
    ],
  },
  projects: {
    title: "Projekty własne",
    subtitle: "Niezależna praca produktowa — od projektu po wdrożenie",
    items: [
      {
        name: "Trainboard",
        href: "https://trainboard.pl",
        description:
          "Platforma dla trenerów: publiczne profile, rezerwacje online, pakiety i panel trenera. Next.js, PostgreSQL, Clerk, Stripe.",
      },
      {
        name: "Squared Away",
        href: "https://squared-away-two.vercel.app",
        description:
          "Jedno miejsce do ogarniania domu, finansów i nawyków. Next.js, Neon, Clerk, PWA — w tym rejestr pieca i pelletu.",
      },
      {
        name: "Fighter Portfolio",
        href: "https://fighter-portfolio-ten.vercel.app",
        description:
          "Portfolio i wyszukiwarka zawodników sportów walki: publiczne profile, status gotowości do walki i kontakt. Next.js, Neon, Clerk.",
      },
      {
        name: "Payflo",
        href: "https://payflo-alpha.vercel.app",
        description:
          "SaaS do fakturowania dla zespołów technicznych. Next.js, Convex, Clerk, Resend.",
      },
      {
        name: "Suggestly",
        href: "https://suggestly.vercel.app",
        description:
          "Publiczne tablice feedbacku z głosowaniem, statusami, analityką i billingiem Stripe. Next.js, Prisma, Clerk.",
      },
      {
        name: "Moja półka",
        href: "https://book-checklist.vercel.app",
        description:
          "Osobista lista książek: status przeczytania, oceny i notatki. Next.js i Convex.",
      },
    ],
  },
  skills: {
    title: "Umiejętności",
    subtitle: "Narzędzia, których używam na co dzień",
    groups: [
      {
        title: "Frontend",
        featured: true,
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      },
      {
        title: "Backend",
        featured: false,
        items: ["REST API", "Payload CMS", "PostgreSQL", "Nest", "Express"],
      },
      {
        title: "DevOps / Narzędzia",
        featured: false,
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "Bitbucket",
          "Vercel",
          "Docker",
          "Kubernetes",
          "Jenkins",
          "Grafana",
          "Dynatrace",
          "macOS",
          "Jira",
          "Figma",
          "zarządzanie VPS",
          "VS Code",
        ],
      },
      {
        title: "AI",
        featured: false,
        items: [
          "Cursor",
          "Claude",
          "ChatGPT",
          "GitHub Copilot",
        ],
      },
      {
        title: "Kompetencje miękkie",
        featured: false,
        items: [
          "Rozwiązywanie problemów",
          "Komunikacja",
          "Współpraca zespołowa",
          "Ownership",
        ],
      },
    ],
  },
  workStatus: {
    title: "Forma współpracy",
    text: "Szukam współpracy B2B, 10–20h tygodniowo — długość współpracy bez znaczenia. Pracuję zdalnie, ale spotkania na żywo nie są problemem. Najwygodniej będzie mi na własnym sprzęcie i narzędziach, ale jestem pod tym względem elastyczny.",
  },
  languages: {
    title: "Języki",
    items: [
      { name: "Polski", level: "Ojczysty" },
      { name: "Angielski", level: "B2" },
    ],
  },
  interests: {
    title: "Zainteresowania",
    items: [
      { title: "Sport", detail: "Siłownia, MMA" },
      { title: "Gry", detail: "" },
      {
        title: "Książki",
        detail: "Biznes, rozwój osobisty, psychologia, przedsiębiorczość",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    subtitle: "Szukam współpracy part-time B2B — napisz.",
    details: "Dane kontaktowe",
    email: "Email",
    phone: "Telefon",
    social: "Online",
  },
};

export const content = { en, pl } as const;

export function projectDisplayHost(href: string): string | null {
  try {
    const { hostname } = new URL(href);
    if (hostname.endsWith(".vercel.app")) {
      return null;
    }
    return hostname;
  } catch {
    return null;
  }
}
