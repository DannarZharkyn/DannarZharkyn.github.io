import somni from '../assets/projects/somni.png';
import terrier from '../assets/projects/terrier.png';
import wellbeing from '../assets/projects/wellbeing.png';

export const projects = [
  {
    name: 'Somni Systems',
    description: 'Personalized neck support solutions for better sleep.',
    tags: ['Product', 'Sleep technology'],
    image: somni,
    imageAlt: 'Somni pillow product visualization',
    visual: 'somni',
    demo: 'https://somni-systems.vercel.app',
    repository: 'https://github.com/DannarZharkyn/SomniSystems',
  },
  {
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
