import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoFigma,
} from 'react-icons/bi';
import { FaSass } from 'react-icons/fa';
import {
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiTrpc,
  SiHtml5,
  SiJest,
  SiGit,
  SiWebpack,
} from 'react-icons/si';

export const FULL_STACK_SKILLS = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Sassy CSS', icon: FaSass },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: BiLogoJavascript },
  { name: 'TypeScript', icon: BiLogoTypescript },
  { name: 'React', icon: BiLogoReact },
  { name: 'TRPC', icon: SiTrpc },
  { name: 'ExpressJS', icon: SiExpress },
  { name: 'MongoDB', icon: BiLogoMongodb },
];

export const TOOLS_AND_DESIGN_SKILLS = [
  { name: 'Jest', icon: SiJest },
  { name: 'Git', icon: SiGit },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Figma', icon: BiLogoFigma },
];

export const OTHER_SKILLS = [
  'Vercel',
  'Netlify',
  'React Testing Library',
  'Landing Page Design',
  'UI/UX Design',
];
