import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  aaiss,
  acm22,
  acm23,
  algocup,
  algorithmArene,
  cloud,
  gameCraft,
  gradTalk,
  gradTalkBlockChain,
  gradTalkGame,
  // linuxTalk,
  simorgh,
  SG,
  Hossein,
  Leila,
  Raeen,
  Bagher,
  Alireza,
  Armin,
  Bita,
  bazaar,
  hamkaran,
  digikala,
  snapp,
  medrick,
  dropoutGames,
  sabaidea,
  xaas,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Timeline',
  },
  {
    id: 'partnership',
    title: 'Partnership',
  },
  {
    id: 'board',
    title: 'Our Board',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Talks & Seminars',
    icon: web,
  },
  {
    title: 'On-site visits',
    icon: mobile,
  },
  {
    title: 'Competitions',
    icon: backend,
  },
  {
    title: 'Workshops',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'Cafe Bazaar',
    icon: bazaar,
    bg: '#FFFFFF',
  },
  {
    name: 'Hamkaran System',
    icon: hamkaran,
    bg: '#DD1125',
  },
  {
    name: 'Snapp!',
    icon: snapp,
    bg: '#74D98C',
  },
  {
    name: 'Digi kala',
    icon: digikala,
    bg: '#F01832',
  },
  {
    name: 'Medrick',
    icon: medrick,
    bg: '#FFFFFF',
  },
  {
    name: 'Drop out Games',
    icon: dropoutGames,
    bg: '#0070BB',
  },
  {
    name: 'Sabaidea',
    icon: sabaidea,
    bg: '#FFFFFF',
  },
  {
    name: 'Xass',
    icon: xaas,
    bg: '#FFFFFF',
  },
];

const experiences: TExperience[] = [
  {
    title: 'Algo Cup',
    companyName: '',
    icon: algocup,
    iconBg: '#000000',
    date: '18 April 2024',
    points: [
      'An individual coding competition where programmers solve engaging algorithmic programming problems and demonstrate their skills in a competitive yet supportive environment.',
    ],
  },
  {
    title: 'Grad talks - Intro to blockchain',
    companyName: '',
    icon: gradTalkBlockChain,
    iconBg: '#E6DEDD',
    date: '12 March 2024',
    points: [
      'A talk led by one of our prestigious alumni, touching on the significance of blockchain in the current world of programming and the possible future it entails for us.',
    ],
  },
  {
    title: 'Simorgh supercomputer visit',
    companyName: '',
    icon: simorgh,
    iconBg: '#383E56',
    date: '12 March 2024',
    points: [
      `Embarking on an educational tour of a Simorgh's server room, gaining firsthand insights into the workings of their supercomputer and its impact on advanced computing.`,
    ],
  },
  {
    title: 'Grad talks - Game production: From Fantasy to reality',
    companyName: '',
    icon: gradTalkGame,
    iconBg: '#E6DEDD',
    date: '10 March 2024',
    points: [
      `A talk led by a seasoned game developer from a renowned gaming company providing insight on the challenges of game development.`,
    ],
  },
  {
    title: 'System groups company visit',
    companyName: '',
    icon: SG,
    iconBg: '#383E56',
    date: '9 March 2024',
    points: [
      `A guided tour of Systems Groups, a prominent software company, offering a behind-the-scenes look at their innovative development processes and corporate culture`,
    ],
  },
  {
    title: 'Grad talks - Security and Privacy in TAP',
    companyName: '',
    icon: gradTalk,
    iconBg: '#E6DEDD',
    date: '26 December 2023',
    points: [
      `A talk led by a PhD Student at Chalmers University, talking about Security and Privacy in Trigger-Action Platforms.`,
    ],
  },
  {
    title: '14th AAISS (Amirkabir Artificial Intelligence Student Summit)',
    companyName: '',
    icon: aaiss,
    iconBg: '#383E56',
    date: '5 December 2023 - 15 December 2023',
    points: [
      `An event focused on several workshops and seminars focused on Artificial Intelligence led by various professors and professionals in the field.`,
    ],
  },
  {
    title: 'Cloud Computing Workshop and Xaas visit',
    companyName: '',
    icon: cloud,
    iconBg: '#E6DEDD',
    date: '14 November 2023',
    points: [
      `A cloud computing workshop featuring a tour at a leading tech company, providing practical insights into cloud technologies and infrastructure.`,
    ],
  },
  {
    title: '23nd ACPC',
    companyName: '',
    icon: acm23,
    iconBg: '#383E56',
    date: '2 November 2023',
    points: [
      `The 23rd Amirkabir algorithmic programming contest for college students. Teams of three, representing their university, work to solve programming problems, fostering collaboration, creativity, and the ability to perform under pressure.`,
    ],
  },
  {
    title: '3rd Gamecraft',
    companyName: '',
    icon: gameCraft,
    iconBg: '#3F3E60',
    date: '4 October 2023 - 6 October 2023',
    points: [
      `An immersive event featuring talks and workshops, culminating in a game development competition where participants create a game competing for a grand prize.`,
    ],
  },
  {
    title: 'Algorithm Arena',
    companyName: '',
    icon: algorithmArene,
    iconBg: '#E6DEDD',
    date: '25 July 2023 - 27 August 2023',
    points: [
      `A set of classes, practices, and competitions in order to spark interest in new comers as well as improve skills in those invested in learning.`,
    ],
  },
  {
    title: '22nd ACPC',
    companyName: '',
    icon: acm22,
    iconBg: '#383E56',
    date: '6 April 2023',
    points: [
      `The 22nd Amirkabir algorithmic programming contest for college students. Teams of three, representing their university, work to solve programming problems, fostering collaboration, creativity, and the ability to perform under pressure.`,
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Armin Hamed Azimi',
    description: 'Director',
    tags: [],
    image: Armin,
    sourceCodeLink: '',
  },
  {
    name: 'Hossein Asadi',
    description: 'Corporate Lead',
    tags: [],
    image: Hossein,
    sourceCodeLink: '',
  },
  {
    name: 'Leila Alhabib',
    description: 'Academic Lead',
    tags: [],
    image: Leila,
    sourceCodeLink: '',
  },
  {
    name: 'Mohammad Bagher Hosseini',
    description: 'Treasurer',
    tags: [],
    image: Bagher,
    sourceCodeLink: '',
  },
  {
    name: 'Raeen Soltani',
    description: 'Vice Director',
    tags: [],
    image: Raeen,
    sourceCodeLink: '',
  },
  {
    name: 'Alireza Yousefpour',
    description: 'Bioinformatic Lead',
    tags: [],
    image: Alireza,
    sourceCodeLink: '',
  },
  {
    name: 'Bita Shayegan',
    description: 'Competition Lead',
    tags: [],
    image: Bita,
    sourceCodeLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };
