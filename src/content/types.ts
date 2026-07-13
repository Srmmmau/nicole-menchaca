export interface SiteCopy {
  meta: { title: string; description: string };
  nav: { work: string; about: string; clients: string; contact: string };
  hero: {
    title: string;
    subtitle: string;
    scrollHint: string;
  };
  work: {
    heading: string;
    subheading: string;
    allLabel: string;
    categories: { id: 'editorial' | 'publicidad' | 'archivo'; label: string }[];
  };
  about: {
    heading: string;
    body: string[];
    role: string;
  };
  clients: {
    heading: string;
    subheading: string;
    names: string[];
  };
  contact: {
    heading: string;
    body: string;
    emailLabel: string;
    instagramLabel: string;
    agencyLabel: string;
  };
  footer: { rights: string };
}
