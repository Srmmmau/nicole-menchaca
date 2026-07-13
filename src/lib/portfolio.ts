import editorial01 from '@/assets/portfolio/editorial-01.jpg';
import editorial02 from '@/assets/portfolio/editorial-02.jpg';
import editorial03 from '@/assets/portfolio/editorial-03.jpg';
import editorial04 from '@/assets/portfolio/editorial-04.jpg';
import editorial05 from '@/assets/portfolio/editorial-05.jpg';
import editorial06 from '@/assets/portfolio/editorial-06.jpg';

import publicidad01 from '@/assets/portfolio/publicidad-01.jpg';
import publicidad02 from '@/assets/portfolio/publicidad-02.jpg';
import publicidad03 from '@/assets/portfolio/publicidad-03.jpg';
import publicidad04 from '@/assets/portfolio/publicidad-04.jpg';
import publicidad05 from '@/assets/portfolio/publicidad-05.jpg';
import publicidad06 from '@/assets/portfolio/publicidad-06.jpg';
import publicidad07 from '@/assets/portfolio/publicidad-07.jpg';
import publicidad08 from '@/assets/portfolio/publicidad-08.jpg';
import publicidad09 from '@/assets/portfolio/publicidad-09.jpg';
import publicidad10 from '@/assets/portfolio/publicidad-10.png';
import publicidad11 from '@/assets/portfolio/publicidad-11.png';
import publicidad12 from '@/assets/portfolio/publicidad-12.png';
import publicidad13 from '@/assets/portfolio/publicidad-13.png';
import publicidad14 from '@/assets/portfolio/publicidad-14.png';

import archivo01 from '@/assets/portfolio/archivo-01.jpg';
import archivo02 from '@/assets/portfolio/archivo-02.jpg';
import archivo03 from '@/assets/portfolio/archivo-03.jpg';

import type { ImageMetadata } from 'astro';

export type PortfolioCategory = 'editorial' | 'publicidad' | 'archivo';

export interface PortfolioPhoto {
  src: ImageMetadata;
  alt: string;
  category: PortfolioCategory;
}

export const portfolioPhotos: PortfolioPhoto[] = [
  { src: editorial03, alt: 'Retrato editorial en blanco y negro, perfil con tocado de cadenas', category: 'editorial' },
  { src: editorial05, alt: 'Editorial de moda en azotea de CDMX, playera "Houston Texas" y mallas rojas', category: 'editorial' },
  { src: editorial01, alt: 'Editorial de moda sobre fondo azul, joyería de perlas', category: 'editorial' },
  { src: editorial04, alt: 'Retrato editorial en blanco y negro, pose agachada con aretes largos', category: 'editorial' },
  { src: editorial06, alt: 'Editorial de moda en azotea de CDMX con vista a la ciudad', category: 'editorial' },
  { src: editorial02, alt: 'Editorial de moda sobre fondo azul, retrato de frente con perlas', category: 'editorial' },

  { src: publicidad02, alt: 'Portada del sencillo "Cohetes — Cuestión de Tiempo"', category: 'publicidad' },
  { src: publicidad04, alt: 'Campaña Non Culpa Racing, retrato con cadena de oro', category: 'publicidad' },
  { src: publicidad03, alt: 'Campaña Non Culpa Racing, retrato a caballo', category: 'publicidad' },
  { src: publicidad06, alt: 'Campaña Non Culpa Racing, ficha con logo de la marca', category: 'publicidad' },
  { src: publicidad05, alt: 'Campaña Non Culpa Racing, retrato completo a caballo con casco', category: 'publicidad' },
  { src: publicidad01, alt: 'Campaña Non Culpa Racing, escena en interior sobre sillón amarillo', category: 'publicidad' },
  { src: publicidad08, alt: 'Campaña Dockers, grupo de amigos en set con telón beige', category: 'publicidad' },
  { src: publicidad09, alt: 'Campaña Dockers, detalle de playeras con bordado de personaje', category: 'publicidad' },
  { src: publicidad07, alt: 'Campaña Dockers, dos modelos posando en set', category: 'publicidad' },
  { src: publicidad10, alt: 'Campaña de ropa deportiva, modelo de pie en set blanco', category: 'publicidad' },
  { src: publicidad12, alt: 'Campaña de activewear, modelo recostada en piso de madera', category: 'publicidad' },
  { src: publicidad11, alt: 'Campaña de loungewear, modelo recostada en cama', category: 'publicidad' },
  { src: publicidad13, alt: 'Campaña de loungewear, dos modelos sentadas en recámara', category: 'publicidad' },
  { src: publicidad14, alt: 'Campaña de loungewear, dos modelos de pie junto a la cama', category: 'publicidad' },

  { src: archivo01, alt: 'Patinadores al atardecer en la pista de Venice Beach', category: 'archivo' },
  { src: archivo02, alt: 'Siluetas de patinadores en el skatepark de Venice Beach', category: 'archivo' },
  { src: archivo03, alt: 'Patinadora en movimiento con luz dorada, efecto de barrido', category: 'archivo' },
];
