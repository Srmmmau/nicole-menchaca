export function emailHref(): string {
  const email = import.meta.env.PUBLIC_CONTACT_EMAIL;
  return `mailto:${email}`;
}

export function instagramUrl(): string {
  const handle = import.meta.env.PUBLIC_INSTAGRAM_HANDLE;
  return `https://instagram.com/${handle}`;
}

export function agencyUrl(): string {
  return import.meta.env.PUBLIC_AGENCY_URL;
}
