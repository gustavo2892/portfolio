import { Linkedin, GithubIcon } from 'lucide-react';

type socialInfo = {
  name: string;
  icon: React.ReactNode;
  url: string;
}

export const socialLinks:socialInfo[] = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-4 w-4" />,
    url: 'https://www.linkedin.com/in/gustavo-vidal-de-freitas-962b84167/'
  },
  {
    name: 'GitHub',
    icon: <GithubIcon className="h-4 w-4" />,
    url: 'https://github.com/gustavo2892'
  },
];