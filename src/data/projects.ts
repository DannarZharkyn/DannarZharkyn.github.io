import type { ImageMetadata } from 'astro';
import somni from '../assets/projects/somni.png';
import terrier from '../assets/projects/terrier.png';
import wellbeing from '../assets/projects/wellbeing.png';

// Content blocks can contain paragraphs, bullet points, and captioned images.
export interface ProjectBlock {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  caption?: string;
}
export interface Project {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image: ImageMetadata | null;
  imageAlt: string;
  visual: string;
  demo?: string;
  demoLabel?: string;
  company?: { about: string; learnMoreLabel?: string; roleTitle: string; role: string; contributions: string[] };
  repository?: string;
  overview?: { purpose?: string; problem?: string; role?: string };
  technical?: ProjectBlock[];
  process?: ProjectBlock[];
  results?: ProjectBlock[];
}

export const projects: Project[] = [
  {
    slug: 'somni-systems',
    name: 'Somni Systems',
    description: 'Personalized neck support solutions for better sleep.',
    tags: ['Product', 'Sleep technology'],
    image: somni,
    imageAlt: 'Somni pillow product visualization',
    visual: 'somni',
    demo: 'https://somni-systems.vercel.app',
    demoLabel: 'Company website',
    company: {
      about: 'Somni Systems is developing adjustable sleep technology focused on personalized neck support and comfort.',
      learnMoreLabel: 'Learn more about Somni',
      roleTitle: 'Co-Founder · Product & Systems Development',
      role: 'My work spans user research, product development, prototyping, system design, and coordination of technical development from early concept toward a functional proof of concept.',
      contributions: ['User Research', 'Product Requirements', 'Prototype Development', 'System Design', 'Hardware Exploration', 'Technical Coordination'],
    },
  },
  {
    slug: 'terrier-pursuit',
    name: 'Terrier Pursuit',
    description: 'Campus scavenger hunt prototype for organizers and student teams.',
    tags: ['Web development', 'UX', 'Prototype'],
    image: terrier,
    imageAlt: 'Map and compass artwork from Terrier Pursuit',
    visual: 'terrier',
    demo: 'https://terrier-pursuit-prototype.vercel.app/organizer/dashboard',
    repository: 'https://github.com/DannarZharkyn/terrier-pursuit-prototype',
  },
  {
    slug: 'wellbeing-challenge',
    name: 'Wellbeing Challenge',
    description: 'Frontend prototype for an employee wellbeing challenge application.',
    tags: ['Frontend', 'Wellbeing', 'Prototype'],
    image: wellbeing,
    imageAlt: 'Wellbeing Challenge project banner',
    visual: 'wellbeing',
    demo: '',
    repository: '', // Private repository; do not link visitors to an inaccessible page.
  },
  {
    slug: 'urban-mobility',
    name: 'Urban Mobility',
    description: 'Multi-agent traffic simulation with driver behaviors and adaptive signals.',
    tags: ['Python', 'Simulation', 'Multi-agent'],
    image: null,
    imageAlt: '',
    visual: 'mobility',
    demo: 'https://multi-agent-transportation-modeling.vercel.app',
    repository: 'https://github.com/DannarZharkyn/Multi-agent-Transportation-Modeling',
  },
];
