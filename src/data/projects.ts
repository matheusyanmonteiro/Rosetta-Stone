// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  deployUrl?: string;
  category: 'Data Engineering' | 'Fullstack' | 'Infrastructure';
}
