import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { I18nService } from './services/i18n.service';
import { TranslationKey } from './types';

@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  constructor(private i18n: I18nService, private cdr: ChangeDetectorRef) {
    this.i18n.t$('common.hello').subscribe(() => this.cdr.markForCheck());
  }

  transform(key: TranslationKey, params?: Record<string, any>): string {
    return this.i18n.translate(key, params);
  }
}