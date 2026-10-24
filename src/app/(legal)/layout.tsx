// The root layout returns bare children, so /legal and /privacy rendered with
// no <html>/<body>: React threw hydration error 418 and the page went blank in
// the browser. Both pages are French and style themselves inline.
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
