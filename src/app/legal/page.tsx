import type { Metadata } from 'next';

// PLUMBING ONLY. /legal and /privacy were linked from the China funnel footer
// and both returned 404, on pages that quote prices to French consumers.
//
// This file creates the route and lays out the headings the §14.2 obligations
// require. It deliberately contains NO legal wording and NO company details:
// the operator's identity, address, registration number, host details, CGV,
// withdrawal terms and the mediation scheme are facts only Tristan can supply,
// and inventing any of them would be worse than the 404 this replaces.
//
// noindex until the content is real.
export const metadata: Metadata = {
  title: 'Mentions légales · Tristan Grech',
  robots: { index: false, follow: false },
};

const SECTIONS: { id: string; heading: string; needs: string }[] = [
  {
    id: 'editeur',
    heading: 'Éditeur du site',
    needs:
      'Nom, prénom et adresse de l\'entrepreneur individuel, la mention « entrepreneur individuel » ou « EI », numéro d\'immatriculation, adresse email, téléphone, et le numéro de TVA si assujetti. (Loi 2004-575 art. 6)',
  },
  {
    id: 'hebergeur',
    heading: 'Hébergeur',
    needs: 'Nom, adresse et numéro de téléphone de l\'hébergeur. (Loi 2004-575 art. 6)',
  },
  {
    id: 'tva',
    heading: 'TVA',
    needs:
      'Si le vendeur n\'est pas assujetti : la mention « TVA non applicable, art. 293 B du CGI », et le fait que le prix affiché est le prix final.',
  },
  {
    id: 'cgv',
    heading: 'Conditions générales de vente',
    needs:
      'Caractéristiques essentielles, prix total TTC, identité et coordonnées, délai de fourniture, garanties légales. (Code de la consommation L221-5)',
  },
  {
    id: 'retractation',
    heading: 'Droit de rétractation',
    needs:
      'Délai de 14 jours et formulaire type, ou l\'exception applicable et sa justification si la prestation est fournie à une date déterminée. (L221-18, L221-28)',
  },
  {
    id: 'mediation',
    heading: 'Médiation de la consommation',
    needs:
      'Nom, adresse postale, site web et email du médiateur agréé. (Code de la consommation L612-1)',
  },
];

export default function LegalPage() {
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
          Mentions légales
        </h1>
        <p style={{ color: '#64625D', lineHeight: 1.6, margin: '0 0 2.5rem' }}>
          Cette page est en cours de rédaction. Pour toute question sur l&apos;identité de
          l&apos;éditeur ou les conditions de vente, écrivez à{' '}
          <a href="mailto:tristangrech.nat@gmail.com" style={{ color: '#9E4A2F' }}>
            tristangrech.nat@gmail.com
          </a>
          .
        </p>

        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.125rem', margin: '0 0 0.5rem' }}>{s.heading}</h2>
            <p
              style={{
                color: '#64625D',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                margin: 0,
                paddingLeft: '0.875rem',
                borderLeft: '2px solid #DDD9CE',
              }}
            >
              {s.needs}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
