import type { SiteCopy } from './types';

export const es: SiteCopy = {
  meta: {
    title: 'Nicole Menchaca — Fotógrafa',
    description:
      'Portafolio de Nicole Menchaca, fotógrafa en CDMX especializada en editorial, campañas comerciales y dirección visual. Cofundadora de MOM Agency.',
  },
  nav: {
    work: 'Trabajo',
    about: 'Sobre mí',
    clients: 'Clientes',
    contact: 'Contacto',
  },
  hero: {
    title: 'Nicole Menchaca',
    subtitle: 'Fotografía editorial y comercial con dirección de arte propia.',
    scrollHint: 'Ver trabajo',
  },
  work: {
    heading: 'Trabajo',
    subheading: 'Una selección de proyectos editoriales, campañas y archivo personal.',
    allLabel: 'Todo',
    categories: [
      { id: 'editorial', label: 'Editorial' },
      { id: 'publicidad', label: 'Publicidad' },
      { id: 'archivo', label: 'Archivo personal' },
    ],
  },
  about: {
    heading: 'Sobre mí',
    role: 'Fotógrafa · Cofundadora de MOM Agency',
    body: [
      'Soy fotógrafa en Ciudad de México, especializada en retrato editorial, campañas comerciales y dirección visual de marca.',
      'Cofundé MOM, agencia creativa y productora audiovisual, donde desarrollo proyectos de la idea a la ejecución: estrategia, dirección creativa, contenido y postproducción.',
      'Mi trabajo combina una mirada editorial con la precisión que exige el mundo comercial — desde campañas de moda hasta coberturas de artistas y marcas.',
    ],
  },
  clients: {
    heading: 'Clientes y colaboraciones',
    subheading: 'Marcas, artistas y proyectos con los que he trabajado.',
    names: ['MOM Agency', 'Non Culpa', 'Dockers', 'Adidas', "Levi's", 'Natanael Cano', 'Rancho Humilde'],
  },
  contact: {
    heading: 'Trabajemos juntas',
    body: 'Disponible para proyectos editoriales, campañas comerciales y colaboraciones. Escríbeme.',
    emailLabel: 'Correo',
    instagramLabel: 'Instagram',
    agencyLabel: 'Agencia',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
