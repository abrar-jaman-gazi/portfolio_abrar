export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  category: 'Full-Stack' | 'AI / ML' | 'IoT / Systems' | 'Mobile / Web';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  previewType: 'interactive' | 'visual';
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  type: 'practical' | 'aiml';
  skills: {
    name: string;
    icon: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  icon: 'award' | 'scholarship' | 'academic';
}
