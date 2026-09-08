export type Locale = "pl" | "en";

export const profile = {
  name: "Paweł Jadach",
  firstName: "Paweł",
  email: "pawel.jadach.96@gmail.com",
  phone: "+48 665 032 847",
  phoneHref: "+48665032847",
  instagram: "https://www.instagram.com/pawel.jadach.96/",
  facebook: "https://www.facebook.com/jadach.pawel",
  whatsapp: "https://wa.me/48665032847",
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
    education: "Education",
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
  },
  hero: {
    greeting: "Hi, I'm Paweł",
    title: "Frontend Developer",
    availability: "10–20h / week · B2B",
    lead: "React and Next.js specialist, available for flexible part-time project work. 4+ years in corporate product teams at Empik and InPost.",
    cta: "Get in touch",
    download: "Download CV",
    downloadPl: "PDF in Polish",
    downloadEn: "PDF in English",
  },
  about: {
    title: "About",
    paragraphs: [
      "Frontend Developer (React, Next.js) available for 10–20h/week flexible project work. 4+ years building scalable web applications in corporate environments (Empik, InPost). Comfortable with part-time contracts, async communication, and a self-managed workload. Particularly experienced in authentication systems, performance optimization, and design systems.",
      "I design and ship both frontend interfaces and supporting backend systems, with a strong focus on performance, usability, and clean architecture. I use AI tools daily (Cursor, LLMs) for implementation, refactors, and code review — while keeping ownership of architecture and quality.",
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "Product teams, platforms, and frontend architecture",
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
          "Developed the frontend layer of the centralized authentication platform (OIDC / OAuth2) used across InPost services.",
          "Built authentication flows used as a WebView inside the mobile application, including Google and Apple sign-in integrations.",
          "Contributed to a centralized login, registration, and onboarding system used across 15+ InPost services and 5M+ users in 10+ countries.",
          "Developed self-service tools for customers and back-office applications for internal teams.",
          "Participated in building and maintaining the company Design System, creating reusable UI components and standards.",
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
          "Migrated a legacy Angular monolith (1M+ monthly users) to a modern microfrontend architecture using React and Next.js, reducing bundle size by ~40% and improving page load times.",
          "Developed and maintained merchant-facing tools and administrative panels for managing platform features and configurations.",
          "Managed application deployment, configuration, and environment setup.",
          "Maintained and refactored parts of the legacy codebase built with Angular and Freemarker, ensuring stability during the transition to modern technologies.",
        ],
      },
      {
        company: "Connectico",
        role: "Frontend Developer",
        period: "2020 — 2021",
        location: "Wrocław",
        technologies: ["React", "Next.js"],
        current: false,
        points: [
          "Developed an e-commerce store generator using React and Next.js.",
          "Managed the full project lifecycle: business requirements, UI design in Figma, development, and deployment.",
          "Built responsive and scalable frontend architecture.",
        ],
        note: "Reason for leaving: transition to larger-scale product work (Empik).",
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
        meta: "Personal project · In progress",
        description:
          "Personal trainer management platform built with Next.js and PostgreSQL. Full-stack development, from design to deployment.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Tools and practices I use every day",
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
          "macOS",
          "Jira",
          "Figma",
          "VSP Management",
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
          "AI-assisted reviews",
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
  education: {
    title: "Education",
    school: "State University of Applied Sciences in Legnica",
    degree: "Bachelor of Engineering (BEng)",
    field: "Computer Science",
    location: "Legnica, Poland",
    period: "2018 — 2021",
  },
  workStatus: {
    title: "Work status",
    text: "Registered sole proprietor (B2B). Available for flexible 10–20h/week contracts, async collaboration, and self-managed delivery. Daily AI-assisted workflow (Cursor, LLMs) to ship faster without lowering the quality bar.",
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
    locationLabel: "Location",
    location: "Wrocław, Poland",
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
    education: "Edukacja",
    contact: "Kontakt",
    menu: "Menu",
    close: "Zamknij menu",
  },
  hero: {
    greeting: "Cześć, jestem Paweł",
    title: "Frontend Developer",
    availability: "10–20h / tydzień · B2B",
    lead: "Specjalizuję się w React i Next.js. Szukam elastycznej współpracy part-time. Ponad 4 lata w zespołach produktowych Empik i InPost.",
    cta: "Napisz do mnie",
    download: "Pobierz CV",
    downloadPl: "PDF po polsku",
    downloadEn: "PDF po angielsku",
  },
  about: {
    title: "O mnie",
    paragraphs: [
      "Frontend Developer (React, Next.js), dostępny na elastyczną współpracę 10–20h tygodniowo. Ponad 4 lata budowania skalowalnych aplikacji webowych w środowiskach korporacyjnych (Empik, InPost). Dobrze odnajduję się w kontraktach part-time, komunikacji asynchronicznej i samodzielnie zarządzanym zakresie. Szczególnie doświadczony w systemach uwierzytelniania, optymalizacji wydajności i design systemach.",
      "Projektuję i wdrażam zarówno interfejsy frontendowe, jak i wspierające systemy backendowe — z naciskiem na wydajność, użyteczność i czystą architekturę. Na co dzień pracuję z narzędziami AI (Cursor, modele językowe) przy implementacji, refaktorach i code review, zachowując odpowiedzialność za architekturę i jakość kodu.",
    ],
  },
  experience: {
    title: "Doświadczenie",
    subtitle: "Zespoły produktowe, platformy i architektura frontendu",
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
          "Rozwinąłem warstwę frontendową scentralizowanej platformy uwierzytelniania (OIDC / OAuth2) używanej w serwisach InPost.",
          "Zbudowałem przepływy logowania jako WebView w aplikacji mobilnej, w tym integracje Google i Apple Sign-In.",
          "Współtworzyłem scentralizowany system logowania, rejestracji i onboardingu używany w 15+ serwisach InPost i przez 5M+ użytkowników w 10+ krajach.",
          "Tworzyłem narzędzia self-service dla klientów oraz aplikacje back-office dla zespołów wewnętrznych.",
          "Uczestniczyłem w budowie i utrzymaniu firmowego Design Systemu — reużywalne komponenty UI i standardy.",
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
          "Zmigrowałem monolityczną aplikację Angular (1M+ użytkowników miesięcznie) do nowoczesnej architektury mikrofrontendowej w React i Next.js, zmniejszając rozmiar bundla o ~40% i skracając czas ładowania stron.",
          "Rozwijałem i utrzymywałem narzędzia dla merchantów oraz panele administracyjne do zarządzania funkcjami i konfiguracją platformy.",
          "Odpowiadałem za wdrożenia, konfigurację i środowiska aplikacji.",
          "Utrzymywałem i refaktoryzowałem fragmenty legacy codebase w Angular i Freemarker, zapewniając stabilność w trakcie przejścia na nowoczesny stack.",
        ],
      },
      {
        company: "Connectico",
        role: "Frontend Developer",
        period: "2020 — 2021",
        location: "Wrocław",
        technologies: ["React", "Next.js"],
        current: false,
        points: [
          "Zbudowałem generator sklepów e-commerce w React i Next.js.",
          "Prowadziłem pełny cykl projektu: wymagania biznesowe, projekt UI w Figma, development i wdrożenie.",
          "Zaprojektowałem responsywną i skalowalną architekturę frontendu.",
        ],
        note: "Powód zmiany: przejście do pracy produktowej w większej skali (Empik).",
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
        meta: "Projekt własny · W trakcie",
        description:
          "Platforma do zarządzania pracą trenera personalnego, zbudowana w Next.js i PostgreSQL. Full-stack: od projektu po deployment.",
      },
    ],
  },
  skills: {
    title: "Umiejętności",
    subtitle: "Narzędzia i praktyki, których używam na co dzień",
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
          "macOS",
          "Jira",
          "Figma",
          "VSP Management",
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
          "Code review ze wsparciem AI",
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
  education: {
    title: "Edukacja",
    school: "Państwowa Wyższa Szkoła Zawodowa im. Witelona w Legnicy",
    degree: "Inżynier (inż.)",
    field: "Informatyka",
    location: "Legnica, Polska",
    period: "2018 — 2021",
  },
  workStatus: {
    title: "Forma współpracy",
    text: "Działalność gospodarcza (B2B). Dostępny do elastycznych kontraktów 10–20h tygodniowo, współpracy asynchronicznej i samodzielnego dowożenia zakresu. Codziennie korzystam z narzędzi AI (Cursor, LLM), żeby dowozić szybciej bez obniżania poprzeczki jakości.",
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
    locationLabel: "Lokalizacja",
    location: "Wrocław, Polska",
    social: "Online",
  },
};

export const content = { en, pl } as const;
