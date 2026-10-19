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
  dates?: string;
  status?: string;
  company?: { about: string; impact?: string; learnMoreLabel?: string; roleTitle: string; role: string; contributions: string[] };
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
    description: 'A campus-wide scavenger hunt platform for Boston University Student Wellbeing.',
    dates: 'Jun 2026 – Aug 2026',
    tags: ['Web development', 'UX', 'Prototype', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    image: terrier,
    imageAlt: 'Map and compass artwork from Terrier Pursuit',
    visual: 'terrier',
    demo: 'https://terrier-pursuit.vercel.app/participant/welcome',
    demoLabel: 'Live demo',
    company: {
      about: 'An interactive campus-wide scavenger hunt platform for Boston University Student Wellbeing, with participant and organizer experiences. It supports event registration, QR-based participation, location challenges, event-specific configurations, and organizer tools.',
      impact: 'Deployed across multiple BU events, including large-scale student programs with 400+ participants.',
      learnMoreLabel: 'Explore the live demo',
      roleTitle: 'Software Engineer · Product Development',
      role: 'As one of the engineers developing the web app, I worked from early prototyping and stakeholder approval through implementation. I collaborated directly with Student Wellbeing stakeholders to improve the product based on event needs and participant feedback.',
      contributions: ['Prototyping & Stakeholder Approval', 'Participant & Organizer Experiences', 'Event Registration & QR Participation', 'Location Challenges', 'Event Configuration & Organizer Tools', 'Stakeholder Feedback & Iteration'],
    },
    repository: 'https://github.com/DannarZharkyn/terrier-pursuit-prototype',
  },
  {
    slug: 'wellbeing-challenge',
    name: 'Wellbeing Challenge',
    description: 'A student wellbeing platform for individual and group challenges.',
    status: 'In development',
    tags: ['Frontend', 'Wellbeing', 'Prototype', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    company: {
      about: 'A platform in development where students can take part in individual and group wellbeing challenges across BU’s seven dimensions of wellbeing: emotional, physical, environmental, social, intellectual, financial, and spiritual.',
      roleTitle: 'Software Development',
      role: 'I am developing the web platform to support student participation in individual and group wellbeing challenges, using Supabase and Vercel as part of the technology stack.',
      contributions: ['Student Challenge Experience', 'Individual & Group Participation', 'Frontend Development', 'Supabase Integration', 'Vercel Deployment'],
    },
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
