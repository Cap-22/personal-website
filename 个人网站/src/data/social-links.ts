export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/forai-design',
    icon: 'github',
    color: '#333'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/forai-design',
    icon: 'linkedin',
    color: '#0077b5'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/forai_design',
    icon: 'twitter',
    color: '#1da1f2'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/forai.design',
    icon: 'instagram',
    color: '#e4405f'
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com/forai-design',
    icon: 'dribbble',
    color: '#ea4c89'
  },
  {
    id: 'behance',
    name: 'Behance',
    url: 'https://behance.net/forai-design',
    icon: 'behance',
    color: '#1769ff'
  }
]; 