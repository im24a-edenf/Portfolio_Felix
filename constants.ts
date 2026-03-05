import { NavItem, Project, SkillData } from './types';

export const PERSONAL_INFO = {
  name: "Felix Eden",
  role: "Angehender Software-Entwickler & IMS-Schüler",
  email: "felix.eden@beispiel.ch", // Placeholder
  linkedin: "#",
  github: "#"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Über mich", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projekte", href: "#projects" },
];

export const HERO_CONTENT = {
  headline: "Angehender Software-Entwickler & IMS-Schüler",
  subHeadline: "Fokus auf Python, Web-Development & sauberen Code. Auf der Suche nach einem spannenden Jahrespraktikum ab August 2025.",
  cta: "Zum Lebenslauf"
};

export const ABOUT_CONTENT = {
  title: "Über mich",
  paragraphs: [
    "Hallo, ich bin Felix Eden. Aktuell besuche ich das zweite Jahr der Informatikmittelschule an der Kantonsschule Hottingen. Mich fasziniert die Möglichkeit, komplexe Probleme durch logisches Denken und Code zu lösen.",
    "In der Schule und in meiner Freizeit baue ich mein Wissen in Python und Web-Technologien stetig aus. Dabei ist mir nicht nur wichtig, dass der Code funktioniert, sondern auch wie er strukturiert ist.",
    "Warum ich der richtige Praktikant für Ihr Team bin? Ich bringe eine schnelle Auffassungsgabe mit und habe große Lust, Neues zu lernen. Pünktlichkeit, Pflichtbewusstsein und offene Kommunikation sind für mich dabei keine leeren Worte, sondern die Basis für eine gute Zusammenarbeit im Team."
  ]
};

export const SKILL_DATA: SkillData = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    type: 'technical',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    type: 'technical',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  database: {
    id: 'database',
    title: 'Database & Data',
    type: 'technical',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'Data Modelling', level: 82 }
    ]
  },
  tools: {
    id: 'tools',
    title: 'Tools & Methoden',
    type: 'technical',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Server-Side Rendering', level: 85 },
      { name: 'VS Code', isTag: true },
      { name: 'Scrum (Basics)', isTag: true }
    ]
  },
  soft: {
    id: 'soft',
    title: 'Mindset & Soft Skills',
    type: 'soft',
    skills: [
      'Punctual',
      'Structured',
      'Problem-solver',
      'Analytical',
      'Communicative',
      'Team-oriented'
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    title: "Mein persönliches Portfolio",
    description: "Diese Webseite wurde von Grund auf selbst entwickelt, um meine Frontend-Kenntnisse in der Praxis zu vertiefen.",
    techStack: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
    status: "Completed",
    linkText: "Code auf GitHub ansehen",
    link: "#"
  },
  {
    title: "Python Data Tool",
    description: "Aktuell arbeite ich an einer Python-Applikation zur Datenverarbeitung, um meine SQL-Kenntnisse mit Anwendungslogik zu verknüpfen.",
    techStack: ["Python", "SQL", "Pandas"],
    status: "Work in Progress",
    linkText: "Coming Soon"
  }
];

export const CONTACT_CONTENT = {
  title: "Lassen Sie uns sprechen!",
  text: "Ich bin motiviert, mein theoretisches Wissen in der Praxis anzuwenden und Ihr Team als Praktikant zu unterstützen. Ich freue mich auf Ihre Nachricht.",
  footer: "© 2026 Felix Eden. Entwickelt mit React & Tailwind."
};