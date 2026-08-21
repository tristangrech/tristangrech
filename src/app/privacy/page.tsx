import type { Metadata } from 'next';

// PLUMBING ONLY, same reasoning as /legal: this route was linked from the China
// funnel footer and returned 404 while two forms on the site collect an email
// address and a WhatsApp number.
//
// The observable facts about what the site loads ARE stated below, because they
// were measured rather than invented: Cloudflare Web Analytics is cookieless,
// CARTO serves the map tiles on the China pages, and a theme preference is kept
// in localStorage. Retention periods, the legal basis wording and the controller
// identity are left blank: those are Tristan's to state.
//
// noindex until the content is real.
export const metadata: Metadata = {
  title: 'Confidentialité · Tristan Grech',
  robots: { index: false, follow: false },
};

const MEASURED: { heading: string; body: string }[] = [
  {
    heading: 'Mesure d\'audience',
    body:
      'Cloudflare Web Analytics. Sans cookie et sans stockage sur votre appareil : rien n\'est écrit ni lu sur votre terminal à des fins de mesure. Aucun pixel publicitaire, aucun traceur marketing, aucune revente de données.',
  },
  {
    heading: 'Cartes',
    body:
      'Les pages /china et /chine affichent une carte dont les tuiles sont servies par CARTO. Votre adresse IP est transmise à ce fournisseur au chargement de la carte.',
  },
  {
    heading: 'Stockage local',
    body:
      'Une préférence de thème (clair ou sombre) est conservée dans le localStorage de votre navigateur. Elle reste sur votre appareil et n\'est jamais transmise.',
  },
  {
    heading: 'Formulaires',
    body:
      'Le formulaire de guide collecte une adresse email. Le formulaire de réservation collecte un nom, une adresse email et un numéro WhatsApp. Ces données servent uniquement à répondre à la demande.',
  },
];

const TODO: string[] = [
  'Identité et coordonnées du responsable de traitement',
  'Base légale de chaque traitement',
  'Durée de conservation des demandes',
  'Modalités d\'exercice des droits d\'accès, de rectification et d\'effacement',
];

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#F0EEE5',
        color: '#1F1E1D',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
        padding: '4rem 1.25rem',
      }}
    >
      <div style={{ maxWidth: '44rem', margin: '0 auto' }}>
        <a href="/en" style={{ color: '#9E4A2F', fontSize: '0.875rem', textDecoration: 'none' }}>
          &larr; Retour au site
        </a>
        <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.5rem)', margin: '1.5rem 0 0.5rem', lineHeight: 1.15 }}>
          Confidentialité
        </h1>
        <p style={{ color: '#64625D', lineHeight: 1.6, margin: '0 0 2.5rem' }}>
          Ce qui suit décrit ce que le site charge réellement. Pour toute question, écrivez à{' '}
          <a href="mailto:tristangrech.nat@gmail.com" style={{ color: '#9E4A2F' }}>
            tristangrech.nat@gmail.com
          </a>
          .
        </p>

        {MEASURED.map((s) => (
          <section key={s.heading} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.125rem', margin: '0 0 0.5rem' }}>{s.heading}</h2>
            <p style={{ color: '#4A4844', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
              {s.body}
            </p>
          </section>
        ))}

        <section style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #DDD9CE' }}>
          <h2 style={{ fontSize: '1.125rem', margin: '0 0 0.75rem' }}>À compléter</h2>
          <ul style={{ color: '#64625D', fontSize: '0.9375rem', lineHeight: 1.8, paddingLeft: '1.25rem', margin: 0 }}>
            {TODO.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
