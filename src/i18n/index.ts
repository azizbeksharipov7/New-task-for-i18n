import en, { EnTranslations } from './en';
import ru from './ru';
import uz from './uz';

export type Locale = 'en' | 'ru' | 'uz';
export type Translations = EnTranslations;

export const translations: Record<Locale, Translations> = {
  en, ru, uz,
};