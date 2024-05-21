import { FaGithub, FaGlobe, FaLinkedin, FaDiscord, FaFolder, FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export type Link = {
  title: string;
  href: string;
  icon: React.ComponentType; 
};

export const USER = {
  name: 'Ricardo Willian',
  role: 'Desenvolvedor Front-end', 
  bio: 'Construindo experiências digitais',
  email: 'rwbemiliano@gmail.com',
  isVerified: true,
};

export const CONTACT_LINKS: Link[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rwbe',
    icon: FaLinkedin,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/rwbemiliano',
    icon: FaXTwitter,
  },
  {
    title: 'Discord',
    href: 'https://discord.com/invite/EXfUHevtuH',
    icon: FaDiscord,
  },
  {
    title: 'Email',
    href: `mailto:${USER.email}`,
    icon: MdEmail,
  },
];

export const OTHER_LINKS: Link[] = [
  {
    title: 'Website',
    href: 'https://devricky.com.br/', 
    icon: FaGlobe,
  },
  {
    title: 'Portfolio', 
    href: 'https://portfolio.devricky.com.br', 
    icon: FaFolder, 
  },
  {
    title: 'GitHub',
    href: 'https://github.com/rwbe',
    icon: FaGithub,
  },
  {
    title: 'Dribbble',
    href: 'https://dribbble.com/rwbe',
    icon: FaDribbble,
  }
];
