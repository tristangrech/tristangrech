// Cloudflare Web Analytics (playbook §10.1).
//
// Cookieless by design: Cloudflare writes nothing to and reads nothing from the
// visitor's device, so the French terminal-access rule is not engaged and no
// consent banner is required. That is the entire reason this is the chosen
// analytics stack. Adding any cookie-setting tag (GA, Meta, TikTok) changes the
// legal position and brings a banner with it.
//
// The beacon token is NOT a secret: Cloudflare renders it into the page HTML by
// design. It still lives in an env var so the value is set per environment
// rather than hardcoded, and so a build without it renders nothing at all.
//
// Requires CSP: https://static.cloudflareinsights.com in script-src and
// https://cloudflareinsights.com in connect-src. Getting that wrong blocks the
// beacon silently — the page looks fine and collects nothing.
export default function Analytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON;
  if (!token) return null;

  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
