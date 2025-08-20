import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { I18nService } from '../i18n/services/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Select } from 'primeng/select';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let i18n: I18nService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule, FormsModule, TranslatePipe, Select],
      providers: [I18nService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render profile title translation', async () => {
    await (i18n as any).loadTranslations('en');

    component.loading = false;
    fixture.detectChanges();

    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.prof-title')?.textContent?.trim();
    expect(title).toContain('User Profile');
  });

  it('should change language when changeLanguage is called', () => {
    spyOn(i18n, 'switchLanguage');
    component.changeLanguage('ru');
    expect(i18n.switchLanguage).toHaveBeenCalledWith('ru');
  });

  it('should return correct gender key', () => {
    component.selectedGender = 'female';
    expect(component.genderKey).toBe('profile.gender.female');
  });

  it('should render hello with param', async () => {
    await (i18n as any).loadTranslations('en');

    component.loading = false;
    fixture.detectChanges();

    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Hello, Azizbek!');
  });
});
