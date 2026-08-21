import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found · Tristan Grech',
  robots: { index: false, follow: true },
};

// The default Next.js 404 shipped here: 6,677 bytes, zero stylesheets, no nav,
// no branding and no way back. This one is styled with the hub palette and
// always offers a next step, so a bad URL is a detour rather than a dead end.
export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <body style={{ margin: 0, background: '#050506' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            padding: '2rem 1.25rem',
            background: '#050506',
            color: '#EFECE3',
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.875rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E3A84E',
            }}
          >
            404
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(1.75rem, 6vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            This page does not exist.
          </h1>
          <p style={{ margin: 0, maxWidth: '32rem', color: '#98A0AC', lineHeight: 1.6 }}>
            The link may be out of date, or the page may have moved. The work and the
            contact details are all on the home page.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            <a
              href="/en"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                padding: '0 1.5rem',
                borderRadius: '9999px',
                background: '#EFECE3',
                color: '#050506',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Go to the home page
            </a>
            <a
              href="/china"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                padding: '0 1.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(239,236,227,0.25)',
                color: '#EFECE3',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              China sourcing trips
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
