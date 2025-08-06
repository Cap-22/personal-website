export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'ozone',
    title: 'Ozone',
    description: 'AI视频生成平台，为创作者提供强大的视频制作工具',
    image: '/images/projects/ozone.jpg',
    category: 'AI Platform',
    tags: ['React', 'TypeScript', 'AI', 'Video'],
    link: 'https://ozone.ai'
  },
  {
    id: 'instant',
    title: 'Instant',
    description: '即时AI应用开发平台，让开发者快速构建AI应用',
    image: '/images/projects/instant.jpg',
    category: 'AI Development',
    tags: ['Next.js', 'AI', 'Developer Tools'],
    link: 'https://instant.dev'
  },
  {
    id: 'ionet',
    title: 'IO.NET',
    description: '去中心化GPU计算网络，为AI训练提供算力支持',
    image: '/images/projects/ionet.jpg',
    category: 'Blockchain',
    tags: ['Blockchain', 'AI', 'GPU', 'Web3'],
    link: 'https://io.net'
  },
  {
    id: 'forai-pocket',
    title: 'ForAI - Pocket Contact',
    description: 'AI设计工作室的移动端联系应用',
    image: '/images/projects/forai-pocket.jpg',
    category: 'Mobile App',
    tags: ['React Native', 'Mobile', 'Design'],
    link: '#'
  },
  {
    id: 'b3-gaming',
    title: 'B3 – Future of Onchain Gaming',
    description: '链上游戏平台，重新定义游戏体验',
    image: '/images/projects/b3-gaming.jpg',
    category: 'Gaming',
    tags: ['Web3', 'Gaming', 'Blockchain'],
    link: 'https://b3.fun'
  },
  {
    id: 'rise-calendar',
    title: 'Rise Calendar',
    description: '智能日历应用，帮助用户更好地管理时间',
    image: '/images/projects/rise-calendar.jpg',
    category: 'Productivity',
    tags: ['React', 'Calendar', 'Productivity'],
    link: '#'
  },
  {
    id: 'garage-lab',
    title: 'Garage Lab – AI',
    description: 'AI实验室平台，为研究人员提供实验环境',
    image: '/images/projects/garage-lab.jpg',
    category: 'Research',
    tags: ['AI', 'Research', 'Laboratory'],
    link: '#'
  },
  {
    id: 'doconomy',
    title: '2030 Forecast by Doconomy',
    description: '可持续金融预测平台，关注环境责任',
    image: '/images/projects/doconomy.jpg',
    category: 'Fintech',
    tags: ['Fintech', 'Sustainability', 'Forecasting'],
    link: 'https://doconomy.com'
  }
]; 