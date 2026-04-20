// China landing-page i18n dictionary — FR primary, EN mirror.
// Copy locked to CHINA-TRIP-NEXT-MOVES.md §1–2. Do not paraphrase.
// Prices locked 2026-04-19: €1 490 / €3 490 / €6 990. +30% second person.

export type ChinaLang = 'fr' | 'en';

export const OTHER_LANG: Record<ChinaLang, ChinaLang> = { fr: 'en', en: 'fr' };
export const OTHER_PATH: Record<ChinaLang, string> = { fr: '/china', en: '/chine' };

// Cal.com booking URL — swap to the real slug once Cal is set up.
export const CAL_URL = 'https://cal.com/tristangrech/china-discovery';

// Stripe Payment Links (live, created via API on fullhaura Stripe account).
export const STRIPE_LINK_DISCOVERY = 'https://buy.stripe.com/28E7sK89j04Ra1lh0W4c80s';
export const STRIPE_LINK_BUILDER = 'https://buy.stripe.com/eVq8wOdtD6tfc9t2624c80t';
export const STRIPE_LINK_FULL = 'https://buy.stripe.com/fZuaEW61b7xj2yTh0W4c80u';

// Partner is not named publicly — generic label is intentional.
export const PARTNER_LABEL_FR = 'Associé franco-chinois';
export const PARTNER_LABEL_EN = 'Franco-Chinese partner';
export const PARTNER_PHOTO = '/images/china/partner.jpg'; // falls back to gradient initial in UI

// First-trip month placeholder (urgency copy) — replace with real month.
export const FIRST_TRIP_MONTH_FR = '{FIRST_TRIP_MONTH_FR}';
export const FIRST_TRIP_MONTH_EN = '{FIRST_TRIP_MONTH_EN}';

export interface TierCopy {
  id: 'discovery' | 'builder' | 'full';
  eyebrow: string;
  name: string;
  duration: string;
  hook: string;
  bullets: string[];
  price: string;
  priceNote: string;
  secondPerson: string;
  cta: string;
  ctaAlt: string;
  stripeUrl: string;
  ribbon?: string;
}

export interface ItineraryStop {
  day: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string; // description of the photo (fallback: title)
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  fallbackInitial: string;
  bullets: string[];
}

export interface IncludedBlock {
  eyebrow: string;
  title: string;
  included: { label: string; body: string }[];
  notIncluded: { label: string; body: string }[];
  note: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  placeholder?: boolean;
}

export interface LeadMagnetCopy {
  eyebrow: string;
  title: string;
  body: string;
  placeholder: string;
  cta: string;
  small: string;
  success: string;
}

export interface MapCity {
  name: string;
  coords: [number, number];
  tag: string;
  body: string;
}

export interface MapCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  cities: MapCity[];
}

export interface ChinaDict {
  meta: { title: string; description: string };
  nav: {
    offers: string;
    itinerary: string;
    faq: string;
    bookCta: string;
    langSwitch: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credentials: string[];
  };
  duo: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  pain: {
    eyebrow: string;
    title: string;
    cards: { title: string; body: string }[];
  };
  who: {
    eyebrow: string;
    title: string;
    paragraph: string;
    members: TeamMember[];
  };
  offers: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiers: TierCopy[];
  };
  itinerary: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stops: ItineraryStop[];
  };
  map: MapCopy;
  included: IncludedBlock;
  testimonials: {
    eyebrow: string;
    title: string;
    items: TestimonialItem[];
  };
  leadMagnet: LeadMagnetCopy;
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  social: {
    eyebrow: string;
    title: string;
    earlyBird: string;
    gallery: { src: string; alt: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stickyMobile: {
    prompt: string;
    cta: string;
  };
  footer: {
    tagline: string;
    otherVentures: string;
    ventures: { name: string; href: string }[];
    legal: { label: string; href: string }[];
    copyright: string;
  };
}

const fr: ChinaDict = {
  meta: {
    title: 'Venez en Chine avec un Français qui y vit | Tristan Grech',
    description:
      'Voyages business guidés à Guangzhou, Foshan, Shenzhen pour entrepreneurs français. Un Français sur place, un associé franco-chinois natif.',
  },
  nav: {
    offers: 'Formules',
    itinerary: 'Itinéraire',
    faq: 'FAQ',
    bookCta: 'Réserver un appel',
    langSwitch: 'EN',
  },
  hero: {
    badge: 'Nouvelles dates ouvertes. Places limitées.',
    headline1: 'Venez en Chine avec un Français qui y vit.',
    headline2: 'Repartez avec vos fournisseurs.',
    subhead:
      'Voyages guidés de 3 à 7 jours entre Guangzhou, Foshan et Shenzhen. Un Français sur place, un associé bilingue français-chinois. Marchés, usines, négociation en direct.',
    ctaPrimary: 'Réserver un appel découverte',
    ctaSecondary: 'Voir les formules',
    credentials: [
      'Équipe 100% bilingue',
      'Français · Chinois · Anglais',
      '4 ans à Guangzhou',
      'Accompagnement quotidien',
    ],
  },
  duo: {
    eyebrow: 'Ce qui nous rend uniques',
    title: 'Un Français de confiance + un natif chinois. La combinaison que les autres programmes n\'offrent pas.',
    body:
      'Les autres programmes te donnent soit un Français qui fait des tours touristiques, soit un agent de sourcing chinois qui travaille pour la commission. Nous, tu as les deux à ta table : un Français installé ici pour te rassurer et t\'expliquer les codes, et un associé franco-chinois qui négocie en mandarin natif avec les patrons d\'usine. Tu n\'es jamais celui qui parle "à l\'aveugle".',
    stats: [
      { value: '2', label: 'Associés sur place' },
      { value: '4', label: 'Langues parlées' },
      { value: '48h', label: 'Réponse maximum' },
      { value: '0', label: 'Commission cachée' },
    ],
  },
  pain: {
    eyebrow: 'Pourquoi ça bloque',
    title: 'Trois raisons pour lesquelles 9 entrepreneurs sur 10 se plantent sur la Chine.',
    cards: [
      {
        title: 'Alibaba = roulette russe',
        body: 'Fiche produit magnifique, usine fantôme, 40% d\'arnaques. Tu ne sauras qu\'à réception.',
      },
      {
        title: 'Vous ne parlez pas chinois',
        body: 'Sans la langue et sans le contexte, tu négocies à l\'aveugle. Le prix "étranger" est le double.',
      },
      {
        title: 'Vous ne connaissez pas les codes',
        body: 'La hiérarchie, la confiance, le rythme, le repas, le prix "par politesse". Ça ne s\'invente pas.',
      },
    ],
  },
  who: {
    eyebrow: 'Qui nous sommes',
    title: 'Deux associés. Une mission : te rendre autonome sur la Chine.',
    paragraph:
      'On a monté ce programme parce qu\'on a vu trop d\'entrepreneurs français se faire laminer sur Alibaba, payer le double, et rentrer les mains vides. Ensemble on couvre ce qu\'aucun agent seul ne peut offrir : la confiance d\'un Français qui connaît ton point de départ, et la négociation native d\'un Chinois qui connaît ton point d\'arrivée.',
    members: [
      {
        name: 'Tristan Grech',
        role: 'Français · Guangzhou · Fondateur',
        photo: '/images/china/portrait.jpg',
        fallbackInitial: 'T',
        bullets: [
          'Français installé à Guangzhou',
          'Français, anglais, portugais, russe',
          'Fondateur de Fullhaura (agence IA & web)',
          '4 ans en Asie, réseau business sur place',
        ],
      },
      {
        name: PARTNER_LABEL_FR,
        role: 'Franco-chinois · Négociation · Terrain',
        photo: PARTNER_PHOTO,
        fallbackInitial: 'A',
        bullets: [
          'Natif français ET mandarin',
          'Basé en Chine, réseau usines direct',
          'Négociateur. Conditions, MOQ, timing.',
          'Traducteur culturel, pas seulement linguistique',
        ],
      },
    ],
  },
  offers: {
    eyebrow: 'Les 3 formules',
    title: 'Choisis ton format selon ton ambition.',
    subtitle:
      'Vol et hôtel non inclus. On te recommande des options précises. Un seul appel de découverte pour caler la bonne formule. Deuxième personne : +30%.',
    tiers: [
      {
        id: 'discovery',
        eyebrow: 'Découverte',
        name: 'Discovery',
        duration: '3 jours',
        hook: 'Tester la Chine sans risque.',
        bullets: [
          '1 journée marchés Guangzhou (Yide Lu, Shi San Hang, One Link Plaza)',
          '2 visites d\'usines pré-qualifiées (catégorie au choix)',
          'Dîner d\'accueil + briefing codes culturels & négociation',
          'Support WhatsApp 7 jours post-voyage',
        ],
        price: '1 490',
        priceNote: 'hors vol et hôtel',
        secondPerson: '+30% / personne supplémentaire',
        cta: 'Réserver ma place',
        ctaAlt: 'ou prendre un appel avant',
        stripeUrl: STRIPE_LINK_DISCOVERY,
      },
      {
        id: 'builder',
        eyebrow: 'Le plus choisi',
        name: 'Builder',
        duration: '5 à 7 jours',
        hook: 'Repartez avec vos fournisseurs validés.',
        bullets: [
          'Marchés Guangzhou en profondeur',
          'District usines de Foshan (meuble, luminaire, céramique)',
          'Shenzhen, électronique et Huaqiangbei',
          '4 à 6 visites d\'usines + coaching négociation en direct',
          'Shortlist fournisseurs écrite post-voyage',
          'Support WhatsApp 30 jours',
        ],
        price: '3 490',
        priceNote: 'hors vol et hôtel',
        secondPerson: '+30% / personne supplémentaire',
        cta: 'Réserver ma place',
        ctaAlt: 'ou prendre un appel avant',
        stripeUrl: STRIPE_LINK_BUILDER,
        ribbon: 'Le plus choisi',
      },
      {
        id: 'full',
        eyebrow: 'Full Launch',
        name: 'Full Launch',
        duration: '7 jours + post-trip',
        hook: 'Rentrez avec vos fournisseurs ET votre business en ligne.',
        bullets: [
          'Tout le programme Builder',
          'Fullhaura construit / refait ton site (identité + site + automatisation de base)',
          'Site livré bilingue FR/ZH si pertinent',
          'Support 90 jours + aide renégociation fournisseurs',
          'Accès à notre réseau d\'agents, transitaires, packaging',
        ],
        price: '6 990',
        priceNote: 'site web inclus (valeur €3 à 5K)',
        secondPerson: '+30% / personne supplémentaire',
        cta: 'Réserver ma place',
        ctaAlt: 'ou prendre un appel avant',
        stripeUrl: STRIPE_LINK_FULL,
      },
    ],
  },
  itinerary: {
    eyebrow: 'À quoi ressemble une semaine',
    title: 'Une journée avec nous en Chine.',
    subtitle:
      'Exemple d\'itinéraire Builder. Adapté selon ta catégorie produit et tes priorités.',
    stops: [
      {
        day: 'Jour 1',
        title: 'Marchés de Guangzhou',
        body: 'Yide Lu, Shi San Hang, One Link Plaza. Panorama complet. On relève prix, qualités, fournisseurs de gros.',
        image: '/images/china/market.jpg',
      },
      {
        day: 'Jour 2',
        title: 'Foshan, district usines',
        body: 'Meuble, luminaire, céramique. Deux usines visitées, rencontre directe avec les patrons.',
        image: '/images/china/foshan.jpg',
      },
      {
        day: 'Jour 3',
        title: 'Shenzhen, Huaqiangbei',
        body: 'Plus grand marché d\'électronique au monde. Composants, prototypage, OEM.',
        image: '/images/china/shenzhen.jpg',
      },
      {
        day: 'Jour 4',
        title: 'Négociation en direct',
        body: 'On retourne voir les 2 meilleurs candidats. Mon associé négocie en mandarin natif, tu apprends en regardant.',
        image: '/images/china/negotiation.jpg',
      },
      {
        day: 'Jour 5',
        title: 'Shortlist, départ',
        body: 'Document écrit des fournisseurs retenus, conditions, prochains pas. Tu rentres avec un plan.',
        image: '/images/china/shortlist.jpg',
        imageAlt: 'Atelier de production en Chine, visite de fin de voyage',
      },
    ],
  },
  map: {
    eyebrow: 'Sur le terrain',
    title: 'Trois villes, un triangle manufacturier.',
    subtitle: 'Guangzhou pour les marchés, Foshan pour les meubles & céramiques, Shenzhen pour l\'électronique. 2h de train entre chaque, tout se fait dans la semaine.',
    cities: [
      {
        name: 'Guangzhou',
        coords: [23.1291, 113.2644],
        tag: 'Marchés de gros',
        body: 'Yide Lu, Shi San Hang, One Link Plaza. Tu y passes 2 jours, tu as vu 80% des catégories.',
      },
      {
        name: 'Foshan',
        coords: [23.0218, 113.1219],
        tag: 'Usines',
        body: 'District meuble, luminaire, céramique. 40 minutes de Guangzhou, ambiance atelier.',
      },
      {
        name: 'Shenzhen',
        coords: [22.5431, 114.0579],
        tag: 'Électronique',
        body: 'Huaqiangbei. Le plus grand marché d\'électronique au monde. Composants, OEM, prototypage.',
      },
    ],
  },
  included: {
    eyebrow: 'Ce qui est inclus, et ce qui ne l\'est pas',
    title: 'Zéro surprise. Zéro commission cachée.',
    included: [
      { label: 'Accompagnement 7j/7', body: 'On est avec toi du matin au dîner, chaque jour.' },
      { label: 'Traduction en direct', body: 'Français ↔ chinois ↔ anglais, sur place, tout le voyage.' },
      { label: 'Accès aux marchés et usines', body: 'Entrées, contacts, tours complets. Tout est organisé.' },
      { label: 'Négociation', body: 'Mon associé négocie en mandarin natif, tu apprends en regardant.' },
      { label: 'Shortlist fournisseurs', body: 'Document écrit post-voyage avec contacts et conditions.' },
      { label: 'Support WhatsApp', body: '7 / 30 / 90 jours selon la formule.' },
    ],
    notIncluded: [
      { label: 'Vol international', body: 'Paris/Nice → Canton : ~€700-1 200 selon saison.' },
      { label: 'Hôtel', body: '€80-150 / nuit. On te recommande 3 quartiers testés.' },
      { label: 'Repas hors dîners d\'accueil', body: '€15-40 / jour sur place. On t\'indique les bonnes adresses.' },
      { label: 'Visa', body: 'Exemption 30 jours pour passeports FR depuis 2024.' },
      { label: 'Logistique post-commande', body: 'On te présente des transitaires de confiance, tu négocies en direct.' },
      { label: 'Commissions cachées', body: 'Jamais. Tu paies la formule, point. Pas de % sur tes commandes.' },
    ],
    note: 'Un voyage Builder complet coûte entre €5 000 et €6 500 tout compris pour 6 jours sur place.',
  },
  testimonials: {
    eyebrow: 'Early-bird, places réservées',
    title: 'Les 3 premiers témoignages sont les tiens.',
    items: [
      { quote: 'Place #1. À venir. 30% de réduction early-bird.', name: 'Place disponible', role: 'Formule au choix', placeholder: true },
      { quote: 'Place #2. À venir. 30% de réduction early-bird.', name: 'Place disponible', role: 'Formule au choix', placeholder: true },
      { quote: 'Place #3. À venir. 30% de réduction early-bird.', name: 'Place disponible', role: 'Formule au choix', placeholder: true },
    ],
  },
  leadMagnet: {
    eyebrow: 'Guide gratuit',
    title: '5 erreurs à éviter avant ton premier voyage business en Chine.',
    body: 'PDF de 8 pages, écrit par Tristan et son associé. Les pièges classiques sur Alibaba, comment reconnaître une usine fantôme, les 3 mots de mandarin qui changent une négociation. Reçois-le par email, sans spam.',
    placeholder: 'ton@email.com',
    cta: 'Envoyez-moi le guide',
    small: 'Aucun spam. Désinscription en un clic.',
    success: 'Guide envoyé. Vérifie ta boîte (et les spams).',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu\'on nous demande avant de réserver.',
    items: [
      {
        q: 'Je ne parle pas chinois, je vais être perdu ?',
        a: 'Non. On est avec toi 100% du temps. Marchés, usines, dîners, taxis. Mon associé parle chinois natif, moi je traduis en français à la volée. Tu ne lances pas une phrase chinoise seul si tu ne veux pas.',
      },
      {
        q: 'Vous venez tous les deux à chaque voyage ?',
        a: 'Oui. C\'est la différence. Chaque voyage est co-piloté par Tristan (confiance, codes, cadre) et son associé franco-chinois (négociation native, réseau usines). Tu paies pour deux cerveaux, pas un.',
      },
      {
        q: 'Visa pour la Chine ?',
        a: 'Les Français bénéficient d\'une exemption de visa jusqu\'à 30 jours pour voyage business. On te confirme les conditions à jour avant le départ et on t\'envoie le lien officiel du consulat.',
      },
      {
        q: 'Et si je ne trouve aucun fournisseur qui me convient ?',
        a: 'On te livre quand même une shortlist écrite post-voyage avec ce qu\'on a vu + contacts ciblés selon ton cahier des charges. Tu ne repars jamais les mains vides.',
      },
      {
        q: 'Je peux venir avec mon associé ou mon conjoint ?',
        a: 'Oui. Deuxième personne : +30% sur le prix de la formule. On reste efficace, pas besoin de doubler les frais.',
      },
      {
        q: 'Les vols et l\'hôtel sont inclus ?',
        a: 'Non. On te recommande des options précises (hôtels testés, quartiers, budgets) mais tu réserves toi-même. Ça garde le prix transparent.',
      },
      {
        q: 'C\'est un service d\'agent de sourcing classique ?',
        a: 'Non. Un agent négocie à ta place et touche une commission cachée (5-15% sur ta commande, facturée par le fournisseur, tu ne la vois jamais). Nous, on est payés d\'avance, zéro commission cachée, et on t\'apprend à opérer ici. Après un voyage, tu peux revenir seul. C\'est l\'objectif.',
      },
      {
        q: 'Combien coûte un voyage complet (vol + hôtel + formule) ?',
        a: 'Compter €1 490 à €6 990 pour la formule + environ €700-1 200 de vol + €80-150 / nuit d\'hôtel selon quartier. Total Builder complet : entre €5 000 et €6 500 tout compris pour 6 jours sur place.',
      },
    ],
  },
  social: {
    eyebrow: 'Early-bird',
    title: 'Les 5 premières places : -30% contre un témoignage vidéo complet.',
    earlyBird:
      'On lance ce programme officiellement ce mois-ci. Les 5 premiers entrepreneurs qui partent avec nous bénéficient de -30% sur la formule de leur choix, en échange d\'un témoignage vidéo filmé pendant le voyage.',
    gallery: [
      { src: '/images/china/negotiation.jpg', alt: 'Rencontre avec un patron d\'usine chinois' },
      { src: '/images/china/foshan.jpg', alt: 'Usine de meuble à Foshan' },
      { src: '/images/china/shortlist.jpg', alt: 'Atelier de couture' },
      { src: '/images/china/market.jpg', alt: 'Marché de Guangzhou' },
      { src: '/images/china/shenzhen.jpg', alt: 'Huaqiangbei Shenzhen' },
      { src: '/images/china/gallery-1.jpg', alt: 'Guangzhou' },
    ],
  },
  finalCta: {
    title: 'Une seule question : tu veux faire ça seul, ou avec deux associés installés sur place ?',
    subtitle: '20 minutes au téléphone. Tu nous racontes ton projet, on te dit si on peut aider.',
    cta: 'Réserver mon appel découverte',
  },
  stickyMobile: {
    prompt: 'Prêt à parler ?',
    cta: 'Réserver un appel',
  },
  footer: {
    tagline: 'Deux associés à Guangzhou. On accompagne les entrepreneurs français en Chine.',
    otherVentures: 'Nos autres projets',
    ventures: [
      { name: 'Fullhaura · agence IA', href: 'https://fullhaura.com' },
      { name: 'Geo-Front · monitoring géopolitique', href: 'https://geo-front.com' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/legal' },
      { label: 'Confidentialité', href: '/privacy' },
    ],
    copyright: '© 2026 Tristan Grech. Tous droits réservés.',
  },
};

const en: ChinaDict = {
  meta: {
    title: 'China business trips with a Frenchman who lives here',
    description:
      'Guided 3 to 7-day trips to Guangzhou, Foshan, Shenzhen. A Frenchman on the ground plus a native Franco-Chinese partner. Leave with suppliers.',
  },
  nav: {
    offers: 'Packages',
    itinerary: 'Itinerary',
    faq: 'FAQ',
    bookCta: 'Book a call',
    langSwitch: 'FR',
  },
  hero: {
    badge: 'New dates open. Limited spots.',
    headline1: 'Come to China with a Frenchman who lives here.',
    headline2: 'Leave with your suppliers.',
    subhead:
      'Guided 3 to 7-day trips across Guangzhou, Foshan and Shenzhen. A Frenchman on the ground plus a native French-Chinese partner. Markets, factories, live negotiation.',
    ctaPrimary: 'Book a discovery call',
    ctaSecondary: 'See the packages',
    credentials: [
      '100% bilingual team',
      'French · Chinese · English',
      '4 years in Guangzhou',
      'Daily on-the-ground support',
    ],
  },
  duo: {
    eyebrow: 'What makes us different',
    title: 'A French friend you trust + a native Chinese negotiator. A combination other programs don\'t offer.',
    body:
      'Other programs give you either a Frenchman running tourist tours, or a Chinese sourcing agent working for hidden commissions. With us you get both at your table: a Frenchman based here to reassure you and explain the codes, plus a Franco-Chinese partner who negotiates with factory owners in native Mandarin. You\'re never the one guessing in the dark.',
    stats: [
      { value: '2', label: 'Partners on the ground' },
      { value: '4', label: 'Languages spoken' },
      { value: '48h', label: 'Reply time max' },
      { value: '0', label: 'Hidden commissions' },
    ],
  },
  pain: {
    eyebrow: 'Why most get burned',
    title: 'Three reasons 9 out of 10 founders get China wrong.',
    cards: [
      {
        title: 'Alibaba is Russian roulette',
        body: 'Beautiful listing, ghost factory, 40% scam rate. You find out on delivery day.',
      },
      {
        title: 'You don\'t speak Chinese',
        body: 'Without the language and context, you negotiate blind. The "foreigner" price is double.',
      },
      {
        title: 'You don\'t know the codes',
        body: 'Hierarchy, trust, rhythm, meals, the "polite" price. You don\'t invent this. You live it.',
      },
    ],
  },
  who: {
    eyebrow: 'Who we are',
    title: 'Two partners. One mission: make you autonomous in China.',
    paragraph:
      'We built this program because we saw too many European founders get steamrolled on Alibaba, pay double, and leave empty-handed. Together we cover what no single agent can: the trust of a Frenchman who knows your starting point, and the native negotiation of a Chinese partner who knows your destination.',
    members: [
      {
        name: 'Tristan Grech',
        role: 'Frenchman · Guangzhou · Founder',
        photo: '/images/china/portrait.jpg',
        fallbackInitial: 'T',
        bullets: [
          'French national living in Guangzhou',
          'French, English, Portuguese, Russian',
          'Founder of Fullhaura (AI & web agency)',
          '4 years in Asia, direct business network',
        ],
      },
      {
        name: PARTNER_LABEL_EN,
        role: 'Franco-Chinese · Negotiation · Ground',
        photo: PARTNER_PHOTO,
        fallbackInitial: 'P',
        bullets: [
          'Native French AND native Mandarin',
          'Based in China, direct factory network',
          'Negotiator. Terms, MOQ, timing.',
          'Cultural translator, not just linguistic',
        ],
      },
    ],
  },
  offers: {
    eyebrow: 'The 3 packages',
    title: 'Pick your format by ambition.',
    subtitle:
      'Flight and hotel not included. We recommend specific options. One discovery call to pick the right tier. Second person: +30%.',
    tiers: [
      {
        id: 'discovery',
        eyebrow: 'Discovery',
        name: 'Discovery',
        duration: '3 days',
        hook: 'Test China with zero risk.',
        bullets: [
          '1 day Guangzhou markets (Yide Lu, Shi San Hang, One Link Plaza)',
          '2 pre-vetted factory visits (your category)',
          'Cultural onboarding dinner + negotiation basics briefing',
          'WhatsApp support 7 days post-trip',
        ],
        price: '1,490',
        priceNote: 'flight and hotel not included',
        secondPerson: '+30% / extra person',
        cta: 'Book my spot',
        ctaAlt: 'or book a call first',
        stripeUrl: STRIPE_LINK_DISCOVERY,
      },
      {
        id: 'builder',
        eyebrow: 'Most chosen',
        name: 'Builder',
        duration: '5 to 7 days',
        hook: 'Leave with your suppliers validated.',
        bullets: [
          'Guangzhou markets deep dive',
          'Foshan factory district (furniture, lighting, ceramics)',
          'Shenzhen electronics & Huaqiangbei',
          '4 to 6 factory visits + live negotiation coaching',
          'Written supplier shortlist delivered post-trip',
          '30-day WhatsApp support',
        ],
        price: '3,490',
        priceNote: 'flight and hotel not included',
        secondPerson: '+30% / extra person',
        cta: 'Book my spot',
        ctaAlt: 'or book a call first',
        stripeUrl: STRIPE_LINK_BUILDER,
        ribbon: 'Most chosen',
      },
      {
        id: 'full',
        eyebrow: 'Full Launch',
        name: 'Full Launch',
        duration: '7 days + post-trip',
        hook: 'Leave with suppliers AND your business online.',
        bullets: [
          'Everything in Builder',
          'Fullhaura builds / rebuilds your site (brand + site + basic automation)',
          'Delivered bilingual FR/ZH if relevant',
          '90-day support + supplier renegotiation help',
          'Access to our network of agents, freight, packaging',
        ],
        price: '6,990',
        priceNote: 'website included (€3 to 5K value)',
        secondPerson: '+30% / extra person',
        cta: 'Book my spot',
        ctaAlt: 'or book a call first',
        stripeUrl: STRIPE_LINK_FULL,
      },
    ],
  },
  itinerary: {
    eyebrow: 'What a week looks like',
    title: 'A day with us in China.',
    subtitle: 'Example Builder itinerary. Adapted to your product category and priorities.',
    stops: [
      {
        day: 'Day 1',
        title: 'Guangzhou markets',
        body: 'Yide Lu, Shi San Hang, One Link Plaza. Full sweep. We log prices, quality, wholesale suppliers.',
        image: '/images/china/market.jpg',
      },
      {
        day: 'Day 2',
        title: 'Foshan, factory district',
        body: 'Furniture, lighting, ceramics. Two factories visited, direct meeting with owners.',
        image: '/images/china/foshan.jpg',
      },
      {
        day: 'Day 3',
        title: 'Shenzhen, Huaqiangbei',
        body: 'World\'s largest electronics market. Components, prototyping, OEM partners.',
        image: '/images/china/shenzhen.jpg',
      },
      {
        day: 'Day 4',
        title: 'Live negotiation',
        body: 'We return to the top 2 candidates. My partner negotiates in native Mandarin, you learn by watching.',
        image: '/images/china/negotiation.jpg',
      },
      {
        day: 'Day 5',
        title: 'Shortlist, departure',
        body: 'Written document of selected suppliers, terms, next steps. You leave with a plan.',
        image: '/images/china/shortlist.jpg',
        imageAlt: 'Production workshop in China, end-of-trip visit',
      },
    ],
  },
  map: {
    eyebrow: 'On the ground',
    title: 'Three cities, one manufacturing triangle.',
    subtitle: 'Guangzhou for markets, Foshan for furniture and ceramics, Shenzhen for electronics. 2h by train between each. All done within a week.',
    cities: [
      {
        name: 'Guangzhou',
        coords: [23.1291, 113.2644],
        tag: 'Wholesale markets',
        body: 'Yide Lu, Shi San Hang, One Link Plaza. Two days here, you\'ve seen 80% of categories.',
      },
      {
        name: 'Foshan',
        coords: [23.0218, 113.1219],
        tag: 'Factories',
        body: 'Furniture, lighting, ceramics district. 40 minutes from Guangzhou, workshop feel.',
      },
      {
        name: 'Shenzhen',
        coords: [22.5431, 114.0579],
        tag: 'Electronics',
        body: 'Huaqiangbei. Largest electronics market on earth. Components, OEM, prototyping.',
      },
    ],
  },
  included: {
    eyebrow: 'What\'s in, and what\'s not',
    title: 'Zero surprises. Zero hidden commissions.',
    included: [
      { label: '7/7 on-the-ground support', body: 'We\'re with you from morning to dinner, every day.' },
      { label: 'Live translation', body: 'French ↔ Chinese ↔ English, on-site, the whole trip.' },
      { label: 'Market and factory access', body: 'Entries, contacts, full tours. All handled.' },
      { label: 'Negotiation', body: 'My partner negotiates in native Mandarin, you learn by watching.' },
      { label: 'Supplier shortlist', body: 'Written document post-trip with contacts and terms.' },
      { label: 'WhatsApp support', body: '7 / 30 / 90 days depending on package.' },
    ],
    notIncluded: [
      { label: 'International flight', body: 'Europe → Canton: ~€700-1,200 depending on season.' },
      { label: 'Hotel', body: '€80-150 / night. We recommend 3 tested neighborhoods.' },
      { label: 'Meals outside welcome dinners', body: '€15-40 / day on the ground. We share the best addresses.' },
      { label: 'Visa', body: '30-day business exemption for most EU/UK passports.' },
      { label: 'Post-order logistics', body: 'We introduce trusted freight forwarders, you deal direct.' },
      { label: 'Hidden commissions', body: 'Never. You pay the package, period. No % on your orders.' },
    ],
    note: 'A full Builder trip lands between €5,000 and €6,500 all-in for 6 days on the ground.',
  },
  testimonials: {
    eyebrow: 'Early-bird, spots reserved',
    title: 'The first 3 testimonials are yours.',
    items: [
      { quote: 'Spot #1. Coming soon. 30% early-bird discount.', name: 'Open spot', role: 'Package of your choice', placeholder: true },
      { quote: 'Spot #2. Coming soon. 30% early-bird discount.', name: 'Open spot', role: 'Package of your choice', placeholder: true },
      { quote: 'Spot #3. Coming soon. 30% early-bird discount.', name: 'Open spot', role: 'Package of your choice', placeholder: true },
    ],
  },
  leadMagnet: {
    eyebrow: 'Free guide',
    title: '5 mistakes to avoid before your first China business trip.',
    body: 'An 8-page PDF by Tristan and his partner. Classic Alibaba traps, how to spot a ghost factory, the 3 Mandarin phrases that change a negotiation. Delivered by email, no spam.',
    placeholder: 'your@email.com',
    cta: 'Send me the guide',
    small: 'No spam. One-click unsubscribe.',
    success: 'Guide sent. Check your inbox (and spam).',
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'What founders ask before booking.',
    items: [
      {
        q: 'I don\'t speak Chinese, will I be lost?',
        a: 'No. We\'re with you 100% of the time. Markets, factories, dinners, taxis. My partner speaks native Chinese, I translate to French or English on the fly. You never throw a Chinese sentence solo if you don\'t want to.',
      },
      {
        q: 'Do both of you come on every trip?',
        a: 'Yes. That\'s the difference. Every trip is co-piloted by Tristan (trust, codes, framework) and the Franco-Chinese partner (native negotiation, factory network). You pay for two brains, not one.',
      },
      {
        q: 'Visa for China?',
        a: 'Most EU and UK passports get a 30-day visa-free business exemption. We confirm current conditions before departure and send the official consulate link.',
      },
      {
        q: 'What if I don\'t find a supplier I like?',
        a: 'We still deliver a written shortlist post-trip with what we saw plus targeted contacts against your brief. You never leave empty-handed.',
      },
      {
        q: 'Can I bring a cofounder or partner?',
        a: 'Yes. Second person: +30% on the package price. Stays efficient, no need to double the cost.',
      },
      {
        q: 'Flights and hotel included?',
        a: 'No. We recommend specific options (tested hotels, neighborhoods, budgets) but you book yourself. Keeps pricing transparent.',
      },
      {
        q: 'Is this a sourcing-agent service?',
        a: 'No. A sourcing agent negotiates for you and takes a hidden commission (5-15% on your order, billed via the factory, invisible to you). We\'re paid upfront, zero hidden commission, and we teach you to operate here. After one trip with us, you can come back solo. That\'s the goal.',
      },
      {
        q: 'What\'s the full cost (flight + hotel + package)?',
        a: 'Expect €1,490 to €6,990 for the package + roughly €700-1,200 for flights + €80-150/night for hotel. Full Builder total: between €5,000 and €6,500 all-in for 6 days on the ground.',
      },
    ],
  },
  social: {
    eyebrow: 'Early-bird',
    title: 'First 5 spots: -30% in exchange for a full video testimonial.',
    earlyBird:
      'Launching this program officially this month. The first 5 founders who travel with us get -30% on the package of their choice, in exchange for a video testimonial filmed during the trip.',
    gallery: [
      { src: '/images/china/negotiation.jpg', alt: 'Meeting with a Chinese factory owner' },
      { src: '/images/china/foshan.jpg', alt: 'Foshan furniture factory' },
      { src: '/images/china/shortlist.jpg', alt: 'Sewing workshop' },
      { src: '/images/china/market.jpg', alt: 'Guangzhou market' },
      { src: '/images/china/shenzhen.jpg', alt: 'Huaqiangbei Shenzhen' },
      { src: '/images/china/gallery-1.jpg', alt: 'Guangzhou' },
    ],
  },
  finalCta: {
    title: 'One question: do this alone, or with two partners already based here?',
    subtitle: '20 minutes on the phone. Tell us your project, we tell you if we can help.',
    cta: 'Book my discovery call',
  },
  stickyMobile: {
    prompt: 'Ready to talk?',
    cta: 'Book a call',
  },
  footer: {
    tagline: 'Two partners in Guangzhou. We take European founders into China.',
    otherVentures: 'Our other ventures',
    ventures: [
      { name: 'Fullhaura · AI agency', href: 'https://fullhaura.com' },
      { name: 'Geo-Front · geopolitical monitoring', href: 'https://geo-front.com' },
    ],
    legal: [
      { label: 'Legal notice', href: '/legal' },
      { label: 'Privacy', href: '/privacy' },
    ],
    copyright: '© 2026 Tristan Grech. All rights reserved.',
  },
};

export const chinaDict: Record<ChinaLang, ChinaDict> = { fr, en };
