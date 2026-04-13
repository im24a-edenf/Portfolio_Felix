export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  status: 'Completed' | 'Work in Progress';
  liveUrl?: string;
  link?: string;
  linkText: string;
  secondaryLink?: string;
  secondaryLinkText?: string;
}

// Skill & card types
export type ProficiencyLevel = 'Expert' | 'Proficient' | 'Familiar';

export interface TechSkill {
  name: string;
  proficiency?: ProficiencyLevel;
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