import type { SiteCopy } from './types';

export const en: SiteCopy = {
  meta: {
    title: 'Nicole Menchaca — Photographer',
    description:
      'Portfolio of Nicole Menchaca, a Mexico City–based photographer specializing in editorial, commercial campaigns, and visual direction. Co-founder of MOM Agency.',
  },
  nav: {
    work: 'Work',
    about: 'About',
    clients: 'Clients',
    contact: 'Contact',
  },
  hero: {
    title: 'Nicole Menchaca',
    subtitle: 'Editorial and commercial photography with in-house art direction.',
    scrollHint: 'See work',
  },
  work: {
    heading: 'Work',
    subheading: 'A selection of editorial projects, campaigns, and personal archive.',
    allLabel: 'All',
    categories: [
      { id: 'editorial', label: 'Editorial' },
      { id: 'publicidad', label: 'Advertising' },
      { id: 'archivo', label: 'Personal archive' },
    ],
  },
  about: {
    heading: 'About',
    role: 'Photographer · Co-founder of MOM Agency',
    body: [
      "I'm a photographer based in Mexico City, specializing in editorial portraiture, commercial campaigns, and brand visual direction.",
      'I co-founded MOM, a creative agency and audiovisual production studio, where I develop projects from concept to execution — strategy, creative direction, content, and post-production.',
      "My work blends an editorial eye with the precision commercial work demands — from fashion campaigns to artist and brand coverage.",
    ],
  },
  clients: {
    heading: 'Clients & collaborations',
    subheading: "Brands, artists, and projects I've worked with.",
    names: ['MOM Agency', 'Non Culpa', 'Dockers', 'Adidas', "Levi's", 'Natanael Cano', 'Rancho Humilde'],
  },
  contact: {
    heading: "Let's work together",
    body: 'Available for editorial projects, commercial campaigns, and collaborations. Get in touch.',
    emailLabel: 'Email',
    instagramLabel: 'Instagram',
    agencyLabel: 'Agency',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};
