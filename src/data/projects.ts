import fitPitch from '../assets/projects/pitches/terrier-fit.png';
import groundPitch from '../assets/projects/pitches/common-ground.png';
import roommatePreferences from '../assets/projects/pitches/roommate-preferences.png';
import sharedCalendar from '../assets/projects/pitches/shared-calendar.png';
import communityEvents from '../assets/projects/pitches/community-events.png';
import type { ImageMetadata } from 'astro';
import somni from '../assets/projects/somni.png';
import terrier from '../assets/projects/terrier.png';
import wellbeing from '../assets/projects/wellbeing.png';
import robotWeb from '../assets/projects/delivery-robot/web-interface.jpeg';
import robotCompass from '../assets/projects/delivery-robot/android-compass.jpeg';
import robotWorkflow from '../assets/projects/delivery-robot/delivery-workflow.jpeg';
import robotArduino from '../assets/projects/delivery-robot/arduino-mega.jpeg';
import robotWifi from '../assets/projects/delivery-robot/esp8266.jpeg';
import robotSensor from '../assets/projects/delivery-robot/ultrasonic.jpeg';

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
  cardTags?: string[];
  image: ImageMetadata | null;
  imageAlt: string;
  visual: string;
  gallery?: { image: ImageMetadata; alt: string; caption: string }[];
  recognition?: string;
  demo?: string;
  demoLabel?: string;
  dates?: string;
  status?: string;
  institution?: string;
  evidence?: {
    architecture: { title: string; text: string }[];
    figures: { image: ImageMetadata; alt: string; caption: string; portrait?: boolean }[];
    demonstrated: string;
    reported: string;
  };
  company?: { about: string; impact?: string; learnMoreLabel?: string; roleTitle: string; role: string; contributions: string[] };
  repository?: string;
  overview?: { purpose?: string; problem?: string; role?: string };
  technical?: ProjectBlock[];
  process?: ProjectBlock[];
  results?: ProjectBlock[];
}

export const projects: Project[] = [
  {
    slug: 'autonomous-delivery-robot',
    name: 'Autonomous Delivery Robot',
    description: 'Design and Development of a Robotic Assistant Control System',
    dates: 'September 2022 – May 2023',
    status: 'Bachelor’s Thesis Project',
    institution: 'L.N. Gumilyov Eurasian National University',
    tags: ['Arduino Mega 2560', 'NodeMCU ESP8266', 'C++', 'Arduino IDE', 'React', 'JavaScript', 'Firebase', 'Google Maps API', 'Android Studio', 'Java', 'GPS', 'Ultrasonic Sensors'],
    image: robotWeb,
    imageAlt: 'Original thesis screenshot of the React delivery control interface with Google Maps and destination fields',
    visual: 'delivery-robot',
    cardTags: ['Embedded Systems', 'Robotics', 'Web & Mobile'],
    company: {
      about: 'For my bachelor’s thesis, I developed a robotic assistant control system to explore short-distance delivery of small items. The project brings together a web control interface, Android navigation functionality, embedded hardware, wireless communication, and obstacle sensing.',
      roleTitle: 'Bachelor’s Thesis — Software & Embedded Systems Development',
      role: 'I designed the control system, built the React administrator interface, integrated Firebase and Google Maps, programmed microcontrollers in C++, and developed Android navigation functionality. I also integrated sensors and wireless communication and tested the control software.',
      contributions: ['Control System Design', 'React Administrator Interface', 'Firebase & Google Maps Integration', 'C++ Microcontroller Programming', 'Android Compass & Location Data', 'Sensor Integration & Software Testing'],
    },
    evidence: {
      architecture: [
        { title: 'Select a destination', text: 'The React administrator interface uses Google Maps to select delivery coordinates and set a compartment access code.' },
        { title: 'Exchange data through Firebase', text: 'The web app writes delivery data to Firebase Realtime Database. The Android app supplies compass heading and location data.' },
        { title: 'Bridge Wi-Fi to the controller', text: 'NodeMCU ESP8266 retrieves cloud data over Wi-Fi and forwards it to the Arduino Mega through UART.' },
        { title: 'Compute heading and drive', text: 'The Arduino control logic uses destination coordinates, GPS position, and compass heading to determine movement direction.' },
        { title: 'Respond to obstacles', text: 'Ultrasonic sensors inform stop, reverse, and turn decisions. The thesis documents this avoidance logic in C++.' },
        { title: 'Complete the delivery cycle', text: 'The specified workflow includes arrival notification, code-controlled collection, and return to the starting position. These are described in the thesis; detailed end-to-end performance measurements are not provided.' },
      ],
      figures: [
        { image: robotCompass, alt: 'Android compass application displaying a heading of 233 degrees', caption: 'Android compass interface — thesis Figure 36. Heading updates were sent to Firebase.', portrait: true },
        { image: robotWorkflow, alt: 'Original Kazakh-language delivery workflow covering order validation, destination transfer, navigation, obstacle checks, delivery, and return', caption: 'Original delivery workflow — thesis Figure 2, in Kazakh. This describes the intended delivery cycle.', portrait: true },
        { image: robotArduino, alt: 'Arduino Mega board photographed in the thesis', caption: 'Arduino Mega controller — thesis Figure 18.' },
        { image: robotWifi, alt: 'NodeMCU ESP8266 board photographed in the thesis', caption: 'NodeMCU ESP8266 Wi-Fi module — thesis Figure 22.' },
        { image: robotSensor, alt: 'HC-SR04 ultrasonic sensor photographed in the thesis', caption: 'HC-SR04 ultrasonic sensor — thesis Figure 21.' },
      ],
      demonstrated: 'The testing chapter shows delivery coordinates and an access code successfully written from the web interface to Firebase, and Android compass-heading updates appearing in the database. The thesis includes control code for navigation calculations, obstacle avoidance, and compartment access.',
      reported: 'The conclusion reports a successful test delivery and describes arrival notification and return-to-start functionality. It does not provide measured navigation accuracy, delivery reliability, or a repeatable end-to-end test dataset. These are thesis-reported capabilities, not quantified performance results.',
    },
  },
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
    slug: 'terrier-fit',
    name: 'Terrier Fit',
    description: 'A social fitness concept helping BU students find activities and workout partners.',
    dates: 'Mar 2026 – May 2026',
    status: 'Concept · 2nd place',
    tags: ['Product Design', 'Systems Modeling', 'User-centered Design', 'Frontend Prototyping'],
    image: fitPitch, imageAlt: 'Terrier Fit app identity and social fitness concept from the original pitch presentation', visual: 'fit-phone',
    recognition: 'https://www.bu.edu/studentwellbeing/2026/04/14/meet-the-winners-of-bus-2026-hospitality-innovation-and-student-wellbeing-competition/',
    company: {
      about: 'Terrier Fit is a social fitness platform concept for BU students who want to stay active with others. It proposes nearby activity discovery, workout partners at a similar level, and low-pressure opportunities to move together—addressing gym intimidation and the difficulty of staying motivated alone.',
      impact: 'Earned 2nd place in the Boston University Student Wellbeing competition.',
      roleTitle: 'Product Design · Frontend Prototyping',
      role: 'I helped translate the team’s social fitness concept into a product through systems modeling, user-centered design, feature planning, and interactive frontend prototyping. The pitch presents a UI demonstration and a proposed campus pilot, rather than a launched service.',
      contributions: ['Systems Modeling', 'User-centered Design', 'Student Activity Discovery', 'Workout Partner Concept', 'Feature Planning', 'Interactive Frontend Prototyping'],
    },
  },
  {
    slug: 'common-ground',
    name: 'Common Ground',
    description: 'A roommate wellbeing concept for shared routines and healthier communication.',
    dates: 'Mar 2026 – May 2026',
    status: 'Concept · 3rd place',
    tags: ['Systems Modeling', 'Product Design', 'User-centered Research', 'Frontend Prototyping'],
    image: groundPitch, imageAlt: 'Common Ground original pitch cover: roommate wellbeing support and conflict prevention platform', visual: 'pitch',
    gallery: [
      { image: roommatePreferences, alt: 'Common Ground prototype showing noise tolerance and study habit preferences', caption: 'Roommate preferences: align expectations around noise, study habits, and shared living.' },
      { image: sharedCalendar, alt: 'Common Ground prototype showing a shared calendar, tasks, and weekly check-in', caption: 'Shared routines: a calendar, household tasks, and weekly emotional check-ins.' },
      { image: communityEvents, alt: 'Common Ground prototype showing dorm social and movie night event cards', caption: 'Community connection: discover dorm events and express interest in attending.' },
    ],
    recognition: 'https://www.bu.edu/studentwellbeing/2026/04/14/meet-the-winners-of-bus-2026-hospitality-innovation-and-student-wellbeing-competition/',
    company: {
      about: 'Common Ground is a proactive roommate wellbeing platform concept for BU. It combines roommate agreements, shared tasks and calendars, weekly check-ins, and campus events. Proposed AI-guided communication supports everyday friction, while sensitive or escalated issues remain with Residence Life and RAs.',
      impact: 'Earned 3rd place in the Boston University Student Wellbeing competition.',
      roleTitle: 'Product Design · Frontend Prototyping',
      role: 'I developed the concept through systems modeling, user-centered research, feature planning, and frontend interface prototyping. The prototype explores how roommates can align expectations and coordinate daily living. AI guidance, campus integration, and residence-hall rollout are proposed features, not confirmed deployments.',
      contributions: ['Systems Modeling', 'User-centered Research', 'Roommate Agreement Flow', 'Shared Routines & Check-ins', 'Frontend Interface Prototyping', 'Communication Support Design'],
    },
  },
  {
    slug: 'urban-mobility',
    name: 'Urban Mobility',
    description: 'Multi-agent traffic simulation with driver behaviors and adaptive signals.',
    tags: ['Python', 'Simulation', 'Multi-agent', 'Pygame', 'Transport Modelling', 'Systems Modeling'],
    dates: 'Sep 2024 – May 2025',
    demoLabel: 'Live demo',
    company: {
      about: 'Multi-Agent Transportation Modeling is a traffic simulation developed for my master’s research at L.N. Gumilyov Eurasian National University. It explores how vehicle behavior and adaptive traffic signals affect a four-way intersection.',
      impact: 'Registered as a copyrighted computer program in the Republic of Kazakhstan (Certificate No. 58865, May 2025).',
      learnMoreLabel: 'Explore the simulation',
      roleTitle: 'Master’s Research · Software Development',
      role: 'I developed the simulation in Python with interactive visualization and later adapted it to run in a web browser. I implemented autonomous vehicle agents with aggressive, standard, and cautious driving behaviors, alongside traffic lights that respond to real-time traffic density.',
      contributions: ['Multi-agent Traffic Modeling', 'Driver Behavior Implementation', 'Adaptive Traffic Signals', 'Vehicle & Queue Monitoring', 'Traffic Density & Flow Analysis', 'Interactive Visualization & Browser Adaptation'],
    },
    image: null,
    imageAlt: '',
    visual: 'mobility',
    demo: 'https://multi-agent-transportation-modeling.vercel.app',
    repository: 'https://github.com/DannarZharkyn/Multi-agent-Transportation-Modeling',
  },
];
