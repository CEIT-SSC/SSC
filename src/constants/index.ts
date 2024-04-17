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
  linuxTalk,
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
    title: 'timeline',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Host Informative and educational talks in various fields in computer engineering.',
    icon: web,
  },
  {
    title: 'Organize tours to reputable companies in the industry.',
    icon: mobile,
  },
  {
    title:
      'Hold competitions, particularly algorithmic, that also help advance community building as well as healthy competitiveness.',
    icon: backend,
  },
  {
    title:
      'Host workshops that improve team building skills on top of advancing the skills of the particular field of the workshop.',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'Cafe Bazaar',
    icon: bazaar,
  },
  {
    name: 'Hamkaran System',
    icon: hamkaran,
  },
  {
    name: 'Snapp!',
    icon: snapp,
  },
  {
    name: 'Digi kala',
    icon: digikala,
  },
  {
    name: 'Medrick',
    icon: medrick,
  },
  {
    name: 'Drop out Games',
    icon: dropoutGames,
  },
  {
    name: 'Sabaidea',
    icon: sabaidea,
  },
  {
    name: 'Xass',
    icon: xaas,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Algo Cup',
    companyName: '',
    icon: algocup,
    iconBg: '#383E56',
    date: '18 April 2024',
    points: [],
  },
  {
    title: 'Grad talks - Intro to blockchain',
    companyName: '',
    icon: gradTalkBlockChain,
    iconBg: '#E6DEDD',
    date: '12 March 2024',
    points: [],
  },
  {
    title: 'Simorgh supercomputer visit',
    companyName: '',
    icon: simorgh,
    iconBg: '#383E56',
    date: '12 March 2024',
    points: [],
  },
  {
    title: 'Grad talks - Game production: From Fantasy to reality',
    companyName: '',
    icon: gradTalkGame,
    iconBg: '#E6DEDD',
    date: '10 March 2024',
    points: [],
  },
  {
    title: 'System groups company visit',
    companyName: '',
    icon: SG,
    iconBg: '#383E56',
    date: '9 March 2024',
    points: [],
  },
  {
    title: 'Grad talks - Security and Privacy in TAP',
    companyName: '',
    icon: gradTalk,
    iconBg: '#E6DEDD',
    date: '26 December 2023',
    points: [],
  },
  {
    title: '14th AAISS (Amirkabir Artificial Intelligence Student Summit)',
    companyName: '',
    icon: aaiss,
    iconBg: '#383E56',
    date: '5 December 2023 - 15 December 2023',
    points: [],
  },
  {
    title: 'Cloud Computing Workshop and Xaas visit',
    companyName: '',
    icon: cloud,
    iconBg: '#E6DEDD',
    date: '14 November 2023',
    points: [],
  },
  {
    title: '23nd ACPC',
    companyName: '',
    icon: acm23,
    iconBg: '#383E56',
    date: '2 November 2023',
    points: [],
  },
  {
    title: '3rd Gamecraft',
    companyName: '',
    icon: gameCraft,
    iconBg: '#E6DEDD',
    date: '4 October 2023 - 6 October 2023',
    points: [],
  },
  {
    title: 'Algorithm Arena',
    companyName: '',
    icon: algorithmArene,
    iconBg: '#383E56',
    date: '25 July 2023 - 27 August 2023',
    points: [],
  },
  {
    title: 'Introduction to Linux',
    companyName: '',
    icon: linuxTalk,
    iconBg: '#E6DEDD',
    date: '31 May 2023',
    points: [],
  },
  {
    title: '22nd ACPC',
    companyName: '',
    icon: acm22,
    iconBg: '#383E56',
    date: '6 April 2023',
    points: [],
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
