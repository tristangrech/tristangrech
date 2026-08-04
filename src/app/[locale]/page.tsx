import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';
import LinkHub from '@/components/hub/LinkHub';

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : defaultLocale;

  return <LinkHub locale={locale} />;
}
