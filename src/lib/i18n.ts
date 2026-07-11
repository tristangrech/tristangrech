export const locales = ['en', 'fr', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  ru: 'RU',
};

export const rtlLocales: Locale[] = [];
