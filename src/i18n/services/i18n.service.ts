import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { TranslationKey, BaseTranslations } from '../types';

type Locale = 'en' | 'ru' | 'uz';

@Injectable({ providedIn: 'root' })
export class I18nService {
  public locale$ = new BehaviorSubject<Locale>(this.detectLocale());
  public translations$ = new BehaviorSubject<BaseTranslations | null>(null);

  constructor() {
    this.loadTranslations(this.locale$.value);
  }

  private detectLocale(): Locale {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['en','ru','uz'].includes(saved)) return saved;
    const browser = navigator.language.split('-')[0] as Locale;
    return ['en','ru','uz'].includes(browser) ? browser : 'uz';
  }

  switchLanguage(locale: Locale) {
    localStorage.setItem('locale', locale);
    this.locale$.next(locale);
    this.loadTranslations(locale);
  }

  private async loadTranslations(locale: Locale) {
    let module;
    switch (locale) {
      case 'ru': module = await import('../languages/ru'); break;
      case 'uz': module = await import('../languages/uz'); break;
      default:   module = await import('../languages/en'); break;
    }
    this.translations$.next(module.default);
  }

  translate(key: TranslationKey, params?: Record<string, any>): string {
    const dict = this.translations$.value;
    if (!dict) return key;

    const parts = key.split('.');
    let result: any = dict;
    for (const part of parts) {
      result = result?.[part];
    }

    if (typeof result !== 'string') {
      if (isDevMode()) console.warn(`Missing translation: ${key}`);
      return key;
    }

    if (params) {
      result = result.replace(/\{(\w+)\}/g, (_, p) => params[p] ?? `{${p}}`);
    }

    return result;
  }

  readonly t$ = (key: TranslationKey, params?: Record<string, any>) =>
    this.translations$.pipe(map(() => this.translate(key, params)));
}