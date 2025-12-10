export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  description: string[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  items: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
}

export interface Achievement {
  role: string;
  organization: string;
  description: string;
  icon: string;
  tags: string[];
}

export type View = 'home' | 'projects' | 'experience' | 'skills';