export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  status: 'Completed' | 'Work in Progress';
  link?: string;
  linkText: string;
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  content: string | string[];
}

// New Types for Bento Grid Layout
export interface TechSkill {
  name: string;
  level?: number; // If present, render progress bar. If not, render tag.
  isTag?: boolean;
}

export interface SkillCardData {
  id: string;
  title: string;
  type: 'technical' | 'soft';
  skills: TechSkill[] | string[]; // Strings for soft skills, objects for tech
}

export interface SkillData {
  frontend: SkillCardData;
  backend: SkillCardData;
  database: SkillCardData;
  tools: SkillCardData;
  soft: SkillCardData;
}