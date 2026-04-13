import { NavItem, Project, SkillData, ProficiencyLevel } from './types';

export const PERSONAL_INFO = {
  name: "Felix Eden",
  role: "Angehender Software-Entwickler & IMS-Schüler",
  email: "felix@gilen.ch",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com/im24a-edenf"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Über mich", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projekte", href: "#projects" },
];

export const HERO_CONTENT = {
  headline: "Angehender Software-Entwickler & IMS-Schüler",
  subHeadline: "Fokus auf Python, Web-Development & sauberen Code. Auf der Suche nach einem spannenden Jahrespraktikum ab August 2026.",
  cta: "Zum Lebenslauf"
};

export const ABOUT_CONTENT = {
  title: "Über mich",
  paragraphs: [
    "Hallo, ich bin Felix Eden. Aktuell besuche ich das zweite Jahr der Informatikmittelschule an der Kantonsschule Hottingen. Mich fasziniert die Möglichkeit, komplexe Probleme durch logisches Denken und Code zu lösen.",
    "In der Schule und in meiner Freizeit baue ich mein Wissen in Python und Web-Technologien stetig aus. Dabei ist mir nicht nur wichtig, dass der Code funktioniert, sondern auch wie er strukturiert ist.",
    "Warum ich der richtige Praktikant für Ihr Team bin? Ich bringe eine schnelle Auffassungsgabe mit und habe grosse Lust, Neues zu lernen. Pünktlichkeit, Pflichtbewusstsein und offene Kommunikation sind für mich dabei keine leeren Worte, sondern die Basis für eine gute Zusammenarbeit im Team."
  ]
};

export const SKILL_DATA: SkillData = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    type: 'technical',
    skills: [
      { name: 'HTML5', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'CSS3', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'React', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'JavaScript (ES6+)', proficiency: 'Familiar' as ProficiencyLevel },
      { name: 'Next.js', proficiency: 'Familiar' as ProficiencyLevel }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    type: 'technical',
    skills: [
      { name: 'Python', proficiency: 'Expert' as ProficiencyLevel },
      { name: 'Java', proficiency: 'Familiar' as ProficiencyLevel },
      { name: 'Node.js', proficiency: 'Familiar' as ProficiencyLevel }
    ]
  },
  database: {
    id: 'database',
    title: 'Database & Data',
    type: 'technical',
    skills: [
      { name: 'SQL', proficiency: 'Expert' as ProficiencyLevel },
      { name: 'Data Modelling', proficiency: 'Expert' as ProficiencyLevel }
    ]
  },
  tools: {
    id: 'tools',
    title: 'Tools & Methoden',
    type: 'technical',
    skills: [
      { name: 'Scrum', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'Responsive Design', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'AI-Assisted Coding', proficiency: 'Proficient' as ProficiencyLevel },
      { name: 'JetBrains Tools', isTag: true },
      { name: 'Git / GitHub', isTag: true }
    ]
  },
  soft: {
    id: 'soft',
    title: 'Mindset & Soft Skills',
    type: 'soft',
    skills: [
      'Pünktlich',
      'Strukturiert',
      'Problemlöser',
      'Analytisch',
      'Kommunikativ',
      'Teamorientiert'
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
    link: "https://github.com/im24a-edenf/Portfolio_Felix"
  },
  {
    title: "Roblox Studio AI Co-Pilot",
    description: "Roblox Studio ist die Entwicklungsumgebung für das Spieleentwicklungs-Ökosystem Roblox. Dieses Tool ist ein KI-gestützter Assistent, der per Chat live in Roblox Studio arbeitet: 3D-Umgebungen erstellen, Skripte generieren und Spielsysteme aufbauen — alles in Echtzeit.",
    techStack: ["Python", "Flask", "React", "AI / LLM", "Luau"],
    status: "Work in Progress",
    linkText: "Code auf GitHub ansehen",
    link: "https://github.com/im24a-edenf/Roblox_Ai_connect"
  },
  {
    title: "Schiffe Versenken",
    description: "Ein browserbasiertes Schiffe-Versenken-Spiel mit zwei Modi: Einzelspieler gegen einen Bot sowie ein Echtzeit-Multiplayer-Modus.",
    techStack: ["React", "Java", "WebSockets"],
    status: "Completed",
    liveUrl: "https://schiffe-versenken.felix-eden.ch",
    linkText: "Frontend",
    link: "https://github.com/im24a-edenf/BattleShips_frontend",
    secondaryLink: "https://github.com/im24a-edenf/BattleShips_backend",
    secondaryLinkText: "Backend"
  }
];

export const CONTACT_CONTENT = {
  title: "Lassen Sie uns sprechen!",
  text: "Ich bin motiviert, mein theoretisches Wissen in der Praxis anzuwenden und Ihr Team als Praktikant zu unterstützen. Ich freue mich auf Ihre Nachricht.",
  footer: "© 2026 Felix Eden. Entwickelt mit React & Tailwind."
};