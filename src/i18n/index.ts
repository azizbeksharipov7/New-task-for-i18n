import en, { EnTranslations } from './languages/en';
import ru from './languages/ru';
import uz from './languages/uz';

export type Locale = 'en' | 'ru' | 'uz';
export type Translations = EnTranslations;

export const translations: Record<Locale, Translations> = {
  en, ru, uz,
};