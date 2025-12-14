import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'AI/ML' | 'Frameworks' | 'Backend/Tools';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'GenAI' | 'CV' | 'NLP' | 'Fullstack AI';
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
