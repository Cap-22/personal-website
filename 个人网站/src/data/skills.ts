export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 0-100
  icon: string;
}

export const skills: Skill[] = [
  // 前端技术
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 95,
    icon: 'react'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 90,
    icon: 'nextjs'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 88,
    icon: 'typescript'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 92,
    icon: 'tailwind'
  },
  {
    id: 'framer',
    name: 'Framer Motion',
    category: 'Frontend',
    level: 85,
    icon: 'framer'
  },
  
  // 设计工具
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design',
    level: 90,
    icon: 'figma'
  },
  {
    id: 'sketch',
    name: 'Sketch',
    category: 'Design',
    level: 85,
    icon: 'sketch'
  },
  {
    id: 'adobe',
    name: 'Adobe Creative Suite',
    category: 'Design',
    level: 80,
    icon: 'adobe'
  },
  
  // 后端技术
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    level: 82,
    icon: 'nodejs'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    level: 75,
    icon: 'python'
  },
  {
    id: 'database',
    name: 'Database Design',
    category: 'Backend',
    level: 78,
    icon: 'database'
  },
  
  // AI & 机器学习
  {
    id: 'ai',
    name: 'AI Integration',
    category: 'AI/ML',
    level: 88,
    icon: 'ai'
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'AI/ML',
    level: 70,
    icon: 'ml'
  },
  
  // 其他技能
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools',
    level: 90,
    icon: 'git'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tools',
    level: 75,
    icon: 'docker'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud',
    level: 72,
    icon: 'aws'
  }
];

export const skillCategories = [
  { id: 'Frontend', name: '前端开发', color: 'blue' },
  { id: 'Design', name: '设计工具', color: 'purple' },
  { id: 'Backend', name: '后端开发', color: 'green' },
  { id: 'AI/ML', name: 'AI & 机器学习', color: 'orange' },
  { id: 'Tools', name: '开发工具', color: 'gray' },
  { id: 'Cloud', name: '云服务', color: 'indigo' }
]; 