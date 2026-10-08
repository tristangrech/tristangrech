// Central site config: contact identities, feature flags, canonical facts.
// Everything client-facing that might change lives here, not in components.

export const site = {
  baseUrl: 'https://tristangrech.com',
  name: 'Tristan Grech',
  legalName: 'GRECH Tristan Laurent (EI)',
  siren: '843 305 996',
  city: 'Nice',
  country: 'France',
  email: 'tristangrech.nat@gmail.com',
  phoneDisplay: '+33 6 78 49 61 26',
  // Bare profile link: only for the JSON-LD sameAs list. Every clickable
  // button must use waLink() so the chat opens with context.
  whatsapp: 'https://wa.me/33678496126',
  whatsappNumber: '33678496126',
  telegram: 'https://t.me/Fullhaura',
  linkedin: 'https://www.linkedin.com/in/fullhaura/',
  // Showreel: drop the file at public/video/showreel.mp4 (+ showreel-poster.jpg),
  // then set available: true and redeploy. Encoding notes: public/video/README.md.
  showreel: {
    available: false,
    src: '/video/showreel.mp4',
    poster: '/video/showreel-poster.jpg',
  },
} as const;

/** wa.me link with a prefilled first message. */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** First message for the general site (homepage, hub, contact blocks). */
export const waGeneralText = {
  fr: 'Bonjour Tristan, je vous contacte depuis tristangrech.com à propos d’un projet.',
  en: 'Hello Tristan, I’m getting in touch from tristangrech.com about a project.',
  ru: 'Здравствуйте, Тристан! Пишу вам с сайта tristangrech.com по поводу проекта.',
} as const;
