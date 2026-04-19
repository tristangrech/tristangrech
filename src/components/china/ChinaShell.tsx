import { ThemeProvider } from '@/components/ThemeProvider';
import LenisProvider from '@/components/china/LenisProvider';

interface Props {
  lang: 'fr' | 'en';
  fontClassName: string;
  children: React.ReactNode;
}

// Shared shell for /chine and /china routes. Each route's own layout.tsx
// loads the fonts (next/font must live in layout/page files) and passes
// the combined className here. This lets `<html lang>` be set correctly
// per route for SEO + a11y without duplicating the providers.
export default function ChinaShell({ lang, fontClassName, children }: Props) {
  return (
    <html lang={lang} className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0d12" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||(!t&&window.matchMedia('(prefers-color-scheme:light)').matches)){document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        {/*
          TODO pixels & analytics — add once GDPR consent wrapper is in place:
          - Meta Pixel (id TBD)
          - TikTok Pixel (id TBD)
          - Google Tag (id TBD)
          - Plausible (self-hosted on VPS)
        */}
      </head>
      <body className={`${fontClassName} china-page`}>
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
