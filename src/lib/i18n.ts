export const locales = ['en', 'ru', 'zh', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  zh: '中文',
  ar: 'عربي',
};

export const rtlLocales: Locale[] = ['ar'];
