import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect default locale', () => {
    const locale = (service as any).detectLocale();
    expect(['uz', 'ru', 'en']).toContain(locale);
  });

  it('should switch language and save to localStorage', () => {
    service.switchLanguage('ru');
    expect(localStorage.getItem('locale')).toBe('ru');
  });

  it('should translate existing key', async () => {
    await (service as any).loadTranslations('en');
    const result = service.translate('common.hello', { name: 'Azizbek' });
    expect(result).toBe('Hello, Azizbek!');
  });

it('should return key if missing translation', () => {
  const result = service.translate('nonexistent.key' as any);
  expect(result).toBe('nonexistent.key');
});

  it('should replace parameters correctly', async () => {
    await (service as any).loadTranslations('en');
    const result = service.translate('items.many', { count: 5 });
    expect(result).toBe('5 items');
  });
});