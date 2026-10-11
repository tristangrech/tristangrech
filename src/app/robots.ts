import type { MetadataRoute } from 'next';

// Open posture: retrieval/search bots are what put you inside AI answers.
// Blocking training bots does nothing for visibility, so everything is allowed.
const AI_BOTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google / Apple / Meta / Common Crawl
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ is not disallowed: it holds the CSS and JS a renderer needs.
        disallow: ['/api/'],
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: 'https://tristangrech.com/sitemap.xml',
  };
}
